import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";


export default function Researcher() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Intelligent Researcher</CardTitle>
          <CardDescription>
            
          </CardDescription>
        </CardHeader>
        <CardContent>
        <iframe
            src="https://crewaitutorial-6j4yzbngokfjahpeh2mwtt.streamlit.app/?embedded=true"
            title="Intelligent Researcher"
            style={{ width: '100%', height: '500px', border: 'none' }}
          />
        </CardContent>
      </Card>
    </div>
  );
}