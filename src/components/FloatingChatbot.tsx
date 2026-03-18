"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaCommentDots, FaTimes, FaPaperPlane } from "react-icons/fa";


export default function FloatingChatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Ocultar en rutas específicas (como la donación, si aplica)
  if (pathname === "/apoyanos") {
    return null;
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/573133910760`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end group chat-widget-container">
      {/* 
        Importante: Usar una clase que se oculte cuando el menú móvil está abierto 
        En el CSS global (globals.css):
        .menu-open .chat-widget-container { @apply hidden lg:flex; }
        (Solo lo ocultamos en móvil, por eso lg:flex lo vuelve a mostrar en desktop)
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        .menu-open .chat-widget-container {
          display: none;
        }
        @media (min-width: 1024px) {
          .menu-open .chat-widget-container {
            display: flex;
          }
        }
      `}} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-[320px] overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header del Chat */}
            <div className="bg-gradient-to-tr from-primary to-[#0f285e] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaHeart className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Asesoría Aconiño</h3>
                  <p className="text-white/70 text-xs">En línea</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors p-2"
                aria-label="Cerrar chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Cuerpo del Chat */}
            <div className="bg-gray-50 p-4 h-[250px] overflow-y-auto flex flex-col gap-3">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 text-sm text-gray-700 shadow-sm self-start max-w-[85%]">
                <p>¡Hola! 👋</p>
                <p className="mt-1">Bienvenido a la Asociación Aconiño. ¿En qué podemos ayudarte hoy?</p>
              </div>
            </div>

            {/* Input (simulado, redirige a WhatsApp) */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
              <input 
                type="text" 
                placeholder="Escribe tu mensaje..." 
                className="bg-gray-100 text-sm w-full rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-primary/20"
                onFocus={handleWhatsApp}
                onChange={handleWhatsApp}
              />
              <button 
                onClick={handleWhatsApp}
                className="bg-accent text-primary p-3 rounded-full hover:scale-105 transition-transform"
                aria-label="Enviar mensaje por WhatsApp"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-tr from-accent to-yellow-300 text-primary w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transition-all group"
        aria-label="Abrir chat"
      >
        <motion.div
          animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <FaCommentDots className="text-2xl md:text-3xl drop-shadow-sm group-hover:scale-110 transition-transform" />
        </motion.div>
        
        <motion.div
          animate={{ scale: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <FaTimes className="text-2xl md:text-3xl drop-shadow-sm group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.button>
    </div>
  );
}
