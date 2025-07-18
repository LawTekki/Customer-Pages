import React from "react";

interface EventCardProps {
  imageSrc?: string;
  title: string;
  categories: string;
  price: string;
  availableSeats: number;
  organizer?: string;
  date?: string;
  time?: string;
  location?: string;
  description?: string;
  language?: string;
  viewMode?: "grid" | "list";
  onClick?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  imageSrc,
  title,
  categories,
  price,
  availableSeats,
  organizer,
  date,
  time,
  location,
  description,
  language,
  viewMode = "grid",
  onClick
}) => {
  // Helper for truncating text
  const truncate = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  // Helper for category truncation
  const renderCategories = () => {
    const cats = categories.split('|').map(c => c.trim()).filter(Boolean);
    if (cats.length > 2) {
      const truncatedThird = cats[2].length > 4 ? cats[2].slice(0, 4) + '...' : cats[2];
      return cats[0] + ' | ' + cats[1] + ' | ' + truncatedThird;
    }
    return cats.join(' | ');
  };

  // List View
  if (viewMode === "list") {
    return (
      <article 
        className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer fade-in"
        onClick={onClick}
      >
        <div className="flex flex-row w-full items-stretch">
          <div className="relative w-[220px] min-w-[220px] h-[220px] bg-[#F9F5FA] rounded-l-lg overflow-hidden">
            <div className="absolute top-4 right-4 bg-[#6B047C] text-white text-xs font-medium px-2 py-1 rounded z-10">
              Virtual
            </div>
            {imageSrc &&
              imageSrc !== '/material-symbols_mic-outline.svg' &&
              imageSrc !== 'C:/Users/hamza/OneDrive/Desktop/Dash_Board/public/material-symbols_mic-outline.svg' ? (
              <img
                src={imageSrc}
                alt="Event"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <img
                  src="/material-symbols_mic-outline.svg"
                  alt="Event icon"
                  className="w-20 h-20 transition-transform duration-300 group-hover:scale-110"
                />
                <div className="text-[#6B047C] text-lg font-semibold mt-4 transition-colors duration-300 group-hover:text-[#8A0591]">Event</div>
              </div>
            )}
          </div>
          <div className="flex-1 bg-white p-4 flex flex-col gap-0 relative justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-0 w-full pr-16">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[#1A011E] text-xl font-bold leading-tight transition-colors duration-300 group-hover:text-[#6B047C]">{truncate(title, 60)}</h3>
                  <span className="text-[#1A011E] text-xl font-bold absolute right-8 top-0">{price}</span>
                </div>
                <p className="text-[#1A011E] text-base font-semibold transition-colors duration-300 group-hover:text-[#6B047C] mb-1">
                  {truncate(renderCategories(), 60)}
                </p>
                {/* Info Row: Organizer, Date, Time, Location, Language */}
                <div className="flex flex-row items-center gap-8 text-sm font-bold text-[#1A011E] mb-1">
                  <span>Organizer <span className="font-normal text-[#808080]">{organizer || 'N/A'}</span></span>
                  <span>Time <span className="font-normal text-[#808080]">{time || 'TBA'}</span></span>
                  <span>Location <span className="font-normal text-[#808080]">{location || 'Online'}</span></span>
                  <span>Language <span className="font-normal text-[#808080]">{language || 'English'}</span></span>
                </div>
                <div className="text-sm font-bold text-[#1A011E] mb-0 leading-tight">Event Description</div>
                {(description || `This is a sample event description. Join us for an engaging session!`) && (
                  <div
                    className="text-sm text-[#808080] mt-0.5 font-normal line-clamp-4"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'normal',
                    }}
                  >
                    {truncate(description || `This is a sample event description. Join us for an engaging session!`, 160)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid View
  return (
    <article 
      className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer fade-in"
      onClick={onClick}
    >
      <div className="flex flex-col w-full">
        <div className="relative h-[180px] flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-bold px-2 py-1 rounded z-10">
            Virtual
          </div>
          {imageSrc &&
            imageSrc !== '/material-symbols_mic-outline.svg' &&
            imageSrc !== 'C:/Users/hamza/OneDrive/Desktop/Dash_Board/public/material-symbols_mic-outline.svg' ? (
            <img
              src={imageSrc}
              alt="Event"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <>
              <img
                src="/material-symbols_mic-outline.svg"
                alt="Event icon"
                className="w-16 h-16 transition-transform duration-300 group-hover:scale-110 z-10"
              />
              <div className="text-[#6B047C] text-base font-bold mt-2 transition-colors duration-300 group-hover:text-[#8A0591] z-10">Event</div>
            </>
          )}
        </div>
        <div className="bg-white p-4 flex flex-col gap-1">
          <h3
            className="text-[#1A011E] text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-[#6B047C] truncate max-w-full"
            title={title}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {truncate(title, 60)}
          </h3>
          <p
            className="text-[#1A011E] text-base font-semibold transition-colors duration-300 group-hover:text-[#6B047C] truncate max-w-full"
            title={categories}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {truncate(renderCategories(), 60)}
          </p>
          {/* Desktop Info: do NOT show Organizer/Date/Time/Location/Language on desktop */}
          {/* Mobile-only extra info: ONLY show Organizer N/A and Date TBA on mobile */}
          <div className="sm:hidden flex flex-col gap-0 mt-1">
            <div className="flex flex-row items-center gap-2 text-xs text-[#1A011E] font-bold truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              Organizer <span className="font-normal text-[#808080]">{organizer || 'N/A'}</span> Date <span className="font-normal text-[#808080]">{date || 'TBA'}</span>
            </div>
            <div className="text-xs font-bold text-[#1A011E] mt-1">Event Description</div>
            <div className="text-xs font-normal text-[#808080] mt-0.5 line-clamp-2" style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'pre-line',
            }}
              title={description || `This is a sample event description. Join us for an engaging session!`}
            >
              {truncate(description || `This is a sample event description. Join us for an engaging session!`, 120)}
            </div>
            <div className="flex flex-row items-center text-[#1A011E] text-base font-semibold mt-2 truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {price} {availableSeats && <span className="text-[#808080] font-normal text-sm ml-1">({availableSeats} available seat{availableSeats !== 1 ? 's' : ''})</span>}
            </div>
          </div>
          <div className="hidden sm:flex text-[#1A011E] text-base font-semibold mt-1 truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            {price} {availableSeats && <span className="text-[#808080] font-normal text-sm ml-1">({availableSeats} available seat{availableSeats !== 1 ? 's' : ''})</span>}
          </div>
        </div>
      </div>
    </article>
  );
};