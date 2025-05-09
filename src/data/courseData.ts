
import { CourseWeek } from '@/types/course';
import { ToolboxItem } from '@/components/WeekModule';

// Course weeks data
export const courseWeeks: CourseWeek[] = [
  {
    weekNumber: 1,
    startDate: new Date(2025, 5, 12), // June 12, 2025
    endDate: new Date(2025, 5, 16),   // June 16, 2025
    chapters: ["1", "2"],
    learningObjectives: [
      "Understand atomic structure and the periodic table",
      "Describe chemical bonding and molecular geometry",
      "Apply the gas laws to solve chemistry problems"
    ]
  },
  {
    weekNumber: 2,
    startDate: new Date(2025, 5, 19), // June 19, 2025
    endDate: new Date(2025, 5, 23),   // June 23, 2025
    chapters: ["3", "4"],
    learningObjectives: [
      "Explain thermodynamic principles",
      "Calculate enthalpy changes in chemical reactions",
      "Understand entropy and Gibbs free energy"
    ]
  },
  {
    weekNumber: 3,
    startDate: new Date(2025, 5, 26), // June 26, 2025
    endDate: new Date(2025, 5, 30),   // June 30, 2025
    chapters: ["5", "6"],
    learningObjectives: [
      "Describe chemical equilibrium",
      "Apply Le Chatelier's principle",
      "Analyze acid-base equilibria"
    ]
  },
  {
    weekNumber: 4,
    startDate: new Date(2025, 6, 3),  // July 3, 2025
    endDate: new Date(2025, 6, 7),    // July 7, 2025
    chapters: ["7", "8"],
    learningObjectives: [
      "Understand redox reactions",
      "Apply electrochemistry principles",
      "Describe chemical kinetics and reaction rates"
    ]
  }
];

// Toolbox items data
export const toolboxItems: ToolboxItem[] = [
  { id: 'lecture-1', type: 'In-Person Lecture', category: 'Lectures', title: 'In-Person Lecture', icon: 'book-open' },
  { id: 'lecture-2', type: 'Remote Lecture', category: 'Lectures', title: 'Remote Lecture', icon: 'video' },
  { id: 'work-1', type: 'Homework', category: 'Assigned Work', title: 'Homework', icon: 'book-text' },
  { id: 'work-2', type: 'Essay', category: 'Assigned Work', title: 'Essay', icon: 'pen-tool' },
  { id: 'work-3', type: 'Project', category: 'Assigned Work', title: 'Project', icon: 'file-check' },
  { id: 'assess-1', type: 'Quizzes', category: 'Assessments', title: 'Quizzes', icon: 'school' },
  { id: 'assess-2', type: 'Exams', category: 'Assessments', title: 'Exams', icon: 'graduation-cap' }
];

// Array of days of the week
export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Progress steps for the course setup
export const setupSteps = ["Upload Syllabus", "Set Up Course Structure", "Define Exams", "Create Assignments", "Review"];
export const currentSetupStep = 1; // 0-based index, so this is the second step
