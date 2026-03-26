"use client";

import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useHeader } from "./hooks/useHeader";
import { staggerContainer } from "./animations/staggerChildren";
import { headerContainerVariants } from "./animations/scrollVariants";

import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import CTAButton from "./components/CTAButton";
import MobileMenu from "./components/MobileMenu";
import HeaderReveal from "@/components/header/HeaderReveal";
import { HeaderProps } from "@/types/header";
import { mapSanityNavData } from "@/lib/navigation-utils";

export default function Header({ navData, ctaLabel, ctaHref, settings }: HeaderProps) {
  const { isScrolled, mobileMenu, isRevealed } = useHeader();
  const links = mapSanityNavData(navData);
  
  // Determine if CTA should be donation or link based on props
  const headerCTALabel = ctaLabel || settings?.headerCTA || "DONAR AHORA";
  const headerCTAHref = ctaHref || "/apoyanos";
  const isDonation = !ctaLabel || ctaLabel === "DONAR AHORA" || ctaLabel === "CONTÁCTANOS";

  return (
    <>
      <HeaderReveal isRevealed={isRevealed}>
        <TopBar isScrolled={isScrolled} />

        <motion.header
          variants={headerContainerVariants}
          initial="top"
          animate={isScrolled ? "scrolled" : "top"}
          className="transition-all duration-300 relative bg-white"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className={`w-full max-w-[1400px] mx-auto px-5 md:px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2.5' : 'py-3 md:py-4'}`}
          >
            <Logo />

            <NavLinks navLinks={links} />

            <div className="flex items-center gap-4 relative z-50">
              <CTAButton 
                label={headerCTALabel} 
                href={headerCTAHref}
                isDonation={isDonation}
              />

              <button
                onClick={mobileMenu.toggleMenu}
                className={`lg:hidden p-2.5 rounded-xl transition-colors ${mobileMenu.isOpen ? 'bg-primary text-white' : 'bg-gray-50 text-primary hover:bg-primary hover:text-white'
                  }`}
                aria-label="Toggle menu"
              >
                {mobileMenu.isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </button>
            </div>
          </motion.div>

          {/* Animated accent line */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-accent to-secondary origin-center"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.header>
      </HeaderReveal>

      <MobileMenu
        mobileMenu={mobileMenu}
        navLinks={links}
      />
    </>
  );
}

