import React, { useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card.jsx";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Form, FormField, FormLabel, FormControl, FormMessage } from "../../components/ui/form";
export default function VideoUpload() {
    const [videoFile, setVideoFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleFileChange = (event) => {
      setVideoFile(event.target.files[0]);
    };
  
    const handleUpload = async (event) => {
      event.preventDefault();
  
      if (!videoFile) {
        setErrorMessage('Please select a video file to upload.');
        return;
      }
  
      const formData = new FormData();
      formData.append('video', videoFile);
  
      try {
        const response = await axios.post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(progress);
          },
        });
  
        if (response.status === 200) {
          setUploadProgress(100);
          setErrorMessage('');
          alert('Video uploaded successfully!');
        } else {
          setErrorMessage('Failed to upload the video.');
        }
      } catch (error) {
        setErrorMessage('An error occurred during the upload. Please try again.');
        console.error('Upload error:', error);
      }
    };
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
      <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Upload Video</CardTitle>
                    <CardDescription>
                      
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <Button>Upload</Button>
                  </CardContent>
                </Card>
      {uploadProgress > 0 && (
        <div className="mt-4">
          <p>Upload Progress: {uploadProgress}%</p>
          <progress value={uploadProgress} max="100"></progress>
        </div>
      )}
    </div>
  );
}
