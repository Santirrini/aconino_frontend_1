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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Left Side: Image group */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative py-8 md:py-16 md:pr-0"
                >

                    {/* Main Image */}
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10 w-[85%] md:w-[85%] lg:w-[90%] ml-auto shadow-2xl aspect-[4/3] rounded-2xl overflow-hidden"
                    >
                        <Image
                            src={imageUrl}
                            alt="Equipo Aconiño"
                            fill
                            className="object-cover"
                        />
                    </motion.div>


                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 px-4 md:px-0"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Aconino</span>
                        <div className="h-[2px] bg-accent w-24"></div>
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-primary leading-tight mb-8">
                        {title}
                    </h2>

                    <p className="text-gray-600 mb-10 leading-relaxed max-w-lg md:text-lg">
                        {description}
                    </p>

                    <Link href={ctaLink} className="inline-block bg-primary text-white font-bold tracking-widest text-sm px-10 py-5 rounded-full hover:bg-accent hover:text-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        {ctaText}
                    </Link>
                </motion.div>
            </div>

            {/* Very faint background illustration */}
            <div className="absolute right-0 bottom-0 opacity-[0.03] pointer-events-none z-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/skulls.png')] bg-no-repeat bg-right-bottom bg-contain" />
        </section>
    );
}