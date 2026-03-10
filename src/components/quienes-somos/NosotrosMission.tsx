import Image from "next/image";

export default function NosotrosMission() {
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
                        Misión
                    </h2>
                    <p className="text-gray-200 leading-relaxed text-lg text-justify">
                        Somos una asociación innovadora, que ofrece programas de prevención y atención integral a niños, niñas y jóvenes con alteraciones sensoriomotoras, así como capacitación y orientación a profesionales e instituciones, aplicando el enfoque de Neurodesarrollo - Bobath y otras técnicas relacionadas, para el mejoramiento de la calidad de vida e Inclusión social de la población objetivo.
                    </p>
                </div>
                {/* Right border absolute element for yellow accent stripe */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent h-3/4 w-2 hidden md:block"></div>
            </div>

            {/* Right side Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                    alt="Terapeuta con niño"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
}
