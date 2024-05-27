
import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv
from langchain.prompts import PromptTemplate
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains import LLMChain
from flask_cors import CORS
load_dotenv()

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})
chat_model = ChatGoogleGenerativeAI(model="gemini-1.5-flash",google_api_key="AIzaSyAVSHjy7mpfwjsStcK9YassCIL9BZOPKkA")


@app.route('/process_reviews', methods=['POST'])
def process_reviews():
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


@app.route('/trends_review', methods=['POST'])
def trends_review():
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


@app.route('/summary_review', methods=['POST'])
def summary_review():
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

if __name__ == '__main__':
    app.run(debug=True)
