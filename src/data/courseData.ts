
import { CourseWeek } from '@/types/course';
import { ToolboxItem } from '@/components/WeekModule';

// Course information
export const courseInfo = {
  title: "Managerial Accounting",
  section: "U03",
  location: "Mango 311",
  startDate: new Date(2025, 7, 25), // August 25, 2025
  endDate: new Date(2025, 11, 5),   // December 5, 2025
  instructor: "Pablo Simon",
  email: "psimon@fiu.edu",
  phone: "305-281-1534"
};

// Course weeks data
export const courseWeeks: CourseWeek[] = [
  {
    weekNumber: 1,
    startDate: new Date(2025, 7, 25), // August 25, 2025
    endDate: new Date(2025, 7, 29),   // August 29, 2025
    chapters: ["1"],
    learningObjectives: [
      "Understand the role of managerial accounting in business",
      "Distinguish between financial and managerial accounting",
      "Identify key managerial accounting concepts and terminology"
    ]
  },
  {
    weekNumber: 2,
    startDate: new Date(2025, 8, 1),  // September 1, 2025 (Labor Day Monday)
    endDate: new Date(2025, 8, 5),    // September 5, 2025
    chapters: ["2"],
    learningObjectives: [
      "Understand the building blocks of managerial accounting",
      "Classify costs by behavior and function",
      "Calculate product costs using different costing methods"
    ]
  },
  {
    weekNumber: 3,
    startDate: new Date(2025, 8, 8),  // September 8, 2025
    endDate: new Date(2025, 8, 12),   // September 12, 2025
    chapters: ["3"],
    learningObjectives: [
      "Understand job order costing systems",
      "Calculate predetermined overhead rates",
      "Apply job costing to manufacturing and service companies"
    ]
  },
  {
    weekNumber: 4,
    startDate: new Date(2025, 8, 15), // September 15, 2025
    endDate: new Date(2025, 8, 19),   // September 19, 2025
    chapters: ["4"],
    learningObjectives: [
      "Understand activity-based costing (ABC)",
      "Compare traditional costing with ABC",
      "Apply ABC to allocate overhead costs"
    ]
  },
  {
    weekNumber: 5,
    startDate: new Date(2025, 8, 22), // September 22, 2025
    endDate: new Date(2025, 8, 26),   // September 26, 2025
    chapters: ["5"],
    learningObjectives: [
      "Understand process costing systems",
      "Calculate equivalent units of production",
      "Prepare process costing reports"
    ]
  },
  {
    weekNumber: 6,
    startDate: new Date(2025, 8, 29), // September 29, 2025
    endDate: new Date(2025, 9, 3),    // October 3, 2025
    chapters: ["6"],
    learningObjectives: [
      "Identify different types of cost behavior",
      "Use high-low method to separate mixed costs",
      "Apply cost behavior concepts to decision making"
    ]
  },
  {
    weekNumber: 7,
    startDate: new Date(2025, 9, 6),  // October 6, 2025
    endDate: new Date(2025, 9, 10),   // October 10, 2025
    chapters: ["7"],
    learningObjectives: [
      "Apply cost-volume-profit (CVP) analysis",
      "Calculate break-even points and target profits",
      "Analyze the impact of changes on profitability"
    ]
  },
  {
    weekNumber: 8,
    startDate: new Date(2025, 9, 13), // October 13, 2025
    endDate: new Date(2025, 9, 17),   // October 17, 2025
    chapters: ["8"],
    learningObjectives: [
      "Identify relevant costs for short-term decisions",
      "Analyze special pricing and product mix decisions",
      "Evaluate make-or-buy and sell-or-process decisions"
    ]
  },
  {
    weekNumber: 9,
    startDate: new Date(2025, 9, 20), // October 20, 2025
    endDate: new Date(2025, 9, 24),   // October 24, 2025
    chapters: ["9"],
    learningObjectives: [
      "Understand the master budgeting process",
      "Prepare operating and financial budgets",
      "Use budgets for planning and control"
    ]
  },
  {
    weekNumber: 10,
    startDate: new Date(2025, 9, 27), // October 27, 2025
    endDate: new Date(2025, 9, 31),   // October 31, 2025
    chapters: ["10"],
    learningObjectives: [
      "Evaluate performance using various metrics",
      "Understand responsibility accounting concepts",
      "Analyze decentralized operations and transfer pricing"
    ]
  },
  {
    weekNumber: 11,
    startDate: new Date(2025, 10, 3), // November 3, 2025
    endDate: new Date(2025, 10, 7),   // November 7, 2025
    chapters: ["11"],
    learningObjectives: [
      "Understand standard costing systems",
      "Calculate and analyze cost variances",
      "Use variance analysis for performance evaluation"
    ]
  },
  {
    weekNumber: 12,
    startDate: new Date(2025, 10, 10), // November 10, 2025 (Veterans Day Monday)
    endDate: new Date(2025, 10, 14),   // November 14, 2025
    chapters: ["12"],
    learningObjectives: [
      "Analyze capital investment decisions",
      "Use time value of money concepts",
      "Apply NPV, IRR, and payback methods"
    ]
  },
  {
    weekNumber: 13,
    startDate: new Date(2025, 10, 17), // November 17, 2025
    endDate: new Date(2025, 10, 21),   // November 21, 2025
    chapters: ["13"],
    learningObjectives: [
      "Understand the statement of cash flows",
      "Prepare cash flow statements using indirect method",
      "Analyze cash flow information for decision making"
    ]
  },
  {
    weekNumber: 14,
    startDate: new Date(2025, 10, 24), // November 24, 2025 (Thanksgiving Break)
    endDate: new Date(2025, 10, 28),   // November 28, 2025
    chapters: ["14"],
    learningObjectives: [
      "Perform horizontal and vertical analysis",
      "Calculate and interpret financial ratios",
      "Use financial statement analysis for decision making"
    ]
  },
  {
    weekNumber: 15,
    startDate: new Date(2025, 11, 1),  // December 1, 2025
    endDate: new Date(2025, 11, 5),    // December 5, 2025
    chapters: ["15"],
    learningObjectives: [
      "Understand sustainability reporting and accounting",
      "Recognize ethical issues in managerial accounting",
      "Apply ethical frameworks to accounting decisions"
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
  { id: 'work-4', type: 'Practice Set', category: 'Assigned Work', title: 'Practice Set', icon: 'clipboard-list' },
  { id: 'work-5', type: 'Video Assignment', category: 'Assigned Work', title: 'Video Assignment', icon: 'play-circle' },
  { id: 'assess-1', type: 'Quiz', category: 'Assessments', title: 'Quiz', icon: 'school' },
  { id: 'assess-2', type: 'DSM Quiz', category: 'Assessments', title: 'DSM Quiz', icon: 'clipboard-check' },
  { id: 'assess-3', type: 'Exam', category: 'Assessments', title: 'Exam', icon: 'graduation-cap' },
  { id: 'assess-4', type: 'Midterm', category: 'Assessments', title: 'Midterm', icon: 'file-text' },
  { id: 'assess-5', type: 'Final Exam', category: 'Assessments', title: 'Final Exam', icon: 'award' }
];

// Array of days of the week
export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Progress steps for the course setup
export const setupSteps = ["Upload Syllabus", "Set Up Course Structure", "Define Exams", "Create Assignments", "Review"];
export const currentSetupStep = 1; // 0-based index, so this is the second step
