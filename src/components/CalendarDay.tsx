
import React from 'react';
import { ToolboxItem } from '@/components/WeekModule';
import { cn } from '@/lib/utils';
import { BookOpen, Video, BookText, PenTool, FileCheck, School, GraduationCap } from 'lucide-react';

interface CalendarDayProps {
  day: string;
  date: Date;
  items: ToolboxItem[];
  onDrop: (item: ToolboxItem) => void;
  onItemDragStart: (item: ToolboxItem) => void;
  onItemRemove: (itemId: string) => void;
  showDate?: boolean; // Optional prop to show/hide date
}

const CalendarDay: React.FC<CalendarDayProps> = ({ 
  day, 
  date, 
  items, 
  onDrop, 
  onItemDragStart, 
  onItemRemove,
  showDate = true // Default to showing date
}) => {
  const [isActive, setIsActive] = React.useState(false);
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(true);
  };

  const handleDragLeave = () => {
    setIsActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsActive(false);
    
    try {
      const item = JSON.parse(e.dataTransfer.getData('application/json'));
      onDrop(item);
    } catch (error) {
      console.error('Failed to parse dropped item:', error);
    }
  };

  const handleItemDragStart = (e: React.DragEvent, item: ToolboxItem) => {
    e.stopPropagation();
    e.dataTransfer.setData('application/json', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'move';
    onItemDragStart(item);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'In-Person Lecture':
        return <BookOpen className="h-4 w-4" />;
      case 'Remote Lecture':
        return <Video className="h-4 w-4" />;
      case 'Homework':
        return <BookText className="h-4 w-4" />;
      case 'Essay':
        return <PenTool className="h-4 w-4" />;
      case 'Project':
        return <FileCheck className="h-4 w-4" />;
      case 'Quizzes':
        return <School className="h-4 w-4" />;
      case 'Exams':
        return <GraduationCap className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        'p-2 rounded-md border border-gray-200 bg-white min-h-24 droppable',
        isActive && 'active'
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-xs font-medium">{day}</div>
      {showDate && <div className="text-xs text-gray-500 mb-2">{formatDate(date)}</div>}
      
      <div className="space-y-1">
        {items.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className="text-xs p-1 rounded bg-opacity-10 flex items-center gap-1 cursor-grab"
            draggable
            onDragStart={(e) => handleItemDragStart(e, item)}
            style={{
              backgroundColor: 
                item.category === 'Lectures' 
                  ? 'rgba(62, 141, 221, 0.2)' 
                  : item.category === 'Assigned Work' 
                    ? 'rgba(155, 38, 182, 0.2)' 
                    : 'rgba(55, 177, 191, 0.2)'
            }}
          >
            {getIcon(item.type)}
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
