import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
}) => {
  const [open, setOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setOpen(true);
        setHighlightIndex((prev) => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setOpen(true);
        setHighlightIndex((prev) => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
        if (open && highlightIndex >= 0) {
          e.preventDefault();
          onChange(options[highlightIndex].value);
          setOpen(false);
        }
        break;
      case 'Escape':
        setOpen(false);
        break;
    }
  };

  return (
    <div className="w-full" ref={containerRef}>
      <div className="relative">
        <button
          ref={buttonRef}
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="select-options"
          aria-labelledby="select-label"
          className={`w-full bg-white text-sm text-left text-[#333] max-md:text-xs rounded-lg border border-[#E5E5E5] px-4 py-3 max-md:px-2 max-md:py-2 pr-10 focus:border-[#6B047C] focus:ring-2 focus:ring-[#F3EAF6] hover:bg-[#FAF9FB] transition outline-none flex items-center relative`}
          onClick={() => setOpen(prev => !prev)}
          onKeyDown={handleKeyDown}
        >
          <span className={`${!value ? 'text-[#CCCCCC]' : ''}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span className={`absolute right-4 top-1/2 -translate-y-1/2 transform transition-transform ${open ? 'rotate-180' : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9.5C18 9.5 13.5811 15.5 12 15.5C10.4188 15.5 6 9.5 6 9.5" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </button>

        {open && (
          <div
            id="select-options"
            role="listbox"
            className="absolute z-50 mt-2 w-full bg-white rounded-lg shadow-lg border border-[#E5E5E5] overflow-auto max-h-60 animate-fade-in"
          >
            {options.length === 0 ? (
              <div className="px-4 py-2 text-sm text-gray-400">No options available</div>
            ) : (
              options.map((opt, index) => {
                const isSelected = opt.value === value;
                const isHighlighted = index === highlightIndex;
                return (
                  <div
                    key={opt.value}
                    role="option"
                    aria-selected={isSelected}
                    className={`px-4 py-2 text-sm max-md:text-xs cursor-pointer select-none flex items-center
                      ${isSelected ? 'bg-[#F3EAF6] text-[#6B047C]' : 'text-[#6B047C] hover:bg-[#F3EAF6]'}
                      ${isHighlighted ? 'bg-[#F3EAF6]' : ''}
                    `}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                  >
                    {opt.label}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};
 