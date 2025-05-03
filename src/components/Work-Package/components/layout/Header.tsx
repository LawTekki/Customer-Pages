import React from "react";

export const Header = () => {
  return (
    <header className="border-b-[color:var(--Grey-2,#E6E6E6)] bg-white flex w-full items-stretch gap-5 overflow-hidden flex-wrap justify-between px-[23px] py-5 rounded-[8px_0px_0px_0px] border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-[40px_49px] leading-[1.3]">
        <div className="text-[#1A011E] text-[32px] font-semibold">Logo</div>
        <div className="text-[#808080] text-xl font-medium tracking-[-0.4px] basis-auto mt-[13px]">
          Welcome, <span className="text-[#1A011E]">Wisdom</span>
        </div>
      </div>

      <div className="flex items-stretch gap-10 flex-wrap max-md:max-w-full">
        <div className="items-center border border-[color:var(--Grey-1,#F2F2F2)] bg-neutral-50 flex gap-2.5 text-xs text-[#CCC] font-medium whitespace-nowrap tracking-[-0.24px] leading-[1.3] grow shrink basis-auto my-auto px-2 py-2.5 rounded-lg border-solid">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/e99240e643f1081069ed54d43c2dd52d09d4a813?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            alt="Search icon"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-[#CCC]"
          />
        </div>

        <div className="flex items-center gap-8 grow shrink basis-auto">
          <div className="self-stretch flex items-center gap-4 my-auto">
            <button aria-label="Notification">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/13e6603600c3da4a1ee847fc722705b7e606fd32?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
                alt="Notification"
              />
            </button>
            <button aria-label="Messages">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/223e0e68f3d0fbcae82f9d1a6da7d9a9acb992cb?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto"
                alt="Messages"
              />
            </button>
            <button aria-label="Profile">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/0e3e81f49673001f85dfba73457774a0c75caf12?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-10 self-stretch shrink-0 my-auto rounded-lg"
                alt="Profile"
              />
            </button>
          </div>

          <button className="justify-center items-center border border-[color:var(--Foundation-Purple-Normal,#6B047C)] self-stretch flex gap-2 text-base text-[#6B047C] font-medium tracking-[-0.32px] my-auto p-2 rounded-lg border-solid">
            <span>Quick actions</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/eaf4ee83c343d271c8f43d690aea5ba410ec23f1?placeholderIfAbsent=true"
              className="aspect-[2] object-contain w-8 self-stretch shrink-0 my-auto"
              alt="Actions"
            />
          </button>
        </div>
      </div>
    </header>
  );
};
