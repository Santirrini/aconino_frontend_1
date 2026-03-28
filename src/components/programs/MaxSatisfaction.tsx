"use client";

import { motion } from "framer-motion";

interface MaxSatisfactionProps {
  title?: string;
  items?: string[];
}

export default function MaxSatisfaction({ title, items }: MaxSatisfactionProps) {
  return (
    <section className="py-24 md:py-48 bg-primary text-white relative overflow-hidden flex items-center justify-center">
      <motion.div 
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '80px 80px'
        }} 
      />
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full blur-3xl"
            initial={{ 
              width: Math.random() * 200 + 100, 
              height: Math.random() * 200 + 100,
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0.1
            }}
            animate={{ 
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          className="text-7xl md:text-9xl text-white font-serif leading-none absolute -top-12 left-1/2 -translate-x-1/2 select-none"
        >
          &quot;
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 lg:mb-16 leading-tight relative mt-8 drop-shadow-2xl"
        >
          {title}
        </motion.h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {items?.map((item: string, index: number) => (
            <motion.span 
              key={index} 
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 }
              }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              className="px-6 md:px-10 py-4 md:py-6 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black text-xl md:text-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
