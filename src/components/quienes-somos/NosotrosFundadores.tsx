import Image from "next/image";

interface Founder {
    name: string;
    image: string;
}

export default function NosotrosFundadores() {
    // Placeholder data mapping to the screenshot
    const foundersRow1: Founder[] = [
        { name: "Berta Brunal", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" },
        { name: "Patricia Flórez", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=200&auto=format&fit=crop" },
        { name: "Laureano González", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" },
        { name: "Beatriz Acevedo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" },
        { name: "Miryam Barrera", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop" },
    ];

    const foundersRow2: Founder[] = [
        { name: "Lila Cañaveras", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" },
        { name: "Juan Andrade", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" },
        { name: "Guillermo Ronderos", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" },
        { name: "Rosana Bonilla", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" },
    ];

    const FounderCard = ({ founder }: { founder: Founder }) => (
        <div className="flex flex-col items-center group">
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-accent transition-all duration-300">
                <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            </div>
            <h4 className="text-gray-600 font-semibold text-center text-sm md:text-base">{founder.name}</h4>
            <div className="h-[1px] w-6 bg-gray-300 mt-2"></div>
        </div>
    );

    return (
        <section className="py-20 md:py-28 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl text-gray-500 font-light mb-1">
                        Nuestros
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-gray-700 inline-block relative">
                        fundadores
                        <div className="absolute -bottom-2 left-0 w-full h-[3px] bg-secondary/30"></div>
                        <div className="absolute -bottom-2 left-0 w-1/3 h-[3px] bg-secondary"></div>
                    </h3>
                </div>

                <div className="flex flex-col gap-12 items-center">
                    {/* First Row (5 people) */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {foundersRow1.map((founder, idx) => (
                            <FounderCard key={idx} founder={founder} />
                        ))}
                    </div>
                    {/* Second Row (4 people) */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {foundersRow2.map((founder, idx) => (
                            <FounderCard key={idx} founder={founder} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
