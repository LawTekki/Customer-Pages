import React from "react";

interface ProfileHeaderProps {
  name: string;
  location: string;
  joinDate: string;
  imageUrl: string;
  isOnline?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  name,
  location,
  joinDate,
  imageUrl,
  isOnline = false,
}) => {
  return (
    <div className="self-center w-[196px] max-w-full leading-[1.3]">
      <div className="relative flex w-full flex-col items-center italic text-xl text-[#1a011e] tracking-[-0.4px] justify-center">
        <img
          src={imageUrl}
          alt={`${name}'s profile`}
          className="aspect-[1] object-contain w-[104px] z-0 max-w-full rounded-[100px]"
        />
        <div className="z-0 mt-2">
          {name}{" "}
          <span className="italic text-base leading-6 tracking-[-0.32px] text-[#808080]">
            ({location})
          </span>
        </div>
        {isOnline && (
          <div className="stroke-[2px] bg-[#1C7C04] absolute z-0 flex min-h-3.5 w-3.5 h-3.5 fill-[#1C7C04] rounded-[50%] border-white border-solid border-2 right-16 bottom-[34px]" />
        )}
      </div>
      <div className="text-[#808080] text-center text-xs tracking-[-0.24px] mt-1">
        Joined In: {joinDate}
      </div>
    </div>
  );
};
