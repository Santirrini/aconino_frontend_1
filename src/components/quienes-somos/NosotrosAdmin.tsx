"use client";

import { motion } from "framer-motion";
import { FaUserShield, FaChevronRight } from "react-icons/fa";

export default function NosotrosAdmin() {
    const adminRoles = [
        {
            title: "DIRECTORA EJECUTIVA",
            name: "Bertha Brunal Soto",
            desc: "Fisioterapeuta pediátrica egresada del Instituto Mexicano de Rehabilitación y la Universidad Nacional de Colombia, con entrenamiento en Neurodesarrollo en el Centro Bobath de Londres, curso avanzado de bebés certificado por la Asociación Europea de Neurodesarrollo y entrenada por la Asociación Americana de Neurodesarrollo. con más de 30 años de experiencia en el tratamiento de niños, directora y fundadora de Asociación Aconiño desde hace 30 años."
        },
        {
            title: "SUBDIRECTORA ADMINISTRATIVA Y FINANCIERA",
            name: "Zuleima Leonor Beltrán García",
            desc: null
        },
        {
            title: "COORDINADORAS DE ATENCIÓN INTEGRAL",
            names: ["María Claudia Rosas Mesa", "Alexandra Paz Ortega"],
            desc: null
        },
        {
            title: "CONTADORA",
            name: "Rocío Rodríguez Piraquive",
            desc: null
        },
        {
            title: "REVISOR FISCAL",
            name: "Hernan Yepes Castro",
            desc: null
        },
        {
            title: "REVISOR FISCAL SUPLENTE",
            name: "Mauricio López Soto",
            desc: null
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="bg-gray-900 relative overflow-hidden py-24 md:py-32">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] mix-blend-overlay"></div>
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] bg-accent w-12"></div>
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Gestión</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white drop-shadow-sm">
                        Equipo Administrativo
                    </h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24"
                >
                    {/* Left Column */}
                    <div className="flex flex-col gap-12">
                        {/* Directora Ejecutiva */}
                        <motion.div variants={itemVariants} className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-accent p-3 rounded-xl shadow-lg shadow-accent/20">
                                    <FaUserShield className="text-primary text-lg" />
                                </div>
                                <h4 className="text-accent font-black text-xs md:text-sm tracking-widest uppercase">{adminRoles[0].title}</h4>
                            </div>
                            <h5 className="text-white font-extrabold text-2xl md:text-3xl mb-4">{adminRoles[0].name}</h5>
                            <p className="text-gray-300 text-base leading-relaxed text-justify font-medium">
                                {adminRoles[0].desc}
                            </p>
                        </motion.div>

                        {/* Coordinadoras */}
                        <motion.div variants={itemVariants} className="group pl-4 border-l-2 border-white/10 hover:border-accent transition-colors duration-300">
                            <h4 className="text-white/60 font-black text-xs tracking-widest uppercase mb-4">{adminRoles[2].title}</h4>
                            <div className="space-y-4">
                                {adminRoles[2].names?.map((name, i) => (
                                    <h5 key={i} className="text-white font-bold text-lg md:text-xl flex items-center gap-3">
                                        <FaChevronRight className="text-accent text-sm" />
                                        {name}
                                    </h5>
                                ))}
                            </div>
                        </motion.div>

                        {/* Revisor Fiscal */}
                        <motion.div variants={itemVariants} className="group pl-4 border-l-2 border-white/10 hover:border-accent transition-colors duration-300">
                            <h4 className="text-white/60 font-black text-xs tracking-widest uppercase mb-2">{adminRoles[4].title}</h4>
                            <h5 className="text-white font-bold text-lg md:text-xl flex items-center gap-3">
                                <FaChevronRight className="text-accent text-sm" />
                                {adminRoles[4].name}
                            </h5>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-12 lg:pt-8">
                        {/* Subdirectora */}
                        <motion.div variants={itemVariants} className="group bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-500">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-white/10 p-3 rounded-xl group-hover:bg-accent transition-colors duration-300">
                                    <FaUserShield className="text-white group-hover:text-primary text-lg transition-colors" />
                                </div>
                                <h4 className="text-white/80 font-black text-xs md:text-sm tracking-widest uppercase group-hover:text-accent transition-colors">{adminRoles[1].title}</h4>
                            </div>
                            <h5 className="text-white font-extrabold text-2xl md:text-3xl">{adminRoles[1].name}</h5>
                        </motion.div>

                        {/* Contadora */}
                        <motion.div variants={itemVariants} className="group pl-4 border-l-2 border-white/10 hover:border-accent transition-colors duration-300 mt-4">
                            <h4 className="text-white/60 font-black text-xs tracking-widest uppercase mb-2">{adminRoles[3].title}</h4>
                            <h5 className="text-white font-bold text-lg md:text-xl flex items-center gap-3">
                                <FaChevronRight className="text-accent text-sm" />
                                {adminRoles[3].name}
                            </h5>
                        </motion.div>

                        {/* Revisor Fiscal Suplente */}
                        <motion.div variants={itemVariants} className="group pl-4 border-l-2 border-white/10 hover:border-accent transition-colors duration-300 lg:mt-auto">
                            <h4 className="text-white/60 font-black text-xs tracking-widest uppercase mb-2">{adminRoles[5].title}</h4>
                            <h5 className="text-white font-bold text-lg md:text-xl flex items-center gap-3">
                                <FaChevronRight className="text-accent text-sm" />
                                {adminRoles[5].name}
                            </h5>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}