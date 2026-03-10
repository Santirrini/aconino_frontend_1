"use client";

import ScrollReveal from "../animations/ScrollReveal";

export default function BobathHistory() {
    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Decorative logo */}
                <ScrollReveal animation="fade-up" delay={0.1}>
                    <div className="flex justify-center mb-10">
                        <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center">
                            <span className="text-primary text-3xl font-black">Ɖ</span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Title */}
                <ScrollReveal animation="fade-up" delay={0.2}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-400 leading-tight mb-2">
                        Historia del
                    </h2>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight">
                        Neurodesarrollo
                    </h2>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight pl-12 md:pl-24">
                        Bobath
                    </h2>
                    <div className="flex items-center justify-center mt-2 gap-4">
                        <div className="h-1 w-16 md:w-24 bg-secondary rounded-full" />
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light italic text-gray-400">
                            en Colombia
                        </h3>
                    </div>
                </ScrollReveal>

                {/* Handprints Decoration */}
                <ScrollReveal animation="zoom-in" delay={0.4}>
                    <div className="flex justify-center items-center gap-4 md:gap-8 my-12 md:my-16">
                        <div className="flex gap-1">
                            {["#f8b719", "#0c2070", "#e74c3c", "#365ca1", "#2ecc71", "#f39c12", "#9b59b6"].map((color, i) => (
                                <svg
                                    key={`left-${i}`}
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 md:w-8 md:h-8"
                                    fill={color}
                                    style={{ transform: `rotate(${-30 + i * 10}deg)` }}
                                >
                                    <path d="M12 22c-1.1 0-2-.9-2-2v-3c-1.5 0-3-1-3-3v-3c0-1 .5-2 1.5-2.5V6c0-1.1.9-2 2-2s2 .9 2 2v2.5c.3-.1.6-.2 1-.2s.7.1 1 .2V6c0-1.1.9-2 2-2s2 .9 2 2v2.5C17.5 9 18 10 18 11v3c0 2-1.5 3-3 3v3c0 1.1-.9 2-2 2h-1z" />
                                </svg>
                            ))}
                        </div>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-400 text-lg">⌂</span>
                        </div>
                        <div className="flex gap-1">
                            {["#e74c3c", "#0c2070", "#f8b719", "#365ca1", "#2ecc71", "#9b59b6", "#f39c12"].map((color, i) => (
                                <svg
                                    key={`right-${i}`}
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 md:w-8 md:h-8"
                                    fill={color}
                                    style={{ transform: `rotate(${-30 + i * 10}deg)` }}
                                >
                                    <path d="M12 22c-1.1 0-2-.9-2-2v-3c-1.5 0-3-1-3-3v-3c0-1 .5-2 1.5-2.5V6c0-1.1.9-2 2-2s2 .9 2 2v2.5c.3-.1.6-.2 1-.2s.7.1 1 .2V6c0-1.1.9-2 2-2s2 .9 2 2v2.5C17.5 9 18 10 18 11v3c0 2-1.5 3-3 3v3c0 1.1-.9 2-2 2h-1z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
