
import React from "react";
import { Card } from "@/components/ui/card";

export const EventsStats = () => {
  const stats = [
    {
      number: 56,
      label: "Event attended",
      iconBg: "#FFF9E8",
      iconColor: "#FFD85D",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 1.33334V3.33334M10.6667 1.33334V3.33334M2.66667 6.06667H13.3333M2 14H14C14.3536 14 14.6928 13.8595 14.9428 13.6095C15.1929 13.3594 15.3333 13.0203 15.3333 12.6667V4.00001C15.3333 3.64639 15.1929 3.30726 14.9428 3.05722C14.6928 2.80717 14.3536 2.66667 14 2.66667H2C1.64638 2.66667 1.30724 2.80717 1.0572 3.05722C0.807151 3.30726 0.666668 3.64639 0.666668 4.00001V12.6667C0.666668 13.0203 0.807151 13.3594 1.0572 13.6095C1.30724 13.8595 1.64638 14 2 14Z" stroke="#FFD85D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 56,
      label: "Upcoming event",
      iconBg: "#FEEFF1",
      iconColor: "#FF6B81",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 1.33334V3.33334M10.6667 1.33334V3.33334M2.66667 6.06667H13.3333M2 14H14C14.3536 14 14.6928 13.8595 14.9428 13.6095C15.1929 13.3594 15.3333 13.0203 15.3333 12.6667V4.00001C15.3333 3.64639 15.1929 3.30726 14.9428 3.05722C14.6928 2.80717 14.3536 2.66667 14 2.66667H2C1.64638 2.66667 1.30724 2.80717 1.0572 3.05722C0.807151 3.30726 0.666668 3.64639 0.666668 4.00001V12.6667C0.666668 13.0203 0.807151 13.3594 1.0572 13.6095C1.30724 13.8595 1.64638 14 2 14Z" stroke="#FF6B81" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: 56,
      label: "Cancelled event",
      iconBg: "#F0F9F0",
      iconColor: "#4CD964",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 1.33334V3.33334M10.6667 1.33334V3.33334M2.66667 6.06667H13.3333M2 14H14C14.3536 14 14.6928 13.8595 14.9428 13.6095C15.1929 13.3594 15.3333 13.0203 15.3333 12.6667V4.00001C15.3333 3.64639 15.1929 3.30726 14.9428 3.05722C14.6928 2.80717 14.3536 2.66667 14 2.66667H2C1.64638 2.66667 1.30724 2.80717 1.0572 3.05722C0.807151 3.30726 0.666668 3.64639 0.666668 4.00001V12.6667C0.666668 13.0203 0.807151 13.3594 1.0572 13.6095C1.30724 13.8595 1.64638 14 2 14Z" stroke="#4CD964" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "$40,00",
      label: "Cash spent",
      iconBg: "#F5EDFC",
      iconColor: "#6B047C",
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.33333 1.33334V3.33334M10.6667 1.33334V3.33334M2.66667 6.06667H13.3333M2 14H14C14.3536 14 14.6928 13.8595 14.9428 13.6095C15.1929 13.3594 15.3333 13.0203 15.3333 12.6667V4.00001C15.3333 3.64639 15.1929 3.30726 14.9428 3.05722C14.6928 2.80717 14.3536 2.66667 14 2.66667H2C1.64638 2.66667 1.30724 2.80717 1.0572 3.05722C0.807151 3.30726 0.666668 3.64639 0.666668 4.00001V12.6667C0.666668 13.0203 0.807151 13.3594 1.0572 13.6095C1.30724 13.8595 1.64638 14 2 14Z" stroke="#6B047C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      {stats.map((stat, index) => (
        <Card key={index} className="flex border border-[#F2F2F2] px-4 py-5 rounded-lg">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center`} style={{ backgroundColor: stat.iconBg }}>
            {stat.icon}
          </div>
          <div className="ml-4">
            <p className="text-lg font-semibold text-[#1A011E]">{stat.number}</p>
            <p className="text-xs text-[#808080] font-medium">{stat.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
