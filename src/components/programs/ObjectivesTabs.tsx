"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export interface Objective {
  _key: string;
  description: string;
}

export interface ObjectivesByArea {
  motorGruesa: Objective[];
  motorFina: Objective[];
  comunicacion: Objective[];
  psicologia: Objective[];
}

export interface ObjectivesTabsProps {
  objectives: ObjectivesByArea;
}

type TabKeys = keyof ObjectivesByArea;

const TABS: { id: TabKeys; label: string; icon: string }[] = [
  { id: 'motorGruesa', label: 'Motor Gruesa', icon: '🏃' },
  { id: 'motorFina', label: 'Motor Fina', icon: '✍️' },
  { id: 'comunicacion', label: 'Comunicación', icon: '🗣️' },
  { id: 'psicologia', label: 'Psicología', icon: '🧠' }
];

export function ObjectivesTabs({ objectives }: ObjectivesTabsProps) {
  const [activeTab, setActiveTab] = useState<TabKeys>('motorGruesa');

  if (!objectives) return null;

  const currentObjectives = objectives[activeTab] || [];

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1f2937]">
          Objetivos Terapéuticos
        </h2>
        <p className="mt-4 text-gray-600">Disponemos de metas claras focalizadas en áreas específicas</p>
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-wrap justify-center gap-2 mb-10 bg-slate-50/50 p-2 rounded-3xl mx-auto w-fit border border-gray-100/50 backdrop-blur-sm">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 z-10 flex items-center gap-2 ${
              activeTab === tab.id ? 'text-white' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden min-h-[300px]">
        <motion.div
          key={activeTab} // Using key to trigger re-animation on tab switch
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
        >
          {currentObjectives.map((obj, i) => (
            <div key={obj._key} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center font-bold text-sm mt-0.5">
                {i + 1}
              </div>
              <p className="text-gray-700 font-medium leading-relaxed">
                {obj.description}
              </p>
            </div>
          ))}
          {currentObjectives.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-10">
              No hay objetivos registrados para esta área.
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
