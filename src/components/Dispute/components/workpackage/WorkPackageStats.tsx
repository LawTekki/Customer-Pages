
import React from 'react';

interface StatItemProps {
  icon: string;
  count: string | number;
  label: string;
  trend?: string;
  trendColor?: string;
  textColor?: string;
}

const StatItem = ({
  icon,
  count,
  label,
  trend,
  trendColor = "text-green-500 bg-green-50",
  textColor = "text-gray-700"
}: StatItemProps) => (
  <div className="flex-1 bg-white rounded-lg p-4 border border-gray-100 flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="border rounded-lg p-2">
        <img src={icon} alt={label} className="w-6 h-6" />
      </div>
      <div>
        <div className="text-lg font-medium">{count}</div>
        <div className={`text-sm ${textColor}`}>{label}</div>
      </div>
    </div>
    {trend && (
      <div className={`text-xs px-2 py-1 rounded-md ${trendColor}`}>
        {trend}
      </div>
    )}
  </div>
);

export const WorkPackageStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-10">
      <StatItem
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#yellow-briefcase"
        count="56"
        label="Posted work package"
        trend="23% this week"
        trendColor="text-green-500 bg-green-50"
      />
      <StatItem
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#orange-briefcase"
        count="56"
        label="Drafted work package"
        trend="23% this week"
        trendColor="text-green-500 bg-green-50"
      />
      <StatItem
        icon="/lovable-uploads/d3902599-5c16-4be7-858d-371a3ef0375b.png#green-user"
        count="56"
        label="Talent hired"
        trend="23% this week"
        trendColor="text-green-500 bg-green-50"
      />
    </div>
  );
};
