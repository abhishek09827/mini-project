import React, { useState } from "react";
import { cn } from "../../../../lib/utils.js";
import { Icons } from "../../../../components/icons.jsx";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export function UserLoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });
  const navigate = useNavigate()
async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', formData);

      const data = await response.data.response;
      console.log('Response:', data);
      navigate('/user/dashboard')
     
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  }


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only text-white" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Company Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
              
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only text-white" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <Button>
            
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
