"use client";

import React from "react";
import { motion } from "framer-motion";

export interface WhatWeDoStep {
  _key: string;
  step: number;
  title: string;
  description: string;
}

export interface WhatWeDoTimelineProps {
  steps: WhatWeDoStep[];
}

export function WhatWeDoTimeline({ steps }: WhatWeDoTimelineProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto py-16">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
        >
          Nuestra Metodología
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-primary"
        >
          ¿Qué hacemos?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg font-medium"
        >
          El programa está conformado por una ruta integral diseñada para garantizar el desarrollo óptimo de cada niño.
        </motion.p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 transform md:-translate-x-1/2 rounded-full hidden sm:block" />

        <div className="space-y-16 md:space-y-32">
          {steps.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item._key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step Number Circle */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-2xl bg-primary text-white font-black flex items-center justify-center z-20 transform -translate-x-1/2 md:translate-x-0 md:-ml-6 shadow-[0_10px_25px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform hidden sm:flex">
                  {item.step}
                </div>

                {/* Content Box */}
                <div className="w-full pl-20 md:pl-0 md:w-1/2 flex group">
                  <div className={`w-full ${isEven ? 'md:pl-16' : 'md:pr-16 md:ml-auto md:text-right'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100 group-hover:border-primary/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 relative overflow-hidden"
                    >
                      {/* Large Subdued Number */}
                      <div className={`absolute -bottom-10 ${isEven ? '-right-10' : '-left-10'} text-[12rem] font-black text-primary/[0.03] pointer-events-none select-none`}>
                        {item.step}
                      </div>
                      
                      <div className="relative z-10">
                        <span className="text-accent font-black text-xs tracking-widest uppercase mb-4 block">
                          Fase {item.step}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-primary mb-5 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed text-base md:text-lg font-medium">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
