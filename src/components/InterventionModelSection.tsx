"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Handshake, Users, Target, Scissors } from "lucide-react";
import Link from "next/link";

export interface Principle {
  _key: string;
  title: string;
  description: string;
}

export interface TargetAudience {
  _key: string;
  icon: string;
  label: string;
}

export interface InterventionModelSectionProps {
  mainTitle?: string;
  subtitle?: string;
  introText?: string;
  principles?: Principle[];
  targetAudience?: TargetAudience[];
  ctaLabel?: string;
  ctaLink?: string;
}

const defaultPrinciples: Principle[] = [
  { _key: "1", title: "Intervención interdisciplinaria", description: "Coordinación entre fisioterapia, terapia ocupacional, fonoaudiología y psicología." },
  { _key: "2", title: "Centrada en el usuario y familia", description: "Trabajo conjunto entre profesionales, paciente y núcleo familiar en todo el proceso." },
  { _key: "3", title: "Objetivos funcionales", description: "Trabajamos habilidades que permiten mayor independencia en actividades diarias." },
  { _key: "4", title: "Atención personalizada", description: "Diseñamos el tratamiento específicamente para cada usuario tras evaluación." }
];

const defaultTargetAudience: TargetAudience[] = [
  { _key: "1", icon: "👶", label: "Bebés con alto riesgo" },
  { _key: "2", icon: "🧒", label: "Niños y jóvenes" },
  { _key: "3", icon: "👪", label: "Familias cuidadoras" },
];

// Map a consistent icon for principle cards index
const getIconForIndex = (index: number) => {
  switch (index % 4) {
    case 0: return <Handshake className="w-8 h-8 text-primary" strokeWidth={1.5} />;
    case 1: return <Users className="w-8 h-8 text-primary" strokeWidth={1.5} />;
    case 2: return <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />;
    case 3: return <Scissors className="w-8 h-8 text-primary" strokeWidth={1.5} />;
    default: return <Target className="w-8 h-8 text-primary" strokeWidth={1.5} />;
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

export function InterventionModelSection({
  mainTitle = "Nos centramos más en la actividad y menos en la discapacidad",
  subtitle = "Potenciar habilidades, no solo tratar dificultades",
  introText = "En Aconiño trabajamos desde un enfoque interdisciplinario centrado en el niño y su familia, promoviendo el desarrollo integral, la autonomía y la participación social.",
  principles = defaultPrinciples,
  targetAudience = defaultTargetAudience,
  ctaLabel = "Ver todos los programas",
  ctaLink = "/programas"
}: InterventionModelSectionProps) {
  
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <motion.span 
              variants={itemVariants} 
              className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 text-primary text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm backdrop-blur-sm"
            >
              {subtitle}
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#1f2937] leading-[1.15] mb-6"
            >
              {mainTitle}
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              {introText}
            </motion.p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={principle._key}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center h-full"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-colors duration-500 ease-out" />
                
                <div className="relative z-10 p-4 rounded-xl bg-blue-50/60 mb-6 group-hover:scale-110 transition-transform duration-300 ease-out">
                  {getIconForIndex(index)}
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {principle.title}
                </h3>
                
                <p className="relative z-10 text-gray-600 text-sm leading-relaxed font-medium">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Target Audience Footer Bar */}
          <motion.div 
            variants={itemVariants}
            className="rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-50/40 to-transparent -z-10 hidden lg:block" />

            {/* Audience items */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-10 w-full lg:w-auto flex-wrap">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest sm:border-r border-gray-200 sm:pr-8">
                Acompañamos a
              </span>
              
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                {targetAudience.slice(0, 3).map((audience) => (
                  <div key={audience._key} className="flex items-center gap-2 group cursor-default">
                    <span className="text-2xl lg:text-3xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 origin-bottom">
                      {audience.icon}
                    </span>
                    <span className="font-semibold text-gray-800 text-sm lg:text-base">
                      {audience.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link 
              href={ctaLink}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(29,78,216,0.3)] shrink-0 w-full sm:w-auto"
            >
              <span className="mr-2 text-base font-bold">{ctaLabel}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                <div className="relative h-full w-8 bg-white/20" />
              </div>
            </Link>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
