import React from "react";

interface SoftwareCardProps {
  imageUrl: string;
  title: string;
  category: string;
  price: string;
  copiesLeft: number;
  author?: string;
  availableQty?: number;
  version?: number;
  description?: string;
  licenseType?: string;
  platform?: string;
  viewMode?: "grid" | "list";
  onClick?: () => void;
}

export const SoftwareCard: React.FC<SoftwareCardProps> = ({
  imageUrl,
  title,
  category,
  price,
  copiesLeft,
  author,
  availableQty,
  version,
  description,
  licenseType,
  platform,
  viewMode = "grid",
  onClick
}) => {
  // Helper for truncating text
  const truncate = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  // Helper for category truncation (like ProductCard)
  const renderCategories = () => {
    const cats = category.split('|').map(c => c.trim()).filter(Boolean);
    if (cats.length > 2) {
      const truncatedThird = cats[2].length > 4 ? cats[2].slice(0, 4) + '...' : cats[2];
      return cats[0] + ' | ' + cats[1] + ' | ' + truncatedThird;
    }
    return cats.join(' | ');
  };

  return (
    <article 
      className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      {/* List View */}
      {viewMode === "list" && (
        <div className="flex flex-row w-full items-stretch">
          <div className="relative w-[230px] min-w-[230px] h-auto flex flex-col items-center justify-center bg-[#F9F5FA] rounded-lg shadow-sm py-6">
            <div className="absolute top-3 right-3 bg-[#6B047C] text-white text-xs font-bold px-2 py-1 rounded">
              Software
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src={imageUrl || "https://placehold.co/400x300?text=Software"}
                alt="Software icon"
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 mb-2"
              />
              <div className="text-[#6B047C] text-base font-bold transition-colors duration-300 group-hover:text-[#8A0591]">Software</div>
            </div>
          </div>
          <div className="flex-1 bg-white p-4 flex flex-col gap-0 relative justify-between">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-0 w-full pr-16">
                <h3 className="text-[#1A011E] text-xl font-bold leading-tight mb-1 transition-colors duration-300 group-hover:text-[#6B047C]">{title}</h3>
                <p className="text-[#1A011E] text-base font-semibold transition-colors duration-300 group-hover:text-[#6B047C] mb-1">
                  {renderCategories()}
                </p>
                {/* Info Row: License Type, Platform, Version (with values, one line) */}
                <div className="flex flex-row items-center gap-8 text-sm font-bold text-[#1A011E] mb-1">
                  <span>License Type <span className="font-normal text-[#808080]">{licenseType || 'Proprietary'}</span></span>
                  <span>Platform <span className="font-normal text-[#808080]">{platform || 'Windows/Mac'}</span></span>
                  <span>Version <span className="font-normal text-[#808080]">{version ?? 1}</span></span>
                </div>
                <div className="text-sm font-bold text-[#1A011E] mb-0 leading-tight">Software Description</div>
                {(description || `This is a sample software description. You can use this software for business, productivity, and more. It is designed for flexibility and ease of use.`) && (
                  <div
                    className="text-sm text-[#808080] mt-0.5 font-normal line-clamp-4"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {truncate(description || `This is a sample software description. You can use this software for business, productivity, and more. It is designed for flexibility and ease of use.`, 240)}
                  </div>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#1A011E] text-base font-medium transition-colors duration-300 group-hover:text-[#6B047C]">{price}</span>
                  <span className="text-[#808080] text-xs transition-colors duration-300 group-hover:text-[#6B047C]">({copiesLeft} copies left)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="flex flex-col w-full">
          <div className="relative h-[180px] flex flex-col items-center justify-center">
            <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-bold px-2 py-1 rounded">
              Software
            </div>
            <div className="flex flex-col items-center">
              <img
                src={imageUrl || "https://placehold.co/400x300?text=Software"}
                alt="Software icon"
                className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="text-[#6B047C] text-base font-bold mt-2 transition-colors duration-300 group-hover:text-[#8A0591]">Software</div>
            </div>
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
              {title}
            </h3>
            <p
              className="text-[#1A011E] text-base font-semibold transition-colors duration-300 group-hover:text-[#6B047C] truncate max-w-full"
              title={category}
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {renderCategories()}
            </p>
            <div className="hidden sm:flex text-[#1A011E] text-base font-semibold mt-1 truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
              {price} {copiesLeft && <span className="text-[#808080] font-normal text-sm ml-1">({copiesLeft} copies left)</span>}
            </div>
            {/* Mobile-only extra info */}
            <div className="sm:hidden flex flex-col gap-0 mt-1">
              <div className="flex flex-row items-center gap-2 text-xs text-[#1A011E] font-bold truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                License Type <span className="font-normal text-[#808080]">{licenseType || 'Proprietary'}</span> Platform <span className="font-normal text-[#808080]">{platform || 'Windows/Mac'}</span> Version <span className="font-normal text-[#808080]">{version ?? 1}</span>
              </div>
              <div className="text-xs font-bold text-[#1A011E] mt-1">Software Description</div>
              <div className="text-xs font-normal text-[#808080] mt-0.5 line-clamp-2" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'pre-line',
              }}
                title={description || `This is a sample software description. You can use this software for business, productivity, and more. It is designed for flexibility and ease of use.`}
              >
                {truncate(description || `This is a sample software description. You can use this software for business, productivity, and more. It is designed for flexibility and ease of use.`, 120)}
              </div>
              <div className="flex flex-row items-center text-[#1A011E] text-base font-semibold mt-2 truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {price} {copiesLeft && <span className="text-[#808080] font-normal text-sm ml-1">({copiesLeft} copies left)</span>}
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}