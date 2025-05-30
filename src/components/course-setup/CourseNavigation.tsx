
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CourseNavigation = () => {
  return (
    <div className="mt-8 flex justify-between">
      <Button variant="outline" className="flex items-center bg-card-bg">
        <ChevronLeft size={16} className="mr-2" /> Previous: Upload Syllabus
      </Button>
      <Button variant="secondary" className="flex items-center">
        Next: Define Exams <ChevronRight size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default CourseNavigation;
