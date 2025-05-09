
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToolboxItem } from '@/components/WeekModule';
import { BookOpen, Video, BookText, PenTool, FileCheck, School, GraduationCap } from 'lucide-react';

interface CourseToolboxProps {
  toolboxItems: ToolboxItem[];
}

const CourseToolbox: React.FC<CourseToolboxProps> = ({ toolboxItems }) => {
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
      case 'Quizzes':
        return <School className="h-5 w-5 mr-2" />;
      case 'Exams':
        return <GraduationCap className="h-5 w-5 mr-2" />;
      default:
        return null;
    }
  };

  const handleDragStart = (e: React.DragEvent, item: ToolboxItem) => {
    e.dataTransfer.setData('application/json', JSON.stringify(item));
    e.dataTransfer.effectAllowed = 'copy';
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
        return 'text-pearson-blue';
      case 'Assigned Work':
        return 'text-pearson-magenta';
      case 'Assessments':
        return 'text-pearson-teal';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Course Toolbox</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="space-y-2">
              <h3 className={`text-sm font-medium ${getCategoryColor(category)}`}>{category}</h3>
              <div className="space-y-2">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center p-2 rounded-md border border-gray-200 hover:bg-gray-50 draggable cursor-pointer"
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                  >
                    {getIcon(item.type)}
                    <span>{item.title}</span>
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
