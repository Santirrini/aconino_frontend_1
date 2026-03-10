import Image from "next/image";

export default function NosotrosJuntaPhoto() {
    return (
        <section className="bg-white py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl text-gray-500 font-light mb-1">
                        Junta
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-600 inline-block relative">
                        Directiva
                        <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-secondary/30"></div>
                        <div className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-secondary"></div>
                    </h3>
                </div>

                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] max-w-5xl mx-auto shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                        alt="Junta Directiva Aconiño"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
