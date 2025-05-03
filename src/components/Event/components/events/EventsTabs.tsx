
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const EventsTabs = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [activeFilter, setActiveFilter] = useState("ongoing");
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    // Add any additional tab filtering logic here
  };

  const tabs = [
    { id: "upcoming", label: "Upcoming", count: 124 },
    { id: "pending", label: "Pending", count: 43 },
    { id: "recurring", label: "Recurring", count: 43 },
    { id: "past", label: "Past", count: 43 },
    { id: "cancelled", label: "Cancelled", count: 43 },
  ];

  return (
    <div className="mt-10 flex justify-between items-center">
      <div className="flex border-b border-[#E6E6E6] max-w-[70%]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 text-sm font-medium relative ${
              activeTab === tab.id
                ? "text-[#6B047C] border-b-2 border-[#6B047C]"
                : "text-[#808080]"
            }`}
          >
            {tab.label} <span className="ml-2 bg-[#F2F2F2] px-2 py-0.5 rounded-[4px] text-xs">{tab.count}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center whitespace-nowrap">
        <span className="text-sm text-[#808080] mr-2">Filter status:</span>
        <div className="relative inline-block">
          <select 
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="appearance-none bg-white border border-[#E6E6E6] rounded-md px-3 py-1.5 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-[#6B047C] cursor-pointer"
          >
            <option value="ongoing">Ongoing</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
            <option value="cancelled">Cancelled</option>
            <option value="all">All</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
