import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

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
  
  const defaultLinks: FooterLink[] = [
    { label: "Canales de denuncia", url: "/canales-denuncia" },
    { label: "Trabaja con nosotros", url: "/trabaja-con-nosotros" },
    { label: "Permanencia ESAL", url: "/permanencia-esal" },
    { label: "Transparencia", url: "/transparencia" }
  ];

  const displayLinks = settings?.footerLinks?.length 
    ? settings.footerLinks 
    : defaultLinks;

  const legalLinks = settings?.legalLinks?.length ? settings.legalLinks : [];

  const socialLinks = settings?.socialLinks || [
    { url: "https://facebook.com/asociacionaconino", label: "Facebook" },
    { url: "https://instagram.com/asociacion_aconino", label: "Instagram" }
  ];

  const renderSocialIcon = (url?: string) => {
    if (!url) return <FaFacebook className="w-5 h-5" />;
    const lowerUrl = url.toLowerCase();
    if (lowerUrl.includes('facebook')) return <FaFacebook className="w-5 h-5" />;
    if (lowerUrl.includes('instagram')) return <FaInstagram className="w-5 h-5" />;
    if (lowerUrl.includes('twitter') || lowerUrl.includes('x.com')) return <FaTwitter className="w-5 h-5" />;
    if (lowerUrl.includes('linkedin')) return <FaLinkedin className="w-5 h-5" />;
    if (lowerUrl.includes('youtube')) return <FaYoutube className="w-5 h-5" />;
    return <FaFacebook className="w-5 h-5" />; 
  };

  return (
    <footer className="bg-primary text-gray-300 mt-auto pt-20 md:pt-24 pb-8 font-sans relative overflow-hidden">
      {/* Subtle Background Glow for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Main Grid: Perfectly symmetrical 4 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          
          {/* Column 1: Brand & Manifest */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="mb-6 inline-block">
              <div className="font-black text-5xl tracking-tighter text-white leading-none hover:opacity-90 transition-opacity">
                a<span className="text-accent">c</span>n
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-[280px]">
              {settings?.footerInfo?.copyright || "Asociación Aconiño: Transformando vidas desde 1990 con amor, ciencia y dedicación integral."}
            </p>
            <div className="flex gap-3 items-center justify-center md:justify-start">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300 shadow-sm hover:shadow-accent/20"
                  aria-label={social.label}
                >
                  {renderSocialIcon(social.url)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Network / Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-8">
            <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">Nuestra Red</h4>
            <ul className="space-y-4 text-sm w-full">
              {displayLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url || link.href || "#"} className="text-gray-400 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-4">
            <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">Contacto</h4>
            <ul className="space-y-5 text-sm text-gray-400 w-full">
              <li className="flex items-start justify-center md:justify-start gap-4 group">
                <div className="mt-0.5 text-accent/80 group-hover:text-accent transition-colors"><FaMapMarkerAlt size={16} /></div>
                <span className="leading-tight">{settings?.address || "Sede Norte, Bogotá"}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="text-accent/80 group-hover:text-accent transition-colors"><FaPhoneAlt size={16} /></div>
                <a href={`tel:${settings?.phoneNumber || defaultPhone}`} className="hover:text-white transition-colors">
                  {settings?.phoneNumber || defaultPhone}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="text-accent/80 group-hover:text-accent transition-colors"><FaMobileAlt size={16} /></div>
                <a href={`tel:${settings?.mobilePhone || defaultMobile}`} className="hover:text-white transition-colors">
                  {settings?.mobilePhone || defaultMobile}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4 group">
                <div className="text-accent/80 group-hover:text-accent transition-colors"><FaEnvelope size={16} /></div>
                <a href={`mailto:${settings?.email || defaultEmail}`} className="hover:text-white transition-colors break-all">
                  {settings?.email || defaultEmail}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: App & Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-4">
            <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">App Aconiño</h4>
            {settings?.appDownloadUrl ? (
              <a href={settings.appDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300 mb-10">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Descargar en Google Play" width={150} height={45} className="h-[45px] w-auto" />
              </a>
            ) : (
              <div className="w-[150px] h-[45px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-xs text-gray-500 mb-10">
                Próximamente
              </div>
            )}
            
            {(settings?.controlEntity || settings?.footerInfo?.controlEntity) && (
              <div className="w-full max-w-[250px]">
                <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-4 opacity-80">Vigilancia</h4>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                    {settings?.controlEntity || settings?.footerInfo?.controlEntity}
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar: Clean line separator with perfectly spaced links */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 text-center lg:text-left font-medium tracking-wide">
            © {new Date().getFullYear()} Asociación Aconiño. Todos los derechos reservados.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs font-medium tracking-wide text-gray-500">
            <Link href="/politica-privacidad" className="hover:text-white hover:underline underline-offset-4 decoration-accent transition-all">Política de Privacidad</Link>
            <span className="hidden md:inline text-white/20">|</span>
            <Link href="/terminos-condiciones" className="hover:text-white hover:underline underline-offset-4 decoration-accent transition-all">Términos y Condiciones</Link>
            
            {legalLinks.map((link, idx) => (
               <React.Fragment key={`legal-${idx}`}>
                 <span className="hidden md:inline text-white/20">|</span>
                 <Link href={link.url || link.href || "#"} className="hover:text-white hover:underline underline-offset-4 decoration-accent transition-all">{link.label}</Link>
               </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
