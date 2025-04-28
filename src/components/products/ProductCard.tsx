import React from "react";

interface ProductCardProps {
  type: string;
  title: string;
  categories: string;
  price: string;
  stock: string;
  author?: string;
  availableQty?: number;
  version?: number;
  description?: string;
  viewMode?: "grid" | "list";
  onClick?: () => void;
  imageSrc?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  type,
  title,
  categories,
  price,
  stock,
  author,
  availableQty,
  version,
  description,
  viewMode = "grid",
  onClick,
  imageSrc,
}) => {
  // Helper for truncating text
  const truncate = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  // The special image URL to check against
  const specialImageUrl = "https://placehold.co/600x400?text=Image";

  // Decide which image to use (fallback to specialImageUrl for now)
  const imgSrc = imageSrc || specialImageUrl;
  const isSpecial = imgSrc === specialImageUrl;

  return (
    <article 
      className="w-full bg-[#F9F5FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:transform hover:scale-[1.02] cursor-pointer"
      onClick={onClick}
    >
      <div className="relative group">
        {/* List View */}
        {viewMode === "list" && (
          <div className="flex flex-row w-full items-stretch">
            <div className={`relative w-[230px] min-w-[230px] ${isSpecial ? 'h-auto py-6' : 'h-[230px]'} flex flex-col items-center justify-center bg-[#F9F5FA] rounded-lg shadow-sm${isSpecial ? '' : ' p-0'}`}>
              <div className="absolute top-3 right-3 bg-[#6B047C] text-white text-xs font-bold px-2 py-1 rounded">
                {type}
              </div>
              <div className={`flex flex-col items-center justify-center w-full h-full${isSpecial ? '' : ' p-0'}`} style={{ background: isSpecial ? '#F9F5FA' : undefined, height: '100%', width: '100%' }}>
                <img
                  src={imgSrc}
                  alt="Product icon"
                  className={`transition-transform duration-300 group-hover:scale-110 mb-2 rounded-lg ${isSpecial ? '' : 'w-full h-full object-cover'}`}
                  style={isSpecial ? {
                    maxWidth: '70px',
                    maxHeight: '70px',
                    width: '70px',
                    height: '70px',
                    objectFit: 'contain',
                    margin: '40px auto 0 auto',
                    display: 'block',
                    background: '#F9F5FA',
                  } : {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                    display: 'block',
                  }}
                />
                {isSpecial && (
                  <div
                    className="text-[#6B047C] text-base font-bold transition-colors duration-300 group-hover:text-[#8A0591]"
                    style={{ marginTop: '6px' }}
                  >Books</div>
                )}
              </div>
            </div>
            <div className="flex-1 bg-white p-4 flex flex-col gap-0 relative justify-between">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-0 w-full pr-16">
                  <h3 className="text-[#1A011E] text-xl font-bold leading-tight mb-1 transition-colors duration-300 group-hover:text-[#6B047C]">{title}</h3>
                  <p className="text-[#1A011E] text-base font-semibold transition-colors duration-300 group-hover:text-[#6B047C] mb-1">
                    {(() => {
                      const cats = categories.split('|').map(c => c.trim()).filter(Boolean);
                      if (cats.length > 2) {
                        const truncatedThird = cats[2].length > 4 ? cats[2].slice(0, 4) + '...' : cats[2];
                        return cats[0] + ' | ' + cats[1] + ' | ' + truncatedThird;
                      }
                      return cats.join(' | ');
                    })()}
                  </p>
                  {/* Info Row: Author, Qty, Version (with values, one line) */}
                  <div className="flex flex-row items-center gap-8 text-sm font-bold text-[#1A011E] mb-1">
                    <span>Author <span className="font-normal text-[#808080]">Tamsira Jane Nwitua</span></span>
                    <span>Available Quantity <span className="font-normal text-[#808080]">14</span></span>
                    <span>Version <span className="font-normal text-[#808080]">2</span></span>
                  </div>
                  <div className="text-sm font-bold text-[#1A011E] mb-0 leading-tight">Product Description</div>
                  {(description ||
                    `While there, Charles got his paper ready for the Linnaean Society’s publication of the proceedings; both his and Wallace’s papers would be published at the same time. Charles and Emma: The Darwins' Leap of Faith by Deborah Heiligman Moreover, publication ensured that there was a much larger number of ‘virtual onlookers’.`) && (
                    <div
                      className="text-sm text-[#808080] mt-0.5 font-normal line-clamp-4"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'pre-line',
                        minHeight: '1.2em',
                      }}
                      title={description || `While there, Charles got his paper ready for the Linnaean Society’s publication of the proceedings; both his and Wallace’s papers would be published at the same time. Charles and Emma: The Darwins' Leap of Faith by Deborah Heiligman Moreover, publication ensured that there was a much larger number of ‘virtual onlookers’.`}
                    >
                      {description || `While there, Charles got his paper ready for the Linnaean Society’s publication of the proceedings; both his and Wallace’s papers would be published at the same time. Charles and Emma: The Darwins' Leap of Faith by Deborah Heiligman Moreover, publication ensured that there was a much larger number of ‘virtual onlookers’.`}
                    </div>
                  )}
                </div>
                <span className="text-[#1A011E] text-xl font-bold absolute right-8 top-0">{price}</span>
              </div>
            </div>
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="flex flex-col w-full">
            <div className="relative" style={{ height: '220px' }}>
              <div className="absolute top-2 right-2 bg-[#6B047C] text-white text-xs font-bold px-2 py-1 rounded z-10">
                {type}
              </div>
              {isSpecial ? (
                <div className="flex flex-col items-center justify-center w-full h-full" style={{ background: '#F9F5FA', height: '100%' }}>
                  <img
                    src={imgSrc}
                    alt="Product icon"
                    className="transition-transform duration-300 group-hover:scale-110"
                    style={{
                      maxWidth: '70px',
                      maxHeight: '70px',
                      width: '70px',
                      height: '70px',
                      objectFit: 'contain',
                      margin: '40px auto 0 auto',
                      display: 'block',
                      background: '#F9F5FA',
                    }}
                  />
                  <div
                    className="text-[#6B047C] text-base font-bold transition-colors duration-300 group-hover:text-[#8A0591]"
                    style={{ marginTop: '6px', textAlign: 'center', width: '100%' }}
                  >Books</div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center relative p-0 m-0 overflow-hidden" style={{height: '100%'}}>
                  <img
                    src={imgSrc}
                    alt="Product"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: 0,
                      zIndex: 0,
                      margin: 0,
                      padding: 0
                    }}
                  />
                </div>
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
                {title}
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
                {categories}
              </p>
              <div className="hidden sm:flex text-[#1A011E] text-base font-semibold mt-1 truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                {price} {stock && <span className="text-[#808080] font-normal text-sm ml-1">({stock.replace(/^[()\s]+|[()\s]+$/g, '')})</span>}
              </div>
              {/* Mobile-only extra info */}
              <div className="sm:hidden flex flex-col gap-0 mt-1">
                <div className="flex flex-row items-center gap-2 text-xs text-[#1A011E] font-bold truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  Author <span className="font-normal text-[#808080]">Tamsira Jane Nwitua</span> Version <span className="font-normal text-[#808080]">2</span>
                </div>
                <div className="text-xs font-bold text-[#1A011E] mt-1">Product Description</div>
                <div className="text-xs font-normal text-[#808080] mt-0.5 line-clamp-2" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'pre-line',
                }}
                  title={description || `While there, Charles got his paper ready for the Linnaean Society’s publication of the proceedings; both his and Wallace’s papers would be published at the same time. Charles and Emma: The Darwins' Leap of Faith by Deborah Heiligman Moreover, publication ensured that there was a much larger number of ‘virtual onlookers’.`}
                >
                  {description || `While there, Charles got his paper ready for the Linnaean Society’s publication of the proceedings; both his and Wallace’s papers would be published at the same time. Charles and Emma: The Darwins' Leap of Faith by Deborah Heiligman Moreover, publication ensured that there was a much larger number of ‘virtual onlookers’.`}
                </div>
                <div className="flex flex-row items-center text-[#1A011E] text-base font-semibold mt-2 truncate max-w-full" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                  {price} {stock && <span className="text-[#808080] font-normal text-sm ml-1">({stock.replace(/^[()\s]+|[()\s]+$/g, '')})</span>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
