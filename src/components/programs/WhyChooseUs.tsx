"use client";

import { motion } from "framer-motion";

interface WhyChooseUsItem {
  _key: string;
  text: string;
}

interface WhyChooseUsProps {
  title?: string;
  items?: WhyChooseUsItem[];
}

const defaultTitle = "¿Por qué elegir Aconiño?";

const defaultItems: WhyChooseUsItem[] = [
  { _key: '1', text: 'Programas para bebés, niños y jóvenes' },
  { _key: '2', text: 'Intervención temprana y especializada' },
  { _key: '3', text: 'Enfoque centrado en el niño y su familia' },
  { _key: '4', text: 'Trabajo interdisciplinario de alta calidad y humanidad' },
  { _key: '5', text: 'Seguimiento de productos de apoyo (órtesis y ayudas técnicas)' },
  { _key: '6', text: 'Orientación a familia y escuela' }
];

export default function WhyChooseUs({
  title = defaultTitle,
  items = defaultItems
}: WhyChooseUsProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item._key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 bg-slate-50/70 rounded-xl border border-slate-100"
            >
              <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-accent"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
