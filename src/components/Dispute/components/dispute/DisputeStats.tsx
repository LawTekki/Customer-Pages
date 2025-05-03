
import React from "react";
import { Card } from "@/components/ui/card";

export const DisputeStats = () => {
  const stats = [
    {
      number: 2,
      label: "Total dispute",
      iconBg: "#F5EDFC",
      iconColor: "#6B047C",
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#6B047C] flex items-center justify-center text-white text-xs">
          !
        </div>
      )
    },
    {
      number: 56,
      label: "Pending dispute",
      iconBg: "#FFF9E8",
      iconColor: "#FFD85D",
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#FFD85D] flex items-center justify-center text-white text-xs">
          !
        </div>
      )
    },
    {
      number: 56,
      label: "Cleared dispute",
      iconBg: "#F0F9F0",
      iconColor: "#4CD964",
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#4CD964] flex items-center justify-center text-white text-xs">
          !
        </div>
      )
    },
    {
      number: 56,
      label: "Lost dispute",
      iconBg: "#FEEFF1",
      iconColor: "#FF6B81",
      icon: (
        <div className="w-6 h-6 rounded-full bg-[#FF6B81] flex items-center justify-center text-white text-xs">
          !
        </div>
      )
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-md:grid-cols-2 max-md:gap-3 max-md:ml-[12px]">
      {stats.map((stat, index) => (
        <Card key={index} className={`flex border border-[#F2F2F2] px-3 py-4 rounded-lg max-md:flex-col max-md:items-center max-md:gap-2 max-md:w-[160px] ${
          index < 2 ? 'max-md:mb-4' : ''
        }`}>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center`} style={{ backgroundColor: stat.iconBg }}>
            {stat.icon}
          </div>
          <div className="ml-3 max-md:ml-0">
            <p className="text-base font-semibold text-[#1A011E] max-md:text-center">{stat.number}</p>
            <p className="text-xs text-[#808080] font-medium max-md:text-center">{stat.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
