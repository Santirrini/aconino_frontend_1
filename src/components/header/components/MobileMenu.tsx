"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHeart, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDonation } from "../../../providers/DonationProvider";

interface NavLink {
  name?: string;
  href?: string;
  hasDropdown?: boolean;
  subLinks?: { name?: string; href?: string }[];
}

interface MobileMenuState {
  isOpen: boolean;
  closeMenu: () => void;
  expandedItem: string | null;
  toggleExpanded: (item: string | undefined) => void;
}

interface MobileMenuProps {
  mobileMenu: MobileMenuState;
  navLinks: NavLink[];
}

export default function MobileMenu({ mobileMenu, navLinks }: MobileMenuProps) {
  const { isOpen, closeMenu, expandedItem, toggleExpanded } = mobileMenu;
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const { openDonationWidget } = useDonation();

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href: string | undefined) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    try {
      const urlObj = new URL(href, "http://localhost"); 
      const matchesPath = pathname === urlObj.pathname;
      if (urlObj.hash) {
        return matchesPath && currentHash === urlObj.hash;
      }
      if (matchesPath && currentHash !== "") return false; 
      return matchesPath;
    } catch {
      return false;
    }
  };

  const isParentActive = (link: NavLink) => {
    if (isActive(link.href)) return true;
    if (link.subLinks) {
      return link.subLinks.some(sub => isActive(sub.href));
    }
    return false;
  };

  const simpleLinks = navLinks.filter(link => !link.hasDropdown);
  const dropdownLinks = navLinks.filter(link => link.hasDropdown);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          style={{ paddingTop: '80px' }}
        >
          <div className="flex flex-col px-4 sm:px-6 pt-2 pb-24">
            {/* Grid de enlaces simples - 2 columnas compactas */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {simpleLinks.map((link, idx) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={`grid-${idx}`}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href || "#"}
                      onClick={closeMenu}
                      className={`flex items-center justify-center py-3 px-3 rounded-xl transition-all border text-sm font-bold ${
                        active 
                        ? 'bg-accent border-accent text-primary shadow-md' 
                        : 'bg-gray-50 border-gray-200/60 text-primary hover:bg-gray-100'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Dropdowns compactos */}
            <div className="space-y-2">
              {dropdownLinks.map((link, idx) => {
                const parentActive = isParentActive(link);
                const isExpanded = expandedItem === link.name;
                
                return (
                  <motion.div
                    key={`dropdown-${idx}`}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + idx * 0.04 }}
                  >
                    <div
                      className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all border ${
                        isExpanded 
                        ? 'bg-white border-accent shadow-sm' 
                        : 'bg-gray-50 border-gray-200/60 hover:border-accent/30'
                      }`}
                      onClick={() => toggleExpanded(link.name)}
                    >
                      <span className={`text-[15px] font-bold transition-colors ${parentActive || isExpanded ? 'text-accent' : 'text-primary'}`}>
                        {link.name}
                      </span>
                      <div className={`p-1 rounded-md transition-colors ${isExpanded ? 'bg-accent text-white' : 'text-gray-400'}`}>
                        <FaChevronDown className={`text-[10px] transition-transform duration-300 ${isExpanded ? '-rotate-180' : ''}`} />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col py-1 pl-4 gap-0.5 ml-3 border-l-2 border-accent/15">
                            {link.subLinks?.map((sub, sIdx) => {
                              const subActive = isActive(sub.href);
                              return (
                                <Link
                                  key={sIdx}
                                  href={sub.href || "#"}
                                  onClick={closeMenu}
                                  className={`px-3 py-2 text-[13px] transition-all rounded-lg ${
                                    subActive 
                                    ? 'text-accent font-bold bg-accent/5' 
                                    : 'text-gray-600 font-medium hover:text-primary hover:bg-gray-50'
                                  }`}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer compacto */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 p-4 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="flex flex-col gap-3 mb-4">
                <a 
                  href="mailto:asistentenorte@aconino.org" 
                  className="flex items-center gap-3 active:scale-95 transition-transform"
                >
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-accent shrink-0">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Escríbenos</span>
                    <span className="text-xs font-bold text-primary truncate">asistentenorte@aconino.org</span>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-accent shrink-0">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Ubícanos</span>
                    <span className="text-[11px] font-medium text-gray-600 leading-tight">Calle 127 B No. 45-28 – Barrio Prado, Bogotá</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  closeMenu();
                  openDonationWidget();
                }}
                className="w-full bg-accent text-primary py-3.5 rounded-xl font-black text-sm tracking-widest shadow-lg shadow-accent/20 active:scale-[0.98] transition-all uppercase flex items-center justify-center gap-2"
              >
                <FaHeart className="animate-pulse" />
                APADRINA UN NIÑO
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
