import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

interface FooterLink {
  label?: string;
  url?: string;
}

interface FooterSocialProps {
  socialLinks: FooterLink[];
  copyright?: string;
}

export default function FooterSocial({ socialLinks, copyright }: FooterSocialProps) {
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
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-[280px]">
        {copyright || "Asociación Aconiño: Transformando vidas desde 1990 con amor, ciencia y dedicación integral."}
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
  );
}
