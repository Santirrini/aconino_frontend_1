import Image from "next/image";

export default function NosotrosEquipo() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl text-gray-500 font-light mb-1">
                        Nuestro equipo
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-600 inline-block relative">
                        de trabajo
                        <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-secondary/30"></div>
                        <div className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-secondary"></div>
                    </h3>
                </div>

                <div className="relative w-full aspect-[2/1] md:aspect-[21/9] max-w-6xl mx-auto shadow-xl rounded-sm overflow-hidden border-b-8 border-primary">
                    <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                        alt="Equipo de trabajo Aconiño"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
