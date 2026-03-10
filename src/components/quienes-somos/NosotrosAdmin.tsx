"use client";

import { motion } from "framer-motion";
import { FaUserShield, FaChevronRight } from "react-icons/fa";

export default function NosotrosAdmin() {
    const adminRoles = [
        {
            title: "DIRECTORA EJECUTIVA",
            name: "Bertha Brunal Soto",
            desc: "Fisioterapeuta pediátrica egresada del Instituto Mexicano de Rehabilitación y la Universidad Nacional de Colombia, con entrenamiento en Neurodesarrollo en el Centro Bobath de Londres, curso avanzado de bebés certificado por la Asociación Europea de Neurodesarrollo y entrenada por la Asociación Americana de Neurodesarrollo. Con más de 30 años de experiencia en el tratamiento de niños, directora y fundadora de Asociación Aconiño."
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
        <section className="bg-gray-50 relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48">
            {/* Texture overlay & Decorative Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')] mix-blend-overlay pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4 pointer-events-none" />

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
                        <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Gestión y Liderazgo</span>
                        <div className="h-[2px] bg-accent w-12"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary drop-shadow-sm">
                        Equipo Administrativo
                    </h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10"
                >
                    {/* Left Column */}
                    <div className="flex flex-col gap-12">
                        {/* Directora Ejecutiva */}
                        <motion.div variants={itemVariants} className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl border-b-4 border-transparent hover:border-accent transition-all duration-500 transform hover:-translate-y-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300 w-fit">
                                    <FaUserShield className="text-primary group-hover:text-white text-xl md:text-2xl transition-colors" />
                                </div>
                                <h4 className="text-gray-400 font-black text-xs md:text-sm tracking-widest uppercase">{adminRoles[0].title}</h4>
                            </div>
                            <h5 className="text-primary font-extrabold text-2xl md:text-3xl mb-4 leading-tight">{adminRoles[0].name}</h5>
                            <p className="text-gray-600 text-base leading-relaxed text-justify">
                                {adminRoles[0].desc}
                            </p>
                        </motion.div>

                        {/* Coordinadoras */}
                        <motion.div variants={itemVariants} className="group pl-6 border-l-4 border-gray-200 hover:border-accent transition-colors duration-300">
                            <h4 className="text-gray-400 font-black text-xs tracking-widest uppercase mb-4">{adminRoles[2].title}</h4>
                            <div className="space-y-4">
                                {adminRoles[2].names?.map((name, i) => (
                                    <h5 key={i} className="text-primary font-bold text-lg md:text-xl flex items-center gap-3 group-hover:text-secondary transition-colors">
                                        <FaChevronRight className="text-accent text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {name}
                                    </h5>
                                ))}
                            </div>
                        </motion.div>

                        {/* Revisor Fiscal */}
                        <motion.div variants={itemVariants} className="group pl-6 border-l-4 border-gray-200 hover:border-accent transition-colors duration-300">
                            <h4 className="text-gray-400 font-black text-xs tracking-widest uppercase mb-3">{adminRoles[4].title}</h4>
                            <h5 className="text-primary font-bold text-lg md:text-xl flex items-center gap-3 group-hover:text-secondary transition-colors">
                                <FaChevronRight className="text-accent text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                {adminRoles[4].name}
                            </h5>
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-12 lg:pt-8">
                        {/* Subdirectora */}
                        <motion.div variants={itemVariants} className="group bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl border-b-4 border-transparent hover:border-accent transition-all duration-500 transform hover:-translate-y-2">
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-300 w-fit">
                                    <FaUserShield className="text-primary group-hover:text-white text-xl md:text-2xl transition-colors" />
                                </div>
                                <h4 className="text-gray-400 font-black text-xs md:text-sm tracking-widest uppercase">{adminRoles[1].title}</h4>
                            </div>
                            <h5 className="text-primary font-extrabold text-2xl md:text-3xl leading-tight">{adminRoles[1].name}</h5>
                        </motion.div>

                        {/* Contadora */}
                        <motion.div variants={itemVariants} className="group pl-6 border-l-4 border-gray-200 hover:border-accent transition-colors duration-300 mt-4">
                            <h4 className="text-gray-400 font-black text-xs tracking-widest uppercase mb-3">{adminRoles[3].title}</h4>
                            <h5 className="text-primary font-bold text-lg md:text-xl flex items-center gap-3 group-hover:text-secondary transition-colors">
                                <FaChevronRight className="text-accent text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                {adminRoles[3].name}
                            </h5>
                        </motion.div>

                        {/* Revisor Fiscal Suplente */}
                        <motion.div variants={itemVariants} className="group pl-6 border-l-4 border-gray-200 hover:border-accent transition-colors duration-300 lg:mt-auto">
                            <h4 className="text-gray-400 font-black text-xs tracking-widest uppercase mb-3">{adminRoles[5].title}</h4>
                            <h5 className="text-primary font-bold text-lg md:text-xl flex items-center gap-3 group-hover:text-secondary transition-colors">
                                <FaChevronRight className="text-accent text-sm opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                {adminRoles[5].name}
                            </h5>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Visual Separator: Wave transitioning to the dark footer */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0 pointer-events-none">
                <svg className="relative block w-full h-[60px] md:h-[120px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path 
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.26,192.4,103.5,237.93,91.68,280.9,74.5,321.39,56.44Z" 
                        className="fill-[#1b2b65]" 
                    />
                </svg>
            </div>
        </section>
    );
}