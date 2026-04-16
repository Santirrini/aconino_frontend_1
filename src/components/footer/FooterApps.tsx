import Image from "next/image";

interface FooterAppsProps {
  appDownloadUrl?: string;
  controlEntity?: string;
}

export default function FooterApps({ appDownloadUrl, controlEntity }: FooterAppsProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-4">
      <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">App Aconiño</h4>
      {appDownloadUrl ? (
        <a href={appDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 hover:-translate-y-1 transition-all duration-300 mb-10 drop-shadow-xl">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Descargar en Google Play" width={150} height={45} className="h-[45px] w-auto" unoptimized />
        </a>
      ) : (
        <div className="w-[160px] h-[48px] bg-gradient-to-r from-white/10 to-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[13px] font-medium tracking-wide text-gray-300 mb-10 shadow-inner backdrop-blur-sm">
          Próximamente
        </div>
      )}
      
      {controlEntity && (
        <div className="w-full flex flex-col items-center md:items-start">
          <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-4 opacity-80">Vigilancia</h4>
          <div className="p-4 bg-white/[0.03] backdrop-blur-md rounded-2xl border border-white/10 w-full max-w-[280px]">
            <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
              {controlEntity}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
