import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from langchain.prompts import ChatPromptTemplate, SystemMessagePromptTemplate, HumanMessagePromptTemplate, PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import LLMChain
from flask_cors import CORS
import json
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token
from pymongo import MongoClient
import joblib
import numpy as np
import google.generativeai as genai
from werkzeug.utils import secure_filename
import time
load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})


client = MongoClient(os.getenv("MONGO_URI"))
db = client.get_database('mini_project')
users_collection = db.get_collection('companies')


bcrypt = Bcrypt(app)
app.config['JWT_SECRET_KEY'] = os.getenv("JWT_SECRET_KEY")
jwt = JWTManager(app)
genai.configure(api_key= os.getenv('GOOGLE_API_KEY'))


chat_model = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=os.getenv("GOOGLE_API_KEY"))

# Prompts
sentisysPrompt = '''You are sentiment analysis expert who can assign sentiment tags to user reviews.Analyze the sentiment of the following review: "{{text}}". You have to label the review as positive, negative or neutral. The output should be a JSON with fields "category" and "reason". The "category" field should be one of "positive", "negative", "neutral". The "reason" field should be a string explaining the reason for the category. \n\nReview: {text}\n\nOutput:''' 
entityTaggingPromptContent = '''You are an expert at labelling a given Instagram Review as bug, feature_request, question or feedback. You are given a review provided by a user for the app . You have to label the review as bug, feature_request, question or feedback. The output should be a JSON with fields "category" and "reason". The "category" field should be one of "bug", "feature_request", "question" or "feedback". The "reason" field should be a string explaining the reason for the category. \n\nReview: {text}\n\nOutput:'''
intentClassificationPromptContent = '''You are an intent classification expert. Classify the intent of the following text: "{text}" into urgent, low and medium category label. The output should be a JSON with fields "category" and "reason". The "category" field should include the intent. The "reason" field should be a string explaining the reason for the category. \n\nReview: {text}\n\nOutput'''

# ChatPromptTemplates
sentichatPrompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template(sentisysPrompt),
    HumanMessagePromptTemplate.from_template(''),
])

entityTaggingChatPrompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template(entityTaggingPromptContent),
    HumanMessagePromptTemplate.from_template(''),
])

intentClassificationChatPrompt = ChatPromptTemplate.from_messages([
    SystemMessagePromptTemplate.from_template(intentClassificationPromptContent),
    HumanMessagePromptTemplate.from_template(''),
])

def register_user(name, password,insta_link, twitter_link, linkedin_link):
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    user = {
        'name': name,
        'password': hashed_password,
        'insta_link':insta_link,
        'twitter_link':twitter_link,
        'linkedin_link': linkedin_link
        }
    users_collection.insert_one(user)

def verify_user(name, password):
    user = users_collection.find_one({'name': name})
    if user and bcrypt.check_password_hash(user['password'], password):
        return True
    return False

model = joblib.load('impressions_model.pkl')

