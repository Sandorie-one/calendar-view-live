
import React from 'react';
import { ToolboxItem } from '@/components/WeekModule';
import { cn } from '@/lib/utils';
import { BookOpen, Video, BookText, PenTool, FileCheck, School, GraduationCap, ClipboardList, PlayCircle, ClipboardCheck, FileText, Award, Brain } from 'lucide-react';

interface CalendarDayProps {
  day: string;
  date: Date;
  items: ToolboxItem[];
  onDrop: (item: ToolboxItem) => void;
  onItemDragStart: (item: ToolboxItem) => void;
  onItemRemove: (itemId: string) => void;
  showDate?: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ 
  day, 
  date, 
  items, 
  onDrop, 
  onItemDragStart, 
  onItemRemove,
  showDate = true
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
      case 'Practice Set':
        return <ClipboardList className="h-4 w-4" />;
      case 'Video Assignment':
        return <PlayCircle className="h-4 w-4" />;
      case 'Structured Study':
        return <Brain className="h-4 w-4 text-secondary-cta drop-shadow-sm" />;
      case 'Quiz':
        return <School className="h-4 w-4" />;
      case 'DSM Quiz':
        return <ClipboardCheck className="h-4 w-4" />;
      case 'Exam':
        return <GraduationCap className="h-4 w-4" />;
      case 'Midterm':
        return <FileText className="h-4 w-4" />;
      case 'Final Exam':
        return <Award className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getItemStyling = (type: string) => {
    if (type === 'Structured Study') {
      return cn(
        'text-xs p-2 rounded flex items-center gap-1 cursor-grab font-plus-jakarta',
        'bg-gradient-to-r from-purple-50 to-white',
        'border-2 border-transparent bg-clip-padding',
        'shadow-[0_0_0_1px_#512EAB] hover:shadow-[0_0_0_2px_#9B87F5]',
        'transition-all duration-300 ease-in-out',
        'hover:scale-105 hover:shadow-lg',
        'animate-pulse'
      );
    }
    return 'text-xs p-2 rounded bg-item-bg flex items-center gap-1 cursor-grab font-plus-jakarta';
  };

  return (
    <div
      className={cn(
        'p-2 rounded bg-card-bg border border-gray-200 min-h-24 droppable',
        isActive && 'active'
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-xs font-medium font-plus-jakarta">{day}</div>
      {showDate && <div className="text-xs text-gray-500 mb-2 font-plus-jakarta">{formatDate(date)}</div>}
      
      <div className="space-y-1">
        {items.map((item, index) => (
          <div 
            key={`${item.id}-${index}`} 
            className={getItemStyling(item.type)}
            draggable
            onDragStart={(e) => handleItemDragStart(e, item)}
          >
            {getIcon(item.type)}
            <span className={item.type === 'Structured Study' ? 'text-secondary-cta font-medium' : ''}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarDay;
