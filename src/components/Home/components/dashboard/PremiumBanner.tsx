import React from "react";
import { motion } from 'framer-motion';

export const PremiumBanner = () => {
  return (
    <div className="px-[12px] sm:px-0 mb-2 sm:mb-6 mt-2 sm:mt-0">
      <div
        className="w-full box-border relative bg-[#6B047C] rounded-[1rem] px-4 sm:px-6 py-4 sm:py-5 flex flex-row items-center justify-between overflow-hidden"
      >
        {/* Text content */}
        <div className="flex-1 pr-2 sm:pr-0">
          <h2 className="text-white text-[18px] xs:text-[20px] sm:text-2xl md:text-3xl font-medium leading-tight">
            Get free entry to virtual<br />
            events using our promo code
          </h2>
        </div>
        
        {/* Right side image */}
        <div className="flex-shrink-0 sm:ml-auto">
          <img
            src="/image 38.png"
            alt="Gift decoration"
            className="w-[70px] xs:w-[80px] sm:w-[110px] md:w-[130px] h-[70px] xs:h-[80px] sm:h-[110px] md:h-[130px] object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};