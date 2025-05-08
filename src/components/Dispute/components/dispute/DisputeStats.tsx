import { DisputeStats as DisputeStatsType } from "../../types/disputes";
import { useState, useEffect } from "react";
import "../../animations.css";

interface DisputeStatsProps {
  stats: DisputeStatsType;
}

// Custom hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

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

export const DisputeStatsDisplay = ({ stats }: DisputeStatsProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex border border-[#F2F2F2] rounded-lg shadow-sm max-md:flex-col max-md:border-0 max-md:gap-2 w-full max-w-full bg-white max-md:bg-transparent max-md:px-4 max-md:shadow-none fade-in" style={{ overflow: 'hidden' }}>
      {/* Total Disputes */}
      <button type="button" role="button" tabIndex={0}
        className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300 active:bg-gray-100 focus:outline-none"
        style={{ animationDelay: '0.1s' }}
        aria-label="Total Disputes"
      >
        <div className="flex items-center">
          <img src="/Frame 1000008082 (7).svg" alt="Total Disputes" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">{stats.totalDisputes}</div>
            <div className="text-sm text-gray-600">Total dispute</div>
          </div>
        </div>
      </button>
      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>
      {/* Pending Disputes */}
      <button type="button" role="button" tabIndex={0}
        className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300 active:bg-gray-100 focus:outline-none"
        style={{ animationDelay: '0.2s' }}
        aria-label="Pending Disputes"
      >
        <div className="flex items-center">
          <img src="/Frame 1000008082 (8).svg" alt="Pending Disputes" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">{stats.pendingDisputes}</div>
            <div className="text-sm text-gray-600">Pending dispute</div>
          </div>
        </div>
      </button>
      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>
      {/* Cleared Disputes */}
      <button type="button" role="button" tabIndex={0}
        className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300 active:bg-gray-100 focus:outline-none"
        style={{ animationDelay: '0.3s' }}
        aria-label="Cleared Disputes"
      >
        <div className="flex items-center">
          <img src="/Frame 1000008082 (9).svg" alt="Cleared Disputes" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">{stats.clearedDisputes}</div>
            <div className="text-sm text-gray-600">Cleared disputes</div>
          </div>
        </div>
      </button>
      <div className="w-px bg-gray-200 max-md:hidden h-14 self-center mx-1"></div>
      {/* Lost Disputes */}
      <button type="button" role="button" tabIndex={0}
        className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1 hover-scale click-shrink transition-all duration-300 active:bg-gray-100 focus:outline-none"
        style={{ animationDelay: '0.4s' }}
        aria-label="Lost Disputes"
      >
        <div className="flex items-center">
          <img src="/Frame 1000008082 (10).svg" alt="Lost Disputes" className="w-10 h-10 mr-3 icon-bounce" />
          <div>
            <div className="text-xl font-medium">{stats.lostDisputes}</div>
            <div className="text-sm text-gray-600">Lost disputes</div>
          </div>
        </div>
      </button>
    </div>
  );
};

// Default export for backward compatibility
export const DisputeStats = () => {
  const mockStats: DisputeStatsType = {
    totalDisputes: 2,
    pendingDisputes: 56,
    clearedDisputes: 56,
    lostDisputes: 56
  };

  return (
    <div className="fade-in" style={{ animationDelay: '0.1s', overflow: 'hidden' }}>
      <DisputeStatsDisplay stats={mockStats} />
    </div>
  );
};
