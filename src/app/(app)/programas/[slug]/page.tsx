import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProgramCTA from "../../../../components/programs/ProgramCTA";
import ScrollReveal from "../../../../components/animations/ScrollReveal";
import { defaultPrograms } from "@/data/secondaryPages";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

interface Program {
    slug: string;
    title?: string;
    description?: string;
    ageRange?: string;
    featuredImage?: string;
}

export default async function ProgramPage({ params }: PageProps) {
    const { slug } = await params;
    
    const program: Program | undefined = defaultPrograms.find((p: Program) => p.slug === slug);

    if (!program) {
        return notFound();
    }

    return (
        <article className="min-h-screen bg-gray-50">
            <header className="bg-secondary pt-32 pb-20 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <ScrollReveal animation="fade-up" delay={0.1}>
                                {program.ageRange && (
                                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-lg">
                                        {program.ageRange}
                                    </span>
                                )}
                            </ScrollReveal>
                            <ScrollReveal animation="fade-up" delay={0.2}>
                                <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">{program.title}</h1>
                            </ScrollReveal>
                        </div>

                        {/* CTA embedded in hero */}
                        <div className="w-full md:w-80 relative z-20">
                            <ScrollReveal animation="slide-left" delay={0.4}>
                                <ProgramCTA programTitle={program.title || ""} />
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-primary/20 pointer-events-none" />

                {/* Animated background shapes */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </header>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row gap-16">
                <div className="flex-1 prose prose-lg prose-primary">
                    <ScrollReveal animation="fade-up" delay={0.2}>
                        <p className="text-xl text-gray-700 font-medium mb-12 border-l-4 border-accent pl-6">
                            {program.description}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-in" delay={0.4}>
                        <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                            {/* Content Placeholder */}
                            Contenido detallado para este programa terapéutico...
                        </div>
                    </ScrollReveal>
                </div>

                <div className="w-full lg:w-1/3">
                    <div className="sticky top-40 space-y-8">
                        {program.featuredImage && typeof program.featuredImage === 'object' && (
                            <ScrollReveal animation="zoom-in" delay={0.3}>
                                <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <Image
                                        src={program.featuredImage}
                                        alt={program.title || "Programa"}
                                        width={600}
                                        height={800}
                                        className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </ScrollReveal>
                        )}

                        {/* Professional Sticky CTA Card */}
                        <ScrollReveal animation="fade-up" delay={0.5}>
                            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden group">
                                {/* Decorative top gradient line */}
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                                
                                {/* Background glow effect */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors duration-500"></div>
                                
                                <h3 className="text-2xl font-black text-primary mb-2 relative z-10">¿Necesitas Ayuda?</h3>
                                <p className="text-gray-500 mb-6 text-sm relative z-10 leading-relaxed">
                                    Nuestro equipo de especialistas está listo para brindarte la asesoría y el acompañamiento que requieres sobre este programa.
                                </p>
                                
                                <div className="space-y-4 mb-8 relative z-10">
                                    <a href="tel:+576011234567" className="flex items-center gap-4 text-sm font-bold text-gray-700 hover:text-primary transition-colors group/link">
                                        <span className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                                        </span>
                                        +57 (601) 123 4567
                                    </a>
                                    <a href="mailto:asistentenorte@aconino.org" className="flex items-center gap-4 text-sm font-bold text-gray-700 hover:text-primary transition-colors group/link">
                                        <span className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                        </span>
                                        asistentenorte@aconino.org
                                    </a>
                                </div>

                                <Link href="/contacto" className="block w-full relative overflow-hidden bg-primary text-white text-center font-bold py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(12,32,112,0.3)] transform group-hover:-translate-y-1">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        SOLICITAR ASESORÍA
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </article>
    );
}
