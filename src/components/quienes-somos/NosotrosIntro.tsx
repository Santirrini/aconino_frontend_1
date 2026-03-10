import Image from "next/image";

export default function NosotrosIntro() {
    return (
        <section className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    {/* Left side Image */}
                    <div className="w-full md:w-1/2 relative">
                        <div className="relative aspect-[3/4] md:aspect-square w-full max-w-sm mx-auto shadow-2xl overflow-hidden rounded-sm">
                            <Image
                                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1968&auto=format&fit=crop"
                                alt="Niña en terapia"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative Yellow Element */}
                        <div className="absolute -bottom-8 -right-4 w-1 flex flex-col items-center h-3/4">
                            <div className="h-full w-2 bg-accent rounded-full absolute -right-6 bottom-10" />
                            {/* Heart icon placeholder */}
                            <svg className="absolute -right-10 -bottom-2 w-8 h-8 text-accent fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </div>
                    </div>

                    {/* Right side Content */}
                    <div className="w-full md:w-1/2">
                        <div className="mb-4 flex items-center gap-4">
                            <span className="text-gray-500 font-medium text-sm">Aconiño</span>
                            <div className="h-[2px] w-12 bg-accent"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
                            Quiénes Somos
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6 text-justify">
                            Somos una entidad privada sin ánimo de lucro, creada en 1990, con el propósito de apoyar a las familias con niños en condición de discapacidad de entre 0 y 18 años. Brindamos un servicio de atención integral basado en el modelo de práctica contemporáneo de Neurodesarrollo NDT, que contempla diagnósticos tales como Parálisis Cerebral, Retraso en el Desarrollo Psicomotor, Síndrome de West e Hipotonía, entre otros.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
