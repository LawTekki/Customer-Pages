
import React from 'react';
import { useFilter } from '../../context/FilterContext';
import { CustomDropdown } from './CustomDropdown';

interface TabProps {
  title: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ title, count, active = false, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium relative max-md:px-1.5 max-md:py-1 max-md:text-xs min-w-[100px] max-md:min-w-0 ${
      active ? 'text-[#6B047C] border-b-2 border-[#6B047C] max-md:border-b max-md:border-[#6B047C]' : 'text-gray-600 max-md:border-b-0'
    }`}
  >
    <span className="max-md:inline max-md:text-[9px] whitespace-nowrap">{title}</span>
    <span className="ml-1 bg-[#F2F2F2] px-1.5 py-0.5 rounded-[4px] text-xs max-md:ml-0.5 max-md:text-[9px] max-md:px-1 max-md:py-0">{count}</span>
  </button>
);

interface EventsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const EventsTabs: React.FC<EventsTabsProps> = ({
  activeTab,
  setActiveTab
}) => {
  const { filterStatus, setFilterStatus } = useFilter();

  return (
    <div className="flex items-center justify-between w-full mt-4 max-md:flex-wrap max-md:gap-2">
      <div className="flex items-center border-b border-[#E6E6E6] overflow-x-auto whitespace-nowrap flex-nowrap max-md:w-full">
        <Tab
          title="Upcoming"
          count={124}
          active={activeTab === 'upcoming'}
          onClick={() => setActiveTab('upcoming')}
        />
        <Tab
          title="Pending"
          count={43}
          active={activeTab === 'pending'}
          onClick={() => setActiveTab('pending')}
        />
        <Tab
          title="Recurring"
          count={43}
          active={activeTab === 'recurring'}
          onClick={() => setActiveTab('recurring')}
        />
        <Tab
          title="Past"
          count={43}
          active={activeTab === 'past'}
          onClick={() => setActiveTab('past')}
        />
        <Tab
          title="Cancelled"
          count={43}
          active={activeTab === 'cancelled'}
          onClick={() => setActiveTab('cancelled')}
        />
      </div>

      <div className="flex items-center gap-1 ml-4 flex-shrink-0 max-md:ml-0 max-md:mt-2 max-md:w-full max-md:justify-between">
        <span className="text-[#98A2B3] text-sm font-normal max-md:text-xs whitespace-nowrap md:hidden">Filter Status</span>
        <span className="text-[#98A2B3] text-sm font-normal max-md:hidden whitespace-nowrap">Filter:</span>
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
  );
};
