"use client";

import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaHeart, FaCalendarAlt, FaUserMd } from "react-icons/fa";

interface ProgramCTAProps {
  programTitle: string;
}

export default function ProgramCTA({ programTitle }: ProgramCTAProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-primary to-secondary" />

      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="p-3 bg-gradient-to-r from-primary to-secondary rounded-xl"
            animate={{
              boxShadow: ["0 0 0 0px rgba(248,183,25,0.4)", "0 0 0 10px rgba(248,183,25,0)"],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaHeart className="text-white text-xl" />
          </motion.div>
          <div>
            <h3 className="text-xl font-bold text-primary">¿Necesitas ayuda?</h3>
            <p className="text-sm text-gray-500">Estamos aquí para ti</p>
          </div>
        </div>

        {/* Program context */}
        <motion.div
          className="mb-6 p-4 bg-gray-50 rounded-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-600 text-sm mb-2">Estás viendo:</p>
          <p className="font-semibold text-primary">{programTitle}</p>
        </motion.div>

        {/* Contact options */}
        <div className="space-y-3 mb-6">
          <motion.a
            href="tel:+573001234567"
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group"
            whileHover={{ x: 5 }}
          >
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <FaPhone className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Llámanos</p>
              <p className="font-semibold text-gray-700 group-hover:text-primary transition-colors">
                +57 300 123 4567
              </p>
            </div>
          </motion.a>

          <motion.a
            href="mailto:asistentenorte@aconino.org"
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors group"
            whileHover={{ x: 5 }}
          >
            <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
              <FaEnvelope className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Escríbenos</p>
              <p className="font-semibold text-gray-700 group-hover:text-primary transition-colors text-sm">
                asistentenorte@aconino.org
              </p>
            </div>
          </motion.a>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-3">
          <motion.a
            href="/contacto"
            className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-primary to-secondary text-white py-3 px-6 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaCalendarAlt />
            Agendar Cita
          </motion.a>

          <motion.a
            href="/pago-en-linea"
            className="flex items-center justify-center gap-2 w-full bg-accent text-primary py-3 px-6 rounded-xl font-bold hover:bg-accent/90 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaHeart />
            Donar Ahora
          </motion.a>
        </div>

        {/* Trust indicators */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
            <FaUserMd className="text-accent" />
            <span>+500 familias atendidas</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
