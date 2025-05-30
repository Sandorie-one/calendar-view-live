
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CalendarDay from '@/components/CalendarDay';

export interface ToolboxItem {
  id: string;
  type: string;
  category: string;
  title: string;
  icon: string;
}

interface WeekModuleProps {
  weekNumber: number;
  startDate: Date;
  endDate: Date;
  chapters: string[];
  learningObjectives: string[];
  onDrop: (dayIndex: number, weekIndex: number) => (item: ToolboxItem) => void;
  onItemDragStart: (item: ToolboxItem) => void;
  onItemRemove: (key: string, itemId: string) => void;
  savedItems: Record<string, ToolboxItem[]>;
}

const WeekModule: React.FC<WeekModuleProps> = ({
  weekNumber,
  startDate,
  endDate,
  chapters,
  learningObjectives,
  onDrop,
  onItemDragStart,
  onItemRemove,
  savedItems
}) => {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getWeekDates = () => {
    const dates: Date[] = [];
    const currentDate = new Date(startDate);
    
    // Add Monday through Friday (5 days)
    for (let i = 0; i < 5; i++) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return dates;
  };

  const weekDates = getWeekDates();
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleItemRemove = (dayIndex: number) => (itemId: string) => {
    const key = `week-${weekNumber}-day-${dayIndex}`;
    onItemRemove(key, itemId);
  };

  return (
    <Card className={`mb-4 week-module-${weekNumber}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-base font-semibold font-plus-jakarta">
              Week {weekNumber}: {formatDate(startDate)} - {formatDate(endDate)}
            </CardTitle>
            <div className="text-sm text-gray-600 mt-1 font-plus-jakarta">
              <span className="font-semibold">Book Chapters:</span> {chapters.join(", ")}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2 font-plus-jakarta">Learning Objectives:</h3>
          <ul className="list-disc pl-5 text-sm font-plus-jakarta">
            {learningObjectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        </div>
        
        <div className="grid grid-cols-5 gap-2">
          {weekDates.map((date, dayIndex) => (
            <CalendarDay
              key={dayIndex}
              day={daysOfWeek[dayIndex]}
              date={date}
              items={savedItems[`week-${weekNumber}-day-${dayIndex}`] || []}
              onDrop={onDrop(dayIndex, weekNumber)}
              onItemDragStart={onItemDragStart}
              onItemRemove={handleItemRemove(dayIndex)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeekModule;
