import React from "react";

const stats = [
  {
    icon: "/mdi_cart.svg",
    bgColor: "#FFA500",
    label: "Orders",
    value: "8,232",
    trend: { value: "23%", type: "up" },
  },
  {
    icon: "/solar_tag-price-bold.svg",
    bgColor: "#4CAF50",
    label: "Accepted proposals",
    value: "8,232",
    trend: { value: "23%", type: "up" },
  },
  {
    icon: "/icon-park-outline_ad-product.svg",
    bgColor: "#6B047C",
    label: "Outstanding proposal",
    value: "842",
    trend: { value: "23%", type: "up" },
  },
];

export const StatsCards = () => {
  return (
    <div className="flex w-full gap-4 mb-6 max-md:flex-col">
      {stats.map((stat, index) => (
        <div key={stat.label} className="flex-1 bg-white rounded-lg p-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center" 
              style={{ backgroundColor: stat.bgColor }}
            >
              <img
                src={stat.icon}
                className="w-5 h-5 object-contain"
                alt={stat.label}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-gray-500 text-xs whitespace-nowrap overflow-hidden text-ellipsis">
                {stat.label}
              </div>
              <div className="text-gray-900 text-sm font-semibold mt-0.5">
                {stat.value}
              </div>
            </div>
            <div className="flex items-center gap-1 bg-[#F5FFFB] text-[#1C7C04] text-[10px] px-1.5 py-0.5 rounded">
              <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 2.5L8.5 6L1.5 6L5 2.5Z" fill="currentColor"/>
              </svg>
              <span>{stat.trend.value} this week</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
