
import { ToolboxItem } from '@/components/WeekModule';

export interface CourseWeek {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  chapters: string[];
  learningObjectives: string[];
}

export interface SavedItemsState {
  [key: string]: ToolboxItem[];
}

export interface DragSourceState {
  key: string;
  itemId: string;
}

export type CourseStructureType = 'different' | 'same';
