"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useDonation } from "../providers/DonationProvider";

// Sub-components
import ImpactStats from "./impact/ImpactStats";
import ImpactStories from "./impact/ImpactStories";

const defaultStats = [
  { id: 1, value: 150, suffix: "+", label: "Niños atendidos" },
  { id: 2, value: 25, suffix: "", label: "Años de servicio" },
  { id: 3, value: 5000, suffix: "+", label: "Sesiones anuales" },
];

const defaultStories = [
  { id: 1, name: "M.", story: "Gracias a las terapias, M. ha logrado dar sus primeros pasos independientes.", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "J.", story: "El programa Pediasuit transformó la calidad de vida de toda nuestra familia.", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "S.", story: "Verlo sonreír y jugar con otros niños es el mayor regalo que pudimos recibir.", img: "https://images.unsplash.com/photo-1542887800-faca0261c9e1?q=80&w=600&auto=format&fit=crop" }
];

interface ImpactStat {
  label: string;
  value: string;
}

interface ImpactStory {
  name: string;
  quote: string;
  image?: { url?: string } | string | number | null;
}

interface ImpactSectionProps {
  title?: string | null;
  stats?: ImpactStat[] | null;
  stories?: ImpactStory[] | null;
  ctaButtonText?: string | null;
}

export default function ImpactSection({ title, stats = [], stories: storiesProp, ctaButtonText }: ImpactSectionProps) {
  const { openDonationWidget } = useDonation();

  // Process Stats
  const processedStats = stats && stats.length > 0 
    ? stats.map((s, i) => {
        const numMatch = s.value.match(/\d+/);
        const val = numMatch ? parseInt(numMatch[0]) : 0;
        const suffix = s.value.replace(/\d+/g, '').trim();
        return { id: i + 1, value: val, suffix, label: s.label };
      })
    : defaultStats;

  // Process Stories
  const processedStories = storiesProp && storiesProp.length > 0
    ? storiesProp.map((s, i) => ({
        id: i + 1,
        name: s.name,
        story: s.quote,
        img: (typeof s.image === 'object' ? s.image?.url : (s.image as string)) || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
    }))
    : defaultStories;

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Premium Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
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

        {/* Modular Components */}
        <ImpactStats stats={processedStats} />
        
        <ImpactStories stories={processedStories} />

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center px-4"
        >
          <button
            onClick={() => openDonationWidget()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent text-primary px-10 py-4 rounded-full font-black text-lg tracking-widest shadow-xl shadow-accent/20 active:scale-95 transition-all group border-2 border-accent hover:bg-transparent hover:text-accent"
          >
            <FaHeart className="group-hover:scale-125 transition-transform duration-300" />
            {ctaButtonText?.toUpperCase() || "APADRINA UN NIÑO"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
