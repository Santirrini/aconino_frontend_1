import Link from "next/link";
import TopBar from "./TopBar";
import { FaHeart } from "react-icons/fa";

export default function Header() {
    return (
        <>
            <TopBar />
            <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
                <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 h-[90px] flex items-center justify-between">

                    {/* Logo Section */}
                    <Link href="/" className="flex flex-col items-center justify-center pt-2">
                        <div className="flex font-bold text-5xl tracking-tighter text-secondary leading-none">
                            a<span className="text-accent">c</span>n
                        </div>
                        <div className="flex flex-col text-center mt-1">
                            <span className="text-[11px] font-bold text-gray-900 leading-tight">Asociación Aconiño</span>
                            <span className="text-[9px] text-gray-500 leading-tight">Bogotá - Colombia</span>
                        </div>
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold text-gray-600">
                        <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
                        <Link href="/sobre-nosotros" className="hover:text-primary transition-colors flex items-center gap-1">Quiénes somos <span className="text-[10px]">▼</span></Link>
                        <Link href="/programas" className="hover:text-primary transition-colors flex items-center gap-1">Programas <span className="text-[10px]">▼</span></Link>
                        <Link href="/apoyanos" className="hover:text-primary transition-colors">Apóyanos</Link>
                        <Link href="/cursos" className="hover:text-primary transition-colors flex items-center gap-1">Cursos <span className="text-[10px]">▼</span></Link>
                        <Link href="/app" className="hover:text-primary transition-colors">App</Link>
                        <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                        <Link href="/contacto" className="hover:text-primary transition-colors">Contáctanos</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <Link href="/pago-en-linea" className="flex h-12 items-stretch group">
                            <div className="bg-[#1b2b65] text-white text-xs font-bold tracking-wider px-6 flex items-center justify-center group-hover:bg-[#253982] transition-colors leading-tight">
                                PAGO EN<br />LÍNEA
                            </div>
                            <div className="bg-white border-y border-r border-gray-200 px-4 flex items-center justify-center text-accent">
                                <FaHeart />
                            </div>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-primary hover:text-secondary transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </div>
            </header>
        </>
    );
}
