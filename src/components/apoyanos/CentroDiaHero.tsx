"use client";

import { motion } from "framer-motion";
import { FaHardHat, FaHandsHelping, FaGlobeAmericas } from "react-icons/fa";
import { useDonation } from "@/providers/DonationProvider";

export default function CentroDiaHero() {
  const { openDonationWidget } = useDonation();

  return (
    <section className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary" />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full px-6 py-2 mb-6"
        >
          <FaHardHat className="text-accent" />
          <span className="text-accent font-bold text-sm uppercase tracking-wider">Nueva Construcción</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-6"
        >
          Construyendo <span className="text-accent">Esperanza</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 font-medium"
        >
          El nuevo Centro Día para Adultos
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
        >
          Un espacio dedicado a la neurorehabilitación y cuidado integral de adultos. 
          ¡Ayúdanos a hacer realidad este sueño!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
            <FaGlobeAmericas className="text-accent" />
            <span className="text-white font-medium">Bogotá, Colombia</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 border border-white/20">
            <FaHandsHelping className="text-accent" />
            <span className="text-white font-medium">Donaciones Nacionales e Internacionales</span>
          </div>
        </motion.div>

        <motion.button 
          onClick={openDonationWidget}
          className="inline-flex items-center justify-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-black text-lg tracking-widest shadow-2xl hover:scale-105 hover:bg-yellow-400 transition-all duration-300 uppercase"
        >
          <FaHandsHelping />
          Donar Ahora
        </motion.button>
      </div>
    </section>
  );
}
