
import React from 'react';
import { HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-nav-bg text-nav-font p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold font-plus-jakarta">Pearson</div>
        <div className="flex items-center space-x-4">
          <HelpCircle size={22} className="text-nav-font" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
