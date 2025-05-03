import React from "react";

export const WalletBalances: React.FC = () => {
  return (
    <div className="flex h-full flex-col items-stretch font-medium leading-[1.3] max-md:max-w-full">
      <h1 className="text-[#1A011E] text-[32px] font-semibold tracking-[-0.64px] mb-4">
        Wallet
      </h1>
      <div className="justify-center items-stretch flex w-full flex-col overflow-hidden text-[#1C7C04] bg-[#F5FFFB] mt-2 px-6 py-4 rounded-lg max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-[40px_100px] justify-between">
          <div className="self-stretch flex flex-col items-stretch w-[108px] my-auto">
            <div className="text-[#1C7C04] text-sm tracking-[-0.28px]">
              Wallet balance
            </div>
            <div className="flex items-center whitespace-nowrap justify-center">
              <span className="text-[#1C7C04] text-xl tracking-[-0.4px] self-stretch my-auto">
                $
              </span>
              <span className="text-[#1C7C04] text-2xl tracking-[-0.48px] self-stretch my-auto">
                50,000
              </span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/ee3b39294d9240b3eb808a769be47fcba5316003?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
            alt="Wallet icon"
          />
        </div>
      </div>
      <div className="items-stretch flex w-full flex-col overflow-hidden text-[#FDC721] justify-center bg-[#FFFBF0] mt-4 px-6 py-4 rounded-lg max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-[40px_100px] justify-between">
          <div className="self-stretch flex flex-col items-stretch w-[108px] my-auto">
            <div className="text-[#FDC721] text-sm tracking-[-0.28px]">
              Lawtrolley credit
            </div>
            <div className="flex items-center whitespace-nowrap justify-center">
              <span className="text-[#FDC721] text-xl tracking-[-0.4px] self-stretch my-auto">
                $
              </span>
              <span className="text-[#FDC721] text-2xl tracking-[-0.48px] self-stretch w-[81px] my-auto">
                50,000
              </span>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/12ee523f337c3199f1d4245d46cf5c18f49706a7?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-8 self-stretch shrink-0 my-auto"
            alt="Credit icon"
          />
        </div>
      </div>
    </div>
  );
};
