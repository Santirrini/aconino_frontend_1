"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaHistory } from "react-icons/fa";

interface HistoryEvent {
    year: string;
    title: string;
    description: string;
}

interface HistoryData {
    subtitle?: string;
    title?: string;
    imageUrl?: string;
    imageAlt?: string;
    events?: HistoryEvent[];
}

interface Props {
    data?: HistoryData | null;
}

export default function NosotrosHistory({ data }: Props) {
    const subtitle = data?.subtitle || "Nuestro Legado";
    const title = data?.title || "Historia";
    const imageUrl = data?.imageUrl || "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop";
    const imageAlt = data?.imageAlt || "Terapia grupal con niños";
    const events = data?.events;

    const defaultEvents = [
        {
            year: "1990",
            title: "Noviembre de 1990",
            description: "Un grupo de siete padres y dos fisioterapeutas fundaron esta organización privada sin ánimo de lucro, con el objetivo de brindar atención interdisciplinaria a niños, niñas y jóvenes con alteraciones sensoriomotoras ocasionadas por lesiones del sistema nervioso central."
        },
        {
            year: "",
            title: "Nuestra Evolución",
            description: "Con el tiempo se impuso la necesidad de ir más allá y capacitar a familias, profesionales y entidades tanto públicas como privadas en relación con el desarrollo integral del niño, sus alteraciones y los tratamientos idóneos que deben brindarse."
        }
    ];

    const displayEvents = events && events.length > 0 ? events : defaultEvents;

    return (
        <section id="historia" className="bg-primary flex flex-col md:flex-row relative overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex items-center p-12 lg:p-24 relative overflow-hidden z-10"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
                
                <div className="max-w-xl mx-auto z-10 w-full text-white">
                    <div className="mb-6 flex items-center gap-4">
                        <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">{subtitle}</span>
                        <div className="h-[2px] w-16 bg-accent"></div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-white/10 p-3 rounded-full">
                            <FaHistory className="text-accent text-2xl" />
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-sm">
                            {title}
                        </h2>
                    </div>
                    
                    <motion.div 
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.3
                                }
                            }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6 relative border-l-2 border-white/20 pl-6"
                    >
                        {displayEvents.map((event, idx) => (
                            <motion.div 
                                key={idx}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative"
                            >
                                <span className={`absolute -left-[31px] top-1 w-3 h-3 rounded-full ring-4 ring-primary ${idx === 0 ? 'bg-accent' : 'bg-white/50'}`} />
                                <h3 className={`font-bold text-xl mb-2 ${idx === 0 ? 'text-accent' : 'text-white/80'}`}>
                                    {event.year ? `${event.year} - ` : ''}{event.title}
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-lg text-justify font-medium">
                                    {event.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="absolute right-0 top-1/4 transform bg-accent h-1/2 w-3 hidden md:block rounded-l-full origin-top" 
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 relative min-h-[500px]"
            >
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/80 md:to-transparent" />
            </motion.div>
        </section>
    );
}
