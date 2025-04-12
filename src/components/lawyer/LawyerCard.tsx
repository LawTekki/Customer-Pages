import React from "react";
import type { Lawyer } from "@/types/lawyer";

interface LawyerCardProps {
  lawyer: Lawyer;
  viewMode?: "grid" | "list";
}

export const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer, viewMode = "grid" }) => {
  if (viewMode === "list") {
    return (
      <article className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-row w-full">
          <div className="relative w-[120px] h-[120px]">
            <img
              src={lawyer.imageUrl}
              alt={`${lawyer.name}'s profile`}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute top-2 right-2 bg-[rgba(26,1,30,0.3)] text-white text-xs font-medium px-2 py-1 rounded"
              aria-label="Availability status"
            >
              {lawyer.availability.status}
            </div>
            <div
              className="absolute bottom-2 left-2 text-white text-sm font-medium"
              aria-label="Hourly rate"
            >
              ${lawyer.hourlyRate} per hour
            </div>
          </div>
          <div className="flex-1 bg-white p-4 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-[#1A011E] text-base font-semibold">{lawyer.name}</h3>
              <span className="text-[#1A011E] text-sm">{lawyer.country}</span>
            </div>
            <p className="text-[#808080] text-sm">{lawyer.specialties.join(" | ")}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={lawyer.imageUrl}
          alt={`${lawyer.name}'s profile`}
          className="w-full aspect-[1.101] object-cover"
        />
        <div
          className="absolute top-2 right-2 bg-[rgba(26,1,30,0.3)] text-white text-xs font-medium px-2 py-1 rounded"
          aria-label="Availability status"
        >
          {lawyer.availability.status}
        </div>
        <div
          className="absolute bottom-2 left-2 text-white text-base"
          aria-label="Hourly rate"
        >
          ${lawyer.hourlyRate} per hour
        </div>
      </div>
      <div className="bg-white p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-[#1A011E] text-lg font-semibold">{lawyer.name}</h3>
          <span className="text-[#1A011E] text-sm">{lawyer.country}</span>
        </div>
        <p className="text-[#808080] text-sm">{lawyer.specialties.join(" | ")}</p>
      </div>
    </article>
  );
}; 