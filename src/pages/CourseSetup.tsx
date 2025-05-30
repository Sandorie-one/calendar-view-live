
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseInfoBanner from '@/components/course-setup/CourseInfoBanner';
import CourseHeader from '@/components/course-setup/CourseHeader';
import CourseContent from '@/components/course-setup/CourseContent';
import CourseNavigation from '@/components/course-setup/CourseNavigation';
import { useCourseCalendar } from '@/hooks/useCourseCalendar';
import { courseWeeks, toolboxItems } from '@/data/courseData';
import { CourseStructureType } from '@/types/course';
import { ToolboxItem } from '@/components/WeekModule';

const CourseSetup = () => {
  const [courseStructure, setCourseStructure] = useState<CourseStructureType>('different');
  
  const {
    savedItems,
    isDraggingItem,
    handleDrop,
    handleItemDragStart,
    handleTrashDrop,
    handleItemRemove
  } = useCourseCalendar();
  
  const handleGenericDrop = (dayIndex: number) => (item: ToolboxItem) => {
    const key = `generic-week-day-${dayIndex}`;
    handleDrop(dayIndex, 0, key)(item);
  };
  
  const handleStructureChange = (value: CourseStructureType) => {
    setCourseStructure(value);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <CourseInfoBanner />
      
      <div className="container px-4 py-4 flex-1">
        <CourseHeader />
        
        <CourseContent
          courseWeeks={courseWeeks}
          toolboxItems={toolboxItems}
          savedItems={savedItems}
          isDraggingItem={isDraggingItem}
          courseStructure={courseStructure}
          onStructureChange={handleStructureChange}
          onDrop={handleDrop}
          onGenericDrop={handleGenericDrop}
          onItemDragStart={handleItemDragStart}
          onItemRemove={handleItemRemove}
          onTrashDrop={handleTrashDrop}
        />
        
        <CourseNavigation />
      </div>
    </div>
  );
};

export default CourseSetup;
