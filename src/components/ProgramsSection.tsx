"use client";

import Link from "next/link";
import { FaGraduationCap, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProgramItem {
    title: string;
    desc: string;
    slug?: string;
    icon?: React.ReactNode;
}

interface ProgramsSectionProps {
    programs?: ProgramItem[];
}

export default function ProgramsSection({ programs }: ProgramsSectionProps) {
    const defaultPrograms = [
        {
            title: "Apoyo a dificultades en el aprendizaje a niños",
            desc: "de 3 a 14 años. Programa terapéutico de...",
            slug: "apoyo-aprendizaje",
            icon: <FaGraduationCap className="text-5xl text-secondary" />
        },
        {
            title: "Protocolo Intensivo Pediasuit Niños y jóvenes",
            desc: "de 2 a 18 años. Protocolo Pediasuit es un programa...",
            slug: "pediasuit",
            icon: <FaGraduationCap className="text-5xl text-secondary" />
        },
        {
            title: "Atención temprana",
            desc: "de 0 a 3 años. Programa terapéutico integral para apoyar el desarrollo sicomotor a través de...",
            slug: "atencion-temprana",
            icon: <FaGraduationCap className="text-5xl text-accent" />
        },
        {
            title: "Atención a niños y jóvenes",
            desc: "de 3 a 18 años. programa terapéutico integral para apoyar el desarrollo...",
            slug: "atencion-ninos-jovenes",
            icon: <FaGraduationCap className="text-5xl text-accent" />
        }
    ];

    const displayPrograms = programs || defaultPrograms;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="w-full py-20 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
                    {/* Left Column Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full xl:w-1/4 shrink-0 flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Aconino</span>
                            <div className="h-[2px] bg-accent w-16"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-primary leading-tight mb-6">
                            Nuestros Programas
                        </h2>
                        <p className="text-gray-500 text-base leading-relaxed mb-8 xl:mb-0">
                            Programa terapéutico integral para apoyar el desarrollo psicomotor.
                        </p>
                    </motion.div>

                    {/* Right Column Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="w-full xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        {displayPrograms.map((prog, idx) => (
                            <motion.div
                                variants={cardVariants}
                                key={idx}
                                className="bg-white border-b-4 border-transparent hover:border-accent rounded-xl transition-all duration-300 shadow-md hover:shadow-2xl p-8 flex flex-col group relative transform hover:-translate-y-2"
                            >
                                <div className="mb-6 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                    {prog.icon || <FaGraduationCap className="text-4xl text-secondary" />}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4 leading-snug line-clamp-3 group-hover:text-secondary transition-colors">{prog.title}</h3>
                                <p className="text-sm text-gray-500 mb-8 flex-1 leading-relaxed">{prog.desc}</p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <Link href={prog.slug ? `/programas#${prog.slug}` : "/programas"} className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                        <FaArrowRight />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>


            <div className="absolute inset-0 z-0 bg-opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] mix-blend-multiply opacity-10"></div>
        </section>
    );
}