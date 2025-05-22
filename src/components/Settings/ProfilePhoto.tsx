import React from "react";

export const ProfilePhoto: React.FC = () => {
  return (
    <div className="flex items-center gap-[13px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/c6900276c92b4323bbabc7580415a6ac/7e4f437d377651e9f6e4206d210b875ae3c5f970?placeholderIfAbsent=true"
        alt="Profile"
        className="aspect-[1] object-contain w-[120px] self-stretch shrink-0 my-auto"
      />
      <div className="self-stretch w-[174px] my-auto">
        <div className="text-[#1A011E] text-sm tracking-[-0.28px]">
          Select a photo
        </div>
        <div className="text-[#999] text-xs tracking-[-0.24px] mt-1">
          Make sure the file is below 2mb
        </div>
      </div>
    </div>
  );
};
