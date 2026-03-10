"use client";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

interface TopBarProps {
  isScrolled: boolean;
}

export default function TopBar({ isScrolled }: TopBarProps) {
  return (
    <motion.div
      initial={{ height: 40, opacity: 1 }}
      animate={{ 
        height: isScrolled ? 0 : 40, 
        opacity: isScrolled ? 0 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-[#1b2b65] text-white text-xs md:text-sm overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between h-[40px]">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l3.707 3.707A1 1 0 0018 17.414V4a1 1 0 00-.293-.707z" clipRule="evenodd" />
            </svg>
            <span className="hidden sm:inline">Calle 127 B No. 45-28 – Barrio Prado</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:asistentenorte@aconino.org" className="hover:text-gray-300 transition-colors">
              asistentenorte@aconino.org
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 border-l border-white/20 pl-4 h-full">
          <a href="#" className="hover:text-gray-300 transition-colors"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaYoutube /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-300 transition-colors"><FaLinkedinIn /></a>
          <button className="hover:text-gray-300 ml-2 transition-colors">
            <FaSearch />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
