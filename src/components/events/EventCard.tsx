import React from "react";

interface EventCardProps {
  imageUrl: string;
  title: string;
  categories: string;
  price: string;
  availableSeats: number;
  viewMode?: "grid" | "list";
}

export const EventCard: React.FC<EventCardProps> = ({
  imageUrl,
  title,
  categories,
  price,
  availableSeats,
  viewMode = "grid",
}) => {
  if (viewMode === "list") {
    return (
      <article className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-row w-full">
          <div className="relative w-[120px] h-[120px] flex flex-col items-center justify-center">
            <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded">
              Virtual
            </div>
            <div className="flex flex-col items-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-12 h-12 object-contain"
              />
              <div className="text-[#6B047C] text-sm font-medium mt-1">Event</div>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 flex flex-col justify-center">
            <h3 className="text-[#1A011E] text-base font-semibold leading-tight mb-1">{title}</h3>
            <p className="text-[#1A011E] text-sm mb-2">{categories}</p>
            <div className="flex items-center gap-2">
              <span className="text-[#1A011E] text-base font-medium">{price}</span>
              <span className="text-[#808080] text-xs">({availableSeats} available seat{availableSeats !== 1 ? 's' : ''})</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-[180px] flex flex-col items-center justify-center">
        <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded">
          Virtual
        </div>
        <div className="flex flex-col items-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <div className="text-[#6B047C] text-lg font-medium mt-2">Event</div>
        </div>
      </div>
      <div className="bg-white p-4 flex flex-col gap-2">
        <h3 className="text-[#1A011E] text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-[#1A011E] text-sm">{categories}</p>
        <div className="flex items-center gap-2">
          <span className="text-[#1A011E] text-base font-medium">{price}</span>
          <span className="text-[#808080] text-xs">({availableSeats} available seat{availableSeats !== 1 ? 's' : ''})</span>
        </div>
      </div>
    </article>
  );
}; 