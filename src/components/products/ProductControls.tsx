import React, { useState } from "react";

interface ProductControlsProps {
  onViewModeChange: (mode: "grid" | "list") => void;
}

export const ProductControls: React.FC<ProductControlsProps> = ({ onViewModeChange }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    onViewModeChange(mode);
  };

  return (
    <div className="self-stretch flex min-w-60 items-center gap-4 my-auto max-md:max-w-full">
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-lg border border-[#F2F2F2]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e5a7562923566000ba51595becbab71f8db731cf?placeholderIfAbsent=true"
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
          onClick={() => handleViewModeChange("grid")}
          className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-[#F0E6F2]" : "hover:bg-gray-50"}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/88545861428f37631c75d32c0f315a17f98d5392?placeholderIfAbsent=true"
            alt="Grid view"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
        </button>
        <button 
          aria-label="List view"
          onClick={() => handleViewModeChange("list")}
          className={`p-2 rounded-lg ${viewMode === "list" ? "bg-[#F0E6F2]" : "hover:bg-gray-50"}`}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/f66dc0bfb8cd0d02cce51facba60b176b29f4268?placeholderIfAbsent=true"
            alt="List view"
            className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          />
        </button>
      </div>
    </div>
  );
};
