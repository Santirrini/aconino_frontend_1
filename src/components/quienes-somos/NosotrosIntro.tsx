"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { PortableText, PortableTextBlock } from "@portabletext/react";

interface NosotrosIntroProps {
    data?: {
        subtitle?: string;
        title?: string;
        imageUrl?: string;
        imageAlt?: string;
        description?: string | object;
        stats?: Array<{
            value: string;
            label: string;
            color: string;
        }>;
    } | null;
}

export default function NosotrosIntro({ data }: NosotrosIntroProps) {
    const subtitle = data?.subtitle || "Historia Aconiño";
    const title = data?.title || "Nuestra Identidad";
    const imageUrl = data?.imageUrl || "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1968&auto=format&fit=crop";
    const imageAlt = data?.imageAlt || "Niña en terapia";
    
    const defaultStats = [
        { value: "+30", label: "Años de Exp.", color: "secondary" },
        { value: "+5k", label: "Familias Apoyadas", color: "accent" }
    ];
    const stats = data?.stats && data.stats.length > 0 ? data.stats : defaultStats;

    return (
        <section id="nosotros" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    
                    {/* Left side Image with Framer Motion */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 relative flex justify-center"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto shadow-2xl rounded-3xl overflow-hidden group">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Inner overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        
                        {/* Decorative Accent Elements */}
                        <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                            className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-xl flex items-center justify-center border-b-4 border-accent"
                        >
                            <FaHeart className="text-4xl text-accent animate-pulse" />
                        </motion.div>
                        
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-8 border-gray-100 rounded-3xl -z-10" />
                    </motion.div>

                    {/* Right side Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">{subtitle}</span>
                            <div className="h-[2px] w-16 bg-accent"></div>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-8 tracking-tight leading-tight">
                            {title}
                        </h2>
                        
                        <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed max-w-none">
                            {data?.description && typeof data.description === 'object' ? (
                                <PortableText value={data.description as PortableTextBlock[]} />
                            ) : data?.description && typeof data.description === 'string' ? (
                                <p className="mb-6 text-xl font-medium text-gray-700">{data.description}</p>
                            ) : (
                                <>
                                    <p className="mb-6 text-xl font-medium text-gray-700">
                                        Somos una entidad privada sin ánimo de lucro, creada en 1990, con el propósito fundamental de apoyar a las familias.
                                    </p>
                                    <p className="text-justify text-base md:text-lg">
                                        Brindamos un servicio de atención integral basado en el modelo de práctica contemporáneo de Neurodesarrollo NDT, que contempla diagnósticos como Parálisis Cerebral, Retraso en el Desarrollo Psicomotor, Síndrome de West e Hipotonía, entre otros.
                                    </p>
                                    <p className="text-justify text-base md:text-lg mt-4">
                                        A lo largo de estos más de 30 años, hemos construido un espacio seguro donde el amor, la ciencia y la dedicación se unen para impulsar el potencial máximo de cada niño y joven que cruza nuestras puertas.
                                    </p>
                                </>
                            )}
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex gap-6"
                        >
                            {stats.map((stat, idx) => (
                                <div key={idx} className="flex gap-6 items-center">
                                    <div className="flex flex-col">
                                        <span className={`text-4xl font-black ${stat.color === 'secondary' ? 'text-secondary' : 'text-accent'}`}>
                                            {stat.value}
                                        </span>
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    {idx < stats.length - 1 && <div className="w-[1px] h-12 bg-gray-200" />}
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}