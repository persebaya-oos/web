"use client";

import React, { useState, useEffect } from 'react';

// Custom SVG Icons untuk menghindari error "lucide-react not found"
const Icons = {
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  ),
  Shield: ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
  ),
  Anchor: ({ size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/></svg>
  ),
  Send: ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
  )
};

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Animasi gelembung di latar belakang
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => {
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10
    }));
    setBubbles(newBubbles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulasi pengiriman data
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans relative overflow-hidden selection:bg-cyan-500/30">
      {/* Background Deep Ocean Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-[#0a192f] to-black z-0"></div>
      
      {/* Animated Bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-[-20px] bg-white/5 rounded-full blur-sm animate-pulse"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `floatUp ${bubble.duration}s linear infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        .glass-panel {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(56, 189, 248, 0.1);
        }
      `}} />

      <main className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4">
              <Icons.Shield size={14} />
              <span>Transmisi Terenkripsi Aman</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Hubungi <span className="text-cyan-400">Arisandi</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Kirimkan pesan Anda ke kedalaman. Tim kami di Deep Web Ocean siap menjangkau Anda kembali melalui kanal yang aman.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Cards - Left Side */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-panel p-8 rounded-3xl hover:border-cyan-500/40 transition-colors duration-500">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6">
                  <Icons.Mail />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Kami</h3>
                <p className="text-slate-400 mb-4">Untuk pertanyaan teknis dan kemitraan strategis.</p>
                <a href="mailto:depths@deepwebocean.com" className="text-cyan-400 font-mono hover:underline">depths@deepwebocean.com</a>
              </div>

              <div className="glass-panel p-8 rounded-3xl hover:border-blue-500/40 transition-colors duration-500">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
                  <Icons.MapPin />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Markas Komando</h3>
                <p className="text-slate-400">
                  Mariana Trench, Sektor 7<br />
                  Koordinat: 11.3493° N, 142.1996° E
                </p>
              </div>

              <div className="glass-panel p-8 rounded-3xl overflow-hidden relative group">
                <div className="absolute -right-10 -bottom-10 text-cyan-500/5 group-hover:text-cyan-500/10 transition-colors">
                  <Icons.Anchor size={160} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 italic">"Makin dalam Anda menyelam, makin banyak yang akan Anda temukan."</h3>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <div className="w-8 h-[1px] bg-slate-700"></div>
                  <span>Anonim, Penjelajah Abyss</span>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-2xl relative">
                {submitted ? (
                  <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icons.Send size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Pesan Terkirim!</h2>
                    <p className="text-slate-400">Transmisi Anda telah berhasil dikirim ke server pusat kami.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-8 px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Nama / Alias</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white"
                          placeholder="Ex: Diver-01"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300 ml-1">Email Node</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white"
                          placeholder="name@provider.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Subjek Transmisi</label>
                      <select 
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white appearance-none"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      >
                        <option>General Inquiry</option>
                        <option>Bug Report</option>
                        <option>Partnership</option>
                        <option>The Abyss Secret</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300 ml-1">Pesan Enkripsi</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-white resize-none"
                        placeholder="Tuliskan pesan Anda di sini..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Mengirim Transmisi...</span>
                        </div>
                      ) : (
                        <>
                          <Icons.Send size={20} />
                          <span>Luncurkan Pesan</span>
                        </>
                      )}
                    </button>
                    
                    <p className="text-center text-xs text-slate-500">
                      Dengan mengirimkan ini, Anda setuju bahwa data Anda akan diproses melalui enkripsi tingkat tinggi.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="relative z-10 border-t border-slate-800/50 py-10 mt-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
              <Icons.Anchor size={18} className="text-black" />
            </div>
            Deep Web Ocean
          </div>
          <div className="flex gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-cyan-400 transition-colors">Keamanan</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Privasi</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Protokol</a>
          </div>
          <p className="text-slate-600 text-xs font-mono">© 2026 DEEP-WEB-OCEAN.ARC</p>
        </div>
      </footer>
    </div>
  );
}