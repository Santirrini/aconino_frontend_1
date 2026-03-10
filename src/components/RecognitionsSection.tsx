import Image from "next/image";

export default function RecognitionsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center relative z-10">

                <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-sm font-semibold text-gray-400 tracking-wider">Aconino</span>
                    <div className="h-px bg-accent w-16"></div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-16">
                    Nuestros Reconocimientos
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Placeholder content mimicking the diplomas */}
                    {[
                        { title: "Fundación Bolívar Davivienda", meta: "Noviembre de 2017" },
                        { title: "Comisión Segunda Constitucional", meta: "Diciembre de 2025" },
                        { title: "Compensar", meta: "Noviembre 2017" },
                        { title: "Concejo de Bogotá", meta: "Cruz de Oro" }
                    ].map((award, idx) => (
                        <div key={idx} className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow border-4 border-gray-100 flex flex-col items-center text-center">
                            <div className="w-24 h-24 relative mb-6">
                                <Image src={`https://via.placeholder.com/150/ffffff/0c2070?text=Logo+${idx + 1}`} alt="Premio" fill className="object-contain" />
                            </div>
                            <h4 className="font-bold text-sm text-gray-900 mb-4">{award.title}</h4>
                            <p className="text-xs text-gray-500">
                                Certifica que la Asociación Centro de Atención para Niños ha demostrado excelencia...
                            </p>
                            <span className="font-bold text-xs mt-4 text-gray-400">{award.meta}</span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Faint background image of smiling children */}
            <div className="absolute inset-0 z-0 opacity-[0.03]">
                <Image
                    src="https://via.placeholder.com/1920x800/000000/ffffff?text=Fondo+Niños+Sonriendo"
                    alt="Niños sonriendo fondo"
                    fill
                    className="object-cover grayscale"
                />
            </div>
        </section>
    );
}
