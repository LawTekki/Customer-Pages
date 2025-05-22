import React from "react";
import "../../animations.css";

export const WalletBalances: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch font-medium leading-[1.3] max-md:max-w-full -mt-12 max-md:-mt-6">
      <h1 className="text-[#1A011E] text-[32px] font-semibold tracking-[-0.64px] mb-6 fade-in max-md:text-2xl max-md:mb-4">
        Wallet
      </h1>
      <div className="flex flex-col gap-4">
        <div className="justify-center items-stretch flex w-full flex-col overflow-hidden text-[#1C7C04] bg-[#F5FFFB] px-6 py-7 rounded-lg max-md:max-w-full max-md:px-3 max-md:py-4 card-hover fade-in">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-[#1C7C04] text-sm">
                Wallet balance
              </div>
              <div className="flex items-center mt-1">
                <span className="text-[#1C7C04] text-2xl font-medium">
                  $50,000
                </span>
              </div>
            </div>
            <div className="bg-[#1C7C04] p-2 rounded-md icon-bounce">
              <img src="/wallet-03.svg" width={24} height={24} alt="Wallet Icon" />
            </div>
          </div>
        </div>
        <div className="items-stretch flex w-full flex-col overflow-hidden text-[#FDC721] justify-center bg-[#FFFBF0] px-6 py-7 rounded-lg max-md:max-w-full max-md:px-3 max-md:py-4 card-hover fade-in">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="text-[#FDC721] text-sm">
                Lawtrolley credit
              </div>
              <div className="flex items-center mt-1">
                <span className="text-[#FDC721] text-2xl font-medium">
                  $50,000
                </span>
              </div>
            </div>
            <div className="bg-[#FDC721] p-2 rounded-md icon-bounce">
              <img src="/wallet-03.svg" width={24} height={24} alt="Wallet Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
