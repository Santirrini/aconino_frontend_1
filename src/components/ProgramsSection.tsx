"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
    RiHeartPulseLine, 
    RiWalkLine, 
    RiBookOpenLine, 
    RiBrainLine,
    RiArrowRightUpLine,
    RiStethoscopeLine
} from "react-icons/ri";

interface ProgramItem {
    title: string;
    desc: string;
    slug?: string;
    imageUrl?: string;
    category?: string;
}

interface ProgramsSectionProps {
    programs?: ProgramItem[];
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

export default function ProgramsSection({ 
    programs
}: ProgramsSectionProps) {
    
    const defaultPrograms = [
        {
            title: "Atención Temprana",
            category: "0 a 3 años",
            desc: "Programa terapéutico integral para apoyar el desarrollo sicomotor en la primera infancia.",
            slug: "atencion-temprana",
            imageUrl: "https://aconino.org/wp-content/uploads/2024/03/visita-claudia-aconino-2024-731x1024.jpg"
        },
        {
            title: "Protocolo PediaSuit",
            category: "Terapia Intensiva",
            desc: "Uso de traje ortopédico dinámico para potenciar habilidades motoras y funcionales.",
            slug: "pediasuit",
            imageUrl: "https://aconino.org/wp-content/uploads/2024/02/mujer-ocupada-haciendo-muchas-cosas-vez-scaled.jpg"
        },
        {
            title: "Apoyo al Aprendizaje",
            category: "3 a 14 años",
            desc: "Intervención integral para niños con retos pedagógicos y dificultades cognitivas.",
            slug: "apoyo-aprendizaje",
            imageUrl: "https://aconino.org/wp-content/uploads/2020/07/noticia-2-opt.jpg"
        },
        {
            title: "Neurodesarrollo",
            category: "Niños y Jóvenes",
            desc: "Tratamientos especializados bajo el modelo contemporáneo de neurodesarrollo NDT.",
            slug: "neurodesarrollo",
            imageUrl: "https://aconino.org/wp-content/uploads/2022/07/curso-pereira-2022.jpg"
        }
    ];

    const displayPrograms = (programs && programs.length > 0) ? programs : defaultPrograms;

    return (
        <section className="w-full py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Grid de Tarjetas */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {displayPrograms.map((prog, idx) => {
                        const IconComponent = getIconForProgram(prog.slug, idx);
                        return (
                            <motion.div
                                key={idx}
                                initial="initial"
                                whileHover="hover"
                                whileTap={{ scale: 0.98 }}
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    initial: { opacity: 0, y: 40 },
                                    hover: { y: -8 }
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative flex flex-col bg-white rounded-2xl md:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] active:shadow-inner hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-slate-300/60 transition-all duration-500"
                            >
                                {/* Top Image Section */}
                                <div className="relative h-48 md:h-64 xl:h-72 overflow-hidden bg-slate-100">
                                    <Image
                                        src={prog.imageUrl || "https://placehold.co/600x800?text=Aconino+Program"}
                                        alt={prog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 md:group-hover:scale-105"
                                        unoptimized
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80" />
                                    
                                    {/* Title in Badge */}
                                    <div className="absolute top-4 left-4 right-12 z-10">
                                        <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg inline-block transition-transform duration-300 md:group-hover:scale-105 border border-white/20">
                                            <h3 className="text-[10px] md:text-sm font-black text-primary tracking-tight uppercase leading-none">
                                                {prog.title}
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
                                        {prog.category || "Programa Aconiño"}
                                    </span>

                                    {/* Description - Visible on mobile, hover-expand on desktop */}
                                    <div className="overflow-hidden">
                                        <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed mb-4 line-clamp-2 md:line-clamp-none transition-all duration-500">
                                            {prog.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Footer CTA */}
                                    <div className="pt-4 mt-auto border-t border-slate-100">
                                        <Link 
                                            href={`/programas/${prog.slug}`} 
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
                    })}
                </div>
            </div>
            
            {/* Elemento de Diseño Abstracto */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none -ml-24 select-none z-0">
                <span className="text-[28rem] font-black text-[#0a1f44] leading-none tracking-tighter">ACN</span>
            </div>
        </section>
    );
}
