import React, { useState, useRef, useEffect } from 'react';

type OptionType = {
  value: string;
  label: string;
};

interface CustomDropdownProps {
  options: OptionType[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value) || options[0];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Handle touch events for mobile
    const handleTouchOutside = (event: TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchend', handleTouchOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchend', handleTouchOutside);
    };
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        onTouchEnd={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
        className="flex items-center justify-between w-full min-w-[120px] border border-[#E4E7EC] hover:border-[#6B047C] focus:border-[#6B047C] active:border-[#6B047C] focus:outline-none rounded-lg py-2 px-3 pr-8 text-sm font-normal text-[#667085] bg-white max-md:min-w-[80px] max-md:text-[9px] max-md:py-0.5 max-md:px-1.5 max-md:pr-4 cursor-pointer touch-manipulation"
      >
        <span className="truncate">{selectedOption.label}</span>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none max-md:right-1">
          <img src="/mynaui_filter.svg" alt="Filter" className="w-4 h-4 max-md:w-2.5 max-md:h-2.5" />
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-[140px] max-md:w-[90px] bg-white border border-[#E4E7EC] rounded-md shadow-lg max-md:right-0">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleOptionClick(option.value);
              }}
              className={`px-4 py-2.5 cursor-pointer text-sm max-md:text-[9px] max-md:py-1.5 max-md:px-1.5 ${
                option.value === value
                  ? 'bg-[#F5EDFC] text-[#6B047C]'
                  : 'text-[#667085] hover:bg-[#F5EDFC] hover:text-[#6B047C] active:bg-[#F5EDFC] active:text-[#6B047C]'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
