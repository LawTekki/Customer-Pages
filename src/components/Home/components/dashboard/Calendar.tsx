import React, { useState } from "react";
import { format, addDays, subDays, startOfWeek, addWeeks, subWeeks } from 'date-fns';

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
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
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  
  // Format the date range for display
  const dateRangeText = `${format(dates[0].date, 'dd MMM')} - ${format(dates[6].date, 'dd MMM')}`;
  return (
    <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
      <div className="flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <button 
            className="text-gray-500 hover:text-gray-700 transition-colors"
            onClick={goToPreviousWeek}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1L1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="font-semibold text-gray-900">{dateRangeText}</div>
          <button 
            className="text-gray-500 hover:text-gray-700 transition-colors"
            onClick={goToNextWeek}
          >
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L5 5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-xs font-medium text-gray-900">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-4">
          {dates.map((dateObj) => {
            const isSelected = format(selectedDate, 'yyyy-MM-dd') === format(dateObj.date, 'yyyy-MM-dd');
            const isToday = format(new Date(), 'yyyy-MM-dd') === format(dateObj.date, 'yyyy-MM-dd');
            
            return (
              <div
                key={dateObj.dayNumber}
                onClick={() => handleDateSelect(dateObj.date)}
                className={`text-sm py-1 cursor-pointer hover:bg-purple-50 transition-colors ${
                  isSelected
                    ? "bg-[#6B047C] text-white rounded-md"
                    : isToday
                      ? "text-[#6B047C] font-semibold"
                      : "text-gray-500"
                }`}
              >
                {dateObj.dayNumber}
              </div>
            );
          })}
        </div>

        <hr className="border-t border-gray-200 w-full mb-4" />

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
        
        <button className="text-[#6B047C] text-sm font-medium hover:underline">
          Book an activity
        </button>
      </div>
    </div>
  );
};
