"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";

interface ConstructionProgressProps {
  goal: number;
  raised: number;
  donors: number;
}

export default function ConstructionProgress({ goal, raised, donors }: ConstructionProgressProps) {
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <section className="py-16 bg-gradient-to-r from-primary via-secondary to-primary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Progreso de la Construcción
            </h2>
            <p className="text-white/70">
              Juntos estamos construyendo un futuro mejor
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-8">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Total Recaudado</p>
                <p className="text-4xl md:text-5xl font-black text-accent">
                  <CountUp end={raised} duration={2} prefix="$" separator="." decimals={0} />
                </p>
              </div>
              <div className="text-right">
                <p className="text-white/70 text-sm uppercase tracking-wider mb-1">Meta</p>
                <p className="text-2xl md:text-3xl font-bold text-white">
                  <CountUp end={goal} duration={2} prefix="$" separator="." decimals={0} />
                </p>
              </div>
            </div>

            <div className="h-6 bg-black/30 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: `${percentage}%` }} 
                transition={{ duration: 1.5, ease: "easeOut" }} 
                className="h-full bg-gradient-to-r from-accent via-yellow-400 to-accent rounded-full relative"
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </motion.div>
            </div>

            <div className="flex justify-between mt-3">
              <span className="text-white/70 text-sm">{percentage.toFixed(1)}% completado</span>
              <span className="text-white/70 text-sm">
                Faltan <CountUp end={goal - raised} duration={2} prefix="$" separator="." />
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <FaChartLine className="text-3xl text-accent mx-auto mb-3" />
              <p className="text-3xl font-black text-white">
                <CountUp end={percentage} duration={2} suffix="%" decimals={1} />
              </p>
              <p className="text-white/70 text-sm">del objetivo</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.1 }} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
            >
              <FaUsers className="text-3xl text-accent mx-auto mb-3" />
              <p className="text-3xl font-black text-white">
                <CountUp end={donors} duration={2} separator="." />
              </p>
              <p className="text-white/70 text-sm">donantes</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 col-span-2 md:col-span-1"
            >
              <FaCheckCircle className="text-3xl text-accent mx-auto mb-3" />
              <p className="text-3xl font-black text-white">5</p>
              <p className="text-white/70 text-sm">zonas en progreso</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