@app.route('/register', methods=['POST'])
def register():
    try:
        
        data = request.get_json()
        name = data['name']
        password = data['password']
        insta_link = data['insta_link']
        twitter_link = data['twitter_link']
        linkedin_link = data['linkedin_link']
        
        if users_collection.find_one({'name': name}):
            return jsonify({'error': 'Username already exists'}), 400
        
        register_user(name, password, insta_link, twitter_link, linkedin_link)
        return jsonify({'message': 'User registered successfully'}), 201
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        name = data['name']
        password = data['password']
        
        if not verify_user(name, password):
            return jsonify({'error': 'Invalid credentials'}), 401
        
        access_token = create_access_token(identity=name)
        return jsonify({'access_token': access_token}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Your existing endpoints...
@app.route('/analyze', methods=['POST'])
def analyze_text():
    try:
        text = request.json.get('text', '')
        # Sentiment Analysis
        chain = LLMChain(llm=chat_model, prompt=sentichatPrompt)
        sentiment_result = chain.predict(text=text)
        print(1)
        
        # Entity Tagging
        chain = LLMChain(llm=chat_model, prompt=entityTaggingChatPrompt)
        entity_tagging_result = chain.predict(text=text)
        print(1)
        
        # Intent Classification
        chain = LLMChain(llm=chat_model, prompt=intentClassificationChatPrompt)
        intent_classification_result = chain.predict(text=text)
        print(1)
        
        combined_result = {
            'sentiment_analysis': sentiment_result,
            'entity_tagging': entity_tagging_result,
            'intent_classification': intent_classification_result
        }
        print(combined_result)
        
        categories = []
        for value in combined_result.values():
            print(2)
            json_string = value.replace('```json\n', '').replace('\n```', '')
            print(json_string)
            json_object = json.loads(json_string)
            print(json_object)
            categories.append(json_object['category'])
            print(2)
        print(categories)
        return jsonify(categories)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array(data['features'])
    prediction = model.predict(features)
    return jsonify({'predictions': prediction.tolist()})

@app.route('/process_reviews', methods=['POST'])
def process_reviews():
    try:
        reviews = request.json.get('reviews', [])
        combined_review = " ".join(reviews)
        
        insights_prompt = PromptTemplate.from_template(
            f"Based on the following user reviews: {combined_review}, generate actionable insights in brief and avoid any duplication."
        )
        chain = LLMChain(llm=chat_model, prompt=insights_prompt)
        insights = chain.predict(text=combined_review)
        
        combined_results = {
            "insights": insights
        }
        
        return jsonify(combined_results)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/trends_review', methods=['POST'])
def trends_review():
    try:
        reviews = request.json.get('reviews', [])
        combined_review = " ".join(reviews)
        
        trends_prompt = PromptTemplate.from_template(
            f"Analyze the following array of user reviews for trends: {combined_review}. Please keep it brief and return your answer in a .md format"
        )
        chain = LLMChain(llm=chat_model, prompt=trends_prompt)
        trends = chain.predict(text=combined_review)
        
        combined_results = {
            "trends": trends
        }
        
        return jsonify(combined_results)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/summary_review', methods=['POST'])
def summary_review():
    try:
        reviews = request.json.get('reviews', '')
        
        summary_prompt = PromptTemplate.from_template(
            f"Summarize the following text: {reviews}. Please keep it brief and return your answer in a .md format (Markdown Format)"
        )
        chain = LLMChain(llm=chat_model, prompt=summary_prompt)
        summary = chain.predict(text=reviews)
        
        combined_results = {
            "summary": summary
        }
        
        return jsonify(combined_results)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/upload', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({"error": "No video file provided"}), 400
    genai.configure(api_key="AIzaSyCXkHl-KeeE39M-Fj0MhEVxzxk7h8Km44I")
    
    video_file = request.files['video']
    print(video_file)
    name = secure_filename(video_file.filename)
    print("name", name, video_file.filename)
    video_path = os.path.join(".", name)
    
    os.makedirs(os.path.dirname(video_path), exist_ok=True)
    video_file.save(video_path)
    print(video_path)

    video = genai.upload_file(path = video_path)
    print(video.name)
    print(genai.list_files())

    
    prompt = ("You are a marketing insights analyst reviewing the uploaded advertising video from my social media page. "
              "Describe the key elements and actions in the video. Provide a detailed report in 100-200 words, including insights on the video's effectiveness, "
              "audience engagement, and any patterns observed. Offer suggestions for improvement and optimization. Maintain a formal and professional tone.")

    safety_settings = [
        {
            "category": "HARM_CATEGORY_HARASSMENT",
            "threshold": "BLOCK_NONE",
        },
        {
            "category": "HARM_CATEGORY_HATE_SPEECH",
            "threshold": "BLOCK_NONE",
        },
        {
            "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
            "threshold": "BLOCK_NONE",
        },
    ]
    
    model = genai.GenerativeModel(model_name="models/gemini-1.5-flash", safety_settings=safety_settings)

    print("Making LLM inference request...", model)
    response = model.generate_content([prompt, video], request_options={"timeout": 600})

    print("response", response)
    return jsonify({"analysis": response.text})

if __name__ == '__main__':
    app.run(debug=True)
