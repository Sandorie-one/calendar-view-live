
import React from 'react';
import Navbar from '@/components/Navbar';
import CourseHeader from '@/components/course-setup/CourseHeader';
import CourseContent from '@/components/course-setup/CourseContent';
import CourseNavigation from '@/components/course-setup/CourseNavigation';
import { useCourseCalendar } from '@/hooks/useCourseCalendar';
import { courseWeeks, toolboxItems } from '@/data/courseData';

const CourseSetup = () => {
  const {
    savedItems,
    isDraggingItem,
    handleDrop,
    handleItemDragStart,
    handleTrashDrop,
    handleItemRemove
  } = useCourseCalendar();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-6 py-8 flex-1">
        <CourseHeader />
        
        <CourseContent
          courseWeeks={courseWeeks}
          toolboxItems={toolboxItems}
          savedItems={savedItems}
          isDraggingItem={isDraggingItem}
          onDrop={handleDrop}
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
