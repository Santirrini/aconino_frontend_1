"use client";

import { motion } from "framer-motion";

interface WhatWeDoStep {
  _key: string;
  step: number;
  title: string;
  description: string;
}

interface WhatWeDoTimelineProps {
  title?: string;
  steps?: WhatWeDoStep[];
}

const defaultTitle = "Qué hacemos";

const defaultSteps: WhatWeDoStep[] = [
  {
    _key: '1',
    step: 1,
    title: 'Valoración inicial interdisciplinaria',
    description: 'Permite identificar el desarrollo que está demorado, inmaduro o bloqueado debido al tono postural atípico o a otras deficiencias. Permite establecer un plan de tratamiento adecuado.'
  },
  {
    _key: '2',
    step: 2,
    title: 'Definición de objetivos personalizados',
    description: 'Se establecen objetivos terapéuticos específicos para cada usuario basados en la evaluación individual y las expectativas de la familia.'
  },
  {
    _key: '3',
    step: 3,
    title: 'Plan terapéutico integral',
    description: 'Se diseña un plan de intervención personalizado que integra las diferentes áreas terapéuticas.'
  },
  {
    _key: '4',
    step: 4,
    title: 'Trabajo conjunto con las familias',
    description: 'La colaboración entre profesionales y familia es fundamental. La participación activa mejora la motivación, la autonomía y los resultados.'
  },
  {
    _key: '5',
    step: 5,
    title: 'Seguimiento diario',
    description: 'Se registra la evolución siguiendo lineamientos de acuerdo a la normatividad de la historia clínica.'
  },
  {
    _key: '6',
    step: 6,
    title: 'Informe semestral',
    description: 'Se realiza informe de cada área terapéutica, se entrega a los padres y a las EAPB. Se define un nuevo plan de acción.'
  },
  {
    _key: '7',
    step: 7,
    title: 'Egreso',
    description: 'Una vez logrados los objetivos propuestos y dado de alta por parte del médico tratante, se realiza el egreso.'
  }
];

export default function WhatWeDoTimeline({
  title = defaultTitle,
  steps = defaultSteps
}: WhatWeDoTimelineProps) {
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

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 via-accent/40 to-accent/60 transform md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {steps.map((item, index) => (
              <motion.div
                key={item._key}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="relative flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-accent shadow-lg ring-4 ring-white z-10">
                  <span className="text-xl md:text-2xl font-bold text-white">
                    {item.step}
                  </span>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
