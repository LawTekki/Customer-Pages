import React from "react";

export const QuickActions: React.FC = () => {
  return (
    <button className="justify-center items-center border border-[color:var(--Foundation-Purple-Normal,#6B047C)] self-stretch flex gap-2 text-base text-[#6B047C] font-medium tracking-[-0.32px] my-auto p-2 rounded-lg border-solid hover:bg-[#6B047C] hover:text-white transition-colors">
      <span className="text-inherit self-stretch my-auto">Quick actions</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7a737192f8d34a60eda7ca80cd4266bdc30da160?placeholderIfAbsent=true"
        alt="Actions"
        className="aspect-[2] object-contain w-8 self-stretch shrink-0 my-auto"
      />
    </button>
  );
};
