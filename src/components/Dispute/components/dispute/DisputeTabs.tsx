
import React, { useState } from "react";

export const DisputeTabs = () => {
  const [activeTab, setActiveTab] = useState("pending");

  const tabs = [
    { id: "pending", label: "Pending", count: 124 },
    { id: "cleared", label: "Cleared", count: 43 },
  ];

  return (
    <div className="mt-10 border-b border-[#E6E6E6] w-full flex max-md:overflow-x-auto max-md:px-2 max-md:ml-[12px]">
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
  );
};
