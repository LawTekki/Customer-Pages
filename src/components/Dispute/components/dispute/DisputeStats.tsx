
import { DisputeStats as DisputeStatsType } from "../../types/disputes";

interface DisputeStatsProps {
  stats: DisputeStatsType;
}

export const DisputeStatsDisplay = ({ stats }: DisputeStatsProps) => {
  return (
    <div className="flex border border-[#F2F2F2] rounded-lg shadow-sm max-md:flex-col max-md:border-0 max-md:gap-2 w-full max-w-full bg-white max-md:bg-transparent max-md:px-4 max-md:shadow-none">
      {/* Total Disputes */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
        <div className="flex items-center">
          <img src="/Frame 1000008082 (7).svg" alt="Total Disputes" className="w-10 h-10 mr-3" />
          <div>
            <div className="text-xl font-medium">{stats.totalDisputes}</div>
            <div className="text-sm text-gray-600">Total dispute</div>
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>
      {/* Pending Disputes */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
        <div className="flex items-center">
          <img src="/Frame 1000008082 (8).svg" alt="Pending Disputes" className="w-10 h-10 mr-3" />
          <div>
            <div className="text-xl font-medium">{stats.pendingDisputes}</div>
            <div className="text-sm text-gray-600">Pending dispute</div>
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-200 max-md:hidden h-16 self-center"></div>
      {/* Cleared Disputes */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
        <div className="flex items-center">
          <img src="/Frame 1000008082 (9).svg" alt="Cleared Disputes" className="w-10 h-10 mr-3" />
          <div>
            <div className="text-xl font-medium">{stats.clearedDisputes}</div>
            <div className="text-sm text-gray-600">Cleared disputes</div>
          </div>
        </div>
      </div>
      <div className="w-px bg-gray-200 max-md:hidden h-14 self-center mx-1"></div>
      {/* Lost Disputes */}
      <div className="flex items-center px-5 py-5 max-md:border max-md:border-gray-100 max-md:rounded-md max-md:bg-white flex-1">
        <div className="flex items-center">
          <img src="/Frame 1000008082 (10).svg" alt="Lost Disputes" className="w-10 h-10 mr-3" />
          <div>
            <div className="text-xl font-medium">{stats.lostDisputes}</div>
            <div className="text-sm text-gray-600">Lost disputes</div>
          </div>
        </div>
      </div>
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

  return <DisputeStatsDisplay stats={mockStats} />;
};
