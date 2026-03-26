"use client";

import HeroBase from "./shared/HeroBase";

const DEFAULT_TITLE = "35 años";
const DEFAULT_SUBTITLE = "apoyando la inclusión!";
const DEFAULT_IMAGE = "/images/hero-background-blue.png";
const POSTER_PLACEHOLDER = "https://placehold.co/1920x1080/0c2070/ffffff?text=Video+Cargando";

interface HeroProps {
    acf?: {
        hero_title?: string;
        hero_subtitle?: string;
        hero_background_type?: string;
        hero_video_url?: string;
        hero_image?: string;
        hero_impact?: string;
        hero_cta_text?: string;
        hero_cta_link?: string;
    };
}

export default function Hero({ acf }: HeroProps) {
    const title = acf?.hero_title || DEFAULT_TITLE;
    const subtitle = acf?.hero_subtitle || DEFAULT_SUBTITLE;
    const backgroundType = (acf?.hero_background_type === "video" ? "video" : "image") as 'video' | 'image';
    const videoUrl = acf?.hero_video_url;
    const imageUrl = acf?.hero_image || DEFAULT_IMAGE;

    return (
        <HeroBase
            title={`${title} ${subtitle}`}
            backgroundImage={imageUrl}
            backgroundVideo={videoUrl}
            videoPoster={POSTER_PLACEHOLDER}
            backgroundType={backgroundType}
            showCurtain={true}
            showParticles={true}
            useTypewriter={true}
            height="min-h-[600px] md:min-h-[800px] lg:min-h-[100vh]"
            typewriterProps={{
                waitDuration: 4000
            }}
        />
    );
}

