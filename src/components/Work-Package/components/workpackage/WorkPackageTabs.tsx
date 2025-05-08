import React from 'react';
import { useFilter } from '../../context/FilterContext';
import { CustomDropdown } from './CustomDropdown';
import '../../animations.css';

interface TabProps {
  title: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ title, count, active = false, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium relative max-md:px-1.5 max-md:py-1 max-md:text-xs min-w-[100px] max-md:min-w-0 hover-scale transition-all duration-200 ${
      active ? 'text-[#6B047C] border-b-2 border-[#6B047C] max-md:border-b max-md:border-[#6B047C]' : 'text-gray-600 max-md:border-b-0 hover:text-[#6B047C]'
    }`}
    style={{ overflow: 'hidden' }}
  >
    <span className="max-md:inline max-md:text-[9px] whitespace-nowrap">{title}</span>
    <span className="ml-1 bg-[#F2F2F2] px-1.5 py-0.5 rounded-[4px] text-xs max-md:ml-0.5 max-md:text-[9px] max-md:px-1 max-md:py-0 hover-scale">{count}</span>
  </button>
);

interface WorkPackageTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const WorkPackageTabs: React.FC<WorkPackageTabsProps> = ({
  activeTab,
  setActiveTab
}) => {
  const { filterStatus, setFilterStatus } = useFilter();

  return (
    <div className="flex items-center justify-between w-full max-md:flex-wrap max-md:gap-2 fade-in" style={{ animationDelay: '0.3s', overflow: 'hidden' }}>
      <div className="flex items-center border-b border-[#E6E6E6] whitespace-nowrap flex-nowrap max-md:w-full slide-in" style={{ animationDelay: '0.4s', overflow: 'hidden' }}>
        <div className="flex">
          <Tab
            title="Posted work package"
            count={124}
            active={activeTab === 'posted'}
            onClick={() => setActiveTab('posted')}
          />
          <Tab
            title="Draft"
            count={43}
            active={activeTab === 'draft'}
            onClick={() => setActiveTab('draft')}
          />
        </div>
      </div>

      <div className="flex items-center gap-1 max-md:w-full max-md:justify-between max-md:px-2 max-md:mt-2 slide-in" style={{ animationDelay: '0.5s', overflow: 'hidden' }}>
        <span className="text-[#98A2B3] text-sm font-normal max-md:text-xs whitespace-nowrap md:hidden ml-2 max-md:ml-2 slide-in" style={{ animationDelay: '0.55s' }}>Filter Status</span>
        <span className="text-[#98A2B3] text-sm font-normal max-md:hidden whitespace-nowrap slide-in" style={{ animationDelay: '0.55s' }}>Filter:</span>
        <div className="flex-1 flex justify-end min-w-0">
          <CustomDropdown
            options={[
              { value: 'Any', label: 'Select All' },
              { value: 'Ongoing', label: 'Ongoing' },
              { value: 'Concluded', label: 'Concluded' },
              { value: 'Cancelled', label: 'Cancelled' },
              { value: 'Pending', label: 'Pending' }
            ]}
            value={filterStatus}
            onChange={(value) => setFilterStatus(value as any)}
          />
        </div>
      </div>
    </div>
  );
};
