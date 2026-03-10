import Link from "next/link";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary text-white mt-auto py-16">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Aconiño Logo/Info */}
                    <div className="flex flex-col">
                        <div className="border-b border-white/20 pb-8 mb-8">
                            {/* Logo representation in white */}
                            <div className="flex font-bold text-4xl tracking-tighter text-white leading-none mb-2">
                                a<span className="text-accent">c</span>n
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 pr-4">
                            Somos una entidad privada sin ánimo de lucro, creada en 1990.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Enlaces de interés</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><Link href="/canales-denuncia" className="hover:text-accent transition-colors">Canales de denuncia</Link></li>
                            <li><Link href="/trabaja-con-nosotros" className="hover:text-accent transition-colors">Trabaja con nosotros</Link></li>
                            <li><Link href="/permanencia-esal" className="hover:text-accent transition-colors">Permanencia ESAL</Link></li>
                            <li><Link href="/transparencia" className="hover:text-accent transition-colors">Transparencia</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contáctanos</h4>
                        <div className="text-xs text-gray-400 mb-4 tracking-wider uppercase">Sede Norte</div>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-accent" />
                                <span>(601) 650 8473</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMobileAlt className="text-accent" />
                                <span>313 391 0760</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Write to us & App */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Escríbenos</h4>
                        <div className="text-xs text-gray-400 mb-4 tracking-wider uppercase">Correo Electrónico</div>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <FaEnvelope className="text-accent" />
                                <a href="mailto:apoyoinclusion@aconino.org" className="hover:text-accent transition-colors">apoyoinclusion@aconino.org</a>
                            </li>
                        </ul>

                        {/* Get it on Google Play Placeholder */}
                        <div className="mt-8">
                            <a href="#" className="inline-block hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
