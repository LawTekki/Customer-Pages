import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

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
  const [menuPos, setMenuPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Find or fallback to first
  const selected = options.find(opt => opt.value === value) || options[0];

  const toggle = () => setIsOpen(o => !o);

  const selectOption = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  // Position menu under the button whenever it opens
  useLayoutEffect(() => {
    if (isOpen && buttonRef.current) {
      const r = buttonRef.current.getBoundingClientRect();
      setMenuPos({
        top: r.bottom + window.scrollY + 4,
        left: r.left + window.scrollX,
      });
    }
  }, [isOpen]);

  // Close on outside click/touch
  useEffect(() => {
    const onClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (
        isOpen &&
        !buttonRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', onClickOutside, true);
    document.addEventListener('touchstart', onClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', onClickOutside, true);
      document.removeEventListener('touchstart', onClickOutside, true);
    };
  }, [isOpen]);

  // The dropdown menu portal
  const menuPortal: ReactNode = isOpen
    ? createPortal(
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: menuPos.top,
            left: menuPos.left,
            width: buttonRef.current?.offsetWidth ?? 140,
            zIndex: 9999,
            // Firefox/Edge scrollbar hide
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            minWidth: '120px',
            maxWidth: '180px',
          }}
          className="bg-white border border-[#E4E7EC] rounded-md shadow-lg overflow-hidden component-container fade-in max-md:min-w-[60px] max-md:max-w-[110px]"
        >
          <style>
            {`
              /* Hide scrollbars in WebKit */
              div::-webkit-scrollbar { display: none; }
            `}
          </style>

          {options.map(opt => (
            <div
              key={opt.value}
              onClick={() => selectOption(opt.value)}
              onTouchEnd={e => {
                e.preventDefault();
                selectOption(opt.value);
              }}
              className={`
                block w-full text-left px-4 py-2.5 text-sm max-md:text-[9px]
                max-md:py-1.5 max-md:px-1.5 cursor-pointer
                transition-colors duration-200
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
        onClick={toggle}
        onTouchEnd={e => {
          e.preventDefault();
          toggle();
        }}
        className={`
          relative flex items-center justify-between
          w-full max-w-[180px] min-w-[120px]
          border border-[#E4E7EC] rounded-lg
          py-2 px-3 pr-8
          text-sm font-normal text-[#667085]
          bg-white
          hover:border-[#6B047C] focus:border-[#6B047C] active:border-[#6B047C]
          focus:outline-none
          max-md:max-w-[110px] max-md:min-w-[60px] max-md:text-[9px]
          max-md:py-0.5 max-md:px-1 max-md:pr-2
          cursor-pointer touch-manipulation
          transition-colors duration-200
          ${className}
        `}
        style={{ transition: 'border-color 0.2s ease' }}
      >
        <span className="truncate">{selected.label}</span>
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none max-md:right-1">
          <img
            src="/mynaui_filter.svg"
            alt="Filter"
            className="w-4 h-4 max-md:w-2.5 max-md:h-2.5 icon-spin"
          />
        </div>
      </button>

      {menuPortal}
    </>
  );
};