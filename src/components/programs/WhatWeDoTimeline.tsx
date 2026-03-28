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
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1f2937]">
          Nuestra Ruta de Intervención
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Un proceso paso a paso diseñado para garantizar el seguimiento integral y evolutivo de nuestros usuarios.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line Gradient */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-primary/30 to-blue-50 transform md:-translate-x-1/2 rounded-full" />

        <div className="space-y-12 md:space-y-0">
          {steps.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item._key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center pt-8 md:pt-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10 transform -translate-x-1/2 md:translate-x-0 md:-ml-3 mt-1.5 md:mt-0 drop-shadow-md">
                  <div className="w-full h-full bg-primary/20 rounded-full animate-ping opacity-75 hidden md:block" />
                </div>

                {/* Content Box */}
                <div className="w-full pl-16 md:pl-0 md:w-1/2 flex group">
                  <div className={`w-full max-w-md ${isEven ? 'md:pl-12' : 'md:pr-12 md:ml-auto'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 group-hover:border-primary/20 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 relative overflow-hidden">
                      {/* Subdued number background */}
                      <div className="absolute -right-6 -top-6 text-9xl font-black text-slate-50 opacity-50 pointer-events-none group-hover:text-blue-50 transition-colors">
                        {item.step}
                      </div>
                      
                      <div className="relative z-10">
                        <span className="text-primary font-bold text-sm tracking-widest uppercase mb-1 block">
                          Paso {item.step}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
