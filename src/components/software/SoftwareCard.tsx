import React from "react";

interface SoftwareCardProps {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  copiesLeft: number;
  viewMode?: "grid" | "list";
}

export const SoftwareCard: React.FC<SoftwareCardProps> = ({
  imageUrl,
  title,
  category,
  price,
  copiesLeft,
  viewMode = "grid"
}) => {
  return (
    <article className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* List View */}
      {viewMode === "list" && (
        <div className="flex flex-row w-full">
          <div className="relative w-[120px] h-[120px] flex flex-col items-center justify-center">
            <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded">
              Software
            </div>
            <div className="flex flex-col items-center">
              <img
                src={imageUrl}
                alt="Software icon"
                className="w-12 h-12 object-contain"
              />
              <div className="text-[#6B047C] text-sm font-medium mt-1">Software</div>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 flex flex-col justify-center">
            <h3 className="text-[#1A011E] text-base font-semibold leading-tight mb-1">{title}</h3>
            <p className="text-[#1A011E] text-sm mb-2">{category}</p>
            <div className="flex items-center gap-2">
              <span className="text-[#1A011E] text-base font-medium">{price}</span>
              <span className="text-[#808080] text-xs">({copiesLeft} copies left)</span>
            </div>
          </div>
        </div>
      )}

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="flex flex-col w-full">
          <div className="relative h-[180px] flex flex-col items-center justify-center">
            <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded">
              Software
            </div>
            <div className="flex flex-col items-center">
              <img
                src={imageUrl}
                alt="Software icon"
                className="w-16 h-16 object-contain"
              />
              <div className="text-[#6B047C] text-lg font-medium mt-2">Software</div>
            </div>
          </div>
          <div className="bg-white p-4 flex flex-col gap-2">
            <h3 className="text-[#1A011E] text-lg font-semibold leading-tight">{title}</h3>
            <p className="text-[#1A011E] text-sm">{category}</p>
            <div className="flex items-center gap-2">
              <span className="text-[#1A011E] text-base font-medium">{price}</span>
              <span className="text-[#808080] text-xs">({copiesLeft} copies left)</span>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}; 