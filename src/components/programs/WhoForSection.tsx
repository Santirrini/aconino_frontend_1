"use client";

import { motion } from "framer-motion";

interface TargetAudience {
  _key: string;
  icon: string;
  label: string;
}

interface WhoForSectionProps {
  title?: string;
  items?: TargetAudience[];
}

const defaultTitle = "A quién están dirigidos nuestros programas";

const defaultItems: TargetAudience[] = [
  { _key: '1', icon: '👶', label: 'Bebés con riesgo en el neurodesarrollo' },
  { _key: '2', icon: '👧', label: 'Niños con retraso en su desarrollo' },
  { _key: '3', icon: '🧒', label: 'Niños con discapacidad motora' },
  { _key: '4', icon: '💬', label: 'Niños con dificultades en comunicación' },
  { _key: '5', icon: '📚', label: 'Niños con dificultades de aprendizaje' },
  { _key: '6', icon: '🌟', label: 'Jóvenes que requieren fortalecer su autonomía' }
];

export default function WhoForSection({
  title = defaultTitle,
  items = defaultItems
}: WhoForSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-12 md:mb-16"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item._key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group flex flex-col items-center text-center p-4 md:p-6 bg-white rounded-2xl border border-slate-200/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-snug font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
