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
      <ul className="space-y-3 text-[15px] text-gray-400 w-full flex flex-col items-center md:items-start">
        <li className="flex items-start justify-center md:justify-start gap-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors group w-auto">
          <div className="mt-1 text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all"><FaMapMarkerAlt size={16} /></div>
          <span className="leading-tight pt-1">{address || "Sede Norte, Bogotá"}</span>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors group w-auto">
          <div className="text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all"><FaPhoneAlt size={16} /></div>
          <a href={`tel:${phone}`} className="hover:text-white transition-colors">
            {phone}
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors group w-auto">
          <div className="text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all"><FaMobileAlt size={16} /></div>
          <a href={`tel:${mobile}`} className="hover:text-white transition-colors">
            {mobile}
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start gap-4 p-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors group w-auto w-full md:w-auto">
          <div className="text-accent/80 group-hover:text-accent group-hover:scale-110 transition-all shrink-0"><FaEnvelope size={16} /></div>
          <a href={`mailto:${email}`} className="hover:text-white transition-colors break-words text-sm md:text-[15px]">
            {email}
          </a>
        </li>
      </ul>
    </div>
  );
}
