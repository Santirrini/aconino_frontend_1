export default function NosotrosJuntaRoles() {
    const roles = [
        {
            title: "PRESIDENTE",
            name: "Germán Camilo Lleras Echeverry",
            description: "Forma parte de una de las familias fundadoras de Aconiño. Por cerca de 20 años se ha dedicado a la consultoría especializada en transporte, ciudades e infraestructura y a la docencia en la ingeniería civil."
        },
        {
            title: "VICEPRESIDENTE",
            name: "Norma Inés Orjuela Deep",
            description: null
        },
        {
            title: "SECRETARIA",
            name: "Myriam Lilia Barrera Castillo",
            description: null
        },
        {
            title: "VOCAL",
            name: "Laureano González Barbosa",
            description: null
        },
        {
            title: "VOCAL",
            name: "Jose Ignacio Leiva González",
            description: null
        },
        {
            title: "VOCAL",
            name: "Juan Carlos Andrade Flórez",
            description: null
        }
    ];

    return (
        <section className="bg-[#0f1f6a] relative overflow-hidden py-16 md:py-24">
            {/* Texture overlay via CSS repeating-radial-gradient or SVG pattern - placeholder for screenshot matching */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 justify-center">

                {/* Left Column */}
                <div className="flex-1 max-w-lg space-y-10">
                    {/* Presidente */}
                    <div className="border-b border-white/20 pb-8">
                        <h4 className="text-white/80 font-bold text-sm tracking-wider mb-4">PRESIDENTE</h4>
                        <div className="flex items-start gap-2 mb-3">
                            <span className="text-white mt-1">▸</span>
                            <h5 className="text-white font-bold text-lg">{roles[0].name}</h5>
                        </div>
                        {roles[0].description && (
                            <p className="text-white/70 text-sm leading-relaxed text-justify">
                                {roles[0].description}
                            </p>
                        )}
                    </div>

                    {/* Secretaria */}
                    <div className="border-b border-white/20 pb-6">
                        <h4 className="text-white/80 font-bold text-sm tracking-wider mb-4">SECRETARIA</h4>
                        <div className="flex items-start gap-2">
                            <span className="text-white mt-1">▸</span>
                            <h5 className="text-white font-bold text-base">{roles[2].name}</h5>
                        </div>
                    </div>

                    {/* Vocal 1 */}
                    <div className="border-b border-white/20 pb-6">
                        <h4 className="text-white/80 font-bold text-sm tracking-wider mb-4">VOCAL</h4>
                        <div className="flex items-start gap-2">
                            <span className="text-white mt-1">▸</span>
                            <h5 className="text-white font-bold text-base">{roles[3].name}</h5>
                        </div>
                    </div>

                    {/* Vocal 3 */}
                    <div className="border-b border-white/20 pb-6">
                        <h4 className="text-white/80 font-bold text-sm tracking-wider mb-4">VOCAL</h4>
                        <div className="flex items-start gap-2">
                            <span className="text-white mt-1">▸</span>
                            <h5 className="text-white font-bold text-base">{roles[5].name}</h5>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 max-w-lg space-y-10 pt-2">
                    {/* decorative line top right */}
                    <div className="h-[1px] w-24 bg-white/30 hidden md:block absolute top-12 right-1/4"></div>

                    {/* Vicepresidente */}
                    <div className="border-b border-white/20 pb-6 mt-10 md:mt-0">
                        <h4 className="text-white/80 font-bold text-sm tracking-wider mb-4">VICEPRESIDENTE</h4>
                        <div className="flex items-start gap-2">
                            <span className="text-white mt-1">▸</span>
                            <h5 className="text-white font-bold text-base">{roles[1].name}</h5>
                        </div>
                    </div>

                    {/* Vocal 2 */}
                    <div className="border-b border-white/20 pb-6 !mt-[12.5rem]">
                        <h4 className="text-white/80 font-bold text-sm tracking-wider mb-4">VOCAL</h4>
                        <div className="flex items-start gap-2">
                            <span className="text-white mt-1">▸</span>
                            <h5 className="text-white font-bold text-base">{roles[4].name}</h5>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
