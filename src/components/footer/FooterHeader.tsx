import Link from "next/link";
import Image from "next/image";

export default function FooterHeader() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <Link href="/" className="mb-6 inline-block group">
        <div className="bg-white/95 p-2 md:p-4 rounded-2xl md:rounded-[2rem] shadow-xl group-hover:scale-105 transition-all duration-500">
          <Image 
            src="/images/logo_aconino.png" 
            alt="Aconiño Logo" 
            width={160} 
            height={160}
            className="w-16 md:w-40 h-auto"
          />
        </div>
      </Link>
    </div>
  );
}
