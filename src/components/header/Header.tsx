"use client";

import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useHeader } from "./hooks/useHeader";
import { curtainVariants, shimmerVariants } from "./animations/curtainReveal";
import { staggerContainer } from "./animations/staggerChildren";
import { headerContainerVariants } from "./animations/scrollVariants";

import TopBar from "./components/TopBar";
import Logo from "./components/Logo";
import NavLinks from "./components/NavLinks";
import CTAButton from "./components/CTAButton";
import MobileMenu from "./components/MobileMenu";
import ParticleEffect from "./components/ParticleEffect";

interface NavItem {
  name?: string;
  href?: string;
  hasDropdown?: boolean;
  subLinks?: { name?: string; href?: string }[];
}

interface HeaderSettings {
  phoneNumber?: string;
  mobilePhone?: string;
  email?: string;
  address?: string;
  headerCTA?: string;
}

interface HeaderProps {
  navData?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  settings?: HeaderSettings;
}

export default function Header({ navData, ctaLabel, ctaHref, settings }: HeaderProps) {
  const { isScrolled, mobileMenu, isRevealed } = useHeader();

  const defaultLinks = [
    { name: "Inicio", href: "/" },
    {
      name: "Quiénes somos",
      href: "/quienes-somos/nosotros",
      hasDropdown: true,
      subLinks: [
        { name: "Nosotros", href: "/quienes-somos/nosotros" },
        { name: "Misión", href: "/quienes-somos/nosotros#mision" },
        { name: "Visión", href: "/quienes-somos/nosotros#vision" },
        { name: "Historia", href: "/quienes-somos/nosotros#historia" },
        { name: "Fundadores", href: "/quienes-somos/nosotros#fundadores" },
        { name: "Junta Directiva", href: "/quienes-somos/nosotros#junta-directiva" },
        { name: "Equipo De Trabajo", href: "/quienes-somos/nosotros#equipo-de-trabajo" },
        { name: "Asociación De Usuarios", href: "/quienes-somos/asociacion-de-usuarios" },
      ]
    },
    {
      name: "Programas",
      href: "/programas",
      hasDropdown: true,
      subLinks: [
        { name: "Atención Temprana 0-3 Años", href: "/programas#atencion-temprana" },
        { name: "Atención A Niños Y Jóvenes 3-18 Años", href: "/programas#atencion-ninos-jovenes" },
        { name: "Apoyo A Dificultades En El Aprendizaje", href: "/programas#apoyo-aprendizaje" },
        { name: "Protocolo Intensivo Pediasuit", href: "/programas#pediasuit" },
      ]
    },
    { name: "Apóyanos", href: "/apoyanos" },
    {
      name: "Cursos",
      href: "/cursos",
      hasDropdown: true,
      subLinks: [
        { name: "Curso GMS Trust", href: "/cursos#gms-trust-movimientos-generales" },
        { name: "Curso Básico PediaSuit", href: "/cursos#curso-basico-pediasuit" },
        { name: "Curso Introductorio Caracas", href: "/cursos#curso-introductorio-neurodesarrollo-caracas" },
        { name: "Evaluación e Interacción Terapéutica", href: "/cursos#evaluacion-interaccion-terapeutica-bebes" },
        { name: "Curso Introductorio Lima", href: "/cursos#curso-introductorio-neurodesarrollo-lima" },
        { name: "Curso Introductorio Bogotá", href: "/cursos#curso-introductorio-neurodesarrollo-bogota" },
      ]
    },
    { name: "App", href: "/app" },
    { name: "Blog", href: "/blog" },
    { name: "Contáctanos", href: "/contacto" },
  ];

  // Map Sanity navItems to expected format
  interface SanityNavItem {
    label?: string;
    href?: string;
    hasDropdown?: boolean;
    subLinks?: { label?: string; href?: string }[];
  }

  const mappedNavData = navData?.map((item: SanityNavItem) => ({
    name: item.label,
    href: item.href,
    hasDropdown: item.hasDropdown,
    subLinks: item.subLinks?.map((sub) => ({
      name: sub.label,
      href: sub.href
    }))
  })) || [];

  const links = mappedNavData.length > 0 ? mappedNavData : defaultLinks;
  
  // Determine if CTA should be donation or link based on props
  const headerCTALabel = ctaLabel || settings?.headerCTA || "DONAR AHORA";
  const headerCTAHref = ctaHref || "/apoyanos";
  const isDonation = !ctaLabel || ctaLabel === "DONAR AHORA" || ctaLabel === "CONTÁCTANOS";

  return (
    <>
      <motion.div
        variants={curtainVariants}
        initial="initial"
        animate={isRevealed ? "animate" : "initial"}
        className="fixed top-0 left-0 right-0 z-50 w-full"
      >
        {/* Particle effect during reveal */}
        <ParticleEffect isActive={isRevealed} />

        {/* Shimmer overlay during reveal */}
        <motion.div
          variants={shimmerVariants}
          initial="initial"
          animate={isRevealed ? "animate" : "initial"}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(248,183,25,0.15) 50%, transparent 100%)",
          }}
        />

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
            className={`w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
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
                className={`lg:hidden p-3 rounded-xl transition-colors ${mobileMenu.isOpen ? 'bg-primary text-white' : 'bg-gray-50 text-primary hover:bg-primary hover:text-white'
                  }`}
                aria-label="Toggle menu"
              >
                {mobileMenu.isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
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
      </motion.div>

      <MobileMenu
        isOpen={mobileMenu.isOpen}
        navLinks={links}
        closeMenu={mobileMenu.closeMenu}
        expandedItem={mobileMenu.expandedItem}
        toggleExpanded={mobileMenu.toggleExpanded}
      />

      {/* Spacer to prevent content jump */}
      <div className="h-[120px] md:h-[130px] w-full bg-transparent"></div>
    </>
  );
}
