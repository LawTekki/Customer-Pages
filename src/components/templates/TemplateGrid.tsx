import React, { useState } from "react";
import { TemplateCard } from "./TemplateCard";
import { TemplateControls } from "./TemplateControls";
import { TemplateFilters } from "./TemplateFilters";

const templateData = [
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
  {
    imageUrl: "https://placehold.co/400x300?text=Template",
    title: "Tenancy agreement",
    category: "Business Law | Creative Law | Huma....",
    price: "$50",
    copiesLeft: 32,
  },
];

interface TemplateGridProps {
  viewMode?: "grid" | "list";
}

export const TemplateGrid: React.FC<TemplateGridProps> = ({ viewMode = "grid" }) => {
  const [showFilters, setShowFilters] = useState(false);

  const handleViewChange = (view: string) => {
    if (view === "products") {
      setShowFilters(false);
    } else if (view === "templates") {
      setShowFilters(true);
    }
  };

  return (
    <div className="w-full mt-12">
      {showFilters && <TemplateFilters onViewChange={handleViewChange} />}
      
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {templateData.map((template, index) => (
            <TemplateCard key={index} {...template} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full">
          {templateData.map((template, index) => (
            <TemplateCard key={index} {...template} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
};