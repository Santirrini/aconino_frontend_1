"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface AboutSectionProps {
    acf?: {
        about_title?: string;
        about_description?: string;
        about_image?: string;
        about_cta_text?: string;
        about_cta_link?: string;
        stats_1_value?: string;
        stats_1_label?: string;
    };
}

export default function AboutSection({ acf }: AboutSectionProps) {
    const title = acf?.about_title || "35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad";
    const description = acf?.about_description || "Tratamientos y terapias con el Modelo de práctica contemporáneo de Neurodesarrollo y protocolo intensivo Pediasuit Orientación y apoyo a las familias";
    const imageUrl = acf?.about_image || "https://placehold.co/600x450/e2e8f0/0c2070?text=Foto+Equipo+Aconiño";
    const ctaText = acf?.about_cta_text || "CONTÁCTANOS";
    const ctaLink = acf?.about_cta_link || "/contacto";

    return (
        <section className="w-full py-20 md:py-32 overflow-hidden relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

                {/* Centered Image Group with Decorative Frame */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative p-6 md:p-10 w-full max-w-4xl"
                >
                    {/* Decorative Frame Elements */}
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent rounded-tl-3xl z-0" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-accent rounded-br-3xl z-0" />
                    
                    {/* Secondary Frame offset */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-primary/10 rounded-[2.5rem] z-0 pointer-events-none" />

                    {/* Main Image Container */}
                    <motion.div 
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border-8 border-white"
                    >
                        <Image
                            src={imageUrl}
                            alt="Equipo Aconiño"
                            fill
                            className="object-cover"
                            priority
                        />
                        
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Floating Badge/Accent */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -left-2 md:left-4 z-20 bg-primary text-white p-4 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 border-2 border-accent/30 backdrop-blur-sm"
                    >
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary text-2xl">
                            <Image 
                                src="/images/hero-background-blue.png" 
                                alt="Icon" 
                                width={30} 
                                height={30} 
                                className="opacity-20 hidden"
                            />
                            ❤️
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Tradición</p>
                            <p className="text-lg md:text-xl font-black leading-none">35 AÑOS</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* Very faint background illustration */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none z-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/skulls.png')] bg-no-repeat bg-right-bottom bg-contain" />
        </section>
    );
}