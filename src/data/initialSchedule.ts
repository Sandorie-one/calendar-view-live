
import { ToolboxItem } from '@/components/WeekModule';

// Create initial schedule based on the syllabus
export const createInitialSchedule = (): Record<string, ToolboxItem[]> => {
  const schedule: Record<string, ToolboxItem[]> = {};
  
  // Helper function to create unique items
  const createItem = (type: string, title: string, category: string, icon: string): ToolboxItem => ({
    id: `${type.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}-${Math.random()}`,
    type,
    category,
    title,
    icon
  });

  // Week 1: August 25-29, 2025
  schedule['week-1-day-0'] = [createItem('In-Person Lecture', 'Course Introduction', 'Lectures', 'book-open')]; // Monday
  schedule['week-1-day-2'] = [createItem('In-Person Lecture', 'Chapter 1 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-1-day-4'] = [ // Friday
    createItem('DSM Quiz', 'DSM Quiz Ch.1', 'Assessments', 'clipboard-check'),
    createItem('Practice Set', 'Practice Set Ch.1', 'Assigned Work', 'clipboard-list')
  ];

  // Week 2: September 1-5, 2025 (Labor Day Monday)
  // Monday is Labor Day - no class
  schedule['week-2-day-2'] = [createItem('In-Person Lecture', 'Chapter 2 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-2-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 2 Continue', 'Lectures', 'book-open'),
    createItem('Video Assignment', 'Video Assignment Ch.2', 'Assigned Work', 'play-circle')
  ];

  // Week 3: September 8-12, 2025
  schedule['week-3-day-0'] = [createItem('Quiz', 'Quiz 1 (Ch.1-2)', 'Assessments', 'school')]; // Monday
  schedule['week-3-day-2'] = [createItem('In-Person Lecture', 'Chapter 3 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-3-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 3 Continue', 'Lectures', 'book-open'),
    createItem('Homework', 'Homework Ch.3', 'Assigned Work', 'book-text')
  ];

  // Week 4: September 15-19, 2025
  schedule['week-4-day-0'] = [createItem('DSM Quiz', 'DSM Quiz Ch.3', 'Assessments', 'clipboard-check')]; // Monday
  schedule['week-4-day-2'] = [createItem('In-Person Lecture', 'Chapter 4 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-4-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 4 Continue', 'Lectures', 'book-open'),
    createItem('Practice Set', 'Practice Set Ch.4', 'Assigned Work', 'clipboard-list')
  ];

  // Week 5: September 22-26, 2025
  schedule['week-5-day-0'] = [createItem('Quiz', 'Quiz 2 (Ch.3-4)', 'Assessments', 'school')]; // Monday
  schedule['week-5-day-2'] = [createItem('In-Person Lecture', 'Chapter 5 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-5-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 5 Continue', 'Lectures', 'book-open'),
    createItem('Video Assignment', 'Video Assignment Ch.5', 'Assigned Work', 'play-circle')
  ];

  // Week 6: September 29 - October 3, 2025
  schedule['week-6-day-0'] = [createItem('DSM Quiz', 'DSM Quiz Ch.5', 'Assessments', 'clipboard-check')]; // Monday
  schedule['week-6-day-2'] = [createItem('In-Person Lecture', 'Chapter 6 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-6-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 6 Continue', 'Lectures', 'book-open'),
    createItem('Homework', 'Homework Ch.6', 'Assigned Work', 'book-text')
  ];

  // Week 7: October 6-10, 2025
  schedule['week-7-day-0'] = [createItem('Quiz', 'Quiz 3 (Ch.5-6)', 'Assessments', 'school')]; // Monday
  schedule['week-7-day-2'] = [createItem('In-Person Lecture', 'Chapter 7 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-7-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 7 Continue', 'Lectures', 'book-open'),
    createItem('Practice Set', 'Practice Set Ch.7', 'Assigned Work', 'clipboard-list')
  ];

  // Week 8: October 13-17, 2025 (Midterm Week)
  schedule['week-8-day-0'] = [createItem('Midterm', 'Midterm Exam (Ch.1-7)', 'Assessments', 'file-text')]; // Monday
  schedule['week-8-day-2'] = [createItem('In-Person Lecture', 'Chapter 8 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-8-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 8 Continue', 'Lectures', 'book-open'),
    createItem('Video Assignment', 'Video Assignment Ch.8', 'Assigned Work', 'play-circle')
  ];

  // Week 9: October 20-24, 2025
  schedule['week-9-day-0'] = [createItem('DSM Quiz', 'DSM Quiz Ch.8', 'Assessments', 'clipboard-check')]; // Monday
  schedule['week-9-day-2'] = [createItem('In-Person Lecture', 'Chapter 9 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-9-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 9 Continue', 'Lectures', 'book-open'),
    createItem('Project', 'Budget Project', 'Assigned Work', 'file-check')
  ];

  // Week 10: October 27-31, 2025
  schedule['week-10-day-0'] = [createItem('Quiz', 'Quiz 4 (Ch.8-9)', 'Assessments', 'school')]; // Monday
  schedule['week-10-day-2'] = [createItem('In-Person Lecture', 'Chapter 10 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-10-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 10 Continue', 'Lectures', 'book-open'),
    createItem('Homework', 'Homework Ch.10', 'Assigned Work', 'book-text')
  ];

  // Week 11: November 3-7, 2025
  schedule['week-11-day-0'] = [createItem('DSM Quiz', 'DSM Quiz Ch.10', 'Assessments', 'clipboard-check')]; // Monday
  schedule['week-11-day-2'] = [createItem('In-Person Lecture', 'Chapter 11 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-11-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 11 Continue', 'Lectures', 'book-open'),
    createItem('Practice Set', 'Practice Set Ch.11', 'Assigned Work', 'clipboard-list')
  ];

  // Week 12: November 10-14, 2025 (Veterans Day Monday)
  // Monday is Veterans Day - no class
  schedule['week-12-day-2'] = [createItem('In-Person Lecture', 'Chapter 12 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-12-day-4'] = [ // Friday
    createItem('Quiz', 'Quiz 5 (Ch.10-11)', 'Assessments', 'school'),
    createItem('Video Assignment', 'Video Assignment Ch.12', 'Assigned Work', 'play-circle')
  ];

  // Week 13: November 17-21, 2025
  schedule['week-13-day-0'] = [createItem('DSM Quiz', 'DSM Quiz Ch.12', 'Assessments', 'clipboard-check')]; // Monday
  schedule['week-13-day-2'] = [createItem('In-Person Lecture', 'Chapter 13 Lecture', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-13-day-4'] = [ // Friday
    createItem('In-Person Lecture', 'Chapter 13 Continue', 'Lectures', 'book-open'),
    createItem('Homework', 'Homework Ch.13', 'Assigned Work', 'book-text')
  ];

  // Week 14: November 24-28, 2025 (Thanksgiving Break)
  schedule['week-14-day-0'] = [createItem('Quiz', 'Quiz 6 (Ch.12-13)', 'Assessments', 'school')]; // Monday
  // Tuesday-Friday is Thanksgiving Break - no classes

  // Week 15: December 1-5, 2025 (Final Week)
  schedule['week-15-day-0'] = [createItem('In-Person Lecture', 'Chapter 14 Lecture', 'Lectures', 'book-open')]; // Monday
  schedule['week-15-day-2'] = [createItem('In-Person Lecture', 'Chapter 15 & Review', 'Lectures', 'book-open')]; // Wednesday
  schedule['week-15-day-4'] = [createItem('Final Exam', 'Final Exam (Comprehensive)', 'Assessments', 'award')]; // Friday

  return schedule;
};
