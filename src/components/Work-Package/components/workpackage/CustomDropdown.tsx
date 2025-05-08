import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import '../../animations.css';

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
  const [menuStyles, setMenuStyles] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((opt) => opt.value === value) || options[0];

  // Toggle open/close
  const toggleDropdown = () => setIsOpen((o) => !o);

  // When selecting an option
  const handleOptionClick = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  // Position the menu just under the button
  useLayoutEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMenuStyles({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  // Close on outside click/touch, but only if click is neither
  // inside the button nor inside the menu.
  useEffect(() => {
    const onOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        isOpen &&
        !buttonRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    // Use capture so these fire before any onClick on menu items
    document.addEventListener('mousedown', onOutside, true);
    document.addEventListener('touchstart', onOutside, true);

    return () => {
      document.removeEventListener('mousedown', onOutside, true);
      document.removeEventListener('touchstart', onOutside, true);
    };
  }, [isOpen]);

  // The portal menu
  const MenuPortal: ReactNode = isOpen
    ? createPortal(
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: menuStyles.top,
            left: menuStyles.left,
            width: buttonRef.current?.offsetWidth ?? 140,
            // Hide scrollbars:
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none', // IE/Edge
            zIndex: 9999
          }}
          className="
            bg-white border border-[#E4E7EC] rounded-md shadow-lg
            overflow-visible
          "
        >
          <style>
            {`
              /* Hide native scrollbars in WebKit */
              div::-webkit-scrollbar { display: none; }
            `}
          </style>
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => handleOptionClick(opt.value)}
              onTouchEnd={(e) => {
                e.preventDefault();
                handleOptionClick(opt.value);
              }}
              className={`
                block w-full text-left
                px-4 py-2.5 text-sm max-md:text-[9px]
                max-md:py-1.5 max-md:px-1.5
                cursor-pointer
                ${
                  opt.value === value
                    ? 'bg-[#F5EDFC] text-[#6B047C]'
                    : 'text-[#667085] hover:bg-[#F5EDFC] hover:text-[#6B047C] active:bg-[#F5EDFC] active:text-[#6B047C]'
                }
              `}
            >
              {opt.label}
            </div>
          ))}
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleDropdown}
        onTouchEnd={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
        className={`
          relative flex items-center justify-between
          w-full min-w-[120px]
          border border-[#E4E7EC] rounded-lg
          py-2 px-3 pr-8
          text-sm font-normal text-[#667085]
          bg-white
          hover:border-[#6B047C] focus:border-[#6B047C] active:border-[#6B047C]
          focus:outline-none
          max-md:min-w-[80px] max-md:text-[9px]
          max-md:py-0.5 max-md:px-1.5 max-md:pr-4
          cursor-pointer touch-manipulation
          transition-all duration-300
          ${className}
        `}
        style={{ overflow: 'hidden' }}
      >
        <span className="truncate">{selectedOption.label}</span>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none max-md:right-1">
          <img
            src="/mynaui_filter.svg"
            alt="Filter"
            className="w-4 h-4 max-md:w-2.5 max-md:h-2.5"
          />
        </div>
      </button>

      {MenuPortal}
    </>
  );
};
