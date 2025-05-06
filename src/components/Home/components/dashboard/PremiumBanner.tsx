import React from "react";
import { motion } from 'framer-motion';

export const PremiumBanner = () => {
  return (
    <div className="px-[12px] sm:px-0 mb-2 sm:mb-6 mt-2 sm:mt-0 fade-in">
      <motion.div
        className="w-full box-border relative bg-[#6B047C] rounded-[1rem] px-4 sm:px-6 py-4 sm:py-5 flex flex-row items-center justify-between overflow-hidden hover-lift"
        whileHover={{
          boxShadow: "0 10px 25px rgba(107, 4, 124, 0.3)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text content */}
        <motion.div
          className="flex-1 pr-2 sm:pr-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-white text-[18px] xs:text-[20px] sm:text-2xl md:text-3xl font-medium leading-tight">
            Get free entry to virtual<br />
            events using our promo code
          </h2>
        </motion.div>

        {/* Right side image */}
        <motion.div
          className="flex-shrink-0 sm:ml-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
        >
          <img
            src="/image 38.png"
            alt="Gift decoration"
            className="w-[70px] xs:w-[80px] sm:w-[110px] md:w-[130px] h-[70px] xs:h-[80px] sm:h-[110px] md:h-[130px] object-contain relative z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};