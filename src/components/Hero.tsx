import { CurtainReveal, GradientOverlay, ParticleMorph, GoldenTypewriter } from "./animations";
import HeroBackground from "./hero/HeroBackground";

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
    const imageUrl = acf?.hero_image;

    return (
        <section className="relative w-full min-h-[600px] md:min-h-[800px] lg:min-h-[100vh] bg-primary flex items-center justify-center overflow-hidden py-24">
            <CurtainReveal color="bg-secondary" />

            <HeroBackground
                backgroundType={backgroundType}
                videoUrl={videoUrl}
                imageUrl={imageUrl}
                posterPlaceholder={POSTER_PLACEHOLDER}
                defaultImage={DEFAULT_IMAGE}
            />

            <div className="absolute inset-0 bg-black/40 z-10" />
            <GradientOverlay from="from-primary/80" via="via-secondary/50" to="to-primary/80" className="opacity-60 z-10" />
            <ParticleMorph subtle={true} />

            <div className="relative z-20 text-center px-4 md:px-8 w-full max-w-6xl mx-auto flex flex-col items-center mt-12 md:mt-0">
                <div className="relative w-full flex flex-col items-center mt-8">
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight md:leading-tight mb-8 drop-shadow-2xl max-w-5xl text-center"
                        style={{ textShadow: "0 10px 30px rgba(0,0,0,0.8)" }}
                    >
                        <GoldenTypewriter
                            text={`${title} ${subtitle}`}
                            delay={0.6}
                            speed={0.1}
                            loop={true}
                            waitDuration={4000}
                        />
                    </h1>
                </div>
            </div>
        </section>
    );
}

