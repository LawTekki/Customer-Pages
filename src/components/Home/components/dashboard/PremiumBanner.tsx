import React from "react";
import { motion } from 'framer-motion';

export const PremiumBanner = () => {
  return (
    <div className="px-[12px] sm:px-0 mb-2 sm:mb-6 mt-2 sm:mt-0 fade-in">
      <motion.div
        className="w-full box-border relative bg-[#6B047C] rounded-[1rem] px-4 sm:px-6 py-4 sm:py-5 flex flex-row items-center justify-between overflow-hidden"
        whileHover={{
          y: -8,
          boxShadow: "0 15px 30px rgba(107, 4, 124, 0.4)",
          background: "linear-gradient(135deg, #6B047C 0%, #8A05A3 50%, #6B047C 100%)",
          backgroundSize: "200% 200%",
          transition: {
            y: {
              type: "spring",
              stiffness: 350,  // Increased stiffness for faster initial response
              damping: 18,     // Slightly reduced damping
              mass: 0.9        // Reduced mass for quicker movement
            },
            boxShadow: {
              duration: 0.6,   // Faster shadow transition
              ease: [0.25, 0.1, 0.25, 1]
            },
            background: {
              duration: 0.9,   // Faster background transition
              ease: "easeInOut"
            }
          }
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Background animation element */}
        <motion.div
          className="absolute inset-0 bg-[#6B047C] -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            background: "radial-gradient(circle at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)",
            scale: 1.15,
            transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              scale: {
                duration: 2.2,  // Faster scale animation
                ease: [0.33, 0.9, 0.68, 1]  // Adjusted for faster response
              }
            }
          }}
        />
        {/* Text content */}
        <motion.div
          className="flex-1 pr-2 sm:pr-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}  // Faster initial animation
          whileHover={{
            scale: 1.015,
            x: 2,
            transition: {
              scale: {
                type: "spring",
                stiffness: 250,  // Increased stiffness for faster response
                damping: 12      // Reduced damping for quicker movement
              },
              x: {
                duration: 0.35,  // Faster horizontal movement
                ease: "easeOut"
              }
            }
          }}
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
          transition={{ duration: 0.4, delay: 0.2 }}  // Faster initial animation
          whileHover={{
            scale: 1.08,
            rotate: [0, -3, 3, -2, 0],
            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))",
            transition: {
              rotate: {
                duration: 1.8,  // Slightly faster rotation
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              },
              scale: {
                type: "spring",
                stiffness: 300,  // Increased stiffness for faster response
                damping: 12,     // Reduced damping for quicker movement
                mass: 0.8        // Reduced mass for faster animation
              },
              filter: {
                duration: 0.8,   // Much faster filter transition
                ease: [0.4, 0, 0.2, 1]
              }
            }
          }}
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