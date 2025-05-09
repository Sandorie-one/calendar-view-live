import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import ProgressStepper from '@/components/ProgressStepper';
import WeekModule, { ToolboxItem } from '@/components/WeekModule';
import CourseToolbox from '@/components/CourseToolbox';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const CourseSetup = () => {
  const steps = ["Upload Syllabus", "Set Up Course Structure", "Define Exams", "Create Assignments", "Review"];
  const currentStep = 1; // 0-based index, so this is the second step
  
  // Days of week array needed for the error fix
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  // Course data
  const courseWeeks = [
    {
      weekNumber: 1,
      startDate: new Date(2025, 5, 12), // June 12, 2025
      endDate: new Date(2025, 5, 16),   // June 16, 2025
      chapters: ["1", "2"],
      learningObjectives: [
        "Understand atomic structure and the periodic table",
        "Describe chemical bonding and molecular geometry",
        "Apply the gas laws to solve chemistry problems"
      ]
    },
    {
      weekNumber: 2,
      startDate: new Date(2025, 5, 19), // June 19, 2025
      endDate: new Date(2025, 5, 23),   // June 23, 2025
      chapters: ["3", "4"],
      learningObjectives: [
        "Explain thermodynamic principles",
        "Calculate enthalpy changes in chemical reactions",
        "Understand entropy and Gibbs free energy"
      ]
    },
    {
      weekNumber: 3,
      startDate: new Date(2025, 5, 26), // June 26, 2025
      endDate: new Date(2025, 5, 30),   // June 30, 2025
      chapters: ["5", "6"],
      learningObjectives: [
        "Describe chemical equilibrium",
        "Apply Le Chatelier's principle",
        "Analyze acid-base equilibria"
      ]
    },
    {
      weekNumber: 4,
      startDate: new Date(2025, 6, 3),  // July 3, 2025
      endDate: new Date(2025, 6, 7),    // July 7, 2025
      chapters: ["7", "8"],
      learningObjectives: [
        "Understand redox reactions",
        "Apply electrochemistry principles",
        "Describe chemical kinetics and reaction rates"
      ]
    }
  ];
  
  const toolboxItems: ToolboxItem[] = [
    { id: 'lecture-1', type: 'In-Person Lecture', category: 'Lectures', title: 'In-Person Lecture', icon: 'book-open' },
    { id: 'lecture-2', type: 'Remote Lecture', category: 'Lectures', title: 'Remote Lecture', icon: 'video' },
    { id: 'work-1', type: 'Homework', category: 'Assigned Work', title: 'Homework', icon: 'book-text' },
    { id: 'work-2', type: 'Essay', category: 'Assigned Work', title: 'Essay', icon: 'pen-tool' },
    { id: 'work-3', type: 'Project', category: 'Assigned Work', title: 'Project', icon: 'file-check' },
    { id: 'assess-1', type: 'Quizzes', category: 'Assessments', title: 'Quizzes', icon: 'school' },
    { id: 'assess-2', type: 'Exams', category: 'Assessments', title: 'Exams', icon: 'graduation-cap' }
  ];
  
  // State to keep track of items dropped into calendar days
  const [savedItems, setSavedItems] = useState<Record<string, ToolboxItem[]>>({});
  // State to track if we're currently dragging a calendar item
  const [isDraggingItem, setIsDraggingItem] = useState(false);
  // State to keep track of the currently dragged item's source location
  const [dragSource, setDragSource] = useState<{key: string, itemId: string} | null>(null);
  
  // Handler for dropping items into calendar days
  const handleDrop = (dayIndex: number, weekIndex: number) => (item: ToolboxItem) => {
    const key = `week-${weekIndex}-day-${dayIndex}`;
    
    // If we're dragging from another calendar day
    if (isDraggingItem && dragSource) {
      // Remove from old location if needed
      if (dragSource.key !== key) {
        setSavedItems(prev => {
          const newItems = { ...prev };
          
          // Remove from source
          if (newItems[dragSource.key]) {
            newItems[dragSource.key] = newItems[dragSource.key].filter(
              existingItem => existingItem.id !== dragSource.itemId
            );
          }
          
          // Add to destination
          const existingItems = newItems[key] || [];
          newItems[key] = [...existingItems, item];
          
          return newItems;
        });
        
        toast({
          title: "Item moved",
          description: `${item.title} moved successfully.`,
        });
      }
    } else {
      // Regular drag from toolbox
      setSavedItems(prev => {
        const existingItems = prev[key] || [];
        return {
          ...prev,
          [key]: [...existingItems, { ...item, id: `${item.id}-${Date.now()}` }]
        };
      });
      
      toast({
        title: "Item added",
        description: `${item.title} added to ${daysOfWeek[dayIndex]}.`,
      });
    }
    
    setIsDraggingItem(false);
    setDragSource(null);
  };
  
  // Handler for when a calendar item starts being dragged
  const handleItemDragStart = (item: ToolboxItem) => {
    setIsDraggingItem(true);
    
    // Find the location of this item
    for (const [key, items] of Object.entries(savedItems)) {
      const foundItem = items.find(i => i.id === item.id);
      if (foundItem) {
        setDragSource({ key, itemId: item.id });
        break;
      }
    }
  };
  
  // Handler for removing an item (dropping on trash)
  const handleTrashDrop = (item: ToolboxItem) => {
    if (dragSource) {
      setSavedItems(prev => {
        const newItems = { ...prev };
        
        if (newItems[dragSource.key]) {
          newItems[dragSource.key] = newItems[dragSource.key].filter(
            existingItem => existingItem.id !== dragSource.itemId
          );
        }
        
        return newItems;
      });
      
      toast({
        title: "Item removed",
        description: `${item.title} removed from calendar.`,
        variant: "destructive"
      });
    }
    
    setIsDraggingItem(false);
    setDragSource(null);
  };
  
  // Handler for removing a specific item from a specific day
  const handleItemRemove = (key: string, itemId: string) => {
    setSavedItems(prev => {
      const newItems = { ...prev };
      
      if (newItems[key]) {
        newItems[key] = newItems[key].filter(item => item.id !== itemId);
      }
      
      return newItems;
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container px-6 py-8 flex-1">
        {/* Progress stepper */}
        <ProgressStepper steps={steps} currentStep={currentStep} />
        
        {/* Page title and instructions */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pearson-purple mb-2">Let's set up the structure of your course</h1>
          <p className="text-gray-600">
            First, we'll create the weekly structure of your course - you can use the same structure every week, 
            or customize each week however you like.
          </p>
        </div>
        
        <div className="flex gap-6 relative">
          {/* Left column: Course weeks */}
          <div className="w-3/4">
            <h2 className="text-xl font-bold mb-4 text-pearson-purple">George's Chemistry 101 Course</h2>
            
            {courseWeeks.map((week) => (
              <WeekModule
                key={week.weekNumber}
                weekNumber={week.weekNumber}
                startDate={week.startDate}
                endDate={week.endDate}
                chapters={week.chapters}
                learningObjectives={week.learningObjectives}
                onDrop={handleDrop}
                onItemDragStart={handleItemDragStart}
                onItemRemove={handleItemRemove}
                savedItems={savedItems}
              />
            ))}
          </div>
          
          {/* Right column: Course toolbox or trash bin - Now with sticky positioning */}
          <div className="w-1/4 sticky top-24 self-start">
            <CourseToolbox 
              toolboxItems={toolboxItems} 
              isDraggingItem={isDraggingItem} 
              onTrashDrop={handleTrashDrop} 
            />
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div className="mt-8 flex justify-between">
          <Button variant="outline" className="flex items-center">
            <ChevronLeft size={16} className="mr-2" /> Previous: Upload Syllabus
          </Button>
          <Button className="bg-pearson-magenta hover:bg-pearson-magenta/90 flex items-center">
            Next: Define Exams <ChevronRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseSetup;
