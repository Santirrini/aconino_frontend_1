"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

interface VisionData {
    subtitle?: string;
    title?: string;
    imageUrl?: string;
    imageAlt?: string;
    visionText?: string;
    visionTextSecondary?: string;
}

interface Props {
    data?: VisionData | null;
}

export default function NosotrosVision({ data }: Props) {
    const subtitle = data?.subtitle || "Nuestro Futuro";
    const title = data?.title || "Visión";
    const imageUrl = data?.imageUrl || "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2127&auto=format&fit=crop";
    const imageAlt = data?.imageAlt || "Terapeuta ayudando a niña";
    const visionText = data?.visionText;
    const visionTextSecondary = data?.visionTextSecondary;

    return (
        <section id="vision" className="bg-gray-50 flex flex-col-reverse lg:flex-row relative overflow-hidden">
            
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex items-center p-8 md:p-20 lg:p-24 relative z-10"
            >
                <div className="max-w-xl mx-auto w-full">
                    <div className="mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-[10px] md:text-sm">{subtitle}</span>
                        <div className="h-[1px] md:h-[2px] w-12 md:w-16 bg-accent"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 md:mb-8 tracking-tight leading-tight">
                        {title}
                    </h2>
                    
                    <div className="bg-white p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-xl relative border-t-4 border-accent">
                        <div className="absolute -top-4 md:-top-6 -right-2 md:-right-6 bg-accent w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg">
                            <FaEye className="text-white text-lg md:text-xl" />
                        </div>
                        {visionText || visionTextSecondary ? (
                            <>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify mb-4">
                                    {visionText}
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify font-medium">
                                    {visionTextSecondary}
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify mb-4">
                                    Seremos una organización sostenible, referente tanto nacional como internacional en innovación y generación de servicios orientados a la promoción, prevención y tratamiento de alteraciones sensoriomotoras.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify font-medium">
                                    Lograremos esto por medio de la aplicación de nuevas tecnologías, capacitación continua y un compromiso inquebrantable con la excelencia y el bienestar de nuestras familias.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>

            <div className="w-full lg:w-1/2 relative bg-accent/10 md:bg-accent min-h-[350px] md:min-h-[500px] flex items-center justify-center p-6 md:p-12 lg:p-20 z-10 overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-1/4 -bottom-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50 pointer-events-none"
                />

                <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute left-0 top-1/4 h-1/2 w-3 bg-primary hidden lg:block rounded-r-full origin-top z-20"
                />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-square lg:h-full min-h-[280px] shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden group border border-white/20"
                >
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Internal Shine border matching Mission */}
                    <div className="absolute inset-2 md:inset-4 border border-white/20 rounded-xl md:rounded-2xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
