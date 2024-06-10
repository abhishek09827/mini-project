import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils.js";
import { buttonVariants } from "../../../components/ui/button.jsx";
import { Form } from "./components/form.jsx";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card.jsx";
export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Forecast() {
    const [pred, setPred] = useState("");
  return (
    <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Prediction</CardTitle>
          <CardDescription>
          Enter your metrics below to get prediction
          </CardDescription>
        </CardHeader>
        <CardContent>
        <Form pred={pred} setPred={setPred} />
        </CardContent>
      </Card>
    </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[500px]">
            <div className="flex flex-col space-y-2 text-center">
            <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Prediction</CardTitle>
          <CardDescription>
          </CardDescription>
        </CardHeader>
        <CardContent>
          
          {pred ? pred && (
            <div>
              <h2 className="text-xl font-bold">Your prediction will be diplayed here</h2>
              <pre className="p-0 rounded whitespace-pre-wrap">{pred}</pre>
            </div>
          ) : "Reach Prediction will be displayed here"}
          
        </CardContent>
      </Card>
            
            </div>
          </div>
        </div>
      </div>
  );
}

