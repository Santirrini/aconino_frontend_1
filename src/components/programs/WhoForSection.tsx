"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TargetAudience {
  _key: string;
  icon: string;
  label: string;
}

export interface WhoForSectionProps {
  targetAudience: TargetAudience[];
}

const bentoStyles = [
  "col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-blue-50 to-white", // Featured large card
  "col-span-1 row-span-1 bg-white", 
  "col-span-1 row-span-1 bg-white",
  "col-span-1 row-span-1 bg-white",
  "col-span-1 md:col-span-2 row-span-1 bg-gradient-to-r from-blue-50/50 to-white", // Wide card
  "col-span-1 row-span-1 bg-primary/5", 
];

export function WhoForSection({ targetAudience }: WhoForSectionProps) {
  if (!targetAudience || targetAudience.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4">
          Público Objetivo
        </span>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1f2937]">
          ¿A quiénes están dirigidos?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(140px,auto)]">
        {targetAudience.map((item, index) => {
          // Fallback to standard style if there are more items than mapped styles
          const style = bentoStyles[index % bentoStyles.length];
          const isFeatured = index === 0;

          return (
            <motion.div
              key={item._key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-center items-center text-center shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group ${style}`}
            >
              {isFeatured && (
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors" />
              )}
              
              <div className="relative z-10">
                <span className={`inline-block drop-shadow-sm transition-transform duration-300 group-hover:scale-110 ${isFeatured ? 'text-6xl mb-6' : 'text-4xl mb-4'}`}>
                  {item.icon}
                </span>
                <h3 className={`font-bold text-gray-800 leading-tight ${isFeatured ? 'text-2xl lg:text-3xl max-w-xs mx-auto' : 'text-lg'}`}>
                  {item.label}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
