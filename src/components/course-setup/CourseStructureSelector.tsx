
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
    <div className="mb-4">
      <h2 className="text-base font-medium mb-3 text-nav-font font-plus-jakarta">
        How is your course structured?
      </h2>
      <ToggleGroup 
        type="single" 
        value={selectedStructure}
        onValueChange={handleValueChange}
        className="justify-start gap-4"
      >
        <ToggleGroupItem 
          value="different" 
          className="border border-gray-300 px-4 py-2 data-[state=on]:bg-secondary-cta data-[state=on]:text-white font-plus-jakarta text-sm bg-card-bg"
        >
          I have a different structure each week
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="same" 
          className="border border-gray-300 px-4 py-2 data-[state=on]:bg-secondary-cta data-[state=on]:text-white font-plus-jakarta text-sm bg-card-bg"
        >
          I use the same weekly structure in my course
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default CourseStructureSelector;
