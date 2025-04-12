import React from "react";
import { LawyerCard } from "./LawyerCard";
import type { Lawyer } from "@/types/lawyer";

interface LawyerGridProps {
  lawyers: Lawyer[];
  viewMode?: "grid" | "list";
}

export const LawyerGrid: React.FC<LawyerGridProps> = ({ lawyers, viewMode = "grid" }) => {
  return (
    <div className="w-full font-medium mt-12 max-md:mt-10">
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-4"}>
        {lawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} viewMode={viewMode} />
        ))}
      </div>
    </div>
  );
}; 