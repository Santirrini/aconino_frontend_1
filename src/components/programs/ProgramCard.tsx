"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
    RiArrowRightUpLine,
    RiHeartPulseLine, 
    RiWalkLine, 
    RiBookOpenLine, 
    RiBrainLine,
    RiStethoscopeLine
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
  const IconComponent = getIconForProgram(slug, index);
  return (
    <motion.div
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        viewport={{ once: true, margin: "-50px" }}
        variants={{
            initial: { opacity: 0, y: 40 },
            hover: { y: -8 }
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative flex flex-col bg-white rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] active:shadow-inner hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-slate-300/60 transition-all duration-500"
    >
        {/* Top Image Section */}
        <div className="relative h-48 md:h-64 xl:h-72 overflow-hidden bg-slate-100">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
            
            {/* Title in Badge */}
            <div className="absolute top-4 left-4 right-12 z-10">
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg inline-block transition-transform duration-300 md:group-hover:scale-105 border border-white/20">
                    <h3 className="text-[10px] md:text-sm font-black text-primary tracking-tight uppercase leading-none">
                        {title}
                    </h3>
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 md:p-8 relative flex flex-col bg-white">
            {/* Floating Icon */}
            <div className="absolute -top-10 right-6 md:-top-12 md:right-10 w-12 h-12 md:w-16 md:h-16 bg-accent rounded-xl md:rounded-2xl shadow-[0_10px_25px_rgba(255,182,18,0.3)] flex items-center justify-center transform md:group-hover:rotate-6 transition-all duration-500 z-20">
                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>

            {/* Category instead of Title at the bottom */}
            <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                {category}
            </span>

            {/* Description - Visible on mobile, hover-expand on desktop */}
            <div className="overflow-hidden">
                <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none transition-all duration-500">
                    {desc}
                </p>
            </div>
            
            {/* Footer CTA */}
            <div className="pt-4 mt-auto border-t border-slate-100">
                <Link 
                    href={`/programas/${slug}`} 
                    className="inline-flex items-center gap-2 text-[10px] md:text-[12px] font-bold text-primary uppercase tracking-widest group/btn w-full justify-between"
                >
                    <span className="relative overflow-hidden h-4 md:h-5 w-full flex-1">
                        <span className="absolute top-0 left-0 w-full transition-transform duration-300 md:group-hover/btn:-translate-y-full truncate">Más información</span>
                        <span className="absolute top-0 left-0 w-full translate-y-full transition-transform duration-300 md:group-hover/btn:translate-y-0 text-accent truncate">Ver detalles</span>
                    </span>
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-50 md:bg-slate-50 flex items-center justify-center md:group-hover/btn:bg-accent/10 transition-colors">
                        <RiArrowRightUpLine className="w-3 h-3 md:w-4 md:h-4 text-slate-400 md:group-hover/btn:text-accent transform transition-all duration-300" />
                    </div>
                </Link>
            </div>
        </div>
    </motion.div>
  );
}
