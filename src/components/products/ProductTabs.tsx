import React, { useState } from "react";

interface ProductTabsProps {
  onTalentClick: () => void;
  onViewChange?: (view: string) => void;
}

const tabs = ["Product", "Event", "Talent"];

export const ProductTabs: React.FC<ProductTabsProps> = ({ onTalentClick, onViewChange }) => {
  const [activeTab, setActiveTab] = useState("Product");

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

  return (
    <div className="flex items-center min-w-60 text-xl text-[#808080] font-medium tracking-[-0.4px] leading-[1.3] mb-6">
      <div className="flex items-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-2.5 py-2 ${
              activeTab === tab
                ? "border-b-[color:var(--Foundation-Purple-Normal,#6B047C)] text-[#6B047C] border-b-2 border-solid font-bold"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="border bg-[#F2F2F2] min-h-px w-full border-[rgba(242,242,242,1)] border-solid" />
    </div>
  );
};
