
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToolboxItem } from '@/components/WeekModule';
import { BookOpen, Video, BookText, PenTool, FileCheck, School, GraduationCap, Trash, ClipboardList, PlayCircle, ClipboardCheck, FileText, Award, Brain } from 'lucide-react';

interface CourseToolboxProps {
  toolboxItems: ToolboxItem[];
  isDraggingItem: boolean;
  onTrashDrop: (item: ToolboxItem) => void;
}

const CourseToolbox: React.FC<CourseToolboxProps> = ({ 
  toolboxItems, 
  isDraggingItem, 
  onTrashDrop 
}) => {
  const [isTrashActive, setIsTrashActive] = React.useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'In-Person Lecture':
        return <BookOpen className="h-5 w-5 mr-2" />;
      case 'Remote Lecture':
        return <Video className="h-5 w-5 mr-2" />;
      case 'Homework':
        return <BookText className="h-5 w-5 mr-2" />;
      case 'Essay':
        return <PenTool className="h-5 w-5 mr-2" />;
      case 'Project':
        return <FileCheck className="h-5 w-5 mr-2" />;
      case 'Practice Set':
        return <ClipboardList className="h-5 w-5 mr-2" />;
      case 'Video Assignment':
        return <PlayCircle className="h-5 w-5 mr-2" />;
      case 'Structured Study':
        return <Brain className="h-5 w-5 mr-2 text-secondary-cta drop-shadow-sm" />;
      case 'Quiz':
        return <School className="h-5 w-5 mr-2" />;
      case 'DSM Quiz':
        return <ClipboardCheck className="h-5 w-5 mr-2" />;
      case 'Exam':
        return <GraduationCap className="h-5 w-5 mr-2" />;
      case 'Midterm':
        return <FileText className="h-5 w-5 mr-2" />;
      case 'Final Exam':
        return <Award className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  const handleDragStart = (e: React.DragEvent, item: ToolboxItem) => {
    e.dataTransfer.setData('application/json', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (isDraggingItem) {
      e.preventDefault();
      setIsTrashActive(true);
    }
  };

  const handleDragLeave = () => {
    setIsTrashActive(false);
  };

  const handleTrashDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsTrashActive(false);
    
    try {
      const item = JSON.parse(e.dataTransfer.getData('application/json'));
      onTrashDrop(item);
    } catch (error) {
      console.error('Failed to parse dropped item:', error);
    }
  };

  const groupedItems = toolboxItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ToolboxItem[]>);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Lectures':
        return 'text-accent-cyan';
      case 'Assigned Work':
        return 'text-accent-magenta';
      case 'Assessments':
        return 'text-secondary-cta';
      default:
        return 'text-gray-700';
    }
  };

  const getItemStyling = (type: string) => {
    if (type === 'Structured Study') {
      return [
        'flex items-center p-2 rounded border border-gray-200 hover:bg-gray-50 draggable cursor-pointer',
        'bg-gradient-to-r from-purple-50 to-white',
        'shadow-[0_0_0_1px_#512EAB] hover:shadow-[0_0_0_2px_#9B87F5]',
        'transition-all duration-300 ease-in-out',
        'hover:scale-105',
        'animate-pulse'
      ].join(' ');
    }
    return 'flex items-center p-2 rounded bg-item-bg border border-gray-200 hover:bg-gray-50 draggable cursor-pointer';
  };

  if (isDraggingItem) {
    return (
      <Card
        className={`transition-all ${isTrashActive ? 'bg-red-50 border-red-300' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleTrashDrop}
      >
        <CardContent className="flex flex-col items-center justify-center py-10">
          <Trash 
            className={`h-16 w-16 ${isTrashActive ? 'text-red-500' : 'text-gray-400'}`} 
          />
          <p className={`mt-4 font-medium font-plus-jakarta ${isTrashActive ? 'text-red-500' : 'text-gray-600'}`}>
            Drop here to remove
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="font-plus-jakarta">Course Toolbox</CardTitle>
        <p className="text-sm text-gray-600 font-plus-jakarta">
          Drag your course items into the calendar to define your course's structure
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className={`text-sm font-medium font-plus-jakarta ${getCategoryColor(category)}`}>{category}</h3>
              <div className="space-y-2">
                {items.map(item => (
                  <div
                    key={item.id}
                    className={getItemStyling(item.type)}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    {getIcon(item.type)}
                    <span className={`font-plus-jakarta text-sm ${item.type === 'Structured Study' ? 'text-secondary-cta font-medium' : ''}`}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseToolbox;
