"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="text-center mb-14">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-primary uppercase tracking-[0.2em] bg-blue-50 px-6 py-2 rounded-full inline-block mb-4"
        >
          Metas Terapéuticas
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl lg:text-5xl font-black text-primary"
        >
          Objetivos Terapéuticos
        </motion.h2>
      </div>

      {/* Tabs Layout */}
      <div className="flex flex-wrap justify-center gap-3 mb-14 bg-slate-50 p-3 rounded-[2.5rem] mx-auto w-fit border border-gray-100 shadow-inner">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-8 py-4 rounded-full text-sm font-black transition-all duration-300 z-10 flex items-center gap-3 ${
              activeTab === tab.id ? 'text-white' : 'text-gray-500 hover:text-primary hover:bg-white/50'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="text-xl">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-[3rem] p-6 md:p-16 lg:p-20 shadow-[0_20px_80px_rgba(0,0,0,0.06)] border border-gray-100 min-h-[450px] relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 md:gap-y-12"
          >
            {currentObjectives.map((obj, i) => (
              <motion.div 
                key={obj._key} 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="flex items-start gap-5 md:gap-8 group"
              >
                {/* Index Number - Maximum Visibility */}
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-black text-lg md:text-2xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-900 font-bold leading-snug md:leading-relaxed text-base md:text-xl lg:text-2xl tracking-tight group-hover:text-primary transition-colors">
                    {obj.description}
                  </p>
                </div>
              </motion.div>
            ))}
            
            {currentObjectives.length === 0 && (
              <div className="col-span-full text-center py-20">
                <p className="text-gray-400 font-bold text-xl uppercase tracking-widest">
                  Sin objetivos registrados
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
