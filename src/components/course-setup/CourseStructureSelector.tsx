
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CourseStructureType } from '@/types/course';

interface CourseStructureSelectorProps {
  selectedStructure: CourseStructureType;
  onStructureChange: (value: CourseStructureType) => void;
}

const CourseStructureSelector: React.FC<CourseStructureSelectorProps> = ({ 
  selectedStructure, 
  onStructureChange 
}) => {
  const handleValueChange = (value: string) => {
    if (value === 'different' || value === 'same') {
      onStructureChange(value);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-medium mb-3 text-pearson-purple">How is your course structured?</h2>
      <ToggleGroup 
        type="single" 
        value={selectedStructure}
        onValueChange={handleValueChange}
        className="justify-start gap-4"
      >
        <ToggleGroupItem 
          value="different" 
          className="border border-gray-300 px-6 py-4 data-[state=on]:bg-pearson-purple data-[state=on]:text-white"
        >
          I have a different structure each week
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="same" 
          className="border border-gray-300 px-6 py-4 data-[state=on]:bg-pearson-purple data-[state=on]:text-white"
        >
          I use the same weekly structure in my course
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default CourseStructureSelector;
