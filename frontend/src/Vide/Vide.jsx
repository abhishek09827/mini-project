import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";


export default function Vide() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Content Analyser</CardTitle>
          <CardDescription>
            
          </CardDescription>
        </CardHeader>
        <CardContent>
        <iframe
            src="https://video-analysis-nnds4anum24qzhyhj5bfhf.streamlit.app/?embedded=true"
            title="Intelligent Researcher"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </CardContent>
      </Card>
    </div>
  );
}