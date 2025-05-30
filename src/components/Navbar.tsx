
import React from 'react';
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="bg-nav-bg text-nav-font p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold font-plus-jakarta">Pearson</div>
        <div className="flex items-center space-x-4">
          <HelpCircle size={22} className="text-nav-font" />
          <Button className="rounded-cta bg-primary-cta text-nav-font hover:bg-primary-cta/90 font-plus-jakarta">
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
