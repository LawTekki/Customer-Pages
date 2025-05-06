
import React, { useState } from "react";

export const DisputeTabs = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const tabs = [
    { id: "pending", label: "Pending", count: 124 },
    { id: "cleared", label: "Cleared", count: 43 },
  ];

  return (
    <div className="w-full max-md:px-4 max-md:pt-2">
      <div className="inline-flex border-b border-[#E6E6E6]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-2 text-sm font-medium relative ${
              activeTab === tab.id
                ? "text-[#6B047C] border-b-2 border-[#6B047C]"
                : "text-[#808080]"
            } max-md:px-2 max-md:py-1 max-md:text-xs`}
          >
            {tab.label} <span className="ml-2 bg-[#F2F2F2] px-2 py-0.5 rounded-[4px] text-xs">{tab.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
