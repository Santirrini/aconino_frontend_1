import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaCertificate, FaArrowLeft } from "react-icons/fa";

const countryFlags: Record<string, string> = {
    CO: "🇨🇴", VE: "🇻🇪", PE: "🇵🇪", EC: "🇪🇨", MX: "🇲🇽",
    AR: "🇦🇷", BR: "🇧🇷", CL: "🇨🇱", US: "🇺🇸", ES: "🇪🇸",
};

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

const defaultCourses = [
    {
        id: "default-1",
        title: "Curso de Certificación Internacional GMS Trust - Movimientos Generales",
        slug: "gms-trust-movimientos-generales",
        dates: "31 octubre - 7 noviembre 2024",
        duration: "Básico y Avanzado",
        location: "Bogotá, Colombia",
        countryCode: "CO",
        status: "finalizado",
        description: "Diagnostica precozmente el riesgo de parálisis cerebral en niños para comenzar su intervención y tratamiento.",
        featuredImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop",
    },
    // ... otros cursos si es necesario, pero buscaremos por slug en los defaultCourses definidos en page.tsx
];

export default async function CoursePage({ params }: PageProps) {
    const { slug } = await params;
    
    // Búsqueda simple en los cursos por defecto para evitar errores de compilación
    const course = defaultCourses.find(c => c.slug === slug);

    if (!course) {
        return notFound();
    }

    const flag = course.countryCode ? countryFlags[course.countryCode] || "" : "";
    const isFinished = course.status === "finalizado";

    const imageUrl = course.featuredImage || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop";

    return (
        <article className="min-h-screen bg-white">
            {/* Hero Header */}
            <header className="bg-primary text-white pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Back Button */}
                    <ScrollReveal animation="fade-in" delay={0.1}>
                        <Link
                            href="/cursos"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 group"
                        >
                            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                            <span className="font-medium">Volver a cursos</span>
                        </Link>
                    </ScrollReveal>

                    <div className="text-center max-w-4xl mx-auto">
                        <ScrollReveal animation="fade-up" delay={0.2}>
                            <span className="text-accent font-bold tracking-widest uppercase mb-4 block text-sm">
                                Capacitación Especializada
                            </span>
                        </ScrollReveal>

                        <ScrollReveal animation="zoom-in" delay={0.3}>
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight leading-tight">
                                {course.title}
                            </h1>
                        </ScrollReveal>

                        {/* Status Badge */}
                        {isFinished && (
                            <ScrollReveal animation="fade-up" delay={0.35}>
                                <span className="inline-block bg-red-500/90 text-white text-sm font-black px-5 py-2 rounded-full uppercase tracking-wider mb-6 shadow-lg">
                                    Finalizado
                                </span>
                            </ScrollReveal>
                        )}

                        {/* Info Pills */}
                        <ScrollReveal animation="fade-up" delay={0.4}>
                            <div className="flex flex-wrap justify-center gap-4">
                                {course.dates && (
                                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3">
                                        <FaCalendarAlt className="text-accent" />
                                        <div className="text-left">
                                            <span className="text-white/60 text-xs block">Fechas</span>
                                            <span className="font-bold text-sm">{course.dates}</span>
                                        </div>
                                    </div>
                                )}
                                {course.duration && (
                                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3">
                                        <FaClock className="text-accent" />
                                        <div className="text-left">
                                            <span className="text-white/60 text-xs block">Duración</span>
                                            <span className="font-bold text-sm">{course.duration}</span>
                                        </div>
                                    </div>
                                )}
                                {course.location && (
                                    <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3">
                                        <FaMapMarkerAlt className="text-accent" />
                                        <div className="text-left">
                                            <span className="text-white/60 text-xs block">Ubicación</span>
                                            <span className="font-bold text-sm">{course.location} {flag}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-3">
                                    <FaCertificate className="text-accent" />
                                    <div className="text-left">
                                        <span className="text-white/60 text-xs block">Certificación</span>
                                        <span className="font-bold text-sm">Avalada por Aconiño</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Abstract background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-80 md:w-96 h-80 md:h-96 bg-accent rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 md:w-96 h-80 md:h-96 bg-secondary rounded-full blur-[120px]" />
                </div>
            </header>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Featured Image */}
                        {imageUrl && (
                            <ScrollReveal animation="fade-up" delay={0.1}>
                                <div className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-12">
                                    <Image
                                        src={imageUrl}
                                        alt={course.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </ScrollReveal>
                        )}

                        <ScrollReveal animation="fade-up" delay={0.2}>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6">
                                Sobre el curso
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                {course.description}
                            </p>
                        </ScrollReveal>


                        <ScrollReveal animation="fade-up" delay={0.4}>
                            <div className="prose prose-lg prose-primary max-w-none text-gray-600">
                                {/* RichText content would render here */}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <ScrollReveal animation="slide-left" delay={0.3}>
                            <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm sticky top-32">
                                <h3 className="text-2xl font-extrabold text-primary mb-6">
                                    Inscríbete ahora
                                </h3>
                                <ul className="space-y-4 mb-8 text-gray-600">
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                        </div>
                                        <span className="font-medium">Material de apoyo incluido</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                        </div>
                                        <span className="font-medium">Sesiones prácticas</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                        </div>
                                        <span className="font-medium">Diploma oficial</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-accent" />
                                        </div>
                                        <span className="font-medium">Instructores internacionales</span>
                                    </li>
                                </ul>

                                {isFinished ? (
                                    <div className="text-center">
                                        <p className="text-gray-400 font-medium mb-4">
                                            Este curso ya finalizó
                                        </p>
                                        <Link
                                            href="/cursos"
                                            className="w-full inline-block text-center bg-gray-200 text-gray-600 font-bold py-4 rounded-2xl hover:bg-gray-300 transition-all"
                                        >
                                            Ver próximos cursos
                                        </Link>
                                    </div>
                                ) : (
                                    <a
                                        href="https://wa.me/573001234567"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-block text-center bg-primary text-white font-black py-5 rounded-2xl hover:bg-secondary transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-0.5"
                                    >
                                        SOLICITAR CUPO
                                    </a>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </article>
    );
}
