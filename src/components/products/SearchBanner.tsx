import React from "react";
import { motion } from 'framer-motion';

export const SearchBanner = () => {
  return (
    <div
      className="w-full max-w-full box-border relative bg-[#6B047C] rounded-[1rem] px-2 py-3 flex flex-col xs:flex-row items-center justify-between min-h-[90px] xs:min-h-[100px] sm:min-h-[150px] mb-2 sm:mb-6 gap-2 xs:gap-3 sm:gap-0 overflow-hidden sm:max-w-screen-xl sm:mx-auto"
      style={{ marginLeft: 'auto', marginRight: 'auto' }}
    >
      {/* Text, Button, Image in a row for mobile */}
      <div className="w-full flex flex-row items-center justify-between gap-2 xs:gap-3 sm:hidden">
        <h2 className="text-white text-[12px] font-bold leading-tight max-w-[110px] text-center flex-1">
          Find legal products<br />and vendors easily
        </h2>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
          className="bg-white hover:bg-gray-100 text-[#6B047C] font-semibold text-[10px] px-1 py-0.5 rounded-md transition-colors whitespace-nowrap shadow min-w-[55px] h-6 mx-1"
        >
          Get started now
        </motion.button>
        <img
          src="/image 38.png"
          alt="Banner decoration"
          className="w-[90px] h-[66px] object-contain relative z-10 flex-shrink-0 ml-1"
          style={{ display: 'block' }}
        />
      </div>
      {/* Desktop/tablet layout remains unchanged */}
      <div className="z-10 flex flex-col sm:flex-row items-start sm:items-center gap-2 xs:gap-5 sm:gap-32 text-left w-full flex-shrink-0 hidden sm:flex sm:mt-7">
        <h2 className="text-white text-[14px] xs:text-[16px] sm:text-xl md:text-2xl font-bold leading-tight max-w-none break-words sm:ml-10 sm:self-start">
          Search thousands of legal products<br />and vendors at Lawtrolley Marketplace
        </h2>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17
          }}
          className="bg-white hover:bg-gray-100 text-[#6B047C] font-semibold text-xs xs:text-sm sm:text-base px-4 xs:px-6 sm:px-7 py-2 xs:py-2.5 sm:py-3 rounded-lg transition-colors whitespace-nowrap shadow w-full sm:w-auto"
        >
          Get started now
        </motion.button>
      </div>
      <div className="w-full flex justify-end items-center mt-2 sm:mt-0 sm:absolute sm:right-16 md:right-24 sm:top-1/2 sm:-translate-y-1/2 pointer-events-none select-none hidden sm:flex">
        <img
          src="/image 38.png"
          alt="Banner decoration"
          className="w-[60px] xs:w-[90px] sm:w-[200px] md:w-[240px] max-w-[35vw] sm:max-w-full h-[40px] xs:h-[60px] sm:h-[120px] md:h-[160px] object-contain relative z-10"
          style={{ display: 'block' }}
        />
      </div>
    </div>
  );
};