"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
    RiHeartPulseLine, 
    RiWalkLine, 
    RiBookOpenLine, 
    RiBrainLine,
    RiStethoscopeLine,
    RiAddLine
} from "react-icons/ri";

interface ProgramCardProps {
  title: string;
  desc: string;
  slug: string;
  imageUrl: string;
  category: string;
  index: number;
}

const getIconForProgram = (slug?: string, defaultIdx: number = 0) => {
    const s = slug?.toLowerCase() || '';
    if (s.includes('temprana') || s.includes('estimulacion')) return RiHeartPulseLine;
    if (s.includes('pediasuit') || s.includes('fisica')) return RiWalkLine;
    if (s.includes('aprendizaje') || s.includes('lenguaje')) return RiBookOpenLine;
    if (s.includes('neurodesarrollo') || s.includes('neurologia')) return RiBrainLine;
    
    const fallbackIcons = [RiStethoscopeLine, RiHeartPulseLine, RiBrainLine, RiWalkLine];
    return fallbackIcons[defaultIdx % fallbackIcons.length];
};

export default function ProgramCard({ 
  title, 
  desc, 
  slug, 
  imageUrl, 
  category, 
  index 
}: ProgramCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = getIconForProgram(slug, index);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <motion.div
        layout
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        onClick={toggleExpand}
        viewport={{ once: true, margin: "-50px" }}
        variants={{
            initial: { opacity: 0, y: 40 },
            hover: { y: -8 }
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`group relative flex flex-col bg-white rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-slate-300/60 transition-all duration-500 cursor-pointer ${isExpanded ? 'ring-2 ring-accent shadow-xl' : ''}`}
    >
        {/* Top Image Section */}
        <motion.div layout className="relative h-40 md:h-64 xl:h-72 overflow-hidden bg-slate-100">
            <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
            
            {/* Title in Badge */}
            <div className="absolute top-3 left-3 right-10 md:top-4 md:left-4 md:right-12 z-10">
                <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-lg inline-block border border-white/20">
                    <h3 className="text-[9px] md:text-sm font-black text-primary tracking-tight uppercase leading-none">
                        {title}
                    </h3>
                </div>
            </div>

            {/* Expand Indicator Icon (Mobile Only) */}
            <div className="md:hidden absolute bottom-3 right-3 z-30">
                <motion.div 
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30"
                >
                    <RiAddLine className="w-5 h-5" />
                </motion.div>
            </div>
        </motion.div>

        {/* Content Section */}
        <div className="flex-1 p-4 md:p-8 relative flex flex-col bg-white">
            {/* Floating Icon */}
            <div className="absolute -top-8 right-4 md:-top-12 md:right-10 w-10 h-10 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl shadow-[0_10px_25px_rgba(255,182,18,0.3)] flex items-center justify-center transform transition-all duration-500 z-20 md:group-hover:rotate-6">
                <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-white" />
            </div>

            <span className="text-[9px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-3">
                {category}
            </span>

            {/* Expandable Description Area */}
            <motion.div 
                layout
                initial={false}
                animate={{ height: isExpanded ? "auto" : "3.2rem" }}
                className="relative overflow-hidden md:!h-auto"
            >
                <p className="text-slate-600 text-[10px] md:text-[13px] leading-relaxed">
                    {desc}
                </p>
                
                {/* Fade effect when collapsed (Mobile only) */}
                <AnimatePresence>
                    {!isExpanded && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="md:hidden absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" 
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Mobile Interaction Hint */}
            <div className="md:hidden mt-2 pt-2 border-t border-slate-50 flex items-center justify-between">
                <span className="text-[8px] font-bold text-accent uppercase tracking-tighter">
                    {isExpanded ? "Ver menos" : "Toca para leer más"}
                </span>
            </div>
        </div>
    </motion.div>
  );
}
