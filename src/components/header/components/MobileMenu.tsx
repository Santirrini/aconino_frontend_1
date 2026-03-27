"use client";

import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "../../../types/navigation";
import { useActiveLink } from "../../../hooks/useActiveLink";
import { useDonation } from "../../../providers/DonationProvider";

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
  navLinks: NavLink[];
}

export default function MobileMenu({ mobileMenu, navLinks }: MobileMenuProps) {
  const { isOpen, closeMenu, expandedItem, toggleExpanded } = mobileMenu;
  const { isActive, isParentActive } = useActiveLink();
  const { openDonationWidget } = useDonation();

  const simpleLinks = navLinks.filter(link => !link.hasDropdown);
  const dropdownLinks = navLinks.filter(link => link.hasDropdown);

  const checkActive = (href: string | undefined) => isActive(href);


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
          <div className="flex flex-col px-4 sm:px-6 pt-2" style={{ paddingBottom: 'calc(6rem + env(safe-area-inset-bottom))' }}>
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
                  parentActive={isParentActive(link)}
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

