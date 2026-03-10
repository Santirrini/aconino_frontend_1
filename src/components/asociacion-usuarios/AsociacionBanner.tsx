import Image from "next/image";

export default function AsociacionBanner() {
    return (
        <section className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1554907984-15263bf268e3?q=80&w=2070&auto=format&fit=crop"
                    alt="Niños sonriendo"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-[#0f1f6a]/90"></div> {/* Color matching the screenshot */}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
                <span className="text-white/80 text-sm font-medium mb-4">Aconiño</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-snug drop-shadow-md">
                    Con el fin de velar por la calidad<br />del servicio y la defensa de los<br />usuarios
                </h2>
            </div>
        </section>
    );
}
