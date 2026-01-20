"use client";

import React, { useState, useEffect } from 'react';

// Custom SVG Icons to replace lucide-react dependencies
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
 Eye: () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
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

 const sections = [
 {
 title: "Misteri Bawah Permukaan",
 description: "Deep Web Ocean bukan sekadar data. Ini adalah lapisan informasi yang tidak terindeks oleh mesin pencari standar, mencakup 90% dari seluruh luas internet global.",
 icon: <div className="text-cyan-400"><Icons.Layers /></div>
 },
 {
 title: "Keamanan & Privasi",
 description: "Kami percaya pada hak atas privasi digital. Melalui enkripsi berlapis, kami membantu navigasi di perairan digital yang paling dalam sekalipun.",
 icon: <div className="text-purple-400"><Icons.Shield /></div>
 },
 {
 title: "Entitas Tak Terlihat",
 description: "Seringkali disalahpahami, Deep Web adalah rumah bagi arsip ilmiah, database medis, dan forum anonim yang menjaga kebebasan berbicara.",
 icon: <div className="text-blue-400"><Icons.Ghost /></div>
 }
 ];

 return (
 <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
 {/* Background Effects */}
 <div className="fixed inset-0 overflow-hidden pointer-events-none">
 <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
 <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px]" />
 </div>

 <main className="relative z-10 max-w-6xl mx-auto px-6 py-20">
 {/* Header Section */}
 <header className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
 <div className="flex items-center gap-3 mb-6 text-cyan-400">
 <div className="animate-bounce"><Icons.Anchor /></div>
 <span className="uppercase tracking-[0.3em] text-sm font-bold">Laporan Ekspedisi</span>
 </div>
 <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-slate-500">
 Mengenal <br /> Deep Web Ocean.
 </h1>
 <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
 Menyelami kegelapan digital untuk menemukan cahaya pengetahuan yang tersembunyi. Kami adalah navigator Anda di perairan yang belum terpetakan.
 </p>
 </header>

 {/* Stats Grid */}
 <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-24">
 {sections.map((item, idx) => (
 <div 
 key={idx}
 className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 group"
 >
 <div className="mb-6 p-3 bg-slate-800/50 w-fit rounded-xl group-hover:scale-110 transition-transform">
 {item.icon}
 </div>
 <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
 {item.title}
 </h3>
 <p className="text-slate-400 leading-relaxed">
 {item.description}
 </p>
 </div>
 ))}
 </section>

 {/* Detailed Content Section */}
 <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-black border border-slate-800 p-10 md:p-16 mb-24">
 <div className="grid md:grid-cols-2 gap-12 items-center">
 <div>
 <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
 <span className="text-cyan-400"><Icons.Eye /></span> Visi Kami
 </h2>
 <div className="space-y-6 text-slate-300">
 <p>
 Internet yang kita lihat hanyalah "permukaan". Di bawahnya terdapat samudera data yang luas. Misi kami adalah memberikan pemahaman yang benar dan aman mengenai ekosistem ini.
 </p>
 <div className="flex items-start gap-4">
 <div className="mt-1 h-5 w-5 rounded-full border-2 border-cyan-500 shrink-0" />
 <p>Membongkar mitos negatif tentang jaringan terenkripsi.</p>
 </div>
 <div className="flex items-start gap-4">
 <div className="mt-1 h-5 w-5 rounded-full border-2 border-purple-500 shrink-0" />
 <p>Edukasi tentang keamanan siber dan kedaulatan data pribadi.</p>
 </div>
 <div className="flex items-start gap-4">
 <div className="mt-1 h-5 w-5 rounded-full border-2 border-blue-500 shrink-0" />
 <p>Menyediakan gerbang informasi yang terkurasi dan terpercaya.</p>
 </div>
 </div>
 </div>
 <div className="relative flex justify-center">
<div className="w-64 h-64 rounded-full border-2 border-dashed border-slate-700 animate-[spin_20s_linear_infinite] flex items-center justify-center">
 <div className="w-48 h-48 rounded-full border-4 border-cyan-500/30 flex items-center justify-center bg-cyan-900/10">
 <div className="opacity-50 text-cyan-400"><Icons.Info /></div>
 </div>
</div>
{/* Decorative dots */}
<div className="absolute top-0 right-10 w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
<div className="absolute bottom-10 left-10 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-700 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
 </div>
 </div>
 </section>

 {/* Call to Action */}
 <footer className="text-center pb-10">
 <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2 mx-auto">
 Mulai Penyelaman <Icons.ArrowRight />
 </button>
 <p className="mt-8 text-sm text-slate-600 tracking-widest uppercase">
 © 2026 Deep Web Ocean Protocol
 </p>
 </footer>
 </main>

 {/* Aesthetic Overlay Grid */}
 <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
 style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
 </div>
 </div>
 );
};

export default App;