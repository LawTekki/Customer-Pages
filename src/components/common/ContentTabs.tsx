import React from "react";

type ContentType = "software" | "courses" | "events" | "talent";

interface ContentTabsProps {
  activeTab: ContentType;
  onTabChange: (tab: ContentType) => void;
}

export const ContentTabs: React.FC<ContentTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-4 mb-8">
      <button
        onClick={() => onTabChange("software")}
        className={`px-4 py-2 text-sm font-medium rounded-none ${
          activeTab === "software"
            ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
            : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
        }`}
      >
        Software
      </button>
      <button
        onClick={() => onTabChange("courses")}
        className={`px-4 py-2 text-sm font-medium rounded-none ${
          activeTab === "courses"
            ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
            : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
        }`}
      >
        Courses
      </button>
      <button
        onClick={() => onTabChange("events")}
        className={`px-4 py-2 text-sm font-medium rounded-none ${
          activeTab === "events"
            ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
            : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
        }`}
      >
        Events
      </button>
      <button
        onClick={() => onTabChange("talent")}
        className={`px-4 py-2 text-sm font-medium rounded-none ${
          activeTab === "talent"
            ? "bg-[#F0E6F2] text-[#6B047C] border-l-2 border-[#6B047C]"
            : "bg-white text-[#1A011E] hover:bg-[#F0E6F2] hover:border-l-2 hover:border-[#6B047C]"
        }`}
      >
        Talent
      </button>
    </div>
  );
}; 