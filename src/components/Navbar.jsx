import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ArrowUpRight, Volume2, VolumeX, ScanEye, EyeOff } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenDoc }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [clock, setClock] = useState(() => new Date());
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [visualFeedback, setVisualFeedback] = useState(true);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const clockTimer = window.setInterval(() => setClock(new Date()), 1000);
    const latencyTimer = window.setInterval(() => setLatency(21 + Math.floor(Math.random() * 8)), 5000);
    return () => {
      window.clearInterval(clockTimer);
      window.clearInterval(latencyTimer);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.visualFeedback = visualFeedback ? 'on' : 'off';
    document.documentElement.dataset.audioEnabled = audioEnabled ? 'on' : 'off';
  }, [audioEnabled, visualFeedback]);

  const playToggleTone = (enabled) => {
    if (!enabled) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = 720;
    gain.gain.setValueAtTime(0.025, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.06);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.06);
    oscillator.onended = () => context.close();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['hero', 'about', 'certifications', 'projects', 'skills', 'experience', 'documents', 'terminal', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#hero', id: 'hero' },
    { label: 'À propos', href: '#about', id: 'about' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Projets & Labs', href: '#projects', id: 'projects' },
    { label: 'Compétences', href: '#skills', id: 'skills' },
    { label: 'Parcours', href: '#experience', id: 'experience' },
    { label: 'Documents', href: '#documents', id: 'documents' },
    { label: 'Terminal', href: '#terminal', id: 'terminal' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-cyan-950/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-2 text-[9px] font-mono tracking-wider text-slate-500">
        <div className="flex items-center gap-4">
          <span className="text-emerald-400">SYS / ONLINE</span>
          <span>{clock.toISOString().slice(11, 19)} UTC</span>
          <span>{latency}ms / ENCRYPTED</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => { const nextEnabled = !audioEnabled; setAudioEnabled(nextEnabled); playToggleTone(nextEnabled); }}
            aria-label={audioEnabled ? 'Désactiver les sons' : 'Activer les sons'}
            aria-pressed={audioEnabled}
            title={audioEnabled ? 'Audio activé' : 'Audio désactivé'}
            className={`p-1.5 transition ${audioEnabled ? 'text-cyan-300' : 'text-slate-500 hover:text-cyan-300'}`}
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => setVisualFeedback((enabled) => !enabled)}
            aria-label={visualFeedback ? 'Désactiver les effets visuels' : 'Activer les effets visuels'}
            aria-pressed={visualFeedback}
            title={visualFeedback ? 'Effets visuels activés' : 'Effets visuels désactivés'}
            className={`p-1.5 transition ${visualFeedback ? 'text-cyan-300' : 'text-slate-500 hover:text-cyan-300'}`}
          >
            {visualFeedback ? <ScanEye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with status indicator */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <img
            src={portfolioData.personal.photos.primary}
            alt="Portrait de Gille-Christ GANSE"
            className="h-11 w-11 object-cover object-top border border-cyan-500/45 grayscale-[15%] group-hover:grayscale-0 transition"
          />

          <div>
            <div className="min-w-0 font-display font-bold text-sm leading-tight text-white group-hover:text-cyan-400 transition">
              <span>{portfolioData.personal.fullName}</span>
            </div>
            <div className="text-[9px] text-slate-400 font-mono tracking-wider uppercase">
              <span className="text-emerald-400">L3</span>
              <span> / IFRI UAC</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => onOpenDoc({
              id: 'cv-securite',
              title: 'CV — GANSE Kpèhoué Gille-Christ',
              subtitle: 'Profil Sécurité Informatique & Réseaux',
              pages: 3,
              previewPrefix: 'cv-securite',
              fileUrl: './CV_GANSE_Kpehoue_Gille-Christ.pdf'
            })}
            className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-semibold transition group shadow-sm shadow-cyan-950"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition" />
            <span>Consulter CV</span>
          </button>

          <a
            href="#contact"
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition"
          >
            <span>Me Contacter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-slate-900/95 border border-cyan-500/20 backdrop-blur-2xl shadow-2xl shadow-black space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[9px] font-mono tracking-wider text-slate-400">
            <span className="text-emerald-400">SYS / ONLINE</span>
            <span>{clock.toISOString().slice(11, 19)} UTC · {latency}ms / ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-2 pb-2">
            <button
              type="button"
              onClick={() => { const nextEnabled = !audioEnabled; setAudioEnabled(nextEnabled); playToggleTone(nextEnabled); }}
              aria-pressed={audioEnabled}
              className="flex items-center gap-2 px-3 py-2 border border-slate-700 text-xs text-slate-300"
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-cyan-300" /> : <VolumeX className="w-3.5 h-3.5" />}
              Audio {audioEnabled ? 'ON' : 'OFF'}
            </button>
            <button
              type="button"
              onClick={() => setVisualFeedback((enabled) => !enabled)}
              aria-pressed={visualFeedback}
              className="flex items-center gap-2 px-3 py-2 border border-slate-700 text-xs text-slate-300"
            >
              {visualFeedback ? <ScanEye className="w-3.5 h-3.5 text-cyan-300" /> : <EyeOff className="w-3.5 h-3.5" />}
              Visual {visualFeedback ? 'ON' : 'OFF'}
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/80 transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDoc({
                  id: 'cv-securite',
                  title: 'CV — GANSE Kpèhoué Gille-Christ',
                  subtitle: 'Profil Sécurité Informatique & Réseaux',
                  pages: 3,
                  previewPrefix: 'cv-securite',
                  fileUrl: './CV_GANSE_Kpehoue_Gille-Christ.pdf'
                });
              }}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-800 text-cyan-300 text-xs font-semibold border border-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Voir le CV complet</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20"
            >
              <span>Me contacter directement</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
