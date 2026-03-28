"use client";

import { motion } from "framer-motion";

interface MaxSatisfactionProps {
  title?: string;
  items?: string[];
}

export default function MaxSatisfaction({ title, items }: MaxSatisfactionProps) {
  return (
    <section className="py-16 md:py-32 lg:py-48 bg-primary text-white relative overflow-hidden flex items-center justify-center">
      {/* Static Deep Radial Gradient for Depth (No Movement) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] opacity-70" />

      {/* Subtle Static Decorative Accents */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[80px] md:blur-[120px] -mr-24 -mt-24 md:-mr-48 md:-mt-48" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-accent/10 rounded-full blur-[60px] md:blur-[100px] -ml-12 -mb-12 md:-ml-24 md:-mb-24" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-accent font-black tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs lg:text-sm mb-6 md:mb-8 block">
            Nuestro Propósito
          </span>

          <h2 className="text-2xl md:text-5xl lg:text-7xl font-black mb-10 md:mb-16 leading-[1.2] md:leading-[1.1] tracking-tight max-w-4xl mx-auto drop-shadow-sm px-2">
            {title}
          </h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-6 lg:gap-8 max-w-5xl"
          >
            {items?.map((item: string, index: number) => (
              <motion.span 
                key={index} 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="px-5 md:px-12 py-3 md:py-7 rounded-2xl md:rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-black text-base md:text-3xl lg:text-4xl shadow-lg transition-all cursor-default select-none inline-block"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

