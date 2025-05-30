
import React from 'react';
import WeekModule from '@/components/WeekModule';
import GenericWeekModule from '@/components/course-setup/GenericWeekModule';
import CourseToolbox from '@/components/CourseToolbox';
import { CourseWeek, CourseStructureType } from '@/types/course';
import { ToolboxItem } from '@/components/WeekModule';

interface CourseContentProps {
  courseWeeks: CourseWeek[];
  toolboxItems: ToolboxItem[];
  savedItems: Record<string, ToolboxItem[]>;
  isDraggingItem: boolean;
  courseStructure: CourseStructureType;
  onStructureChange: (value: CourseStructureType) => void;
  onDrop: (dayIndex: number, weekIndex: number) => (item: ToolboxItem) => void;
  onGenericDrop: (dayIndex: number) => (item: ToolboxItem) => void;
  onItemDragStart: (item: ToolboxItem) => void;
  onItemRemove: (key: string, itemId: string) => void;
  onTrashDrop: (item: ToolboxItem) => void;
}

const CourseContent: React.FC<CourseContentProps> = ({
  courseWeeks,
  toolboxItems,
  savedItems,
  isDraggingItem,
  courseStructure,
  onStructureChange,
  onDrop,
  onGenericDrop,
  onItemDragStart,
  onItemRemove,
  onTrashDrop
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 relative">
        {/* Left column: Course weeks */}
        <div className="w-3/4">
          <h2 className="text-xl font-semibold mb-4 text-nav-font font-plus-jakarta">
            George's Chemistry 101 Course
          </h2>
          
          {courseStructure === 'different' ? (
            courseWeeks.map((week) => (
              <WeekModule
                key={week.weekNumber}
                weekNumber={week.weekNumber}
                startDate={week.startDate}
                endDate={week.endDate}
                chapters={week.chapters}
                learningObjectives={week.learningObjectives}
                onDrop={onDrop}
                onItemDragStart={onItemDragStart}
                onItemRemove={onItemRemove}
                savedItems={savedItems}
              />
            ))
          ) : (
            <GenericWeekModule
              onDrop={onGenericDrop}
              onItemDragStart={onItemDragStart}
              onItemRemove={onItemRemove}
              savedItems={savedItems}
            />
          )}
        </div>
        
        {/* Right column: Course toolbox or trash bin */}
        <div className="w-1/4 sticky self-start" style={{ top: '9.5rem' }}>
          <CourseToolbox 
            toolboxItems={toolboxItems} 
            isDraggingItem={isDraggingItem} 
            onTrashDrop={onTrashDrop} 
          />
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
