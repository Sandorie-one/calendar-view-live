import { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import { ToolboxItem } from '@/components/WeekModule';
import { SavedItemsState, DragSourceState } from '@/types/course';
import { daysOfWeek } from '@/data/courseData';
import { createInitialSchedule } from '@/data/initialSchedule';

export function useCourseCalendar() {
  // State for items in calendar days - initialize with syllabus schedule
  const [savedItems, setSavedItems] = useState<SavedItemsState>(createInitialSchedule());
  // State for dragging calendar item
  const [isDraggingItem, setIsDraggingItem] = useState(false);
  // State for dragged item source location
  const [dragSource, setDragSource] = useState<DragSourceState | null>(null);

  // Handler for dropping items into calendar days
  const handleDrop = (dayIndex: number, weekIndex: number, customKey?: string) => (item: ToolboxItem) => {
    const key = customKey || `week-${weekIndex}-day-${dayIndex}`;
    
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
      
      const dayName = customKey?.includes('generic') 
        ? daysOfWeek[dayIndex]
        : daysOfWeek[dayIndex];
        
      toast({
        title: "Item added",
        description: `${item.title} added to ${dayName}.`,
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

  return {
    savedItems,
    isDraggingItem,
    dragSource,
    handleDrop,
    handleItemDragStart,
    handleTrashDrop,
    handleItemRemove
  };
}
