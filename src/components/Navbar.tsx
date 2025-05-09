
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Search, ShoppingCart, HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-pearson-darkpurple text-white p-2 flex justify-between items-center">
        <div className="flex space-x-8">
          <div className="font-medium">FOR SCHOOL</div>
          <div className="font-medium">FOR COLLEGE</div>
          <div className="font-medium">FOR WORK</div>
          <div className="font-medium">EXPLORE PEARSON</div>
        </div>
        <div className="flex items-center">
          <span className="flex items-center">United States <ChevronDown size={16} className="ml-1" /></span>
        </div>
      </div>
      <div className="bg-pearson-purple text-white p-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">Pearson</div>
          <div className="relative flex items-center">
            <Button variant="ghost" className="text-white flex items-center">
              View all <ChevronDown size={16} className="ml-1" />
            </Button>
            <div className="h-6 w-[1px] bg-gray-400 mx-2"></div>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search by title, author or ISBN" 
                className="px-4 py-2 pl-4 pr-10 rounded-full bg-opacity-30 bg-white/20 text-white placeholder-white/70 w-80"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ShoppingCart size={22} />
          <HelpCircle size={22} />
          <Button className="rounded-full bg-white text-pearson-purple hover:bg-white/90">Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
