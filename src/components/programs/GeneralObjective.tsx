"use client";

import React from "react";
import { motion } from "framer-motion";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export function GeneralObjective() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 text-accent/30">
            <RiDoubleQuotesL className="text-7xl md:text-9xl" />
          </div>
          
          <h2 className="text-sm md:text-lg font-black tracking-[0.3em] uppercase text-accent mb-8">
            Objetivo General del Programa
          </h2>
          
          <p className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight md:leading-tight mb-8 max-w-4xl italic">
            Promover el desarrollo integral, la funcionalidad y la participación social de niños, niñas y jóvenes con alteraciones del neurodesarrollo mediante un abordaje interdisciplinario centrado en la familia.
          </p>
          
          <div className="mt-4 text-accent/30 flex justify-end w-full max-w-4xl">
            <RiDoubleQuotesR className="text-7xl md:text-9xl" />
          </div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-accent/50 rounded-full mt-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
