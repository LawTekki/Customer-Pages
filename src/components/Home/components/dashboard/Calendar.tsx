import React, { useState, useEffect } from "react";
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay, parseISO } from 'date-fns';
import { BookActivityModal, ActivityData } from "./BookActivityModal";
import { Clock } from "lucide-react";

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// Activity type colors
const activityTypeColors = {
  meeting: "#6B047C", // Purple
  event: "#4CAF50",   // Green
  task: "#FFA500",    // Orange
  reminder: "#2196F3" // Blue
};

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activities, setActivities] = useState<ActivityData[]>([]);

  // Load activities from localStorage on component mount
  useEffect(() => {
    const savedActivities = localStorage.getItem('calendarActivities');
    if (savedActivities) {
      try {
        // Parse the dates back to Date objects
        const parsedActivities = JSON.parse(savedActivities).map((activity: any) => ({
          ...activity,
          date: parseISO(activity.date)
        }));
        setActivities(parsedActivities);
      } catch (error) {
        console.error("Failed to parse saved activities:", error);
      }
    }
  }, []);

  // Save activities to localStorage whenever they change
  useEffect(() => {
    if (activities.length > 0) {
      // Convert Date objects to ISO strings for storage
      const activitiesToSave = activities.map(activity => ({
        ...activity,
        date: activity.date.toISOString()
      }));
      localStorage.setItem('calendarActivities', JSON.stringify(activitiesToSave));
    }
  }, [activities]);

  // Generate dates for the current week
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 });
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startOfCurrentWeek, i);
    return {
      date,
      dayNumber: format(date, 'dd'),
      isCurrentMonth: true
    };
  });

  // Navigate to previous week
  const goToPreviousWeek = () => {
    setCurrentDate(prevDate => subWeeks(prevDate, 1));
  };

  // Navigate to next week
  const goToNextWeek = () => {
    setCurrentDate(prevDate => addWeeks(prevDate, 1));
  };

  // Select a date
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  // Handle booking a new activity
  const handleBookActivity = (activityData: ActivityData) => {
    setActivities(prev => [...prev, activityData]);
  };

  // Get activities for the selected date
  const getActivitiesForDate = (date: Date) => {
    return activities.filter(activity => isSameDay(activity.date, date));
  };

  // Get activities for the current week
  const getActivitiesForCurrentWeek = () => {
    return activities.filter(activity =>
      dates.some(dateObj => isSameDay(activity.date, dateObj.date))
    );
  };

  // Check if a date has activities
  const hasActivities = (date: Date) => {
    return activities.some(activity => isSameDay(activity.date, date));
  };

  // Format the date range for display
  const dateRangeText = `${format(dates[0].date, 'dd MMM')} - ${format(dates[6].date, 'dd MMM')}`;

  // Get activities for the current week
  const currentWeekActivities = getActivitiesForCurrentWeek();

  // Get activities for the selected date
  const selectedDateActivities = getActivitiesForDate(selectedDate);

  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border hover-border fade-in" style={{ borderColor: '#F2F2F2', animationDelay: '0.4s' }}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors hover-scale click-shrink p-2 rounded-full"
            onClick={goToPreviousWeek}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-bounce">
              <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="font-semibold text-gray-900 hover-scale">{dateRangeText}</div>
          <button
            className="text-gray-500 hover:text-gray-700 transition-colors hover-scale click-shrink p-2 rounded-full"
            onClick={goToNextWeek}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-bounce">
              <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {weekDays.map((day, index) => (
            <div
              key={day}
              className="text-xs font-medium text-gray-900 hover-scale fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {dates.map((dateObj, index) => {
            const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(dateObj.date, 'yyyy-MM-dd');
            const isToday = format(new Date(), 'yyyy-MM-dd') === format(dateObj.date, 'yyyy-MM-dd');
            const hasActivity = hasActivities(dateObj.date);

            return (
              <div
                key={dateObj.dayNumber}
                onClick={() => handleDateSelect(dateObj.date)}
                className={`relative text-sm py-1 cursor-pointer hover-scale click-shrink transition-all duration-200 fade-in ${
                  isSelected
                    ? "bg-[#6B047C] text-white rounded-md shadow-md"
                    : isToday
                      ? "text-[#6B047C] font-semibold"
                      : "text-gray-500 hover:bg-purple-50"
                }`}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                {dateObj.dayNumber}
                {hasActivity && !isSelected && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#6B047C] rounded-full status-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        <hr className="border-t border-gray-200 w-full mb-4" />

        {currentWeekActivities.length > 0 ? (
          <div className="mb-4 max-h-32 overflow-y-auto">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Activities this week:</h4>
            <div className="space-y-2">
              {selectedDateActivities.length > 0 ? (
                selectedDateActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start p-2 rounded-md"
                    style={{ backgroundColor: `${activityTypeColors[activity.activityType as keyof typeof activityTypeColors]}10` }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0"
                      style={{ backgroundColor: activityTypeColors[activity.activityType as keyof typeof activityTypeColors] }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{activity.startTime} - {activity.endTime}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="#F5F5F5"/>
                      <path d="M12 8V12L15 15" stroke="#6B047C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-500">
                    No activities on {format(selectedDate, 'MMMM dd, yyyy')}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#F5F5F5"/>
                <path d="M12 8V12L15 15" stroke="#6B047C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-sm text-gray-500">
              You have no events or activity this week
            </p>
          </div>
        )}

        <button
          className="text-[#6B047C] text-sm font-medium hover-scale click-bounce button-pulse fade-in"
          onClick={() => setIsModalOpen(true)}
          style={{ animationDelay: '0.5s' }}
        >
          <span className="border-b-2 border-[#6B047C]">Book an activity</span>
        </button>
      </div>

      <BookActivityModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookActivity={handleBookActivity}
        selectedDate={selectedDate}
      />
    </div>
  );
};
