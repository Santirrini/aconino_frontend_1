"use client";

import { motion, Variants, useScroll, useTransform, useSpring } from "framer-motion";
import CourseCard, { CourseCardData } from "./CourseCard";
import ScrollReveal from "../animations/ScrollReveal";
import { Sparkles, Calendar as CalendarIcon } from "lucide-react";
import { useRef } from "react";

interface CourseGridProps {
    courses: CourseCardData[];
}

// Datos dummy coherentes con Aconiño en caso de que Sanity no retorne nada
const fallbackCourses: CourseCardData[] = [
    {
        id: "fallback-1",
        title: "Certificación en Neurodesarrollo (NDT) Bobath Pediátrico",
        slug: "certificacion-neurodesarrollo-ndt",
        dates: "Inicia Próximamente",
        location: "Bogotá, Sede Aconiño",
        countryCode: "CO",
        status: "activo",
        description: "Formación especializada e intensiva dirigida a profesionales de la salud. Aprende a aplicar el modelo contemporáneo de neurodesarrollo en niños con parálisis cerebral.",
        featuredImage: "https://aconino.org/wp-content/uploads/2022/07/curso-pereira-2022.jpg",
        isFeatured: true,
        instructor: "Dr. Experto Invitado Aconiño",
    },
    {
        id: "fallback-2",
        title: "Taller Práctico: Protocolo PediaSuit Intensivo",
        slug: "taller-pediasuit",
        dates: "15 de Diciembre, 2026",
        location: "Modalidad Híbrida",
        countryCode: "CO",
        status: "proximamente",
        description: "Profundización en el uso de la Órtesis Dinámica (Traje) enfocada en mejorar la postura y movimiento autónomo del niño.",
        featuredImage: "https://aconino.org/wp-content/uploads/2024/02/mujer-ocupada-haciendo-muchas-cosas-vez-scaled.jpg",
    },
    {
        id: "fallback-3",
        title: "Atención Temprana y Familia: Un Abordaje Integral",
        slug: "atencion-temprana-familia",
        dates: "20 al 22 de Noviembre, 2026",
        location: "Online",
        status: "finalizado",
        description: "Curso teórico enfocado en capacitar a las familias y cuidadores tempranos en estimulación sicomotriz desde casa.",
        featuredImage: "https://aconino.org/wp-content/uploads/2024/03/visita-claudia-aconino-2024-731x1024.jpg",
        instructor: "Equipo Terapéutico Aconiño",
    }
];

// Variantes para animación stagger
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96, rotate: -1 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotate: 0,
        transition: { 
            type: "spring", 
            stiffness: 60, 
            damping: 15,
            mass: 0.8
        } 
    }
};

export default function CourseGrid({ courses }: CourseGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xTransform = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const x = useSpring(xTransform, { stiffness: 100, damping: 30 });

    interface CourseWithYear extends CourseCardData {
        year?: number;
    }

    const hasRealCourses = courses && courses.length > 0;
    const displayCourses = hasRealCourses ? courses : fallbackCourses;

    // Agrupar por año (Descendiente)
    const grouped = displayCourses.reduce<Record<number, CourseCardData[]>>((acc, course) => {
        const year = (course as CourseWithYear).year || new Date().getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(course);
        return acc;
    }, {});

    const sortedYears = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a);

    return (
        <section ref={containerRef} className="py-20 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Elementos Decorativos de Fondo (Glassmorphism blobs) */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <motion.div 
                    animate={{ 
                        y: [0, -40, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] -right-[15%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" 
                />
                <motion.div 
                    animate={{ 
                        y: [0, 40, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[50%] -left-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" 
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 overflow-visible">
                
                {/* Opcional: Si usamos data de Sanity, podemos mostrar un mensaje sutil si hay mock data */}
                {!hasRealCourses && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-md border border-accent/20 rounded-2xl p-6 shadow-sm"
                    >
                        <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h3 className="text-primary font-black text-xl mb-2">¡Nuevos Cursos Pronto!</h3>
                        <p className="text-slate-500">
                            Actualmente estamos preparando nuestra próxima oferta académica. Aquí puedes ver ejemplos de las formaciones de alta calidad que ofrecemos en Aconiño.
                        </p>
                    </motion.div>
                )}

                {sortedYears.map((year) => (
                    <div key={year} className="mb-24 last:mb-0">
                        {/* Cabecera del Año */}
                        <ScrollReveal animation="fade-up" delay={0.1}>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 border-b border-primary/10 pb-8">
                                <div className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-3 text-accent font-black uppercase tracking-widest text-sm mb-4">
                                        <div className="w-8 h-px bg-accent/30 hidden md:block"></div>
                                        <CalendarIcon className="w-5 h-5" />
                                        Agenda Académica
                                    </div>
                                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary tracking-tighter leading-none">
                                        {year}
                                    </h2>
                                </div>
                                
                                {/* Decorador dinámico */}
                                <div className="hidden lg:flex items-center gap-4 text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em] transform rotate-90 origin-right translate-y-12">
                                    EXPLORAR CURSOS <span className="w-16 h-px bg-slate-300"></span>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Grid de Tarjetas Animado */}
                        <motion.div 
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
                        >
                            {grouped[year].map((course, idx) => (
                                <motion.div 
                                    key={course.id} 
                                    id={course.slug}
                                    variants={itemVariants}
                                    className="col-span-1"
                                >
                                    <CourseCard course={course} index={idx} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
            
            {/* Texto decorativo de fondo con Parallax */}
            <div className="hidden lg:block absolute bottom-0 right-0 opacity-[0.03] pointer-events-none -mb-20 select-none z-0 overflow-hidden">
                <motion.div style={{ x }}>
                    <span className="text-[24rem] font-black text-[#0a1f44] leading-none tracking-tighter whitespace-nowrap">
                        ACN ACADEMY
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
