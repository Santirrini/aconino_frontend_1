"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaHeart } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDonation } from "../../../providers/DonationProvider";

interface SubLink {
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
  subLinks?: SubLink[];
}

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  closeMenu: () => void;
  expandedItem: string | null;
  toggleExpanded: (item: string) => void;
}

export default function MobileMenu({ isOpen, navLinks, closeMenu, expandedItem, toggleExpanded }: MobileMenuProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");
  const { openDonationWidget } = useDonation();

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isActive = (href: string) => {
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 top-[70px] md:top-[80px] z-40 bg-white lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col px-6 py-8 gap-4 border-t border-gray-100 pb-32">
            {navLinks.map((link, idx) => {
              const parentActive = isParentActive(link);
              const isExpanded = expandedItem === link.name;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (idx * 0.05) }}
                  className="border-b border-gray-50 pb-2"
                >
                  <div
                    className="flex items-center justify-between py-3 cursor-pointer group"
                    onClick={() => {
                      if (link.hasDropdown) {
                        toggleExpanded(link.name);
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    {link.hasDropdown ? (
                      <span className={`text-xl font-black transition-colors ${parentActive || isExpanded ? 'text-accent' : 'text-primary'}`}>
                        {link.name}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className={`text-xl font-black transition-colors ${parentActive ? 'text-accent' : 'text-primary hover:text-accent'}`}
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    )}

                    {link.hasDropdown && (
                      <div className={`p-2 rounded-lg transition-colors ${isExpanded ? 'bg-primary/5' : ''}`}>
                        <FaChevronDown className={`text-sm transition-transform duration-300 ${isExpanded ? '-rotate-180 text-accent' : 'text-gray-400'}`} />
                      </div>
                    )}
                  </div>

                  {/* Mobile Sub-links Accordion */}
                  <AnimatePresence>
                    {link.hasDropdown && isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col py-2 pl-4 mb-2 relative">
                          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gray-100 rounded-full"></div>
                          
                          {link.subLinks?.map((sub, sIdx) => {
                            const subActive = isActive(sub.href);
                            return (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={closeMenu}
                                className={`px-4 py-3 text-sm md:text-base transition-all rounded-r-xl ${subActive ? 'text-accent font-black bg-primary/5' : 'text-gray-600 font-semibold hover:text-primary hover:bg-gray-50'}`}
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

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 bg-gray-50 p-6 rounded-3xl"
            >
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                Contacto Directo
              </div>
              <a href="mailto:asistentenorte@aconino.org" className="text-primary font-bold text-lg mb-2 block hover:text-accent transition-colors">asistentenorte@aconino.org</a>
              <p className="text-gray-500 text-sm font-medium">Calle 127 B No. 45-28 – Barrio Prado<br />Bogotá - Colombia</p>

              <button
                onClick={() => {
                  closeMenu();
                  openDonationWidget();
                }}
                className="sm:hidden w-full mt-6 flex items-center justify-center gap-3 bg-accent text-primary px-6 py-4 rounded-full font-black text-sm tracking-widest shadow-xl shadow-accent/40 hover:scale-105 transition-transform uppercase"
              >
                DONAR AHORA
                <FaHeart className="text-primary" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
