import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa"; // Using generic icons for now

export default function ProgramsSection() {
    const programs = [
        {
            title: "Apoyo a dificultades en el aprendizaje a niños",
            desc: "de 3 a 14 años. Programa terapéutico de...",
            icon: <FaGraduationCap className="text-4xl text-secondary" />
        },
        {
            title: "Protocolo Intensivo Pediasuit Niños y jóvenes",
            desc: "de 2 a 18 años. Protocolo Pediasuit es un programa...",
            icon: <FaGraduationCap className="text-4xl text-secondary" />
        },
        {
            title: "Atención temprana",
            desc: "de 0 a 3 años. Programa terapéutico integral para apoyar el desarrollo sicomotor a través de...",
            icon: <FaGraduationCap className="text-4xl text-accent" />
        },
        {
            title: "Atención a niños y jóvenes",
            desc: "de 3 a 18 años. programa terapéutico integral para apoyar el desarrollo...",
            icon: <FaGraduationCap className="text-4xl text-accent" />
        }
    ];

    return (
        <section className="w-full py-16 bg-gray-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* Header layout aligned like the mockup */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12">
                    {/* Left Column Text */}
                    <div className="w-full lg:w-1/4 shrink-0">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-sm font-semibold text-gray-400 tracking-wider">Aconino</span>
                            <div className="h-px bg-accent w-16"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-4">
                            Nuestros Programas
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Programa terapéutico integral para apoyar el desarrollo psicomotor.
                        </p>
                    </div>

                    {/* Right Column Cards */}
                    <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((prog, idx) => (
                            <div key={idx} className="bg-white border-b-4 border-white hover:border-accent transition-colors duration-300 shadow-sm hover:shadow-lg p-8 flex flex-col group relative">
                                <h3 className="text-lg font-bold text-primary mb-4 min-h-[56px]">{prog.title}</h3>
                                <p className="text-sm text-gray-400 mb-8 flex-1">{prog.desc}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="text-secondary group-hover:text-accent transition-colors">
                                        {prog.icon}
                                    </div>
                                    <Link href="/programas" className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-secondary hover:text-white transition-colors">
                                        &raquo;
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className="absolute inset-0 z-0 bg-opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] mix-blend-multiply opacity-10"></div>
        </section>
    );
}
