"use client";

import Image from "next/image";
import ScrollReveal from "../animations/ScrollReveal";
import { FaCheckCircle, FaGooglePlay } from "react-icons/fa";

const benefits = [
    "Previene las alteraciones posteriores en el desarrollo de los niños.",
    "Identifica cualquier tipo de trastorno en el movimiento de tus hijos.",
    "Ofrece pautas didácticas para orientar la observación de los adultos.",
    "Detecta oportunamente los desórdenes motores de los recién nacidos.",
    "La aplicación está disponible para dispositivos Android y no tiene ningún costo.",
];

export default function AppBenefits() {
    return (
        <section className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-10">
                                ¿Cuáles son los beneficios de nuestra aplicación?
                            </h2>
                        </ScrollReveal>

                        <div className="space-y-5 mb-10">
                            {benefits.map((benefit, idx) => (
                                <ScrollReveal key={idx} animation="fade-up" delay={0.3 + idx * 0.08}>
                                    <div className="flex items-start gap-3 group">
                                        <FaCheckCircle className="text-accent text-lg mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        <ScrollReveal animation="fade-up" delay={0.7}>
                            <a
                                href="https://play.google.com/store/apps/details?id=com.aconinoapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-black text-lg uppercase tracking-wide hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-primary/20 group"
                            >
                                <FaGooglePlay className="text-xl group-hover:scale-110 transition-transform" />
                                Descarga Aquí
                            </a>
                        </ScrollReveal>
                    </div>

                    {/* Phone Mockup */}
                    <ScrollReveal animation="slide-left" delay={0.3}>
                        <div className="relative flex justify-center lg:justify-end">
                            {/* Decorative background blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-[80px]" />

                            {/* Phone frame */}
                            <div className="relative z-10 w-[260px] md:w-[300px]">
                                <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 rounded-[2.5rem] p-3 shadow-2xl border border-gray-200">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-100 rounded-b-2xl z-20" />

                                    {/* Screen */}
                                    <div className="relative rounded-[2rem] overflow-hidden bg-white aspect-[9/19.5]">
                                        <Image
                                            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=400&auto=format&fit=crop"
                                            alt="Aconiñoapp en dispositivo móvil"
                                            fill
                                            className="object-cover"
                                        />
                                        {/* App overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-transparent to-primary/60 flex flex-col items-center justify-center">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg">
                                                <p className="text-primary font-black text-lg tracking-tight">aconiño</p>
                                                <p className="text-secondary text-xs font-bold">app</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* VASED logo */}
                                <div className="mt-4 flex justify-center">
                                    <div className="bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                                        <span className="text-secondary font-bold text-sm tracking-wider">
                                            VASED
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
