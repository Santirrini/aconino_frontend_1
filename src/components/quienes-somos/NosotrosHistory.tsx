import Image from "next/image";

export default function NosotrosHistory() {
    return (
        <section className="bg-primary flex flex-col md:flex-row min-h-[500px]">
            {/* Left side Content (Dark Blue Background) */}
            <div className="w-full md:w-1/2 flex items-center p-12 lg:p-24 relative overflow-hidden">
                <div className="max-w-xl mx-auto z-10 w-full text-white">
                    <div className="mb-4 flex items-center gap-4">
                        <span className="text-gray-300 font-medium text-sm">Aconiño</span>
                        <div className="h-[1px] w-12 bg-accent"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">
                        Historia
                    </h2>
                    <p className="text-gray-200 leading-relaxed text-lg text-justify mb-4">
                        En el mes de noviembre de 1990, un grupo de siete padres y dos fisioterapeutas fundaron una organización privada sin ánimo de lucro, con el objetivo de brindar atención interdisciplinaria a niños, niñas y jóvenes con alteraciones sensoriomotoras ocasionadas por lesiones del sistema nervioso central.
                    </p>
                    <p className="text-gray-200 leading-relaxed text-lg text-justify">
                        Se impuso asimismo la necesidad de capacitar a familias, profesionales y entidades públicas y privadas en relación con el desarrollo del niño, sus alteraciones y el tratamiento que debe brindársele.
                    </p>
                </div>
                {/* Yellow accent box hidden under standard tailwind positioning */}
                <div className="absolute right-0 top-1/4 transform bg-accent h-1/2 w-2 hidden md:block"></div>
            </div>

            {/* Right side Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                    alt="Terapia grupal con niños"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
}
