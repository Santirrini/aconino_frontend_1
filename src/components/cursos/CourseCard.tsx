"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
                : "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop";

    const imageAlt =
        typeof course.featuredImage === "object" && course.featuredImage !== null
            ? course.featuredImage.alt || course.title
            : course.title;

    const flag = course.countryCode ? countryFlags[course.countryCode] || "" : "";
    const isFinished = course.status === "finalizado";

    const href = course.detailUrl || `#${course.slug}`;
    const isExternal = !!course.detailUrl;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
            className="group"
        >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col">
                {/* Image + Status Badge */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                    <Image
                        src={imageUrl}
                        alt={imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isFinished && (
                        <div className="absolute top-4 left-4 z-10">
                            <span className="bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                Finalizado
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 md:p-6">
                    {/* Dates */}
                    {course.dates && (
                        <p className="text-secondary text-xs md:text-sm font-semibold mb-2 tracking-wide">
                            {course.dates}
                        </p>
                    )}

                    {/* Title */}
                    <h3 className="text-primary font-extrabold text-sm md:text-base uppercase leading-tight mb-3 line-clamp-3 group-hover:text-secondary transition-colors duration-300">
                        {course.title}
                    </h3>

                    {/* Location */}
                    {course.location && (
                        <p className="text-secondary font-semibold text-sm mb-3 flex items-center gap-1.5">
                            {course.location}
                            {flag && <span className="text-base">{flag}</span>}
                        </p>
                    )}

                    {/* Description */}
                    {course.description && (
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
                            {course.description}
                        </p>
                    )}

                    {/* CTA Button */}
                    <div className="mt-auto pt-2">
                        {isExternal ? (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center bg-primary text-white font-bold text-sm py-3 px-6 rounded-xl hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                Más información
                            </a>
                        ) : (
                            <Link
                                href={href}
                                className="inline-block w-full text-center bg-primary text-white font-bold text-sm py-3 px-6 rounded-xl hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-md"
                            >
                                Más información
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
