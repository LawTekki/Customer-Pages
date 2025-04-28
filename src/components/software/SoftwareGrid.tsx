import React from "react";
import { SoftwareCard } from "./SoftwareCard";

const softwareData = Array(9).fill({
  imageUrl: "https://placehold.co/400x300?text=Software",
  title: "Legal Software Suite",
  category: "Business Law | Legal Management",
  price: "$299",
  copiesLeft: 15,
});

interface SoftwareGridProps {
  viewMode?: "grid" | "list";
}

export const SoftwareGrid: React.FC<SoftwareGridProps> = ({ viewMode = "grid" }) => {
  return (
    <div className="w-full mt-12">
      {viewMode === "grid" ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {softwareData.map((software, index) => (
            <SoftwareCard key={index} {...software} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {softwareData.map((software, index) => (
            <SoftwareCard key={index} {...software} viewMode={viewMode} />
        ))}
      </div>
      )}
    </div>
  );
}; 