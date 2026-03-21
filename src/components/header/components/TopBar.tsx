"use client";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface TopBarProps {
  isScrolled: boolean;
}

export default function TopBar({ isScrolled }: TopBarProps) {
  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="hidden md:block bg-[#1b2b65] text-white text-[11px] sm:text-xs md:text-sm overflow-hidden"
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-2 md:py-1.5 flex flex-col md:flex-row items-center justify-center md:justify-between gap-1.5 md:gap-0">
            
            {/* Contenedor de Información (Responsivo: Columna en móvil, Fila en pantallas grandes) */}
            <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-6 text-center">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l3.707 3.707A1 1 0 0018 17.414V4a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                <span className="font-medium tracking-wide">Calle 127 B No. 45-28 – Barrio Prado</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:asistentenorte@aconino.org" className="font-medium hover:text-accent transition-colors">
                  asistentenorte@aconino.org
                </a>
              </div>
            </div>

            {/* Redes Sociales (Ocultas en móvil para priorizar información de contacto, visibles en PC) */}
            <div className="hidden md:flex items-center gap-4 border-l border-white/20 pl-4 h-full">
              <a href="#" className="hover:text-accent transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaYoutube /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaLinkedinIn /></a>
              <button className="hover:text-accent ml-2 transition-colors">
                <FaSearch />
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
