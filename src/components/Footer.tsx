import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FooterLink {
  label?: string;
  url?: string;
  href?: string;
}

interface FooterProps {
  settings?: {
    phoneNumber?: string;
    mobilePhone?: string;
    email?: string;
    address?: string;
    socialLinks?: FooterLink[];
    footerLinks?: FooterLink[];
    legalLinks?: FooterLink[];
    appDownloadUrl?: string;
    controlEntity?: string;
    footerInfo?: {
      copyright?: string;
      designBy?: string;
      controlEntity?: string;
    };
  };
}

export default function Footer({ settings }: FooterProps) {
  const defaultPhone = "(601) 650 8473";
  const defaultMobile = "313 391 0760";
  const defaultEmail = "apoyoinclusion@aconino.org";
  
  const defaultLinks = [
    { label: "Canales de denuncia", url: "/canales-denuncia" },
    { label: "Trabaja con nosotros", url: "/trabaja-con-nosotros" },
    { label: "Permanencia ESAL", url: "/permanencia-esal" },
    { label: "Transparencia", url: "/transparencia" }
  ];

  const displayLinks = settings?.footerLinks?.length 
    ? settings.footerLinks 
    : settings?.legalLinks?.length 
      ? settings.legalLinks 
      : defaultLinks;

  return (
    <footer className="bg-primary text-white mt-auto pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mb-32 -mr-32 pointer-events-none" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

          {/* Column 1: Aconiño Logo/Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex font-black text-5xl tracking-tighter text-white leading-none mb-6 group cursor-default">
              a<span className="text-accent group-hover:scale-110 transition-transform duration-300">c</span>n
            </div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              {settings?.footerInfo?.copyright || "Asociación Aconiño: Transformando vidas desde 1990 con amor, ciencia y dedicación integral."}
            </p>
            
            {/* App Download - Centered on mobile */}
            {settings?.appDownloadUrl && (
              <div className="mt-8 flex justify-center md:justify-start">
                <a href={settings.appDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-all duration-300 active:scale-95">
                  <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto" width={135} height={40} />
                </a>
              </div>
            )}
          </div>

          {/* Column 2: Links - 2 Columns on Mobile for efficiency */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-accent uppercase tracking-[0.2em] text-xs mb-8">Nuestra Red</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-y-4 gap-x-4 text-sm text-gray-300">
              {displayLinks?.map((link: { label?: string; url?: string; href?: string }, idx: number) => (
                <li key={idx}>
                  <Link href={link.url || link.href || "#"} className="hover:text-accent transition-colors duration-300 block py-1 md:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Unified */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-accent uppercase tracking-[0.2em] text-xs mb-8">Contáctanos</h4>
            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FaPhoneAlt className="text-accent text-xs" />
                </div>
                <a href={`tel:${settings?.phoneNumber || defaultPhone}`} className="hover:text-white transition-colors">
                  {settings?.phoneNumber || defaultPhone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FaMobileAlt className="text-accent text-xs" />
                </div>
                <a href={`tel:${settings?.mobilePhone || defaultMobile}`} className="hover:text-white transition-colors">
                  {settings?.mobilePhone || defaultMobile}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <FaMapMarkerAlt className="text-accent text-xs" />
                </div>
                <span className="text-gray-400 italic">Sede Norte, Bogotá</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Email & Control */}
          <div className="text-center md:text-left">
            <h4 className="font-black text-accent uppercase tracking-[0.2em] text-xs mb-8">Escríbenos</h4>
            <div className="flex flex-col items-center md:items-start gap-6">
              <a 
                href={`mailto:${settings?.email || defaultEmail}`} 
                className="flex items-center gap-4 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <FaEnvelope className="text-accent group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{settings?.email || defaultEmail}</span>
              </a>
              
              {/* Control Entity */}
              {(settings?.controlEntity || settings?.footerInfo?.controlEntity) && (
                <div className="p-4 bg-primary-light/30 rounded-xl border border-white/5 text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed max-w-[200px]">
                  Vigilado por: <br/>
                  <span className="text-gray-400 font-bold">{settings?.controlEntity || settings?.footerInfo?.controlEntity}</span>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Professional Finish */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs text-gray-500 font-medium uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Asociación Aconiño. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/politica-privacidad" className="text-[10px] text-gray-500 hover:text-accent transition-colors uppercase tracking-tighter">Privacidad</Link>
            <Link href="/terminos-condiciones" className="text-[10px] text-gray-500 hover:text-accent transition-colors uppercase tracking-tighter">Términos</Link>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <p className="text-[10px] text-gray-600 italic">
              Diseño por <span className="text-gray-400 font-bold not-italic">Aconiño Dev Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
