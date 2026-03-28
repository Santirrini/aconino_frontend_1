"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Principle {
  _key: string;
  title: string;
  description: string;
}

interface PrinciplesAccordionProps {
  principles?: Principle[];
}

const defaultPrinciples: Principle[] = [
  {
    _key: "1",
    title: "Intervención interdisciplinaria",
    description:
      "Fisioterapeutas, terapeutas ocupacionales, fonoaudiólogos y psicólogos trabajamos desde un enfoque interdisciplinario coordinado para alcanzar objetivos terapéuticos comunes.",
  },
  {
    _key: "2",
    title: "Atención centrada en el usuario y su familia",
    description:
      "Colaboración entre profesionales, paciente y familia en la valoración, planificación, implementación y seguimiento del proceso terapéutico.",
  },
  {
    _key: "3",
    title: "Objetivos funcionales",
    description:
      "Trabajamos habilidades que permiten una mayor independencia y autonomía en las actividades de la vida diaria.",
  },
  {
    _key: "4",
    title: "Intervención personalizada",
    description:
      "Diseñamos el tratamiento específicamente para cada usuario tras una evaluación individual, considerando sus condiciones, objetivos y evolución.",
  },
];

export default function PrinciplesAccordion({
  principles = defaultPrinciples,
}: PrinciplesAccordionProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggleAccordion = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Nuestros Principios
        </h2>

        <div className="space-y-4">
          {principles.map((principle) => {
            const isOpen = openKey === principle._key;

            return (
              <div
                key={principle._key}
                className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(principle._key)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-slate-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-semibold text-primary pr-4">
                    {principle.title}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0">
                        <div className="border-t border-slate-100 pt-4">
                          <p className="text-slate-600 leading-relaxed">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
