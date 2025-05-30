
import React from 'react';
import ProgressStepper from '@/components/ProgressStepper';
import { setupSteps, currentSetupStep } from '@/data/courseData';

const CourseHeader = () => {
  return (
    <div className="mb-4">
      {/* Progress stepper */}
      <ProgressStepper steps={setupSteps} currentStep={currentSetupStep} />
      
      {/* Page title and instructions */}
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-nav-font mb-2 font-plus-jakarta">
          Let's set up the structure of your course
        </h1>
        <p className="text-base font-plus-jakarta text-gray-600">
          First, we'll create the weekly structure of your course - you can use the same structure every week, 
          or customize each week however you like.
        </p>
      </div>
    </div>
  );
};

export default CourseHeader;
