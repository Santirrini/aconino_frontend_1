"use client";

import ScrollReveal from "../animations/ScrollReveal";

export default function AppResults() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <ScrollReveal animation="fade-up" delay={0.1}>
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                                    Aconiño
                                </span>
                                <div className="h-[2px] bg-accent w-12" />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={0.2}>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-8">
                                ¿Qué resultados puedo esperar?
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={0.3}>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                                Unos pocos ejercicios realizados con regularidad pueden impactar positivamente la calidad de vida de los infantes. Es sorprendente la capacidad del cerebro para aprender y corregir las habilidades motoras.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal animation="fade-up" delay={0.4}>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Con actividades simples y llevadas con la suficiente disciplina, los padres y madres podrán evidenciar los cambios en los movimientos de sus hijos.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* YouTube Video */}
                    <ScrollReveal animation="slide-left" delay={0.3}>
                        <div className="relative group">
                            {/* Decorative background */}
                            <div className="absolute -inset-4 bg-accent/10 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />

                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-video">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Aconiño lanza aconiñoapp, la aplicación para el desarrollo infantil"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="w-full h-full"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
