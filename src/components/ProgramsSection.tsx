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
    subtitle?: string;
    clinicalFocus?: string;
    familySupport?: string;
    ctaLabel?: string;
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
    programs, 
    subtitle, 
    clinicalFocus,
    ctaLabel
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {displayPrograms.map((prog, idx) => {
                        const IconComponent = getIconForProgram(prog.slug, idx);
                        return (
                            <motion.div
                                key={idx}
                                initial="initial"
                                whileHover="hover"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    initial: { opacity: 0, y: 40 },
                                    hover: { y: -8 }
                                }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:border-slate-300/60 transition-all duration-500"
                            >
                                {/* Top Image Section */}
                                <div className="relative h-56 xl:h-60 overflow-hidden bg-slate-100">
                                    <Image
                                        src={prog.imageUrl || "https://placehold.co/600x800?text=Aconino+Program"}
                                        alt={prog.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#0a1f44]/5 transition-colors duration-500 group-hover:bg-transparent" />
                                    
                                    <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm z-10 transition-transform duration-300 group-hover:scale-105">
                                        <span className="text-[11px] font-black text-primary tracking-wider uppercase">
                                            {prog.category || "Especialidad"}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-8 xl:p-9 relative flex flex-col bg-white">
                                    {/* Floating Icon */}
                                    <div className="absolute -top-8 right-10 w-16 h-16 bg-accent rounded-2xl shadow-[0_10px_25px_rgba(255,182,18,0.3)] flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 z-20">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#0a1f44] mb-4 group-hover:text-primary transition-colors pr-10">
                                        {prog.title}
                                    </h3>

                                    {/* Description that shows on hover */}
                                    <motion.div
                                        variants={{
                                            initial: { height: 0, opacity: 0, marginTop: 0 },
                                            hover: { height: "auto", opacity: 1, marginTop: 12 }
                                        }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-slate-600 leading-relaxed mb-6">
                                            {prog.desc}
                                        </p>
                                    </motion.div>
                                    
                                    {/* Footer CTA */}
                                    <div className="pt-6 mt-auto border-t border-slate-100">
                                        <Link 
                                            href={`/programas/${prog.slug}`} 
                                            className="inline-flex items-center gap-2 text-[13px] font-bold text-primary uppercase tracking-widest group/btn w-full justify-between"
                                        >
                                            <span className="relative overflow-hidden h-5 w-full flex-1">
                                                <span className="absolute top-0 left-0 w-full transition-transform duration-300 group-hover/btn:-translate-y-full">Más información</span>
                                                <span className="absolute top-0 left-0 w-full translate-y-full transition-transform duration-300 group-hover/btn:translate-y-0 text-accent">Explorar programa</span>
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-accent/10 transition-colors">
                                                <RiArrowRightUpLine className="w-4 h-4 text-slate-400 group-hover/btn:text-accent transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-300" />
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
