"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBrain, FaGlobeAmericas, FaHandsHelping, FaGraduationCap } from "react-icons/fa";

const timelineData = [
  {
    year: "Orígenes",
    title: "El Concepto Bobath",
    description: "Desarrollado en la década de 1940 por la fisioterapeuta Berta Bobath y el psiquiatra Karel Bobath, basado en la observación clínica y la neuroplasticidad para el tratamiento de alteraciones neurológicas.",
    icon: FaBrain,
    color: "from-blue-500 to-indigo-600"
  },
  {
    year: "Evolución",
    title: "Expansión Global",
    description: "El enfoque evolucionó de una técnica de facilitación a un concepto vivo de resolución de problemas, adaptándose a los nuevos descubrimientos en neurociencia y control motor.",
    icon: FaGlobeAmericas,
    color: "from-emerald-400 to-teal-600"
  },
  {
    year: "Colombia",
    title: "Llegada e Impacto",
    description: "El concepto llega a Colombia impulsado por profesionales comprometidos, transformando la neurorehabilitación infantil y ofreciendo nuevas esperanzas a familias de todo el país.",
    icon: FaHandsHelping,
    color: "from-amber-400 to-orange-500"
  },
  {
    year: "Actualidad",
    title: "ACONINO y el Futuro",
    description: "Consolidación de la práctica a través de la educación continua, certificación de tutores y un enfoque transdisciplinario centrado en el individuo y su entorno.",
    icon: FaGraduationCap,
    color: "from-purple-500 to-pink-600"
  }
];

export default function BobathHistory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative bg-slate-50 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-100/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-sm font-semibold tracking-wider text-slate-600 uppercase">Nuestro Legado</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Historia del Neurodesarrollo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Bobath</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Un recorrido de innovación y esperanza en la neurorehabilitación, desde sus raíces hasta su consolidación en Colombia.
          </motion.p>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full transform md:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24 relative">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div key={item.title} className="relative flex flex-col md:flex-row items-start md:items-center group">
                  
                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16 md:order-last'} pl-20 md:pl-0`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                      className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-1"
                    >
                      {/* Decorative gradient blur inside card */}
                      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-bold tracking-wider mb-4">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Node / Icon */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-lg border-4 border-slate-50 flex items-center justify-center z-10 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} opacity-10`} />
                    <Icon className={`w-6 h-6 text-transparent bg-clip-text bg-gradient-to-tr ${item.color} !fill-current drop-shadow-sm`} style={{ color: 'url(#gradient)' }} />
                    <svg width="0" height="0">
                      <linearGradient id={`gradient-${index}`} x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="currentColor" offset="0%" />
                        <stop stopColor="currentColor" offset="100%" />
                      </linearGradient>
                    </svg>
                    {/* Simplified colored icon fallback */}
                    <div className="absolute inset-0 flex items-center justify-center mix-blend-color">
                        <Icon className="w-5 h-5 text-slate-800" />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
