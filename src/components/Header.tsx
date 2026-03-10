"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHeart, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";

interface HeaderProps {
    navData?: any[];
}

export default function Header({ navData }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
    const pathname = usePathname();
    const [currentHash, setCurrentHash] = useState("");

    // Monitor hash changes natively
    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(window.location.hash);
        };
        handleHashChange(); // Init
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Simple robust scroll detection just for styling, no hiding logic to keep standard predictable UI
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    // Helper to deeply determine if a link or its sublinks are active considering hashes
    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        
        try {
            const urlObj = new URL(href, "http://localhost"); 
            const matchesPath = pathname === urlObj.pathname;
            
            // If the link has a hash, we must precisely match the current hash
            if (urlObj.hash) {
                return matchesPath && currentHash === urlObj.hash;
            }
            
            // If the link does NOT have a hash, but the user is viewing a hash section,
            // we should not highlight the parent base page as active to avoid double highlighting.
            if (matchesPath && currentHash !== "") {
                return false; 
            }

            return matchesPath;
        } catch {
            return false;
        }
    };

    const isParentActive = (link: any) => {
        if (isActive(link.href)) return true;
        if (link.subLinks) {
            return link.subLinks.some((sub: any) => isActive(sub.href));
        }
        return false;
    };

    return (
        <>
            {/* The header is now fully sticky, solid, and reliable */}
            <div className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
                
                {/* TopBar smoothly collapses on scroll to save space */}
                <div className={`transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'}`}>
                    <TopBar />
                </div>

                <header className={`bg-white border-b border-gray-100 transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-sm py-4'}`}>
                    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">

                        {/* Logo Section */}
                        <Link href="/" className="flex flex-col items-center justify-center relative z-50 group">
                            <div className="flex font-black text-4xl md:text-5xl tracking-tighter text-secondary leading-none group-hover:scale-105 transition-transform duration-300">
                                a<span className="text-accent">c</span>n
                            </div>
                            <div className="flex flex-col text-center mt-1">
                                <span className="text-[10px] md:text-[11px] font-bold text-gray-900 leading-tight">Asociación Aconiño</span>
                                <span className="text-[8px] md:text-[9px] text-gray-500 leading-tight">Bogotá - Colombia</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] xl:text-[14px] font-bold">
                            {navLinks.map((link, idx) => {
                                const parentActive = isParentActive(link);
                                return (
                                    <div key={idx} className="relative group">
                                        <Link
                                            href={link.href}
                                            className={`flex items-center gap-1 py-4 transition-colors duration-300 ${parentActive ? 'text-accent' : 'text-primary hover:text-accent'}`}
                                        >
                                            {link.name}
                                            {link.hasDropdown && <FaChevronDown className={`text-[10px] transition-transform duration-300 group-hover:-rotate-180 ${parentActive ? 'text-accent' : 'text-gray-400 group-hover:text-accent'}`} />}

                                            {/* Hover/Active Indicator */}
                                            <span className={`absolute bottom-0 left-0 h-[3px] rounded-t-md bg-accent transition-all duration-300 ${parentActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {link.hasDropdown && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-white shadow-2xl rounded-2xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden">
                                                {/* Decorative top border */}
                                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
                                                
                                                {link.subLinks?.map((sub: any, sIdx: number) => {
                                                    const subActive = isActive(sub.href);
                                                    return (
                                                        <Link
                                                            key={sIdx}
                                                            href={sub.href}
                                                            onClick={() => setCurrentHash(new URL(sub.href, "http://localhost").hash)}
                                                            className={`block px-6 py-3 text-sm transition-all duration-200 border-l-4 ${subActive ? 'border-accent bg-primary/5 text-primary font-black' : 'border-transparent text-gray-600 font-semibold hover:bg-gray-50 hover:text-primary hover:border-gray-200 hover:pl-7'}`}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>

                        {/* Actions: CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4 relative z-50">
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

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`lg:hidden p-3 rounded-xl transition-colors ${isMobileMenuOpen ? 'bg-primary text-white' : 'bg-gray-50 text-primary hover:bg-primary hover:text-white'}`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                            </button>
                        </div>

                    </div>
                </header>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 top-[80px] md:top-[90px] z-40 bg-white lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col px-6 py-8 gap-4 border-t border-gray-100 pb-32">
                            {navLinks.map((link, idx) => {
                                const parentActive = isParentActive(link);
                                const isExpanded = expandedMobileItem === link.name;
                                
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
                                                    setExpandedMobileItem(isExpanded ? null : link.name);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                    if(link.href.includes('#')) {
                                                        setCurrentHash(new URL(link.href, "http://localhost").hash);
                                                    }
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
                                                        
                                                        {link.subLinks?.map((sub: any, sIdx: number) => {
                                                            const subActive = isActive(sub.href);
                                                            return (
                                                                <Link
                                                                    key={sIdx}
                                                                    href={sub.href}
                                                                    onClick={() => {
                                                                        setIsMobileMenuOpen(false);
                                                                        setCurrentHash(new URL(sub.href, "http://localhost").hash);
                                                                    }}
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

                                <Link
                                    href="/pago-en-linea"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="sm:hidden mt-6 flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-full font-black text-sm tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                                >
                                    PAGO EN LÍNEA
                                    <FaHeart className="text-accent" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="h-[130px] md:h-[140px] w-full bg-transparent"></div>
        </>
    );
}