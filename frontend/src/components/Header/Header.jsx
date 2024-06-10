import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar.jsx";
import { Button } from "../../../components/ui/button.jsx";
import { Input } from "../../../components/ui/input.jsx";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src="/avatar.jpg" alt="Avatar" />
          <AvatarFallback>OA</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Open AI</h1>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to={"/user/dashboard"}>
              <Button variant="subtle">Overview</Button>
            </Link>
          </li>
          <li>
            <Link to={"/user/analysis"}>
              <Button variant="subtle">CRM</Button>
            </Link>
          </li>
          <li>
            <Link to={"/user/video"}>
              <Button variant="subtle">Video</Button>
            </Link>
          </li>
          <li>
            <Link to={"/user/forecast"}>
              <Button variant="subtle">Forecast</Button>
            </Link>
          </li>
          <li>
          <Link to={"/user/researcher"}>
            <Button variant="subtle">Intelligent Researcher</Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <Input
          type="search"
          placeholder="Search..."
          className="ml-4 bg-gray-700 text-white"
        />
      </div>
    </header>
  );
};

export default Header;
