
import React from 'react';
import { cn } from '@/lib/utils';

interface StepProps {
  steps: string[];
  currentStep: number;
}

const ProgressStepper: React.FC<StepProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full py-6">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center mb-2",
                index < currentStep 
                  ? "bg-pearson-magenta text-white" 
                  : index === currentStep 
                    ? "bg-pearson-magenta text-white" 
                    : "bg-gray-200 text-gray-500"
              )}>
                {index + 1}
              </div>
              <div className={cn(
                "text-sm font-medium",
                index <= currentStep ? "text-pearson-purple" : "text-gray-500"
              )}>
                {step}
              </div>
            </div>
            
            {index < steps.length - 1 && (
              <div className={cn(
                "h-1 flex-1 mx-4",
                index < currentStep ? "bg-pearson-magenta" : "bg-gray-200"
              )}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;
