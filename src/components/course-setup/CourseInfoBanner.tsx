
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
    
    return `${start} - ${end}`;
  };

  return (
    <div className="bg-card-bg rounded border border-gray-200 p-4 mb-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-nav-font font-plus-jakarta">
            {courseInfo.title}
          </h2>
          <span className="text-sm text-gray-600 font-plus-jakarta">
            Section {courseInfo.section}
          </span>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 font-plus-jakarta">
          <span>{courseInfo.location}</span>
          <span>{formatDateRange(courseInfo.startDate, courseInfo.endDate)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoBanner;
