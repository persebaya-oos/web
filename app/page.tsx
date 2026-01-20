/**
 * Komponen Portfolio Arisandi dengan tema Deep Ocean.
 * Menggunakan Tailwind CSS untuk styling dan tata letak responsif.
 */
export default function Home() {
  return (
    // Container utama dengan background gradasi biru tua (Deep Ocean)
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#001220] via-[#002d4d] to-[#000a12] font-sans text-white overflow-hidden relative">
      
      {/* Dekorasi background: Efek cahaya air (Light rays) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] bg-blue-500/10 blur-[120px] rounded-full transform rotate-12"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-20 px-8 sm:items-start text-center sm:text-left gap-12">
        
        {/* Logo / Header Branding */}
        <div className="flex items-center gap-2 group cursor-default">
          <div className="h-1 w-12 bg-cyan-400 rounded-full group-hover:w-16 transition-all duration-300"></div>
          <span className="text-sm font-bold tracking-[0.3em] uppercase text-cyan-400/80">Portfolio 2026</span>
        </div>

        {/* Intro Section */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-blue-400">
            Halo, Saya Arisandi.
          </h1>
          <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-zinc-300/90 font-light">
            Seorang <span className="text-cyan-300 font-medium italic">Creative Developer</span> yang berfokus pada pembangunan pengalaman digital yang tenang, mendalam, dan fungsional seperti samudera.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-5 sm:flex-row w-full sm:w-auto">
          {/* Button: Primary Action */}
          <a
            className="group flex h-14 items-center justify-center gap-3 rounded-xl bg-cyan-600 px-8 text-white transition-all hover:bg-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
            href="menu"
          >
            menu
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Button: Secondary Action (Ghost style) */}
          <a
            className="flex h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
            href="contact"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Simple Navigation / Social Links */}
        <div className="flex items-center gap-8 pt-8">
          {['GitHub', 'LinkedIn', 'Instagram'].map((social) => (
            <a 
              key={social}
              href={`#${social.toLowerCase()}`}
              className="text-sm text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {social}
            </a>
          ))}
        </div>

      </main>

      {/* Footer Branding Overlay */}
      <div className="absolute bottom-10 right-10 hidden md:block">
        <img
          className="opacity-20 hover:opacity-50 transition-opacity duration-500 invert"
          src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
          alt="Next.js logo"
          width="80"
          height="16"
        />
      </div>
    </div>
  );
}