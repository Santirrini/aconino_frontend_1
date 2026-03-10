import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap, FaHeart, FaStar, FaUser } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
    'graduation-cap': <FaGraduationCap />,
    'heart': <FaHeart />,
    'star': <FaStar />,
    'user': <FaUser />,
};

export default async function ProgramasPage() {
    const payload = await getPayload({ config: configPromise });

    const { docs: programs } = await payload.find({
        collection: "programs-pages",
        sort: "createdAt",
    });

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Banner */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop"
                    alt="Programas Aconiño"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="relative z-10 text-center px-4">
                    <div className="flex justify-center mb-6">
                        <span className="text-yellow-400 text-5xl">♥</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Programas
                    </h1>
                </div>
            </section>

            {/* Programs List */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {programs.map((program, index) => {
                        const isEven = index % 2 === 0;
                        const imageUrl = program.featuredImage && typeof program.featuredImage === 'object'
                            ? program.featuredImage.url
                            : "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1972&auto=format&fit=crop";

                        return (
                            <div
                                key={program.id}
                                id={program.slug}
                                className={`flex flex-col lg:flex-row items-center gap-12 mb-32 last:mb-0 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                                    }`}
                            >
                                {/* Image Section */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className={`absolute -inset-4 bg-accent/20 rounded-3xl transition-transform duration-500 group-hover:scale-105 ${isEven ? "translate-x-4 translate-y-4" : "-translate-x-4 translate-y-4"
                                        }`}></div>
                                    <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={imageUrl || ""}
                                            alt={program.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Decorative corner icon */}
                                    <div className={`absolute bottom-0 ${isEven ? "right-0 translate-x-1/2 translate-y-1/2" : "left-0 -translate-x-1/2 translate-y-1/2"}`}>
                                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary shadow-lg border-4 border-white">
                                            <span className="text-2xl">♥</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Aconino</span>
                                        <div className="h-[2px] bg-accent w-12"></div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">
                                        {program.title}
                                    </h2>

                                    {program.ageRange && (
                                        <p className="text-xl font-medium text-secondary">
                                            {program.ageRange}
                                        </p>
                                    )}

                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {program.description}
                                    </p>

                                    <div className="pt-6">
                                        <Link
                                            href={`/programas/${program.slug}`}
                                            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-all duration-300 transform hover:-translate-y-1 shadow-lg group"
                                        >
                                            Más información
                                            <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Floating CTA or Footer simple */}
            <section className="bg-primary py-20 text-center text-white">
                <h3 className="text-3xl font-bold mb-8">¿Quieres saber más sobre nuestros programas?</h3>
                <Link
                    href="/contacto"
                    className="bg-accent text-primary px-10 py-4 rounded-full font-black text-lg hover:bg-white transition-colors"
                >
                    CONTÁCTANOS
                </Link>
            </section>
        </main>
    );
}
