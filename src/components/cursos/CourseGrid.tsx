"use client";

import CourseCard, { CourseCardData } from "./CourseCard";
import ScrollReveal from "../animations/ScrollReveal";

interface CourseGridProps {
    courses: CourseCardData[];
}

export default function CourseGrid({ courses }: CourseGridProps) {
    // Group by year, descending
    const grouped = courses.reduce<Record<number, CourseCardData[]>>((acc, course) => {
        const year = (course as any).year || new Date().getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(course);
        return acc;
    }, {});

    const sortedYears = Object.keys(grouped)
        .map(Number)
        .sort((a, b) => b - a);

    if (courses.length === 0) {
        return (
            <section className="py-20 text-center">
                <div className="max-w-xl mx-auto px-4">
                    <p className="text-gray-400 text-lg">
                        No hay cursos disponibles en este momento. ¡Vuelve pronto!
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {sortedYears.map((year) => (
                    <div key={year} className="mb-20 last:mb-0">
                        {/* Year Heading */}
                        <ScrollReveal animation="fade-up" delay={0.1}>
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-4 mb-2">
                                    <div className="h-[2px] w-12 md:w-20 bg-gradient-to-r from-transparent to-accent rounded-full" />
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight">
                                        Cursos y capacitaciones {year}
                                    </h2>
                                    <div className="h-[2px] w-12 md:w-20 bg-gradient-to-l from-transparent to-accent rounded-full" />
                                </div>
                                <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-4" />
                            </div>
                        </ScrollReveal>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {grouped[year].map((course, idx) => (
                                <CourseCard key={course.id} course={course} index={idx} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
