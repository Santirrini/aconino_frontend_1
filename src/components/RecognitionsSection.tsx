"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface RecognitionItem {
    title: string;
    meta: string;
    imageUrl?: string;
    description?: string;
}

interface RecognitionsSectionProps {
    recognitions?: RecognitionItem[];
    text?: string;
}

export default function RecognitionsSection({ recognitions, text }: RecognitionsSectionProps) {
    const defaultRecognitions: RecognitionItem[] = [
        { title: "Fundación Bolívar Davivienda", meta: "Noviembre de 2017" },
        { title: "Comisión Segunda Constitucional", meta: "Diciembre de 2025" },
        { title: "Compensar", meta: "Noviembre 2017" },
        { title: "Concejo de Bogotá", meta: "Cruz de Oro" }
    ];

    const displayRecognitions = recognitions || defaultRecognitions;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
        }
    };

    return (
        <section className="w-full py-12 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Atmosferic Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
            
            <div className="max-w-[1400px] mx-auto px-6 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center mb-10 md:mb-20"
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="h-[1px] md:h-[2px] bg-accent w-8 md:w-12"></div>
                        <span className="text-[10px] md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Excelencia Aconiño</span>
                        <div className="h-[1px] md:h-[2px] bg-accent w-8 md:w-12"></div>
                    </div>

                    <h2 className="text-3xl md:text-6xl font-black text-primary mb-4 leading-tight">
                        {text || "Nuestros Reconocimientos"}
                    </h2>
                    <div className="w-12 md:w-24 h-1 bg-accent/30 rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10"
                >
                    {displayRecognitions.map((award, idx) => {
                        const imgUrl = award.imageUrl || `https://placehold.co/200/ffffff/0c2070?text=Logo+${idx + 1}`;
                        return (
                            <motion.div 
                                variants={cardVariants}
                                whileTap={{ scale: 0.98 }}
                                key={idx} 
                                className="group relative flex flex-col items-center bg-white p-5 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-[0_15px_40px_rgba(8,112,184,0.08)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.15)] transition-all duration-500 border border-white"
                            >
                                {/* Logo Frame */}
                                <div className="w-20 h-20 md:w-36 md:h-36 relative mb-4 md:mb-8 rounded-xl md:rounded-3xl bg-gray-50 flex items-center justify-center p-3 md:p-6 overflow-hidden group-hover:bg-white transition-colors duration-500 shadow-inner">
                                    <Image 
                                        src={imgUrl} 
                                        alt={award.title} 
                                        fill 
                                        className="object-contain p-2 md:p-4 mix-blend-multiply filter group-hover:scale-110 transition-transform duration-700" 
                                    />
                                    {/* Internal Shine border matching rest of site */}
                                    <div className="absolute inset-1.5 md:inset-3 border border-white/40 rounded-[0.6rem] md:rounded-[1.4rem] pointer-events-none" />
                                </div>
                                
                                <h4 className="font-black text-[11px] md:text-xl text-primary mb-1 md:mb-4 leading-tight line-clamp-2 text-center transition-colors duration-300 group-hover:text-accent">
                                    {award.title}
                                </h4>
                                
                                <span className="text-[9px] md:text-xs font-bold text-accent/80 uppercase tracking-[0.1em] mt-auto">
                                    {award.meta}
                                </span>

                                <p className="hidden md:block text-gray-500 text-sm leading-relaxed mt-6 line-clamp-3 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {award.description || "Compromiso constante con la rehabilitación integral y la inclusión social."}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Decorative bottom SVG Pattern */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
                <Image
                    src="https://placehold.co/1920x800/0c2070/ffffff?text=Pattern+Icons"
                    alt="Decoración"
                    fill
                    className="object-cover grayscale"
                />
            </div>
        </section>
    );
}
