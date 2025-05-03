import React from "react";
import type { Lawyer } from "@/types/lawyer";

interface LawyerCardProps {
  lawyer: Lawyer;
  imageSrc?: string;
  viewMode?: "grid" | "list";
  onClick?: () => void;
}

export const LawyerCard: React.FC<LawyerCardProps> = ({ lawyer, imageSrc, viewMode = "grid", onClick }) => {
  if (viewMode === "list") {
    return (
      <article 
        className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
        onClick={onClick}
      >
        <div className="relative group">
          <div className="flex flex-row w-full">
            <div className="relative w-[220px] min-w-[220px] h-[220px] bg-[#F9F5FA] rounded-l-lg overflow-hidden">
              <img
                src={imageSrc || '/image 8.jpg'}
                alt={`${lawyer.name}'s profile`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
              <div
                className="absolute top-4 right-4 bg-[rgba(26,1,30,0.3)] text-white text-xs font-medium px-2 py-1 rounded transition-colors duration-300 group-hover:bg-[rgba(107,4,124,0.3)] z-10"
                aria-label="Availability status"
              >
                {lawyer.availability.status}
              </div>
              <div
                className="absolute bottom-4 left-4 text-white text-sm font-medium transition-colors duration-300 group-hover:text-[#6B047C] z-10"
              >
              </div>
            </div>
            <div className="flex-1 bg-white p-4 flex flex-col justify-center">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#1A011E] text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-[#6B047C]">{lawyer.name}</h3>
                  <span className="text-[#1A011E] text-base font-semibold ml-2 transition-colors duration-300 group-hover:text-[#6B047C]">{lawyer.country}</span>
                </div>
                <span className="text-[#1A011E] text-xl font-bold absolute right-8 top-0">${lawyer.hourlyRate} per hour</span>
              </div>
              <p className="text-[#808080] text-sm font-semibold mb-1 transition-colors duration-300 group-hover:text-[#6B047C]">{lawyer.specialties.slice(0, 3).join(" | ")}{lawyer.specialties.length > 3 ? ' ...' : ''}</p>
              {lawyer.description && (
                <div className="text-[#1A011E] text-sm font-normal mb-0 leading-tight truncate" title={lawyer.description}>
                  {lawyer.description.length > 110 ? lawyer.description.slice(0, 110) + '...' : lawyer.description}
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article 
      className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative group">
        <div className="relative h-[260px] w-full overflow-hidden rounded-t-lg">
          <img
            src={imageSrc || '/image 8.jpg'}
            alt={`${lawyer.name}'s profile`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
          <div
            className="absolute top-4 right-4 bg-[rgba(26,1,30,0.3)] text-white text-xs font-medium px-2 py-1 rounded transition-colors duration-300 group-hover:bg-[rgba(107,4,124,0.3)] z-10"
            aria-label="Availability status"
          >
            {lawyer.availability.status}
          </div>
          <div
            className="absolute bottom-4 left-4 text-white text-base font-medium transition-colors duration-300 group-hover:text-[#6B047C] z-10"
            aria-label="Hourly rate"
          >
            ${lawyer.hourlyRate} per hour
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-[#1A011E] text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-[#6B047C]">{lawyer.name}</h3>
            <span className="text-[#1A011E] text-base font-semibold ml-2 transition-colors duration-300 group-hover:text-[#6B047C]">{lawyer.country}</span>
          </div>
          <p className="text-[#808080] text-sm font-semibold mb-1 transition-colors duration-300 group-hover:text-[#6B047C]">{lawyer.specialties.slice(0, 3).join(" | ")}{lawyer.specialties.length > 3 ? ' ...' : ''}</p>
          {lawyer.description && (
            <div className="text-[#1A011E] text-sm font-normal mb-0 leading-tight truncate" title={lawyer.description}>
              {lawyer.description.length > 110 ? lawyer.description.slice(0, 110) + '...' : lawyer.description}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};