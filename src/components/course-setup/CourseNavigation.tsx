
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CourseNavigation = () => {
  const navigate = useNavigate();

  const handleCreateCourse = () => {
    navigate('/course-creation-loading');
  };

  return (
    <div className="mt-8 flex justify-between">
      <Button variant="outline" className="flex items-center bg-card-bg">
        <ChevronLeft size={16} className="mr-2" /> Previous: Upload Syllabus
      </Button>
      <Button 
        variant="secondary" 
        className="flex items-center"
        onClick={handleCreateCourse}
      >
        Next: Create course <ChevronRight size={16} className="ml-2" />
      </Button>
    </div>
  );
};

export default CourseNavigation;
