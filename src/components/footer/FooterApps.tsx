import Image from "next/image";

interface FooterAppsProps {
  appDownloadUrl?: string;
  controlEntity?: string;
}

export default function FooterApps({ appDownloadUrl, controlEntity: _controlEntity }: FooterAppsProps) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left lg:pl-4">
      <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-8">App Aconiño</h4>
      {appDownloadUrl ? (
        <a href={appDownloadUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 hover:-translate-y-1 transition-all duration-300 mb-10 drop-shadow-xl">
          <Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Descargar en Google Play" width={150} height={45} className="h-[45px] w-auto" unoptimized />
        </a>
      ) : (
        <div className="hover:scale-105 transition-all duration-300 mb-10 drop-shadow-xl cursor-pointer">
          <Image 
            src="/images/logoGooglePlay2.png" 
            alt="App Aconiño" 
            width={150} 
            height={45} 
            className="h-[45px] w-auto"
          />
        </div>
      )}
      
      <div className="w-full flex flex-col items-center md:items-start">
        <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-4 opacity-80">Vigilancia</h4>
        <div className="p-2 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 w-full max-w-[200px] flex justify-center items-center">
          <Image 
            src="/images/vigilado-supersalud-1.png" 
            alt="Vigilado Supersalud" 
            width={180} 
            height={60} 
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
