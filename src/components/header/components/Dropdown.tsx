"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SubLink {
  name: string;
  href: string;
}

interface DropdownProps {
  subLinks: SubLink[];
  isOpen: boolean;
}

export default function Dropdown({ subLinks, isOpen }: DropdownProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href: string) => {
    try {
      const urlObj = new URL(href, "http://localhost"); 
      const matchesPath = pathname === urlObj.pathname;
      if (urlObj.hash) {
        return matchesPath && currentHash === urlObj.hash;
      }
      return matchesPath;
    } catch {
      return false;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          /* El pt-4 crea un "puente" invisible para que el hover no se pierda al mover el mouse */
          className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] pt-4 z-50"
        >
          <div className="bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 overflow-hidden relative">
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
            
            <div className="flex flex-col">
              {subLinks.map((sub, idx) => {
                const subActive = isActive(sub.href);
                return (
                  <Link
                    key={idx}
                    href={sub.href}
                    className={`relative block px-6 py-3 text-sm transition-all duration-300 border-l-4 ${
                      subActive 
                        ? 'border-accent bg-primary/5 text-primary font-black' 
                        : 'border-transparent text-gray-600 font-semibold hover:bg-gray-50 hover:text-primary hover:border-accent hover:pl-7'
                    }`}
                  >
                    {sub.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
