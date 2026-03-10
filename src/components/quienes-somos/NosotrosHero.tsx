import Image from "next/image";

export default function NosotrosHero() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                {/* Placeholder background image - replace with actual team/building photo */}
                <Image
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                    alt="Fondo Asociación Aconiño"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
            </div>

            <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white flex items-center gap-2 drop-shadow-md tracking-tight">
                    Quiénes Somos
                </h1>
            </div>
            {/* The ACN huge logo behind text effect mapping to the screenshot could go here if available */}
        </section>
    );
}
