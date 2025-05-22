import React from 'react';
import { useFilter } from '../../context/FilterContext';
import { CustomDropdown } from './CustomDropdown';
import { useNavigate, useLocation } from 'react-router-dom';

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

interface EventsTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  events: Array<{ status: string }>;
}

export const EventsTabs: React.FC<EventsTabsProps> = ({
  activeTab,
  setActiveTab,
  events
}) => {
  const { filterStatus, setFilterStatus } = useFilter();
  const navigate = useNavigate();
  const location = useLocation();

  // Map tab keys to filter values and routes
  const tabToFilter = {
    upcoming: 'Ongoing',
    pending: 'Pending',
    recurring: 'Ongoing', // or whatever status you want
    past: 'Concluded',
    cancelled: 'Cancelled'
  };

  const tabToRoute = {
    upcoming: '/events/upcoming',
    pending: '/events/pending',
    recurring: '/events/recurring',
    past: '/events/past',
    cancelled: '/events/cancelled'
  };

  // Calculate counts dynamically
  const counts = {
    upcoming: events.filter(e => e.status === 'Ongoing').length,
    pending: events.filter(e => e.status === 'Pending').length,
    recurring: events.filter(e => e.status === 'Ongoing').length, // adjust if needed
    past: events.filter(e => e.status === 'Concluded').length,
    cancelled: events.filter(e => e.status === 'Cancelled').length
  };

  const tabs = [
    { key: 'upcoming', title: 'Upcoming', count: counts.upcoming },
    { key: 'pending', title: 'Pending', count: counts.pending },
    { key: 'recurring', title: 'Recurring', count: counts.recurring },
    { key: 'past', title: 'Past', count: counts.past },
    { key: 'cancelled', title: 'Cancelled', count: counts.cancelled }
  ];

  return (
    <div className="flex items-center justify-between w-full mt-4 max-md:flex-wrap max-md:gap-2 slide-in" style={{ animationDelay: '0.1s', overflow: 'hidden' }}>
      <div className="flex items-center border-b border-[#E6E6E6] whitespace-nowrap flex-nowrap max-md:w-full" style={{ overflow: 'hidden' }}>
        {tabs.map(tab => (
          <Tab
            key={tab.key}
            title={tab.title}
            count={tab.count}
            active={activeTab === tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setFilterStatus(tabToFilter[tab.key]);
              if (location.pathname !== tabToRoute[tab.key]) {
                navigate(tabToRoute[tab.key]);
              }
            }}
        />
        ))}
      </div>

      <div className="flex items-center gap-1 ml-4 flex-shrink-0 max-md:ml-0 max-md:mt-2 max-md:w-full max-md:justify-between fade-in" style={{ animationDelay: '0.2s' }}>
        <span className="text-[#98A2B3] text-sm font-normal max-md:text-xs whitespace-nowrap md:hidden slide-in" style={{ animationDelay: '0.25s' }}>Filter Status</span>
        <span className="text-[#98A2B3] text-sm font-normal max-md:hidden whitespace-nowrap slide-in" style={{ animationDelay: '0.25s' }}>Filter:</span>
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
