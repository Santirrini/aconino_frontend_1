import Image from "next/image";

interface Child {
    name: string;
    image: string;
}

export default function NosotrosSemillas() {
    const children: Child[] = [
        { name: "Sandra Arbeláez", image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=200&auto=format&fit=crop" },
        { name: "Ernesto Constantín", image: "https://images.unsplash.com/photo-1473451159981-d13eb22d2f78?q=80&w=200&auto=format&fit=crop" },
        { name: "Juan Carlos Andrade", image: "https://images.unsplash.com/photo-1601000676450-9bb32dce30eb?q=80&w=200&auto=format&fit=crop" },
        { name: "Guillermo José Ronderos", image: "https://images.unsplash.com/photo-1541818167362-dcc7ae6a2e88?q=80&w=200&auto=format&fit=crop" },
        { name: "Camilo González", image: "https://images.unsplash.com/photo-1513904677712-4aa82dce6961?q=80&w=200&auto=format&fit=crop" },
        { name: "Daniel Domínguez", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=200&auto=format&fit=crop" },
    ];

    return (
        <section className="bg-white">
            {/* Dark Blue Banner */}
            <div className="bg-primary py-16 text-center shadow-inner">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-white text-3xl md:text-5xl font-['Comic_Sans_MS',cursive] md:font-sans font-bold leading-tight drop-shadow-sm">
                        <span className="block mb-2 text-4xl md:text-6xl">Semillas de amor</span>
                        <span className="block mb-2 ml-[10%] opacity-90">donde ahora crecen</span>
                        <span className="block ml-[30%] opacity-80">otros sueños</span>
                    </h2>
                </div>
            </div>

            {/* Children Grid */}
            <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
                    {children.map((child, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden shadow-lg border-2 border-white ring-2 ring-gray-100">
                                <Image
                                    src={child.image}
                                    alt={child.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="text-gray-500 font-medium text-sm md:text-base max-w-[120px]">{child.name}</h4>
                            <div className="h-[1px] w-4 bg-gray-300 mt-3"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
