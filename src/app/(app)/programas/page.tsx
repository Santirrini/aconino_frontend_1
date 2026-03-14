import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import ScrollReveal from "../../../components/animations/ScrollReveal";

import { defaultPrograms } from "@/data/secondaryPages";

export default async function ProgramasPage() {
    const programs = defaultPrograms;
    
    const heroTitle = "Programas";
    const heroSubtitle = "Conoce nuestros programas de habilitación y rehabilitación integral.";
    const heroImage = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop";
    
    const ctaText = "CONTÁCTANOS";
    const ctaLink = "/contacto";
    const ctaTitle = "¿Quieres saber más sobre nuestros programas?";

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Banner */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={heroImage}
                    alt={heroTitle}
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center px-4 mt-16">
                    <ScrollReveal animation="fade-up" delay={0.1}>
                        <div className="flex justify-center mb-6">
                            <span className="text-yellow-400 text-5xl">♥</span>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="zoom-in" delay={0.3}>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                            {heroTitle}
                        </h1>
                        {heroSubtitle && (
                            <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4 font-medium">
                                {heroSubtitle}
                            </p>
                        )}
                    </ScrollReveal>
                </div>
            </section>

            {/* Programs List */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {programs.map((program: any, index: number) => {
                        const isEven = index % 2 === 0;
                        const imageUrl = program.featuredImage && typeof program.featuredImage === 'object'
                            ? program.featuredImage.url
                            : "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop";

                        return (
                            <div
                                key={program.id || index}
                                id={program.slug}
                                className={`scroll-mt-40 flex flex-col lg:flex-row items-center gap-12 mb-32 last:mb-0 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Image Section */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <ScrollReveal animation={isEven ? "slide-right" : "slide-left"} delay={0.2}>
                                        <div className={`absolute -inset-4 bg-accent/20 rounded-3xl transition-transform duration-500 group-hover:scale-105 ${isEven ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"
                                            }`}></div>
                                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                            <Image
                                                src={imageUrl || ""}
                                                alt={program.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Decorative corner icon */}
                                        <div className={`absolute bottom-0 ${isEven ? "right-0 translate-x-1/2 translate-y-1/2" : "left-0 -translate-x-1/2 translate-y-1/2"}`}>
                                            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg border-4 border-white">
                                                <span className="text-2xl">♥</span>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <ScrollReveal animation="fade-up" delay={0.2}>
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Aconino</span>
                                            <div className="h-[2px] bg-accent w-12"></div>
                                        </div>
                                    </ScrollReveal>

                                    <ScrollReveal animation="fade-up" delay={0.3}>
                                        <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                            {program.title}
                                        </h2>
                                    </ScrollReveal>

                                    <ScrollReveal animation="fade-up" delay={0.4}>
                                        {program.ageRange && (
                                            <p className="text-xl font-medium text-secondary">
                                                {program.ageRange}
                                            </p>
                                        )}
                                    </ScrollReveal>

                                    <ScrollReveal animation="fade-up" delay={0.5}>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            {program.description}
                                        </p>
                                    </ScrollReveal>

                                    <ScrollReveal animation="fade-up" delay={0.6}>
                                        <div className="pt-6">
                                            <Link
                                                href={`/programas/${program.slug}`}
                                                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1 shadow-lg group"
                                            >
                                                Más información
                                                <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                                            </Link>
                                        </div>
                                    </ScrollReveal>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Floating CTA */}
            <section className="bg-primary py-20 text-center text-white">
                <ScrollReveal animation="zoom-in" delay={0.2}>
                    <h3 className="text-3xl font-bold mb-8">
                        {ctaTitle}
                    </h3>
                    <Link
                        href={ctaLink}
                        className="bg-accent text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-colors uppercase"
                    >
                        {ctaText}
                    </Link>
                </ScrollReveal>
            </section>
        </main>
    );
}
