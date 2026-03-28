"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ObjectiveItem {
  _key: string;
  description: string;
}

interface ObjectivesTabsProps {
  motorGruesa?: ObjectiveItem[];
  motorFina?: ObjectiveItem[];
  comunicacion?: ObjectiveItem[];
  psicologia?: ObjectiveItem[];
}

const defaultMotorGruesa: ObjectiveItem[] = [
  { _key: "1", description: "Favorecer el desarrollo y la adquisición de patrones motores funcionales y de calidad." },
  { _key: "2", description: "Estimular la integración sensoriomotora y el control postural durante el movimiento." },
  { _key: "3", description: "Fortalecer la musculatura y mejorar las condiciones osteomusculares." },
  { _key: "4", description: "Prevenir o disminuir alteraciones musculoesqueléticas y limitaciones en la movilidad." },
  { _key: "5", description: "Desarrollar ajustes posturales y reacciones de enderezamiento y protección." },
  { _key: "6", description: "Evitar compensaciones motoras que interfieran en el desarrollo funcional." },
  { _key: "7", description: "Favorecer la participación en actividades de la vida diaria." },
  { _key: "8", description: "Diseñar, realizar y sugerir productos de apoyo para favorecer posturas correctas." },
];

const defaultMotorFina: ObjectiveItem[] = [
  { _key: "1", description: "Desarrollar habilidades de motricidad fina y coordinación manual." },
  { _key: "2", description: "Favorecer la integración sensorial y el procesamiento multisensorial." },
  { _key: "3", description: "Estimular procesos cognitivos y funciones ejecutivas." },
  { _key: "4", description: "Potenciar habilidades grafomotoras y pre-académicas." },
  { _key: "5", description: "Promover control postural y posicionamiento adecuado." },
  { _key: "6", description: "Fomentar la autonomía en actividades de la vida diaria." },
  { _key: "7", description: "Orientar a familias y entorno escolar para continuidad del proceso." },
];

const defaultComunicacion: ObjectiveItem[] = [
  { _key: "1", description: "Favorecer el desarrollo de la comunicación funcional." },
  { _key: "2", description: "Estimular habilidades cognitivas y lingüísticas." },
  { _key: "3", description: "Fortalecer las funciones estomatognáticas y orofaciales." },
  { _key: "4", description: "Estimular procesos de atención, concentración y motivación." },
  { _key: "5", description: "Promover alineación postural que facilite la producción oral." },
  { _key: "6", description: "Desarrollar habilidades de comunicación aumentativa o alternativa." },
];

const defaultPsicologia: ObjectiveItem[] = [
  { _key: "1", description: "Fortalecer procesos psicológicos básicos y superiores." },
  { _key: "2", description: "Promover conductas sociales adaptativas y habilidades de interacción." },
  { _key: "3", description: "Desarrollar estrategias de regulación emocional." },
  { _key: "4", description: "Estimular habilidades cognitivas relacionadas con el aprendizaje." },
  { _key: "5", description: "Orientar a las familias en pautas de crianza y manejo comportamental." },
  { _key: "6", description: "Empoderar a padres y cuidadores para acompañar el proceso." },
];

const tabs = [
  { id: "motorGruesa", label: "Motricidad Gruesa", objectives: defaultMotorGruesa },
  { id: "motorFina", label: "Motricidad Fina", objectives: defaultMotorFina },
  { id: "comunicacion", label: "Comunicación", objectives: defaultComunicacion },
  { id: "psicologia", label: "Psicología", objectives: defaultPsicologia },
] as const;

type TabId = typeof tabs[number]["id"];

export default function ObjectivesTabs({
  motorGruesa = defaultMotorGruesa,
  motorFina = defaultMotorFina,
  comunicacion = defaultComunicacion,
  psicologia = defaultPsicologia,
}: ObjectivesTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("motorGruesa");

  const tabObjectives = {
    motorGruesa,
    motorFina,
    comunicacion,
    psicologia,
  };

  const currentObjectives = tabObjectives[activeTab];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Objetivos de Tratamiento
        </h2>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm md:text-base font-medium transition-all duration-200 rounded-full ${
                activeTab === tab.id
                  ? "text-white bg-primary"
                  : "text-slate-600 hover:text-primary hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 md:p-8"
          >
            <ul className="space-y-4">
              {currentObjectives.map((objective) => (
                <li key={objective._key} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-slate-700 leading-relaxed">
                    {objective.description}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
