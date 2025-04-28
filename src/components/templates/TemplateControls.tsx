import React from "react";

interface TemplateControlsProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

export const TemplateControls: React.FC<TemplateControlsProps> = ({
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className="self-stretch flex min-w-60 items-center gap-4 my-auto max-md:max-w-full">
      <div className="items-center border border-[color:var(--Grey-1,#F2F2F2)] bg-neutral-50 self-stretch flex gap-2.5 text-xs text-[#CCC] font-medium whitespace-nowrap tracking-[-0.24px] leading-[1.3] w-[217px] my-auto px-2 py-2.5 rounded-lg border-solid">
        <img
          src="https://placehold.co/400x300?text=TemplateControl1"
          alt="Search"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
        />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent border-none outline-none w-full text-[#808080]"
        />
      </div>
      <div className="self-stretch flex items-center gap-2 text-xs font-medium tracking-[-0.24px] leading-[1.3] my-auto">
        <label className="text-[#808080] self-stretch my-auto">Sort by:</label>
        <select className="items-center border border-[color:var(--Grey-1,#F2F2F2)] bg-neutral-50 self-stretch flex gap-2.5 text-[#CCC] w-[114px] my-auto px-2 py-2.5 rounded-lg border-solid">
          <option value="recent">Most recent</option>
          <option value="popular">Most popular</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="self-stretch flex items-center gap-2 my-auto">
        <button 
          aria-label="Grid view"
          onClick={() => onViewModeChange("grid")}
          className={viewMode === "grid" ? "opacity-100" : "opacity-50"}
        >
          <img
            src="https://placehold.co/400x300?text=TemplateControl2"
            alt="Grid view"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
        </button>
        <button 
          aria-label="List view"
          onClick={() => onViewModeChange("list")}
          className={viewMode === "list" ? "opacity-100" : "opacity-50"}
        >
          <img
            src="https://placehold.co/400x300?text=TemplateControl3"
            alt="List view"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </div>
  );
}; 