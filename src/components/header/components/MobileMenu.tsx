"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDonation } from "../../../providers/DonationProvider";
import { NavItem } from "../../../types/header";
import { isActive, isParentActive } from "../../../lib/mobile-nav-utils";

import MobileNavLink from "./MobileNavLink";
import MobileDropdown from "./MobileDropdown";
import MobileMenuFooter from "./MobileMenuFooter";

interface MobileMenuState {
  isOpen: boolean;
  closeMenu: () => void;
  expandedItem: string | null;
  toggleExpanded: (item: string | undefined) => void;
}

interface MobileMenuProps {
  mobileMenu: MobileMenuState;
  navLinks: NavItem[];
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

  const simpleLinks = navLinks.filter(link => !link.hasDropdown);
  const dropdownLinks = navLinks.filter(link => link.hasDropdown);

  const checkActive = (href: string | undefined) => isActive(href, pathname, currentHash);

  const handleDonationClick = () => {
    closeMenu();
    openDonationWidget();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-white lg:hidden overflow-y-auto"
          style={{ paddingTop: '80px', zIndex: 45 }}
        >
          <div className="flex flex-col px-4 sm:px-6 pt-2 pb-24">
            {/* Grid de enlaces simples - 2 columnas compactas */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {simpleLinks.map((link, idx) => (
                <MobileNavLink
                  key={link.name}
                  name={link.name || ""}
                  href={link.href || "#"}
                  active={checkActive(link.href)}
                  onClick={closeMenu}
                  index={idx}
                />
              ))}
            </div>

            {/* Dropdowns compactos */}
            <div className="space-y-2">
              {dropdownLinks.map((link, idx) => (
                <MobileDropdown
                  key={link.name}
                  name={link.name || ""}
                  isExpanded={expandedItem === link.name}
                  parentActive={isParentActive(link, pathname, currentHash)}
                  onToggle={() => toggleExpanded(link.name)}
                  subLinks={link.subLinks}
                  activeLinkChecker={checkActive}
                  onLinkClick={closeMenu}
                  index={idx}
                />
              ))}
            </div>

            {/* Footer compacto */}
            <MobileMenuFooter onDonationClick={handleDonationClick} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

