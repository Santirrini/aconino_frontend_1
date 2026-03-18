"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroData {
    subtitle?: string;
    title?: string;
    imageUrl?: string;
    imageAlt?: string;
}

interface Props {
    data?: HeroData | null;
}

export default function NosotrosHero({ data }: Props) {
    const subtitle = data?.subtitle || "Asociación Aconiño";
    const title = data?.title || "Quiénes Somos";
    const imageUrl = data?.imageUrl || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop";
    const imageAlt = data?.imageAlt || "Fondo Asociación Aconiño";

    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
            <motion.div 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/90 mix-blend-multiply" />
            </motion.div>

            <div className="relative z-10 text-center px-4 md:px-8 flex flex-col items-center max-w-5xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] bg-accent w-12 md:w-24"></div>
                        <span className="text-sm md:text-base text-gray-200 tracking-[0.3em] uppercase font-bold">
                            {subtitle}
                        </span>
                        <div className="h-[2px] bg-accent w-12 md:w-24"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl tracking-tight leading-tight">
                        {title}
                    </h1>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-6 text-gray-200 text-lg md:text-xl max-w-2xl font-medium tracking-wide"
                >
                    Conoce nuestra historia, misión y la pasión que nos mueve a transformar vidas cada día.
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-10 z-20 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
                    <motion.div 
                        animate={{ y: [0, 48] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-full h-1/2 bg-white absolute top-0"
                    />
                </div>
            </motion.div>
        </section>
    );
}
