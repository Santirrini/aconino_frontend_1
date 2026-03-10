"use client";

import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";

export default function AppInfo() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ¿Qué es aconiñoapp? */}
                <div className="mb-20 md:mb-28">
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
                            ¿Qué es aconiñoapp?
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={0.3}>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                            La Asociación Aconiño, con el apoyo de la Fundación Vased, lanzó una aplicación móvil para que los padres de familia puedan identificar desde casa cualquier tipo de trastorno en el movimiento de sus hijos a lo largo del primer año de vida.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={0.4}>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            La plataforma ofrece un conjunto de pautas didácticas para orientar la observación de los adultos, busca que se puedan detectar oportunamente los desórdenes motores de los recién nacidos, y así se logren evitar alteraciones y movimientos incorrectos en su desarrollo.
                        </p>
                    </ScrollReveal>
                </div>

                {/* ¿Por qué es importante? */}
                <div>
                    <ScrollReveal animation="fade-up" delay={0.1}>
                        <div className="w-20 h-1 bg-accent rounded-full mb-8 mx-auto" />
                    </ScrollReveal>

                    <ScrollReveal animation="zoom-in" delay={0.2}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary text-center leading-tight mb-12">
                            ¿Por qué es importante?
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay={0.3}>
                        <div className="flex flex-col md:flex-row items-start gap-8 bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100">
                            {/* Avatar */}
                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                    <Image
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                                        alt="Berta Brunal, directora de la Asociación Aconiño"
                                        width={112}
                                        height={112}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="flex-1">
                                <blockquote className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-6">
                                    «Teniendo en cuenta las altas cifras de afectaciones motoras que pueden presentarse en bebés con antecedentes de alto riesgo, es fundamental que cada papá y mamá tenga presente que el primer año de vida es determinante en la salud psicomotriz de las personas. Por eso, el correcto uso de la herramienta puede advertir la necesidad de un acompañamiento terapéutico para corregir movimientos erróneos en las primeras etapas de crecimiento»
                                </blockquote>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[2px] bg-accent rounded-full" />
                                    <p className="text-primary font-bold text-sm">
                                        Berta Brunal, directora de la Asociación Aconiño
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
