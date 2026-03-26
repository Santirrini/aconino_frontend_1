import React from "react";
import FooterHeader from "./footer/FooterHeader";
import FooterSocial from "./footer/FooterSocial";
import FooterNav from "./footer/FooterNav";
import FooterContact from "./footer/FooterContact";
import FooterApps from "./footer/FooterApps";
import FooterBottom from "./footer/FooterBottom";

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

  const controlEntity = settings?.controlEntity || settings?.footerInfo?.controlEntity;

  return (
    <footer className="bg-primary text-gray-300 mt-auto pt-20 md:pt-24 pb-8 font-sans relative overflow-hidden">
      {/* Subtle Background Glow for depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-20">
          
          <div className="space-y-6">
            <FooterHeader />
            <FooterSocial 
              socialLinks={socialLinks} 
              copyright={settings?.footerInfo?.copyright} 
            />
          </div>

          <FooterNav links={displayLinks} />

          <FooterContact 
            address={settings?.address}
            phone={settings?.phoneNumber || defaultPhone}
            mobile={settings?.mobilePhone || defaultMobile}
            email={settings?.email || defaultEmail}
          />

          <FooterApps 
            appDownloadUrl={settings?.appDownloadUrl}
            controlEntity={controlEntity}
          />
        </div>

        <FooterBottom legalLinks={legalLinks} />
      </div>
    </footer>
  );
}

