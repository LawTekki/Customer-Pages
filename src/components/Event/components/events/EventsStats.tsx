
import React from "react";
import { Card } from "@/components/ui/card";

export const EventsStats = () => {
  const stats = [
    {
      number: 56,
      label: "Event attended",
      iconBg: "#FFF9E8",
      iconColor: "#FFD85D",
      icon: "/Frame 1000008082.svg"
    },
    {
      number: 56,
      label: "Upcoming event",
      iconBg: "#FEEFF1",
      iconColor: "#FF6B81",
      icon: "/Frame 1000008082 (1).svg"
    },
    {
      number: 56,
      label: "Cancelled event",
      iconBg: "#F0F9F0",
      iconColor: "#4CD964",
      icon: "/Frame 1000008082 (2).svg"
    },
    {
      number: "$40,00",
      label: "Cash spent",
      iconBg: "#F5EDFC",
      iconColor: "#6B047C",
      icon: "/Frame 1000008082 (3).svg"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => (
        <Card key={index} className="flex border border-[#F2F2F2] px-5 py-6 rounded-lg">
          <div className={`w-14 h-14 rounded-lg flex items-center justify-center`} style={{ backgroundColor: stat.iconBg }}>
            <img src={stat.icon} alt={stat.label} width="32" height="32" />
          </div>
          <div className="ml-5">
            <p className="text-xl font-semibold text-[#1A011E]">{stat.number}</p>
            <p className="text-sm text-[#808080] font-medium">{stat.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
