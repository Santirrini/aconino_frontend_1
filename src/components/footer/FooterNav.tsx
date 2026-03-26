import Link from "next/link";

interface FooterLink {
  label?: string;
  url?: string;
  href?: string;
}

interface FooterNavProps {
  links: FooterLink[];
}

export default function FooterNav({ links }: FooterNavProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-8">
      <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">Nuestra Red</h4>
      <ul className="space-y-4 text-sm w-full">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link href={link.url || link.href || "#"} className="text-gray-400 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-block">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
