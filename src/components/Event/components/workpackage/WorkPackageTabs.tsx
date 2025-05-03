
import React from 'react';

interface TabProps {
  title: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
}

const Tab = ({ title, count, active = false, onClick }: TabProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium relative ${
      active ? 'text-[#6B047C] border-b-2 border-[#6B047C]' : 'text-gray-600'
    }`}
  >
    {title} <span className="ml-2 text-sm">{count}</span>
  </button>
);

export const WorkPackageTabs = () => {
  const [activeTab, setActiveTab] = React.useState('posted');

  return (
    <div className="border-b flex items-center justify-between">
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
      
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-sm">Filter status:</span>
        <div className="relative">
          <select className="border rounded-md py-1 px-3 pr-8 text-sm appearance-none bg-white">
            <option>Ongoing</option>
            <option>Concluded</option>
            <option>Cancelled</option>
            <option>Pending</option>
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
