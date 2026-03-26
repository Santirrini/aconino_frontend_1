import { FaPhoneAlt, FaMobileAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface FooterContactProps {
  address?: string;
  phone?: string;
  mobile?: string;
  email?: string;
}

export default function FooterContact({ address, phone, mobile, email }: FooterContactProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-4">
      <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">Contacto</h4>
      <ul className="space-y-5 text-sm text-gray-400 w-full">
        <li className="flex items-start justify-center md:justify-start gap-4 group">
          <div className="mt-0.5 text-accent/80 group-hover:text-accent transition-colors"><FaMapMarkerAlt size={16} /></div>
          <span className="leading-tight">{address || "Sede Norte, Bogotá"}</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-4 group">
          <div className="text-accent/80 group-hover:text-accent transition-colors"><FaPhoneAlt size={16} /></div>
          <a href={`tel:${phone}`} className="hover:text-white transition-colors">
            {phone}
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-4 group">
          <div className="text-accent/80 group-hover:text-accent transition-colors"><FaMobileAlt size={16} /></div>
          <a href={`tel:${mobile}`} className="hover:text-white transition-colors">
            {mobile}
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-4 group">
          <div className="text-accent/80 group-hover:text-accent transition-colors"><FaEnvelope size={16} /></div>
          <a href={`mailto:${email}`} className="hover:text-white transition-colors break-words">
            {email}
          </a>
        </li>
      </ul>
    </div>
  );
}
