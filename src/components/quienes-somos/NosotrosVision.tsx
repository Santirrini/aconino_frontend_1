import Image from "next/image";

export default function NosotrosVision() {
    return (
        <section className="bg-white flex flex-col-reverse md:flex-row min-h-[500px]">
            {/* Left side Content */}
            <div className="w-full md:w-1/2 flex items-center p-12 lg:p-24">
                <div className="max-w-xl mx-auto w-full">
                    <div className="mb-4 flex items-center gap-4">
                        <span className="text-gray-500 font-medium text-sm">Aconiño</span>
                        <div className="h-[2px] w-12 bg-accent"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">
                        Visión
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify mb-4">
                        Seremos una organización sostenible, referente tanto nacional como internacional en innovación y generación de servicios orientados a la promoción, prevención y tratamiento de alteraciones sensoriomotoras, por medio de la aplicación de nuevas tecnologías.
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg text-justify">
                        Seremos una organización sostenible, referente tanto nacional como internacional en innovación y generación de servicios orientados a la promoción, prevención y tratamiento de alteraciones sensoriomotoras, por medio de la aplicación de nuevas tecnologías.
                    </p>
                </div>
            </div>

            {/* Right side Image with prominent Accent block */}
            <div className="w-full md:w-1/2 relative bg-accent min-h-[400px] flex items-center justify-center p-8 lg:p-16">
                {/* Left border absolute element for dark blue stripe */}
                <div className="absolute left-0 top-1/4 h-1/4 w-3 bg-primary hidden md:block"></div>
                <div className="relative w-full h-full min-h-[300px] shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2127&auto=format&fit=crop"
                        alt="Terapeuta ayudando a niña"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
