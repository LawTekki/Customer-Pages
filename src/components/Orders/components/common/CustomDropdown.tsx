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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-1 border border-[#E6E6E6] rounded px-3 py-1.5 text-sm text-[#808080] cursor-pointer hover:border-[#6B047C]"
      >
        <span>{selectedOption.label}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-[140px] max-md:w-[120px] bg-white border border-[#E6E6E6] rounded-md shadow-lg right-0">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`px-4 py-2 cursor-pointer text-sm ${
                option.value === value
                  ? 'bg-[#F9F5FA] text-[#6B047C]'
                  : 'text-[#808080] hover:bg-[#F9F5FA] hover:text-[#6B047C]'
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
