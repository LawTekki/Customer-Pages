import React, { useState, useEffect } from "react";
import { FilterIcon } from "../ui/icons/FilterIcon";
import { ProductFilters } from './ProductFilters';

interface ProductTabsProps {
  onTalentClick: () => void;
  onViewChange?: (view: string) => void;
}

const tabs = ["Product", "Event", "Talent"];

export const ProductTabs: React.FC<ProductTabsProps> = ({ onTalentClick, onViewChange }) => {
  const [activeTab, setActiveTab] = useState("Product");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === "Talent") {
      onTalentClick();
    } else if (tab === "Event") {
      onViewChange?.("events");
    } else {
      onViewChange?.("products");
    }
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="relative">
      <div className="flex flex-col w-full">
        {/* Only show tabs horizontally on desktop */}
        <div className="hidden md:flex items-center w-full gap-12 overflow-x-auto scrollbar-hide text-base md:text-2xl text-[#808080] font-medium md:font-semibold tracking-[-0.4px] leading-[1.3] mb-2 md:mb-3 whitespace-nowrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`whitespace-nowrap px-1.5 md:px-2.5 py-1.5 md:py-2 text-sm md:text-xl ${
                activeTab === tab
                  ? "border-b-[color:var(--Foundation-Purple-Normal,#6B047C)] text-[#6B047C] border-b-2 border-solid md:font-bold"
                  : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className="hidden md:block border-t border-[#E6E6E6] w-full mt-[-12px] mb-2" />
        {/* Enhanced filter button for mobile */}
        <div className="flex md:hidden items-center mb-2">
          <button
            onClick={toggleFilter}
            className="flex-shrink-0 w-7 h-7 md:w-9 md:h-9 p-0 md:p-1.5 bg-[#f7eafe] border border-[#e4d0f7] shadow-lg hover:bg-[#e9d6fa] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B047C] flex items-center justify-center"
            aria-label="Toggle filters"
          >
            <FilterIcon className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#6B047C]" />
          </button>
          {/* REMOVE: ProductControlsMobileSearch search box duplication */}
        </div>
        {/* Filter overlay for mobile */}
        {isFilterOpen && (
          <MobileFilterOverlay
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onTabClick={handleTabClick}
            onClose={() => setIsFilterOpen(false)}
            ProductFilters={<ProductFilters activeTab={activeTab} onViewChange={onViewChange} />}
          />
        )}
        <hr className="border-none border-b border-[#E6E6E6] w-full mt-[-6px]" />
      </div>
    </div>
  );
};

const MobileFilterOverlay = ({ tabs, activeTab, setActiveTab, onTabClick, onClose, ProductFilters }) => {
  const overlayRef = React.useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-30">
      <div ref={overlayRef} className="bg-white rounded-lg shadow-2xl mt-4 w-[90vw] max-w-xs p-4 flex flex-col gap-3 animate-fade-in max-h-[80vh] overflow-y-auto">
        <div className="flex flex-col gap-1 mb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); onTabClick(tab); }}
              className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#F4EDF5] text-[#6B047C] font-bold border-l-4 border-[#6B047C]"
                  : "text-[#808080] hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          {ProductFilters}
        </div>
      </div>
    </div>
  );
};

// This component renders only the search box part of ProductControls for mobile use
const ProductControlsMobileSearch = () => (
  <div className="flex items-center gap-1 px-1 py-1 bg-white rounded-lg border border-[#F2F2F2] min-w-0" style={{ minWidth: '0' }}>
    <img
      src="https://placehold.co/400x300?text=ProductTab"
      alt="Search"
      className="aspect-[1] object-contain w-3 self-stretch shrink-0 my-auto"
    />
    <input
      type="text"
      placeholder="Search"
      className="bg-transparent border-none outline-none w-[72px] text-[#808080] text-xs"
    />
  </div>
);
