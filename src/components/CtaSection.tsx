import Link from "next/link";
import Image from "next/image";

interface CtaSectionProps {
    acf?: any;
}

export default function CtaSection({ acf }: CtaSectionProps) {
    const ctaText = acf?.hero_cta_text || "CONTÁCTANOS";
    const ctaLink = acf?.hero_cta_link || "/contacto";

    return (
        <section className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden bg-primary">
            {/* Background Image with Dark Blue Overlay */}
            <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
                <Image
                    src="https://via.placeholder.com/1920x600/0c2070/ffffff?text=Fondo+Niños"
                    alt="Niños felices"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <div className="text-sm text-gray-300 tracking-widest uppercase mb-4 font-semibold">
                    Aconino
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight">
                    35 años apoyando la inclusión
                </h2>
                <Link href={ctaLink} className="inline-block bg-accent text-white font-bold tracking-wider text-sm px-10 py-4 rounded-full hover:bg-white hover:text-primary transition-colors shadow-lg shadow-accent/20">
                    {ctaText}
                </Link>
            </div>
        </section>
    );
}
