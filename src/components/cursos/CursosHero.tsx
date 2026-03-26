"use client";

import HeroSlider, { HeroSliderSlide } from "../shared/HeroSlider";

interface CursosHeroProps {
    title?: string;
    slides?: HeroSliderSlide[];
}

const defaultSlides: HeroSliderSlide[] = [
    {
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
        alt: "Cursos de formación en neurodesarrollo",
    },
    {
        src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2070&auto=format&fit=crop",
        alt: "Capacitación profesional en rehabilitación",
    },
    {
        src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
        alt: "Terapias especializadas para niños",
    },
];

export default function CursosHero({ 
    title = "Cursos",
    slides: providedSlides
}: CursosHeroProps) {
    const slides = providedSlides && providedSlides.length > 0 ? providedSlides : defaultSlides;

    return (
        <HeroSlider
            slides={slides}
            title={title}
            height="h-[400px] md:h-[500px] lg:h-[600px]"
            titleClassName="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter"
        >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:-top-12 z-20">
                <span className="text-accent text-4xl md:text-5xl drop-shadow-lg">♥</span>
            </div>
        </HeroSlider>
    );
}
