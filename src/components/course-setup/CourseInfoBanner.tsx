
import React from 'react';
import { courseInfo } from '@/data/courseData';

const CourseInfoBanner = () => {
  const formatDateRange = (startDate: Date, endDate: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    };
    
    const start = startDate.toLocaleDateString('en-US', options);
    const end = endDate.toLocaleDateString('en-US', options);
    
    return `${start} to ${end}`;
  };

  return (
    <div className="bg-nav-bg w-full">
      <div className="container px-4 py-4">
        <div className="text-center">
          <div className="space-y-1">
            <p className="text-nav-font font-plus-jakarta">
              <span className="text-lg font-semibold">Course: </span>
              <span className="text-xl font-bold">{courseInfo.title}</span>
            </p>
            <p className="text-nav-font font-plus-jakarta text-sm font-medium">
              Section: {courseInfo.section}
            </p>
            <p className="text-nav-font font-plus-jakarta text-sm font-medium">
              Location: {courseInfo.location}
            </p>
            <p className="text-nav-font font-plus-jakarta text-sm font-medium">
              Instructor: {courseInfo.instructor}
            </p>
            <p className="text-nav-font font-plus-jakarta text-sm font-medium">
              Term: {formatDateRange(courseInfo.startDate, courseInfo.endDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoBanner;
