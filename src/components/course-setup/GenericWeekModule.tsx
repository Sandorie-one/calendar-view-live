
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CalendarDay from '@/components/CalendarDay';
import { ToolboxItem } from '@/components/WeekModule';

interface GenericWeekModuleProps {
  onDrop: (dayIndex: number) => (item: ToolboxItem) => void;
  onItemDragStart: (item: ToolboxItem) => void;
  onItemRemove: (key: string, itemId: string) => void;
  savedItems: Record<string, ToolboxItem[]>;
}

const GenericWeekModule: React.FC<GenericWeekModuleProps> = ({
  onDrop,
  onItemDragStart,
  onItemRemove,
  savedItems
}) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const handleItemRemove = (dayIndex: number) => (itemId: string) => {
    const key = `generic-week-day-${dayIndex}`;
    onItemRemove(key, itemId);
  };

  return (
    <Card className="mb-6 generic-week-module">
      <CardHeader className="pb-2">
        <div className="flex justify-between">
          <div>
            <CardTitle className="text-xl font-bold">
              A Week in My Course
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2">
          {daysOfWeek.map((day, dayIndex) => (
            <CalendarDay
              key={dayIndex}
              day={day}
              date={new Date()} // Date is not shown for generic week
              items={savedItems[`generic-week-day-${dayIndex}`] || []}
              onDrop={onDrop(dayIndex)}
              onItemDragStart={onItemDragStart}
              onItemRemove={handleItemRemove(dayIndex)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GenericWeekModule;
