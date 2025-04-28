import React from "react";
import { LawyerCard } from "./LawyerCard";
import type { Lawyer } from "@/types/lawyer";

interface LawyerGridProps {
  lawyers: Lawyer[];
  viewMode?: "grid" | "list";
}

export const LawyerGrid: React.FC<LawyerGridProps> = ({ lawyers = [], viewMode = "grid" }) => {
  // Ensure we display all available lawyers up to 9
  const displayLawyers = lawyers.length > 9 ? lawyers.slice(0, 9) : lawyers;

  return (
    <div className="w-full font-medium mt-12 max-md:mt-10">
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-4"}>
        {displayLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
};