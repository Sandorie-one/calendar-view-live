
import React from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-pearson-purple text-white p-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Pearson</div>
        <div className="flex items-center space-x-4">
          <HelpCircle size={22} />
          <Button className="rounded-full bg-white text-pearson-purple hover:bg-white/90">Sign in</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
