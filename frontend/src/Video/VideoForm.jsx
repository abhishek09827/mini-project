import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

// Import the necessary modules from the Generative AI SDK
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/files";

export default function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState(null);

  const apiKey = "AIzaSyCXkHl-KeeE39M-Fj0MhEVxzxk7h8Km44I";
  const genAI = new GoogleGenerativeAI(apiKey);
  const fileManager = new GoogleAIFileManager(apiKey);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setVideoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setVideoPreview(null);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setApiResponse(null);

    if (!videoFile) {
      setErrorMessage('Please select a video file to upload.');
      return;
    }

    try {
      const uploadedFile = await uploadToGemini(videoFile);
      console.log('Uploaded file:', uploadedFile);

      if (uploadedFile && uploadedFile.uri) { 
        const result = await analyzeVideo(uploadedFile);
        console.log('Gemini API result:', result);
        setApiResponse(result);
      } else {
        throw new Error("File upload failed: No file URI returned.");
      }

    } catch (error) {
      setErrorMessage(`An error occurred: ${error.message}`);
      console.error('Error details:', error);
    }
  };

  const uploadToGemini = async (file) => {
    try {
      const uploadResult = await fileManager.uploadFile(file.name, {
        mimeType: file.type,
        content: file,
      });
      console.log("Upload Result:", uploadResult); 
      return uploadResult.file; 
    } catch (error) {
      console.error('File upload error:', error);
      throw error; 
    }
  };

  const analyzeVideo = async (file) => {
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
      });

      const generationConfig = {
        temperature: 0.5, 
        topP: 0.95,       
        topK: 40,         
        maxOutputTokens: 256, 
      };

      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              {
                fileData: {
                  mimeType: file.mimeType,
                  fileUri: file.uri,
                },
              },
              {
                text: "Generate a detailed transcript of this video, including speaker identification if possible."
              }
            ],
          },
        ],
      });

      const result = await chatSession.sendMessage();
      return result.response.text();

    } catch (error) {
      console.error('Error analyzing video:', error);
      throw new Error("Video analysis failed");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Upload Video</CardTitle>
          <CardDescription>
            Select a video file to upload for analysis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {videoPreview ? (
            <div>
              <video controls width="600" src={videoPreview} className="mb-4" />
              <Button onClick={handleUpload}>Analyze Video</Button>
            </div>
          ) : (
            <div>
              <Input type="file" accept="video/*" onChange={handleFileChange} className="mb-4" />
            </div>
          )}
          {errorMessage && (
            <div className="mt-4 text-red-600">
              <p>{errorMessage}</p>
            </div>
          )}
          {apiResponse && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">API Response</h2>
              <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap">{apiResponse}</pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}