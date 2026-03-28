"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, ArrowRight, Star } from "lucide-react";

const countryFlags: Record<string, string> = {
    CO: "🇨🇴",
    VE: "🇻🇪",
    PE: "🇵🇪",
    EC: "🇪🇨",
    MX: "🇲🇽",
    AR: "🇦🇷",
    BR: "🇧🇷",
    CL: "🇨🇱",
    US: "🇺🇸",
    ES: "🇪🇸",
};

export interface CourseCardData {
    id: string;
    title: string;
    slug: string;
    dates?: string | null;
    duration?: string | null;
    location?: string | null;
    countryCode?: string | null;
    status?: string | null;
    description?: string | null;
    featuredImage?: { url: string; alt?: string } | string | null;
    detailUrl?: string | null;
    isFeatured?: boolean;
    instructor?: string | null;
}

export default function CourseCard({
    course,
    index = 0,
}: {
    course: CourseCardData;
    index?: number;
}) {
    const imageUrl =
        typeof course.featuredImage === "object" && course.featuredImage !== null
            ? course.featuredImage.url
            : typeof course.featuredImage === "string"
                ? course.featuredImage
                // Fallback coherente con Aconiño
                : "https://aconino.org/wp-content/uploads/2022/07/curso-pereira-2022.jpg"; 

    const imageAlt =
        typeof course.featuredImage === "object" && course.featuredImage !== null
            ? course.featuredImage.alt || course.title
            : course.title;

    const flag = course.countryCode ? countryFlags[course.countryCode] || "" : "";
    
    // Estados semánticos
    const isFinished = course.status?.toLowerCase() === "finalizado";
    const isActive = course.status?.toLowerCase() === "activo" || course.status?.toLowerCase() === "abierto";
    const isUpcoming = course.status?.toLowerCase() === "proximamente" || course.status?.toLowerCase() === "próximamente";

    const href = course.detailUrl || `#${course.slug}`;
    const isExternal = !!course.detailUrl;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={`group h-full flex flex-col relative ${course.isFeatured ? 'md:col-span-2 lg:col-span-2' : ''}`}
        >
            {/* Si es destacado, le damos un resplandor extra */}
            {course.isFeatured && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary opacity-20 group-hover:opacity-40 rounded-3xl blur-md transition duration-500" />
            )}
            
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 z-10">
                
                {/* Image Section */}
                <div className={`relative w-full overflow-hidden ${course.isFeatured ? 'h-56 md:h-72' : 'h-48 md:h-56'}`}>
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay for better text readability and premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                        {/* Status Badge */}
                        <div>
                            {isFinished ? (
                                <span className="bg-slate-800/80 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                                    Finalizado
                                </span>
                            ) : isActive ? (
                                <span className="bg-emerald-500/90 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5 animate-pulse">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full" />
                                    Inscripciones Abiertas
                                </span>
                            ) : isUpcoming ? (
                                <span className="bg-accent/90 backdrop-blur-md border border-white/20 text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                                    ⏱️ Próximamente
                                </span>
                            ) : course.status ? (
                                <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    {course.status}
                                </span>
                            ) : null}
                        </div>

                        {/* Featured Badge */}
                        {course.isFeatured && (
                            <span className="bg-gradient-to-r from-accent to-yellow-400 text-primary text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-xl flex items-center gap-1">
                                <Star className="w-3 h-3 fill-primary" /> Estelar
                            </span>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6 md:p-8 bg-gradient-to-b from-white to-slate-50/50">
                    
                    {/* Title */}
                    <h3 className={`text-primary font-black uppercase leading-tight mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2 ${course.isFeatured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                        {course.title}
                    </h3>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-5">
                        {course.dates && (
                            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <div className="bg-slate-100 p-1.5 rounded-md text-primary">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <span className="truncate">{course.dates}</span>
                            </div>
                        )}
                        
                        {course.location && (
                            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                <div className="bg-slate-100 p-1.5 rounded-md text-primary">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="truncate">
                                    {course.location} {flag}
                                </span>
                            </div>
                        )}

                        {course.instructor && (
                            <div className="flex items-center gap-2 text-slate-600 text-sm font-medium sm:col-span-2">
                                <div className="bg-slate-100 p-1.5 rounded-md text-primary">
                                    <User className="w-4 h-4" />
                                </div>
                                <span className="truncate">Por: <span className="font-semibold text-primary">{course.instructor}</span></span>
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    {course.description && (
                        <p className={`text-slate-500 text-sm leading-relaxed mb-6 flex-1 ${course.isFeatured ? 'line-clamp-3 md:line-clamp-4' : 'line-clamp-3'}`}>
                            {course.description}
                        </p>
                    )}

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 border-t border-slate-100">
                        {isExternal ? (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group/btn flex items-center justify-center gap-2 w-full text-center font-bold text-sm py-4 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl ${isFinished ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' : 'bg-primary text-white hover:bg-secondary hover:-translate-y-1'}`}
                            >
                                {isFinished ? 'Ver detalles históricos' : 'Más información e inscripciones'}
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        ) : (
                            <Link
                                href={href}
                                className={`group/btn flex items-center justify-center gap-2 w-full text-center font-bold text-sm py-4 px-6 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl ${isFinished ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' : 'bg-primary text-white hover:bg-secondary hover:-translate-y-1'}`}
                            >
                                {isFinished ? 'Ver detalles históricos' : 'Más información e inscripciones'}
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
