import Link from "next/link";

export default function FooterHeader() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      <Link href="/" className="mb-6 inline-block">
        <div className="font-black text-5xl tracking-tighter text-white leading-none hover:opacity-90 transition-opacity">
          a<span className="text-accent">c</span>n
        </div>
      </Link>
    </div>
  );
}
