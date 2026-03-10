import Image from "next/image";
import Link from "next/link";

interface AboutSectionProps {
    acf?: any;
}

export default function AboutSection({ acf }: AboutSectionProps) {
    const title = acf?.about_title || "35 años trabajando por mejorar la calidad de vida de niños, niñas y jóvenes en condición de discapacidad";
    const description = acf?.about_description || "Tratamientos y terapias con el Modelo de práctica contemporáneo de Neurodesarrollo y protocolo intensivo Pediasuit Orientación y apoyo a las familias";
    const imageUrl = acf?.about_image || "https://via.placeholder.com/600x450/e2e8f0/0c2070?text=Foto+Equipo+Aconiño";
    const ctaText = acf?.about_cta_text || "CONTÁCTANOS";
    const ctaLink = acf?.about_cta_link || "/contacto";
    
    const statsValue = acf?.stats_1_value || "+35";
    const statsLabelParts = (acf?.stats_1_label || "años\napoyando la\ninclusión!").split("\n");

    return (
        <section className="w-full py-16 md:py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image group */}
                <div className="relative">
                    {/* Dark blue background box */}
                    <div className="absolute top-1/4 -left-8 md:-left-16 w-3/4 h-full bg-secondary z-0 flex flex-col items-center justify-center text-white py-12 px-4 shadow-lg">
                        <span className="text-5xl md:text-6xl font-bold mb-2">{statsValue}</span>
                        <span className="text-sm md:text-base text-center leading-tight">
                            {statsLabelParts.map((part: string, idx: number) => (
                                <span key={idx}>
                                    {part}
                                    {idx < statsLabelParts.length - 1 && <br />}
                                </span>
                            ))}
                        </span>
                    </div>

                    {/* Main Image */}
                    <div className="relative z-10 w-full max-w-md mx-auto lg:ml-auto shadow-xl aspect-[4/3]">
                        <Image
                            src={imageUrl}
                            alt="Equipo Aconiño"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Accent Yellow Border Box */}
                    <div className="absolute -bottom-8 -right-4 md:right-8 w-32 h-32 md:w-48 md:h-48 border-4 border-accent z-20 pointer-events-none"></div>
                </div>

                {/* Right Side: Text Content */}
                <div className="relative z-10 px-4 md:px-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-semibold text-gray-400 tracking-wider">Aconino</span>
                        <div className="h-px bg-accent w-16"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6">
                        {title}
                    </h2>

                    <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
                        {description}
                    </p>

                    <Link href={ctaLink} className="inline-block bg-primary text-white font-bold tracking-wider text-sm px-8 py-4 rounded-full hover:bg-secondary transition-colors">
                        {ctaText}
                    </Link>
                </div>
            </div>

            {/* Very faint background illustration */}
            <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none z-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/skulls.png')] bg-no-repeat bg-right-bottom bg-contain" />
        </section>
    );
}
