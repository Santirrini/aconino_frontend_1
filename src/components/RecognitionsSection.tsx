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
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section className="w-full py-12 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
            
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center mb-8 md:mb-20"
                >
                    <div className="flex items-center gap-3 mb-3 md:mb-6">
                        <div className="h-[1px] md:h-[2px] bg-accent w-8 md:w-12 rounded-full"></div>
                        <span className="text-[10px] md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Excelencia Aconiño</span>
                        <div className="h-[1px] md:h-[2px] bg-accent w-8 md:w-12 rounded-full"></div>
                    </div>

                    <h2 className="text-2xl md:text-6xl font-black text-primary mb-4 leading-tight">
                        {text || "Nuestros Reconocimientos"}
                    </h2>
                    <div className="w-12 md:w-24 h-1 bg-accent/30 rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8"
                >
                    {displayRecognitions.map((award, idx) => {
                        const imgUrl = award.imageUrl || `https://placehold.co/200/ffffff/0c2070?text=Logo+${idx + 1}`;
                        return (
                            <motion.div 
                                variants={cardVariants}
                                key={idx} 
                                className="group relative flex flex-col items-center bg-white p-4 md:p-10 rounded-2xl md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            >
                                <div className="w-16 h-16 md:w-32 md:h-32 relative mb-3 md:mb-8 rounded-xl md:rounded-3xl bg-gray-50 flex items-center justify-center p-2 md:p-4 overflow-hidden">
                                    <Image 
                                        src={imgUrl} 
                                        alt={award.title} 
                                        fill 
                                        className="object-contain p-1 md:p-4 mix-blend-multiply filter group-hover:scale-110 transition-transform duration-500" 
                                    />
                                </div>
                                
                                <h4 className="font-black text-[10px] md:text-xl text-primary mb-1 md:mb-4 leading-tight line-clamp-2 text-center uppercase tracking-tighter md:tracking-normal">
                                    {award.title}
                                </h4>
                                
                                <span className="text-[8px] md:text-xs font-bold text-accent uppercase tracking-widest mt-auto">
                                    {award.meta}
                                </span>

                                <p className="hidden md:block text-gray-500 text-sm leading-relaxed mt-4 line-clamp-3 text-center">
                                    {award.description || "Compromiso constante con la rehabilitación integral y la inclusión social."}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
