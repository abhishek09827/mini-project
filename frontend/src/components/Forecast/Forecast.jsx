import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils.js";
import { buttonVariants } from "../../../components/ui/button.jsx";
import { Form } from "./components/form.jsx";
import { useState } from "react";

export const metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function Forecast() {
    const [pred, setPred] = useState("");
  return (
    <>
      <div className="md:hidden">
        <image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>

      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-1 lg:px-0">
       
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-white">
                Prediction
              </h1>
              <p className="white text-sm text-muted-foreground text-white">
                Enter your metrics below to get prediction
              </p>
            </div>
            <Form pred={pred} setPred={setPred} />
            <p className="px-8 text-center text-sm text-muted-foreground text-white">
              Your prediction will be diplayed below :
            </p>
            <p className="px-8 text-center text-sm text-muted-foreground text-white">
                {pred}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
