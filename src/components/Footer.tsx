import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

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
        <footer className="bg-primary text-white mt-auto py-16">
            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Column 1: Aconiño Logo/Info */}
                    <div className="flex flex-col">
                        <div className="border-b border-white/20 pb-8 mb-8">
                            <div className="flex font-bold text-4xl tracking-tighter text-white leading-none mb-2">
                                a<span className="text-accent">c</span>n
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 pr-4">
                            {settings?.footerInfo?.copyright || "Somos una entidad privada sin ánimo de lucro, creada en 1990."}
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Enlaces de interés</h4>
                        <ul className="space-y-4 text-sm text-gray-300">
                            {displayLinks?.map((link: { label?: string; url?: string; href?: string }, idx: number) => (
                                <li key={idx}>
                                    <Link href={link.url || link.href || "#"} className="hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contáctanos</h4>
                        <div className="text-xs text-gray-400 mb-4 tracking-wider uppercase">Sede Norte</div>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <FaPhoneAlt className="text-accent" />
                                <span>{settings?.phoneNumber || defaultPhone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FaMobileAlt className="text-accent" />
                                <span>{settings?.mobilePhone || defaultMobile}</span>
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
                                <a href={`mailto:${settings?.email || defaultEmail}`} className="hover:text-accent transition-colors">
                                    {settings?.email || defaultEmail}
                                </a>
                            </li>
                        </ul>

                        {/* Get it on Google Play */}
                        <div className="mt-8">
                            {settings?.appDownloadUrl && (
                                <a href={settings.appDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-12" width={120} height={48} />
                                </a>
                            )}
                        </div>
                        
                        {/* Control Entity */}
                        {(settings?.controlEntity || settings?.footerInfo?.controlEntity) && (
                            <div className="mt-4 text-xs text-gray-400">
                                {settings?.controlEntity || settings?.footerInfo?.controlEntity}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </footer>
    );
}
