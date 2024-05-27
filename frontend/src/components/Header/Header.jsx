import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar.jsx';
import { Button } from '../../../components/ui/button.jsx';
import { Input } from '../../../components/ui/input.jsx';


const Header = () => {
 return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <div className="flex items-center">
        <Avatar className="mr-4">
          <AvatarImage src="/avatar.jpg" alt="Avatar" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Abhishek</h1>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Button variant="subtle">Overview</Button>
          </li>
          <li>
            <Button variant="subtle">Analysis</Button>
          </li>
          <li>
            <Button variant="subtle">Tickets</Button>
          </li>
          <li>
            <Button variant="subtle">AI Resommendation</Button>
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