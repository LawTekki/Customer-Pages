import React, { useState, useEffect } from "react";

interface ProductControlsProps {
  onViewModeChange: (mode: "grid" | "list") => void;
}

export const ProductControls: React.FC<ProductControlsProps> = ({ onViewModeChange }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  // On mobile, always set grid view
  useEffect(() => {
    if (isMobile && viewMode !== 'grid') {
      setViewMode('grid');
      onViewModeChange('grid');
    }
  }, [isMobile]);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    onViewModeChange(mode);
  };

  return (
    <div className="self-stretch flex min-w-0 items-center gap-1 md:gap-4 mt-2 max-md:max-w-full text-xs md:text-sm">
      {/* Mobile search box - only show on mobile, right next to filter button and slightly raised */}
      <div className="flex sm:hidden items-center gap-1 px-2 py-1 bg-white rounded-lg border border-[#F2F2F2] max-w-[130px] w-full order-1 -mt-1" style={{alignSelf: 'flex-start', position: 'relative', left: '-25px'}}>
        <img
          src="https://placehold.co/400x300?text=ProductControl1"
          alt="Search"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none w-full text-[#808080] text-xs"
        />
      </div>
      {/* Only show the search box on desktop and tablet, hide on mobile */}
      <div className="hidden sm:flex items-center gap-1 md:gap-2 px-1 md:px-3 py-1 md:py-2.5 bg-white rounded-lg border border-[#F2F2F2] min-w-0 order-1 md:order-none" style={{ minWidth: '0' }}>
        <img
          src="https://placehold.co/400x300?text=ProductControl2"
          alt="Search"
          className="aspect-[1] object-contain w-3 md:w-4 self-stretch shrink-0 my-auto"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none w-[60px] md:w-full text-[#808080] text-xs md:text-sm"
        />
      </div>
      {/* Add white space between search and sort by for mobile only */}
      <div className="hidden max-sm:block w-1"></div>
      <div className="self-stretch flex items-center gap-1 md:gap-2 text-xs font-medium tracking-[-0.24px] leading-[1.3] my-auto order-2 md:order-none max-sm:relative max-sm:-top-1">
        <span className="text-[#808080] mr-1 text-[11px] md:text-xs">Sort by</span>
        <select
          className="items-center border border-[color:var(--Grey-1,#F2F2F2)] bg-neutral-50 self-stretch flex gap-2.5 text-[#808080] w-[90px] md:w-[114px] my-auto px-1 py-1 rounded-lg border-solid text-[11px] md:text-sm font-normal focus:outline-none focus:ring-2 focus:ring-[#6B047C] transition-all duration-150"
          style={{ minWidth: '90px', maxWidth: '120px', fontWeight: 400 }}
        >
          <option value="recent">Most recent</option>
          <option value="popular">Most popular</option>
          <option value="price">Price</option>
        </select>
      </div>
      {/* Only show grid/list view buttons on desktop/tablet */}
      <div className="self-stretch items-center gap-1 md:gap-2 my-auto order-3 md:order-none max-sm:relative max-sm:-top-1 hidden sm:flex">
        <button 
          aria-label="Grid view"
          onClick={() => handleViewModeChange("grid")}
          className={`p-0.5 md:p-2 rounded-lg ${viewMode === "grid" ? "bg-[#F0E6F2]" : "hover:bg-gray-50"}`}
        >
          <img
            src="https://placehold.co/400x300?text=ProductControl3"
            alt="Grid view"
            className="aspect-[1] object-contain w-3 md:w-6 self-stretch shrink-0 my-auto"
          />
        </button>
        <button 
          aria-label="List view"
          onClick={() => handleViewModeChange("list")}
          className={`p-0.5 md:p-2 rounded-lg ${viewMode === "list" ? "bg-[#F0E6F2]" : "hover:bg-gray-50"}`}
        >
          <img
            src="/material-symbols_list-alt.svg"
            alt="List view"
            className="aspect-[1] object-contain w-3 md:w-6 self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </div>
  );
};
