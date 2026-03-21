"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

interface ImpactHeaderProps {
  title?: string | null;
}

export default function ImpactHeader({ title }: ImpactHeaderProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 md:mb-20"
    >
      <div className="flex justify-center mb-4">
        <FaHeart className="text-accent text-3xl md:text-4xl animate-pulse" />
      </div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-primary uppercase tracking-tighter mb-4 leading-tight">
        {title ? (
            <span dangerouslySetInnerHTML={{ __html: title.replace('transforma', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">transforma</span>') }} />
        ) : (
            <>Tu apoyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">transforma</span> vidas</>
        )}
      </h2>
      <p className="text-base md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
        Cada aporte cuenta. Con tu ayuda logramos que más niños reciban la atención terapéutica que necesitan para cumplir sus sueños.
      </p>
    </motion.div>
  );
}
