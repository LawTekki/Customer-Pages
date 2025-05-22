import React, { useEffect } from "react";
import "../../animations.css";

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
};

export const DisputeTabs = ({ activeTab, onTabChange, tabCounts }) => {
  const isMobile = useIsMobile();
  const tabs = [
    { id: "pending", label: "Pending", count: tabCounts.pending },
    { id: "cleared", label: "Cleared", count: tabCounts.cleared },
  ];

  return (
    <div className="w-full max-md:px-4 max-md:pt-2 fade-in mt-6 mb-4" style={{ overflow: 'hidden' }}>
      <div className="inline-flex border-b border-[#E6E6E6] slide-in" style={{ overflow: 'hidden' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-3 py-2 text-sm font-medium relative hover-scale transition-all duration-200 ${
              activeTab === tab.id
                ? "text-[#6B047C] border-b-2 border-[#6B047C]"
                : "text-[#808080] hover:text-[#6B047C]"
            } max-md:px-2 max-md:py-1 max-md:text-xs fade-in`}
            style={{ overflow: 'hidden' }}
          >
            {tab.label} <span className="ml-2 bg-[#F2F2F2] px-2 py-0.5 rounded-[4px] text-xs hover-scale">{tab.count}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
