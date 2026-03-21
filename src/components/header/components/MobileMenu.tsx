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

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLink[];
  closeMenu: () => void;
  expandedItem: string | null;
  toggleExpanded: (item: string | undefined) => void;
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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 top-[58px] z-40 bg-white lg:hidden overflow-y-auto"
        >
          <div className="flex flex-col px-6 pt-4 pb-20">
            {navLinks.map((link, idx) => {
              const parentActive = isParentActive(link);
              const isExpanded = expandedItem === link.name;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.03 }}
                  className="border-b border-gray-50 last:border-0"
                >
                  <div
                    className="flex items-center justify-between py-3.5 cursor-pointer group"
                    onClick={() => {
                      if (link.hasDropdown) {
                        toggleExpanded(link.name);
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    {link.hasDropdown ? (
                      <span className={`text-lg font-bold transition-colors ${parentActive || isExpanded ? 'text-accent' : 'text-primary'}`}>
                        {link.name}
                      </span>
                    ) : (
                      <Link
                        href={link.href || "#"}
                        className={`text-lg font-bold transition-colors ${parentActive ? 'text-accent' : 'text-primary'}`}
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    )}

                    {link.hasDropdown && (
                      <div className={`p-1.5 rounded-lg transition-colors ${isExpanded ? 'bg-accent/10 text-accent' : 'text-gray-300'}`}>
                        <FaChevronDown className={`text-xs transition-transform duration-300 ${isExpanded ? '-rotate-180' : ''}`} />
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
                        <div className="flex flex-col pb-4 pl-4 gap-1 relative">
                          <div className="absolute left-0 top-0 bottom-4 w-[1px] bg-accent/20"></div>
                          
                          {link.subLinks?.map((sub, sIdx) => {
                            const subActive = isActive(sub.href);
                            return (
                              <Link
                                key={sIdx}
                                href={sub.href || "#"}
                                onClick={closeMenu}
                                className={`px-4 py-2.5 text-sm transition-all rounded-lg ${subActive ? 'text-accent font-bold bg-accent/5' : 'text-gray-500 font-medium hover:text-primary'}`}
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

            {/* Compact Footer Menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-gray-100"
            >
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400 group">
                  <FaEnvelope className="text-accent text-sm" />
                  <a href="mailto:asistentenorte@aconino.org" className="text-sm font-semibold text-primary">asistentenorte@aconino.org</a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-accent text-sm" />
                  <span className="text-xs font-medium leading-tight">Calle 127 B No. 45-28 – Barrio Prado, Bogotá</span>
                </div>
              </div>

              <button
                onClick={() => {
                  closeMenu();
                  openDonationWidget();
                }}
                className="w-full flex items-center justify-center gap-3 bg-accent text-primary py-4 rounded-2xl font-black text-sm tracking-widest shadow-lg shadow-accent/20 active:scale-95 transition-all uppercase"
              >
                <FaHeart />
                APADRINA UN NIÑO
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
