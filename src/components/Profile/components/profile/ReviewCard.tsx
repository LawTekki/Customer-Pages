import React from "react";

interface ReviewCardProps {
  userImage: string;
  username: string;
  title: string;
  content: string;
  productName: string;
  rating: number; // 1-5
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  userImage,
  username,
  title,
  content,
  productName,
  rating,
}) => {
  return (
    <div className="border border-[color:var(--Grey-1,#F2F2F2)] w-full overflow-hidden bg-white mt-2 pt-4 pb-[33px] px-[18px] rounded-lg border-solid max-md:max-w-full">
      <div className="z-10 flex flex-col items-stretch max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch max-md:max-w-full">
          <div className="flex items-center gap-2 text-base text-[#1A011E] tracking-[-0.32px] justify-left">
            <img
              src={userImage}
              alt={username}
              className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[100px]"
            />
            <div className="self-stretch w-[122px] my-auto">
              <div className="text-[#1A011E]">{username}</div>
              <div className="flex items-center mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full text-sm tracking-[-0.28px] mt-2 max-md:max-w-full">
            <div className="text-[#1A011E] leading-[1.3] max-md:max-w-full">
              {title}
            </div>
            <div className="text-[#808080] leading-[18px] mt-2 max-md:max-w-full">
              {content}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch text-sm tracking-[-0.28px] leading-[1.3] justify-center mt-2">
          <div className="text-[#808080]">Review for</div>
          <div className="text-[#1A011E] mt-1">{productName}</div>
        </div>
      </div>
      <div className="border bg-[#E6E6E6] mt-[-18px] w-px shrink-0 h-px border-[rgba(230,230,230,1)] border-solid" />
    </div>
  );
};
