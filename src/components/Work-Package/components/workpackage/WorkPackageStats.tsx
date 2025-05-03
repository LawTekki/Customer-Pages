
import React from 'react';

interface StatItemProps {
  icon: string;
  count: string | number;
  label: string;
  textColor?: string;
}

const StatItem = ({ icon, count, label, textColor = "text-gray-700" }: StatItemProps) => (
  <div className="flex items-center gap-3">
    <div className="border rounded-lg p-2">
      <img src={icon} alt={label} className="w-6 h-6" />
    </div>
    <div>
      <div className="text-lg font-medium">{count}</div>
      <div className={`text-sm ${textColor}`}>{label}</div>
    </div>
  </div>
);

export const WorkPackageStats = () => {
  return (
    <div className="flex justify-between mt-8 mb-10">
      <StatItem 
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#yellow-briefcase" 
        count="56" 
        label="Posted work package" 
      />
      <div className="w-px h-16 bg-gray-200"></div>
      <StatItem 
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#orange-briefcase" 
        count="56" 
        label="Drafted work package" 
      />
      <div className="w-px h-16 bg-gray-200"></div>
      <StatItem 
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#green-user" 
        count="56" 
        label="Talent hired" 
      />
      <div className="w-px h-16 bg-gray-200"></div>
      <StatItem 
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#purple-money" 
        count="$40,00" 
        label="Cash spent" 
        textColor="text-gray-700"
      />
    </div>
  );
};
