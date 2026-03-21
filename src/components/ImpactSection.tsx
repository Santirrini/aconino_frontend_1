"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaHeart, FaChild, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import { useScrollReveal, fadeVariants } from "./animations";
import { useDonation } from "../providers/DonationProvider";
import Image from "next/image";

// Icons rendered at render time via index lookup — never stored in data objects
const STAT_ICONS = [FaChild, FaCalendarAlt, FaHandsHelping];

const defaultStats = [
  { id: 1, value: 150, suffix: "+", label: "Niños atendidos" },
  { id: 2, value: 25, suffix: "", label: "Años de servicio" },
  { id: 3, value: 5000, suffix: "+", label: "Sesiones anuales" },
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
  const scrollReveal = useScrollReveal();
  const { openDonationWidget } = useDonation();

  // DEBUG
  console.log('=== ImpactSection received ===');
  console.log('storiesProp:', storiesProp);
  console.log('storiesProp length:', storiesProp?.length);

  const displayStories = storiesProp && storiesProp.length > 0
    ? storiesProp.map((s, i) => ({
        id: i + 1,
        name: s.name,
        story: s.quote,
        img: (typeof s.image === 'object' ? s.image?.url : (s.image as string)) || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
    }))
    : [
        {
          id: 1,
          name: "M.",
          story: "Gracias a las terapias, M. ha logrado dar sus primeros pasos independientes.",
          img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
        },
        {
          id: 2,
          name: "J.",
          story: "El programa Pediasuit transformó la calidad de vida de toda nuestra familia.",
          img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600&auto=format&fit=crop"
        },
        {
          id: 3,
          name: "S.",
          story: "Verlo sonreír y jugar con otros niños es el mayor regalo que pudimos recibir.",
          img: "https://images.unsplash.com/photo-1542887800-faca0261c9e1?q=80&w=600&auto=format&fit=crop"
        }
    ];

  // DEBUG displayStories
  console.log('=== displayStories ===');
  console.log('displayStories length:', displayStories.length);
  console.log('displayStories:', displayStories);

  const displayStats = stats && stats.length > 0 
    ? stats.map((s, i) => {
        const numMatch = s.value.match(/\d+/);
        const val = numMatch ? parseInt(numMatch[0]) : 0;
        const suffix = s.value.replace(/\d+/g, '').trim();
        return {
            id: i + 1,
            value: val,
            suffix: suffix,
            label: s.label,
        };
      })
    : defaultStats;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          {...scrollReveal} 
          variants={fadeVariants}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaHeart className="text-accent text-4xl" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary uppercase tracking-tighter mb-4">
            {title ? (
                <span dangerouslySetInnerHTML={{ __html: title.replace('transforma', '<span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">transforma</span>') }} />
            ) : (
                <>Tu apoyo <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">transforma</span> vidas</>
            )}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Cada aporte cuenta. Con tu ayuda logramos que más niños reciban la atención terapéutica que necesitan.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {displayStats.map((stat, idx) => {
            const IconComponent = STAT_ICONS[idx % STAT_ICONS.length];
            return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.id * 0.1 }}
              className="bg-gray-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-xl md:text-3xl text-secondary mb-3 md:mb-4 shadow-sm">
                <IconComponent />
              </div>
              <div className="text-2xl md:text-5xl font-black text-primary mb-1 md:mb-2 flex items-baseline">
                <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-xl md:text-3xl text-accent ml-0.5 md:ml-1">{stat.suffix}</span>
              </div>
              <p className="text-[10px] md:text-lg font-bold text-gray-500 uppercase tracking-wide leading-tight px-1">{stat.label}</p>
            </motion.div>
          )})}
        </div>

        {/* Stories - Horizontal Scroll on Mobile */}
        <div className="relative w-full mb-12 md:mb-16 overflow-hidden">
          <div 
            className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scroll-smooth flex-nowrap"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {displayStories.map((story, idx) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative min-w-[85vw] md:min-w-0 flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 snap-center bg-slate-100 border border-slate-100"
              >
                <div className="relative h-64 md:h-72 w-full bg-slate-200">
                  <Image
                    src={story.img}
                    alt={`Historia de ${story.name}`}
                    fill
                    unoptimized={story.img.includes('aconino.org')}
                    className="object-cover transition-transform duration-700 md:group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full text-white z-10">
                  <h3 className="text-xl md:text-2xl font-black mb-1 md:mb-2">{story.name}</h3>
                  <p className="text-white/80 leading-tight font-medium text-xs md:text-sm italic">
                    &ldquo;{story.story}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Hint - Visual indicator that there is more content */}
          <div className="flex justify-center gap-1.5 mt-2 md:hidden">
            {displayStories.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          {...scrollReveal}
          variants={fadeVariants}
          className="flex justify-center"
        >
          <button
            onClick={() => openDonationWidget()}
            className="flex items-center gap-3 bg-accent text-primary px-10 py-5 rounded-full font-black text-xl tracking-widest shadow-xl shadow-accent/40 hover:scale-105 hover:bg-yellow-400 transition-all duration-300 group"
          >
            <FaHeart className="group-hover:scale-125 transition-transform duration-300" />
            {ctaButtonText || "APADRINA UN NIÑO"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}