
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
    <div className="bg-nav-bg -mx-4 px-4 py-6">
      <div className="text-center">
        <div className="space-y-1">
          <p className="text-nav-font font-plus-jakarta text-base">
            Section title: {courseInfo.title}
          </p>
          <p className="text-nav-font font-plus-jakarta text-base">
            Section code: {courseInfo.section}
          </p>
          <p className="text-nav-font font-plus-jakarta text-base">
            Course location: {courseInfo.location}
          </p>
          <p className="text-nav-font font-plus-jakarta text-base">
            Dates: {formatDateRange(courseInfo.startDate, courseInfo.endDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoBanner;
