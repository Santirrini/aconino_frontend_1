"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface Principle {
  _key: string;
  title: string;
  description: string;
}

export interface PrinciplesAccordionProps {
  principles: Principle[];
}

export function PrinciplesAccordion({ principles }: PrinciplesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!principles || principles.length === 0) return null;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {principles.map((principle, index) => {
        const isOpen = openIndex === index;

        return (
          <div 
            key={principle._key}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-blue-50/50 border-blue-100 shadow-sm' : 'bg-white border-gray-100 hover:border-gray-200'}`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className={`text-lg font-semibold transition-colors duration-300 gap-4 flex items-center ${isOpen ? 'text-primary' : 'text-gray-800'}`}>
                <span className={`flex items-center justify-center w-8 h-8 rounded-full text-sm shrink-0 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {index + 1}
                </span>
                {principle.title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`shrink-0 ml-4 ${isOpen ? 'text-primary' : 'text-gray-400'}`}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 }
                  }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <div className="px-6 pb-6 pt-0 ml-12">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
