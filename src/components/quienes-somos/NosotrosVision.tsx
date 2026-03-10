"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

export default function NosotrosVision() {
    return (
        <section id="vision" className="bg-gray-50 flex flex-col-reverse lg:flex-row relative overflow-hidden">
            
            {/* Left side Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 flex items-center p-12 md:p-20 lg:p-24 relative z-10"
            >
                <div className="max-w-xl mx-auto w-full">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Nuestro Futuro</span>
                        <div className="h-[2px] w-16 bg-accent"></div>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 tracking-tight">
                        Visión
                    </h2>
                    
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl relative border-t-4 border-accent">
                        <div className="absolute -top-6 -right-6 bg-accent w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                            <FaEye className="text-white text-xl" />
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify mb-4">
                            Seremos una organización sostenible, referente tanto nacional como internacional en innovación y generación de servicios orientados a la promoción, prevención y tratamiento de alteraciones sensoriomotoras.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg text-justify font-medium">
                            Lograremos esto por medio de la aplicación de nuevas tecnologías, capacitación continua y un compromiso inquebrantable con la excelencia y el bienestar de nuestras familias.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Right side Image with prominent Accent block */}
            <div className="w-full lg:w-1/2 relative bg-accent min-h-[500px] flex items-center justify-center p-8 lg:p-16 z-10 overflow-hidden">
                {/* Animated Background Element */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-1/4 -bottom-1/4 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-50 pointer-events-none"
                />

                {/* Left border absolute element for dark blue stripe */}
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
                    className="relative w-full h-full min-h-[400px] shadow-2xl rounded-3xl overflow-hidden group"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2127&auto=format&fit=crop"
                        alt="Terapeuta ayudando a niña"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                </motion.div>
            </div>
        </section>
    );
}