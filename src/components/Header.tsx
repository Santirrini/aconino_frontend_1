"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";

interface HeaderProps {
    navData?: any[];
}

export default function Header({ navData }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Add shadow and reduce height when scrolled
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Smart hide/show header
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                // Scrolling down -> hide
                setIsVisible(false);
                setIsMobileMenuOpen(false); // close mobile menu on scroll down
            } else {
                // Scrolling up -> show
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const defaultLinks = [
        { name: "Inicio", href: "/" },
        {
            name: "Quiénes somos",
            href: "#",
            hasDropdown: true,
            subLinks: [
                { name: "Nosotros", href: "/quienes-somos/nosotros" },
                { name: "Misión", href: "/quienes-somos/mision" },
                { name: "Visión", href: "/quienes-somos/vision" },
                { name: "Historia", href: "/quienes-somos/historia" },
                { name: "Fundadores", href: "/quienes-somos/fundadores" },
                { name: "Junta Directiva", href: "/quienes-somos/junta-directiva" },
                { name: "Equipo De Trabajo", href: "/quienes-somos/equipo-de-trabajo" },
                { name: "Asociación De Usuarios", href: "/quienes-somos/asociacion-de-usuarios" },
            ]
        },
        {
            name: "Programas",
            href: "#",
            hasDropdown: true,
            subLinks: [
                { name: "Atención Temprana 0-3 Años", href: "/programas/atencion-temprana-0-3-anos" },
                { name: "Atención A Niños Y Jóvenes 3-18 Años", href: "/programas/atencion-a-ninos-y-jovenes-3-18-anos" },
                { name: "Apoyo A Dificultades En El Aprendizaje", href: "/programas/apoyo-a-dificultades-en-el-aprendizaje" },
                { name: "Protocolo Intensivo Pediasuit", href: "/programas/protocolo-intensivo-pediasuit" },
            ]
        },
        { name: "Apóyanos", href: "/apoyanos" },
        {
            name: "Cursos",
            href: "#",
            hasDropdown: true,
            subLinks: [
                { name: "Curso Introductorio NDT", href: "/cursos/curso-introductorio-ndt" },
                { name: "Curso Avanzado NDT", href: "/cursos/curso-avanzado-ndt" },
                { name: "Certificación Pediasuit", href: "/cursos/certificacion-pediasuit" },
            ]
        },
        { name: "App", href: "/app" },
        { name: "Blog", href: "/blog" },
        { name: "Contáctanos", href: "/contacto" },
    ];

    const navLinks = navData && navData.length > 0 ? navData : defaultLinks;

    return (
        <>
            {/* TopBar is outside the sticky header to allow it to scroll away, or we can make it part of the smart hide. 
                Usually, TopBar scrolls away and Header sticks. Let's wrap both in the smart hide motion div. */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -150 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 w-full"
            >
                {/* TopBar only visible when not scrolled much to save space, or keep it always if preferred. 
                    Let's hide TopBar on mobile and hide it when scrolled on desktop for a cleaner look. */}
                <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'}`}>
                    <TopBar />
                </div>

                <header className={`bg-white border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
                    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">

                        {/* Logo Section */}
                        <Link href="/" className="flex flex-col items-center justify-center relative z-50">
                            <div className="flex font-black text-4xl md:text-5xl tracking-tighter text-secondary leading-none">
                                a<span className="text-accent">c</span>n
                            </div>
                            <div className="flex flex-col text-center mt-1">
                                <span className="text-[10px] md:text-[11px] font-bold text-gray-900 leading-tight">Asociación Aconiño</span>
                                <span className="text-[8px] md:text-[9px] text-gray-500 leading-tight">Bogotá - Colombia</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] xl:text-[14px] font-bold text-primary">
                            {navLinks.map((link, idx) => (
                                <div key={idx} className="relative group">
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 hover:text-accent transition-colors py-2"
                                    >
                                        {link.name}
                                        {link.hasDropdown && <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-accent transition-colors" />}

                                        {/* Hover Indicator */}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.hasDropdown && (
                                        <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-b-xl border border-gray-100 py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                                            {link.subLinks?.map((sub: any, sIdx: number) => (
                                                <Link
                                                    key={sIdx}
                                                    href={sub.href}
                                                    className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-secondary border-b border-gray-50 last:border-0 transition-colors"
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Actions: CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4 relative z-50">
                            {/* Professional CTA Button */}
                            <Link
                                href="/pago-en-linea"
                                className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-5 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm tracking-widest shadow-md hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 group"
                            >
                                <span className="leading-tight text-center md:text-right hidden md:block">
                                    PAGO EN <br className="hidden lg:block" /> LÍNEA
                                </span>
                                <span className="md:hidden">PAGO EN LÍNEA</span>
                                <div className="bg-white/20 p-2 rounded-full group-hover:scale-110 group-hover:bg-white group-hover:text-accent transition-all duration-300">
                                    <FaHeart className="text-accent group-hover:text-primary transition-colors" />
                                </div>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="lg:hidden p-3 bg-gray-50 rounded-xl text-primary hover:bg-primary hover:text-white transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                            </button>
                        </div>

                    </div>
                </header>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 top-[80px] z-40 bg-white lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6 border-t border-gray-100">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + (idx * 0.05) }}
                                    className="border-b border-gray-50 last:border-0"
                                >
                                    <div
                                        className="flex items-center justify-between py-4 cursor-pointer group"
                                        onClick={() => {
                                            if (link.hasDropdown) {
                                                setExpandedMobileItem(expandedMobileItem === link.name ? null : link.name);
                                            } else {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}
                                    >
                                        {link.hasDropdown ? (
                                            <span className={`text-lg font-black transition-colors ${expandedMobileItem === link.name ? 'text-secondary' : 'text-primary'}`}>
                                                {link.name}
                                            </span>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-lg font-black text-primary"
                                            >
                                                {link.name}
                                            </Link>
                                        )}

                                        {link.hasDropdown && (
                                            <FaChevronDown className={`text-sm transition-transform duration-300 ${expandedMobileItem === link.name ? 'rotate-180 text-secondary' : 'text-gray-300'}`} />
                                        )}
                                    </div>

                                    {/* Mobile Sub-links Accordion */}
                                    <AnimatePresence>
                                        {link.hasDropdown && expandedMobileItem === link.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden bg-gray-50/50 rounded-xl mb-4"
                                            >
                                                <div className="flex flex-col py-2">
                                                    {link.subLinks?.map((sub: any, sIdx: number) => (
                                                        <Link
                                                            key={sIdx}
                                                            href={sub.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="px-6 py-3 text-sm font-bold text-gray-600 hover:text-secondary border-l-2 border-transparent hover:border-secondary transition-all"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex flex-col gap-4"
                            >
                                <div className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-2">Contacto Directo</div>
                                <a href="mailto:asistentenorte@aconino.org" className="text-primary font-medium">asistentenorte@aconino.org</a>
                                <p className="text-gray-500 text-sm">Calle 127 B No. 45-28 – Barrio Prado<br />Bogotá - Colombia</p>

                                <Link
                                    href="/pago-en-linea"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="sm:hidden mt-4 flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-xl font-bold text-sm tracking-widest shadow-lg"
                                >
                                    PAGO EN LÍNEA
                                    <FaHeart className="text-accent" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Spacer to prevent content from jumping under the fixed header */}
            <div className="h-[130px] md:h-[140px] w-full bg-transparent"></div>
        </>
    );
}