import React, { useState } from "react";
import { cn } from "../../../../lib/utils.js";
import { Icons } from "../../../../components/icons.jsx";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Form({pred, setPred}) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    Likes: "",
    Saves: "",
    Comments: "",
    Shares: "",
    Profile_Visits: "",
    Follows: ""
  });
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const featureArray = [
      parseFloat(formData.Likes),
      parseFloat(formData.Saves),
      parseFloat(formData.Comments),
      parseFloat(formData.Shares),
      parseFloat(formData.Profile_Visits),
      parseFloat(formData.Follows)
    ];

    const data = {
      features: [featureArray]
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', data);
      console.log('Response:', response);
      setPred(response.data.predictions)
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
            <Label className="text-white" htmlFor="Likes">
              Likes
            </Label>
            <Input
              id="Likes"
              name="Likes"
              placeholder="Likes"
              type="number"
              value={formData.Likes}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white" htmlFor="Saves">
              Saves
            </Label>
            <Input
              id="Saves"
              name="Saves"
              placeholder="Saves"
              type="number"
              value={formData.Saves}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white" htmlFor="Comments">
              Comments
            </Label>
            <Input
              id="Comments"
              name="Comments"
              placeholder="Comments"
              type="number"
              value={formData.Comments}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white" htmlFor="Shares">
              Shares
            </Label>
            <Input
              id="Shares"
              name="Shares"
              placeholder="Shares"
              type="number"
              value={formData.Shares}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white" htmlFor="Profile_Visits">
              Profile Visits
            </Label>
            <Input
              id="Profile_Visits"
              name="Profile_Visits"
              placeholder="Profile Visits"
              type="number"
              value={formData.Profile_Visits}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label className="text-white" htmlFor="Follows">
              Follows
            </Label>
            <Input
              id="Follows"
              name="Follows"
              placeholder="Follows"
              type="number"
              value={formData.Follows}
              onChange={handleChange}
              disabled={isLoading}
              className="text-white"
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Predict'}
          </Button>
        </div>
      </form>
    </div>
  );
}
