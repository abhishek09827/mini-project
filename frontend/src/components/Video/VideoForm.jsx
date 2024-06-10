import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card.jsx";
import { Button } from "../../../components/ui/button.jsx";
import { Input } from "../../../components/ui/input.jsx";
import { Link } from 'react-router-dom';
import { cn } from "../../../lib/utils.js";
import { buttonVariants } from "../../../components/ui/button.jsx";
import axios from 'axios';
export default function VideoUpload() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [apiResponse, setApiResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    if (!videoFile) {
      setErrorMessage('Please select a video file to upload.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('video', videoFile);

      const response = await axios.post('http://127.0.0.1:5000/upload', formData,
       { 
        headers: {
          'Content-Type': 'multipart/form-data',
      },
      
    },
      );
      console.log(response);

    
      setApiResponse(response.data.analysis);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage(`An error occurred: ${error.message}`);
      console.error('Error details:', error);
    }
  };

  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
              <Button onClick={handleUpload}>{isLoading ? 'Loading...' : 'Analyze Video'}</Button>
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
      
        </CardContent>
      </Card>
    </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
            <div className="flex flex-col space-y-2 text-center">
            <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Response</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
          
          {apiResponse ? apiResponse && (
            <div>
              <h2 className="text-xl font-bold">API Response</h2>
              <pre className="p-0 rounded whitespace-pre-wrap">{apiResponse}</pre>
            </div>
          ) : "Content Analysis will be displayed here"}
          
        </CardContent>
      </Card>
            
            </div>
          
            
          </div>
        </div>
      </div>
    
    
  );
}
