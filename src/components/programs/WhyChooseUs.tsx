"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export interface WhyChooseUsItem {
  _key: string;
  text: string;
}

export interface WhyChooseUsProps {
  items: WhyChooseUsItem[];
}

export function WhyChooseUs({ items }: WhyChooseUsProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full max-w-6xl mx-auto py-8 md:py-16 px-4">
      {/* Optimized Header for Mobile Overview */}
      <div className="text-center mb-8 md:mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-black tracking-[0.2em] uppercase text-[10px] md:text-sm mb-2 md:mb-4 block"
        >
          Nuestra Propuesta
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-5xl lg:text-6xl font-black text-primary leading-tight px-2"
        >
          ¿Por qué elegir a Aconiño?
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 md:h-1.5 bg-accent rounded-full mx-auto mt-4 md:mt-8"
        />
      </div>

      {/* Grid Optimized for Mobile Real Estate */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item._key}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
            className="flex items-center sm:items-start gap-3 md:gap-5 p-4 md:p-8 bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all group"
          >
            <div className="shrink-0">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-green-50 flex items-center justify-center border border-green-100 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-500 shadow-sm group-hover:shadow-green-200">
                <CheckCircle2 
                  className="w-5 h-5 md:w-7 md:h-7 text-green-600 group-hover:text-white transition-colors duration-500" 
                  strokeWidth={3} 
                />
              </div>
            </div>
            <p className="text-sm md:text-base font-bold text-gray-700 leading-tight md:leading-snug">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
