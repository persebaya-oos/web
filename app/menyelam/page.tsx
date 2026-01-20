"use client";

import React, { useState, useEffect } from 'react';

// Ikon SVG Kustom untuk menghindari ketergantungan library luar
const Icons = {
  Layers: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  Ghost: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 10h.01" /><path d="M15 10h.01" /><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" /></svg>
  ),
  Anchor: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="3" /><line x1="12" y1="22" x2="12" y2="8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
  ),
  Compass: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  Info: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
  )
};

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const oceanLayers = [
    {
      depth: "0m - 100m",
      title: "Surface Web",
      desc: "Bagian internet yang kita gunakan setiap hari: Google, Sosial Media, dan Berita. Terang namun sangat terbatas.",
      color: "bg-cyan-400"
    },
    {
      depth: "100m - 4000m",
      title: "The Deep Web",
      desc: "Database bank, rekam medis, dokumen akademik, dan cloud storage pribadi. Tidak terindeks tetapi krusial bagi dunia modern.",
      color: "bg-blue-600"
    },
    {
      depth: "4000m+",
      title: "The Dark Ocean",
      desc: "Bagian terdalam yang membutuhkan kunci khusus (seperti Onion routing) untuk diakses. Tempat privasi mutlak dan risiko tinggi berada.",
      color: "bg-purple-900"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Efek Latar Belakang Atmosferik */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        
        {/* Bagian Header */}
        <header className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center gap-3 mb-6 text-cyan-400">
            <div className="animate-bounce"><Icons.Anchor /></div>
            <span className="uppercase tracking-[0.4em] text-xs font-bold">Inisiasi Protokol Penyelaman</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 leading-tight">
            Melampaui <br /> Cakrawala.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed border-l-2 border-cyan-500/50 pl-6 italic">
            "Internet bukanlah sebuah tempat, melainkan sebuah samudra. Sebagian besar orang hanya bermain di bibir pantai, sementara kebenaran terkubur di dasarnya."
          </p>
        </header>

        {/* Bagian Lapisan Ocean (Penyelaman Lebih Dalam) */}
        <section className="mt-40 mb-32">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-cyan-400"><Icons.Layers /></span> Topografi Samudra Digital
          </h2>
          <div className="relative border-l border-slate-800 ml-4 space-y-16">
            {oceanLayers.map((layer, idx) => (
              <div key={idx} className="relative pl-12 group">
                <div className={`absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full ${layer.color} shadow-[0_0_10px_currentColor] transition-transform group-hover:scale-150`} />
                <span className="text-xs font-mono text-slate-500 mb-2 block tracking-widest">{layer.depth}</span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{layer.title}</h3>
                <p className="text-slate-400 max-w-xl leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bagian Visi & Filosofi */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-slate-900/40 border border-slate-800 p-8 md:p-20 mb-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">Mengapa Kami Menjelajah?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                Deep Web Ocean hadir sebagai navigator bagi mereka yang sadar bahwa data adalah aset paling berharga di abad ke-21. Kami tidak hanya mengamati, kami memetakan anomali.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: <Icons.Lock />, text: "Kedaulatan Data Mutlak" },
                  { icon: <Icons.Compass />, text: "Navigasi Tanpa Jejak" },
                  { icon: <Icons.Shield />, text: "Proteksi Identitas Digital" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <span className="text-cyan-400">{item.icon}</span>
                    <span className="font-medium text-slate-200">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
               <div className="aspect-square rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 animate-pulse flex items-center justify-center p-8">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-cyan-500/40 animate-[spin_30s_linear_infinite] p-12">
                    <div className="w-full h-full rounded-full border-2 border-slate-700/50 flex items-center justify-center">
                      <Icons.Info />
                    </div>
                  </div>
               </div>
               {/* Label mengapung */}
               <div className="absolute top-0 right-0 p-4 bg-slate-800 rounded-lg text-xs font-mono border border-slate-700 shadow-2xl">
                 CORE_SYSTEM: ACTIVE
               </div>
               <div className="absolute bottom-10 left-0 p-4 bg-slate-800 rounded-lg text-xs font-mono border border-slate-700 shadow-2xl">
                 ENCRYPTION: 4096-BIT
               </div>
            </div>
          </div>
        </section>

        {/* Bagian Komitmen & Etika */}
        <div className="grid md:grid-cols-2 gap-12 mb-32 text-center md:text-left">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Etika Penjelajahan</h3>
            <p className="text-slate-400">Kami menjunjung tinggi etika digital. Deep Web bukanlah tempat kriminalitas dalam pandangan kami, melainkan benteng terakhir kebebasan informasi yang sering disalahpahami.</p>
          </div>
          <div className="p-8 border-l border-slate-800">
            <h3 className="text-2xl font-bold mb-4 text-purple-300">Keamanan Pengguna</h3>
            <p className="text-slate-400">Setiap koordinat yang kami berikan telah melalui protokol verifikasi ketat untuk memastikan penyelaman Anda tetap aman dari ancaman siber permukaan.</p>
          </div>
        </div>

        {/* Footer / CTA */}
        <footer className="text-center py-20 border-t border-slate-900">
          <h2 className="text-2xl mb-10 font-light tracking-widest uppercase">Siap Menyelam Lebih Jauh?</h2>
          <button className="group relative px-12 py-5 bg-cyan-500 text-slate-950 font-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-3">
              AKTIFKAN TRANSMISI <Icons.ArrowRight />
            </span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
          <div className="mt-16 flex justify-center gap-8 text-slate-600 text-xs tracking-tighter uppercase font-mono">
            <span>Lat: 0.0000° N</span>
            <span>Long: 0.0000° E</span>
            <span>Status: Deep Sea</span>
          </div>
        </footer>
      </main>

      {/* Grid Overlay Estetik */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
    </div>
  );
};

export default App;