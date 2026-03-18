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
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const } 
        }
    };

    return (
        <section className="w-full py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center mb-20"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] bg-accent w-12 rounded-full"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">Excelencia Aconiño</span>
                        <div className="h-[2px] bg-accent w-12 rounded-full"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6">
                        {text || "Nuestros Reconocimientos"}
                    </h2>
                    <div className="w-24 h-1 bg-accent/30 rounded-full"></div>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {displayRecognitions.map((award, idx) => {
                        const imgUrl = award.imageUrl || `https://placehold.co/200/ffffff/0c2070?text=Logo+${idx + 1}`;
                        const desc = award.description || "Compromiso constante con la rehabilitación integral y la inclusión social de niños y jóvenes.";
                        return (
                            <motion.div 
                                variants={cardVariants}
                                key={idx} 
                                className="group relative flex flex-col h-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(8,112,184,0.1)] transition-all duration-500 border border-gray-100/50 hover:border-accent/20"
                            >
                                {/* Decorative corner element */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent rounded-tr-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative z-10 flex flex-col items-center h-full">
                                    <div className="w-32 h-32 relative mb-10 rounded-3xl bg-gray-50/50 flex items-center justify-center p-6 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-accent/5 transition-all duration-500 overflow-hidden border border-gray-100">
                                        <Image 
                                            src={imgUrl} 
                                            alt={award.title} 
                                            fill 
                                            className="object-contain p-4 mix-blend-multiply filter group-hover:brightness-105 transition-all" 
                                        />
                                    </div>
                                    
                                    <h4 className="font-extrabold text-xl text-primary mb-4 leading-tight group-hover:text-accent transition-colors duration-300">
                                        {award.title}
                                    </h4>
                                    
                                    <div className="w-10 h-[2px] bg-gray-100 group-hover:bg-accent/40 mb-6 transition-all duration-500"></div>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1 line-clamp-4 group-hover:text-gray-600 transition-colors">
                                        {desc}
                                    </p>
                                    
                                    <div className="pt-6 border-t border-gray-50 w-full">
                                        <span className="inline-flex items-center justify-center w-full bg-primary/[0.03] text-primary/70 font-bold text-[10px] sm:text-xs px-5 py-3 rounded-2xl uppercase tracking-[0.15em] group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-500">
                                            {award.meta}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>

            {/* Premium background image handling */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-gray-50 opacity-60"></div>
                <Image
                    src="https://placehold.co/1920x800/0c2070/ffffff?text=Iconos+Aconino+Patron"
                    alt="Decoración de fondo"
                    fill
                    className="object-cover opacity-[0.03] grayscale pointer-events-none"
                />
            </div>
        </section>
    );
}