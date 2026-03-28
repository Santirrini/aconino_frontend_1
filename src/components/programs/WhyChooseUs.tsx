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
    <div className="w-full max-w-5xl mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1f2937] mb-4">
          ¿Por qué elegir a Aconiño?
        </h2>
        <div className="w-24 h-1.5 bg-primary rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={item._key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex items-start gap-4 p-6 bg-white rounded-[1.5rem] border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-all group"
          >
            <div className="shrink-0 mt-1">
              {/* Animated checkmark icon */}
              <motion.div
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              >
                <CheckCircle2 className="w-8 h-8 text-green-500 drop-shadow-sm group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              </motion.div>
            </div>
            <p className="font-semibold text-gray-700 leading-snug pt-1.5">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
