
import React from 'react';
import ProgressStepper from '@/components/ProgressStepper';
import { setupSteps, currentSetupStep } from '@/data/courseData';

const CourseHeader = () => {
  return (
    <div className="mb-8">
      {/* Progress stepper */}
      <ProgressStepper steps={setupSteps} currentStep={currentSetupStep} />
      
      {/* Page title and instructions */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-pearson-purple mb-2">Let's set up the structure of your course</h1>
        <p className="text-gray-600">
          First, we'll create the weekly structure of your course - you can use the same structure every week, 
          or customize each week however you like.
        </p>
      </div>
    </div>
  );
};

export default CourseHeader;
