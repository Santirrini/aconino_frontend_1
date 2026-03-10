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
}

export default function RecognitionsSection({ recognitions }: RecognitionsSectionProps) {
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
        <section className="w-full py-20 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center mb-16"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-[2px] bg-accent w-12"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Aconino</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary">
                        Nuestros Reconocimientos
                    </h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {displayRecognitions.map((award, idx) => {
                        const imgUrl = award.imageUrl || `https://via.placeholder.com/200/ffffff/0c2070?text=Logo+${idx + 1}`;
                        const desc = award.description || "Certifica que la Asociación Centro de Atención para Niños ha demostrado excelencia en su labor...";
                        return (
                            <motion.div 
                                variants={cardVariants}
                                key={idx} 
                                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-accent flex flex-col items-center text-center group transform hover:-translate-y-2"
                            >
                                <div className="w-32 h-32 relative mb-8 rounded-full bg-gray-50 flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-500">
                                    <Image src={imgUrl} alt="Premio" fill className="object-contain p-4 mix-blend-multiply" />
                                </div>
                                <h4 className="font-extrabold text-lg text-primary mb-4 leading-tight">{award.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                                    {desc}
                                </p>
                                <span className="inline-block bg-primary/5 text-primary font-bold text-xs px-4 py-2 rounded-full uppercase tracking-wider group-hover:bg-accent group-hover:text-white transition-colors">{award.meta}</span>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>

            {/* Faint background image of smiling children */}
            <div className="absolute inset-0 z-0 opacity-[0.02]">
                <Image
                    src="https://via.placeholder.com/1920x800/000000/ffffff?text=Fondo+Niños+Sonriendo"
                    alt="Niños sonriendo fondo"
                    fill
                    className="object-cover grayscale"
                />
            </div>
        </section>
    );
}