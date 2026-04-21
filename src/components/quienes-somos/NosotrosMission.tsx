"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortableText, PortableTextBlock } from "@portabletext/react";

interface MissionData {
    subtitle?: string;
    title?: string;
    imageUrl?: string;
    imageAlt?: string;
    description?: PortableTextBlock[];
}

interface Props {
    data?: MissionData | null;
}

export default function NosotrosMission({ data }: Props) {
    const subtitle = data?.subtitle || "Nuestro Propósito";
    const title = data?.title || "Misión";
    const imageUrl = data?.imageUrl || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop";
    const imageAlt = data?.imageAlt || "Terapeuta con niño";
    const description = data?.description;

    return (
        <section id="mision" className="bg-primary flex flex-col lg:flex-row relative overflow-hidden scroll-mt-32">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            {/* Left side Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex items-center p-8 md:p-20 lg:p-24 relative z-10"
            >
                <div className="max-w-xl mx-auto w-full text-white">
                    <div className="mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
                        <span className="text-accent font-bold tracking-widest uppercase text-[10px] md:text-sm">{subtitle}</span>
                        <div className="h-[1px] md:h-[2px] w-12 md:w-16 bg-white/20"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tight drop-shadow-md leading-tight">
                        {title}
                    </h2>
                    
                    <div className="relative">
                        <span className="absolute -top-8 md:-top-10 -left-6 md:-left-8 text-7xl md:text-8xl text-white/10 font-serif leading-none select-none">&quot;</span>
                        {description ? (
                            <div className="prose prose-base md:prose-lg text-gray-200 prose-p:leading-relaxed max-w-none">
                                <PortableText value={description} />
                            </div>
                        ) : (
                            <>
                                <p className="text-gray-200 leading-relaxed text-base md:text-xl text-justify relative z-10 font-medium">
                                    Somos una asociación innovadora, que ofrece programas de prevención y atención integral a niños, niñas y jóvenes con alteraciones sensoriomotoras, así como capacitación y orientación a profesionales e instituciones.
                                </p>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-lg text-justify mt-4 md:mt-6 relative z-10">
                                    Aplicamos el enfoque de Neurodesarrollo - Bobath y otras técnicas relacionadas, para el mejoramiento de la calidad de vida e Inclusión social de la población objetivo.
                                </p>
                            </>
                        )}
                    </div>
                </div>

                <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent h-2/3 w-3 hidden lg:block rounded-l-full origin-top"
                />
            </motion.div>

            {/* Right side Image with Frame */}
            <div className="w-full lg:w-1/2 relative bg-primary/20 flex items-center justify-center p-6 md:p-12 lg:p-20 z-10 overflow-hidden">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-square lg:h-full min-h-[280px] shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden group bg-accent/5 border border-white/10"
                >
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    {/* Minimalist Overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    {/* Internal Shine border */}
                    <div className="absolute inset-2 md:inset-4 border border-white/20 rounded-xl md:rounded-2xl pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
