import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ToolboxItem } from '@/components/WeekModule';
import { BookOpen, Video, BookText, PenTool, FileCheck, School, GraduationCap, Trash, ClipboardList, PlayCircle, ClipboardCheck, FileText, Award, Brain, Sparkles } from 'lucide-react';

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
        return (
          <div className="relative mr-2">
            <Brain className="h-5 w-5" />
            <Sparkles className="h-2 w-2 absolute -top-1 -right-1 text-accent-cyan animate-pulse" />
          </div>
        );
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
                    className={`flex items-center p-2 rounded border hover:bg-gray-50 draggable cursor-pointer relative ${
                      item.type === 'Structured Study' 
                        ? 'bg-gradient-to-r from-accent-cyan/10 to-accent-magenta/10 border-accent-cyan/30 animate-pulse' 
                        : 'bg-item-bg border-gray-200'
                    }`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    {getIcon(item.type)}
                    <span className="font-plus-jakarta text-sm flex-1">{item.title}</span>
                    {item.type === 'Structured Study' && (
                      <div className="flex gap-1 ml-2">
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-primary-cta text-black font-medium">
                          NEW
                        </Badge>
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-accent-cyan text-black font-medium">
                          AI
                        </Badge>
                      </div>
                    )}
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
