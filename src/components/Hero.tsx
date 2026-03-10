import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

interface HeroProps {
    acf?: any;
}

export default function Hero({ acf }: HeroProps) {
    const title = acf?.hero_title || "35 años";
    const subtitle = acf?.hero_subtitle || "apoyando la inclusión!";
    const isVideo = acf?.hero_background_type === "video";
    const videoUrl = acf?.hero_video_url || "https://www.w3schools.com/html/mov_bbb.mp4";
    const imageUrl = acf?.hero_image || "https://via.placeholder.com/1920x1080/0c2070/ffffff?text=Fondo+Hero";

    return (
        <section className="relative w-full h-[600px] md:h-[800px] bg-gray-900 flex items-center justify-center overflow-hidden">
            {/* Background Content */}
            {isVideo ? (
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://via.placeholder.com/1920x1080/0c2070/ffffff?text=Video+Cargando..."
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
            ) : (
                <Image
                    src={imageUrl}
                    alt="Hero Background"
                    fill
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
            )}

            {/* Darkened Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Left and Right Arrows */}
            <button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Previous">
                <FaChevronLeft className="text-xl" />
            </button>
            <button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Next">
                <FaChevronRight className="text-xl" />
            </button>

            {/* Content Overlay */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
                <div className="relative inline-block mt-8">
                    {/* Floating Heart Icon */}
                    <FaHeart className="absolute -top-10 right-4 text-accent text-4xl rotate-12" />

                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tight leading-none drop-shadow-xl" style={{ textShadow: "0 4px 6px rgba(0,0,0,0.5)" }}>
                        <span className="block mb-2">{title}</span>
                        <span className="block">{subtitle}</span>
                    </h2>
                </div>
            </div>

            {/* Additional bottom element matching the UI (slider indicators) */}
            <div className="absolute bottom-6 md:bottom-12 z-30 flex gap-2">
                <button className="w-3 h-3 rounded-full bg-white ring-2 ring-white/50 ring-offset-2 ring-offset-transparent" aria-label="Slide 1"></button>
            </div>
        </section>
    );
}
