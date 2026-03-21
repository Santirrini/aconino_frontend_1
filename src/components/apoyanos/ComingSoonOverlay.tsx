"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconBuilding, IconConstruction } from "@/constants/apoyanos-icons";

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  total: number;
}

interface ComingSoonOverlayProps {
  targetYear?: number;
  message?: string;
  show?: boolean;
}

export default function ComingSoonOverlay({ 
  targetYear = 2027,
  message = "Centro Día para Adultos",
  show = true
}: ComingSoonOverlayProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    total: 0
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Add class to body to hide floating widgets and prevent scroll
    if (show) {
      document.body.classList.add("coming-soon-overlay-active");
    }
    
    return () => {
      document.body.classList.remove("coming-soon-overlay-active");
    };
  }, [show]);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(targetYear, 0, 1);
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        setTimeLeft({
          years,
          months,
          days,
          hours,
          total: difference
        });
      } else {
        setTimeLeft({ years: 0, months: 0, days: 0, hours: 0, total: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, [targetYear]);

  if (!mounted || !show) return null;

  const timeUnits = [
    { value: timeLeft.years, label: "Años", labelShort: "A" },
    { value: timeLeft.months, label: "Meses", labelShort: "M" },
    { value: timeLeft.days, label: "Días", labelShort: "D" },
    { value: timeLeft.hours, label: "Horas", labelShort: "H" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center justify-center overflow-hidden"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        isolation: 'isolate',
        background: 'linear-gradient(to bottom, #1a2744, #1e3a5f, #1a2744)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] rounded-full bg-accent/20 blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute -bottom-[20%] -left-[20%] w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
          className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 backdrop-blur-xl border-2 border-accent/30 mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <IconBuilding className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-accent" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 sm:gap-3 bg-accent/20 backdrop-blur-xl border border-accent/40 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <IconConstruction className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
          </motion.div>
          <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-wider">
            En Construcción
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
        >
          Próximamente
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold mb-6 sm:mb-8"
        >
          {message}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                </div>
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl -z-10"
                />
              </div>
              <span className="text-xs sm:text-sm text-white/70 mt-2 font-medium uppercase tracking-wider">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-8 sm:mt-10 md:mt-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm sm:text-base font-medium">
                Bogotá, Colombia
              </span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/20 rounded-full" />
            <div className="text-sm sm:text-base text-white/80 mt-2 sm:mt-0">
              Abre en <span className="text-accent font-bold">{targetYear}</span>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-6 sm:mt-8 text-sm sm:text-base text-white/60 max-w-xl mx-auto"
        >
          Un espacio dedicado a la neurorehabilitación y cuidado integral de adultos.
        </motion.p>
      </div>
    </motion.div>
  );
}