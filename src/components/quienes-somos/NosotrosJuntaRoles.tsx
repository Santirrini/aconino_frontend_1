"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaChevronRight } from "react-icons/fa";

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

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="bg-primary relative overflow-hidden py-24 md:py-32">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24"
                >
                    {/* Left Column */}
                    <div className="flex flex-col gap-10">
                        {[0, 2, 3, 5].map((index) => {
                            const role = roles[index];
                            return (
                                <motion.div variants={itemVariants} key={index} className="group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
                                            <FaUserTie className="text-white text-sm" />
                                        </div>
                                        <h4 className="text-white/70 font-black text-xs tracking-widest uppercase group-hover:text-accent transition-colors">{role.title}</h4>
                                    </div>
                                    <div className="pl-11 border-l-2 border-white/10 group-hover:border-accent transition-colors duration-300">
                                        <h5 className="text-white font-extrabold text-xl md:text-2xl mb-2 flex items-center gap-2">
                                            <FaChevronRight className="text-accent text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                            {role.name}
                                        </h5>
                                        {role.description && (
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify max-w-md mt-4 font-medium">
                                                {role.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-10 pt-2 md:pt-24 lg:pt-32">
                        {/* Decorative separator on desktop */}
                        <div className="hidden md:block absolute top-1/4 bottom-1/4 left-1/2 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

                        {[1, 4].map((index) => {
                            const role = roles[index];
                            return (
                                <motion.div variants={itemVariants} key={index} className="group">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-white/10 p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
                                            <FaUserTie className="text-white text-sm" />
                                        </div>
                                        <h4 className="text-white/70 font-black text-xs tracking-widest uppercase group-hover:text-accent transition-colors">{role.title}</h4>
                                    </div>
                                    <div className="pl-11 border-l-2 border-white/10 group-hover:border-accent transition-colors duration-300">
                                        <h5 className="text-white font-extrabold text-xl md:text-2xl mb-2 flex items-center gap-2">
                                            <FaChevronRight className="text-accent text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                            {role.name}
                                        </h5>
                                        {role.description && (
                                            <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify max-w-md mt-4 font-medium">
                                                {role.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}