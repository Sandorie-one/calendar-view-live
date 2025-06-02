
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Book, GraduationCap, Lightbulb, Target, Award, Calendar, Clock, Check } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const CourseCreationLoading = () => {
  const navigate = useNavigate();
  const [currentPhase, setCurrentPhase] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showCompleted, setShowCompleted] = useState<boolean[]>([false, false, false, false]);

  const phases = [
    {
      title: "Analyzing your syllabus...",
      description: "Our AI is processing your course content",
      icon: Book,
      duration: 2000
    },
    {
      title: "Structuring course content...",
      description: "Building optimal learning modules",
      icon: Brain,
      duration: 2000
    },
    {
      title: "Optimizing learning schedule...",
      description: "Creating personalized timeline",
      icon: Calendar,
      duration: 2000
    },
    {
      title: "Finalizing your course...",
      description: "Adding finishing touches",
      icon: GraduationCap,
      duration: 2000
    }
  ];

  const floatingIcons = [Brain, Book, GraduationCap, Lightbulb, Target, Award, Calendar, Clock];

  useEffect(() => {
    const totalDuration = 8000;
    const phaseInterval = totalDuration / phases.length;
    
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (totalDuration / 100));
        return Math.min(newProgress, 100);
      });
    }, 100);

    const phaseTimer = setInterval(() => {
      setCurrentPhase(prev => {
        const nextPhase = prev + 1;
        if (nextPhase < phases.length) {
          // Mark current phase as completed
          setShowCompleted(completed => {
            const newCompleted = [...completed];
            newCompleted[prev] = true;
            return newCompleted;
          });
          return nextPhase;
        } else {
          // Mark final phase as completed and navigate
          setShowCompleted(completed => {
            const newCompleted = [...completed];
            newCompleted[prev] = true;
            return newCompleted;
          });
          clearInterval(progressTimer);
          clearInterval(phaseTimer);
          setTimeout(() => navigate('/course-setup'), 500);
          return prev;
        }
      });
    }, phaseInterval);

    return () => {
      clearInterval(progressTimer);
      clearInterval(phaseTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-pearson-purple via-pearson-magenta to-pearson-lightpurple">
      {/* Floating Academic Icons */}
      {floatingIcons.map((Icon, index) => (
        <div
          key={index}
          className={`absolute animate-bounce opacity-20 text-white`}
          style={{
            left: `${10 + (index * 12)}%`,
            top: `${20 + (index % 3) * 20}%`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + (index % 2)}s`
          }}
        >
          <Icon size={24 + (index % 3) * 8} />
        </div>
      ))}

      {/* Neural Network Background Animation */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-lg w-full mx-4 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-nav-font mb-2 font-plus-jakarta">
            Creating Your Course
          </h1>
          <p className="text-gray-600 font-plus-jakarta">
            Our AI is working its magic...
          </p>
        </div>

        {/* Overall Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-3 mb-2" />
          <div className="text-sm text-gray-500 text-center font-plus-jakarta">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Current Phase Display */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {React.createElement(phases[currentPhase].icon, {
              size: 48,
              className: `text-secondary-cta animate-spin-slow`
            })}
          </div>
          <h2 className="text-xl font-semibold text-nav-font mb-2 font-plus-jakarta">
            {phases[currentPhase].title}
          </h2>
          <p className="text-gray-600 font-plus-jakarta">
            {phases[currentPhase].description}
          </p>
        </div>

        {/* Phase Progress List */}
        <div className="space-y-3">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                index === currentPhase
                  ? 'bg-accent-cyan/10 border border-accent-cyan/30'
                  : index < currentPhase
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                showCompleted[index]
                  ? 'bg-green-500'
                  : index === currentPhase
                  ? 'bg-accent-cyan animate-pulse'
                  : 'bg-gray-300'
              }`}>
                {showCompleted[index] ? (
                  <Check size={14} className="text-white" />
                ) : index === currentPhase ? (
                  <div className="w-2 h-2 bg-white rounded-full" />
                ) : (
                  <div className="w-2 h-2 bg-gray-500 rounded-full" />
                )}
              </div>
              <div className="flex items-center gap-2">
                {React.createElement(phase.icon, {
                  size: 16,
                  className: `${
                    showCompleted[index]
                      ? 'text-green-500'
                      : index === currentPhase
                      ? 'text-accent-cyan'
                      : 'text-gray-400'
                  }`
                })}
                <span className={`text-sm font-plus-jakarta ${
                  showCompleted[index]
                    ? 'text-green-700 font-medium'
                    : index === currentPhase
                    ? 'text-nav-font font-medium'
                    : 'text-gray-500'
                }`}>
                  {phase.title.replace('...', '')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pulse Animation Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-secondary-cta rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreationLoading;
