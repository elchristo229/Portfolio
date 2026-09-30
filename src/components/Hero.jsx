import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Terminal as TerminalIcon, 
  ArrowRight, 
  Download, 
  CheckCircle, 
  MapPin, 
  Lock, 
  Cpu, 
  Award
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenDoc }) {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [activePhoto, setActivePhoto] = useState('primary');

  const roles = [
    "L3 Sécurité Informatique · IFRI",
    "Futur Analyste SOC & Ingénieur SSI",
    "Développeur Full-Stack (Next.js, Python, Django)",
    "Certifié ANSSI SecNumacadémie (88.5%)",
    "Concepteur de MediProof (Bitcoin Mastermind 2026)"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden cyber-grid">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>STATUT : RECHERCHE DE STAGE & OPPORTUNITÉS</span>
            </div>

            {/* Main Headline */}
            <div>
              <h2 className="text-sm uppercase tracking-widest font-mono text-cyan-400 font-semibold mb-2">
                PORTFOLIO OFFICIEL · BÉNIN
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight">
                {personal.fullName}
              </h1>
            </div>

            {/* Dynamic Typewriter Role */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <div className="text-xl sm:text-2xl font-mono text-slate-300 font-medium">
                Je suis{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 font-bold border-b-2 border-cyan-400 pb-0.5">
                  {roles[roleIndex]}
                </span>
                <span className="animate-pulse text-cyan-400 font-bold ml-1">_</span>
              </div>
            </div>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Étudiant inscrit en troisième année de Licence de Sécurité Informatique à l'IFRI (Université d'Abomey-Calavi), passionné par l'architecture des réseaux, l'analyse d'incidents, la cryptographie et les solutions applicatives à forte exigence d'intégrité.
            </p>

            {/* Highlights quick pills */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2">
              <span className="px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 text-xs flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certifié ANSSI SecNum (88.5%)</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 text-xs flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>EBIOS RM (Fintech 16p)</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 text-xs flex items-center space-x-1.5">
                <Lock className="w-3.5 h-3.5 text-teal-400" />
                <span>Bitcoin Mastermind 2026</span>
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900/70 border border-slate-800 text-slate-300 text-xs flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Abomey-Calavi / Cotonou</span>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition"
              >
                <span>Explorer mes Réalisations</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenDoc({
                  id: 'cv-securite',
                  title: 'CV — GANSE Kpèhoué Gille-Christ',
                  subtitle: 'Sécurité Informatique & Réseaux',
                  pages: 3,
                  previewPrefix: 'cv-securite',
                  fileUrl: './CV_GANSE_Kpehoue_Gille-Christ.pdf'
                })}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-cyan-300 font-semibold text-sm border border-cyan-500/30 hover:border-cyan-400 transition shadow-md shadow-slate-950"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Télécharger CV Sécurité</span>
              </button>

              <a
                href="#terminal"
                className="flex items-center space-x-2 px-4 py-3.5 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-cyan-300 text-sm border border-slate-800 transition font-mono"
              >
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                <span>CLI Terminal</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Photo Showcase with cyber border */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group">
              
              {/* Outer decorative tech lines */}
              {/* Main photo card container */}
              <div className="id-card id-card-frame relative p-2.5 bg-slate-900 border border-cyan-500/30 shadow-2xl shadow-black overflow-hidden max-w-sm sm:max-w-md">
                
                {/* Tech corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-20"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-20"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-20"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-20"></div>

                {/* Photo */}
                <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden bg-slate-900">
                  <img
                    src={personal.photos[activePhoto]}
                    alt="GANSE Kpèhoué Gille-Christ"
                    className="id-card-image w-full h-full object-cover object-top"
                  />

                  <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-slate-950/80 border border-cyan-400/30 text-[9px] font-mono tracking-wider text-cyan-300">
                    DIGITAL ID / CLEARANCE L3
                  </div>
                  
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                  {/* Overlaid Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900 border border-cyan-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white font-display">Gille-Christ GANSE</div>
                        <div className="text-[11px] text-cyan-400 font-mono">L3 · IFRI UAC</div>
                      </div>
                      <div className="flex items-center space-x-1 px-2 py-1 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
                        <CheckCircle className="w-3 h-3" />
                        <span>OPERATIONAL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photo selector thumbnails */}
                <div className="flex justify-center space-x-2 mt-3 pt-2 border-t border-slate-800">
                  <button
                    onClick={() => setActivePhoto('primary')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                      activePhoto === 'primary' 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                        : 'text-slate-400 hover:text-white bg-slate-900'
                    }`}
                  >
                    Profil Pro
                  </button>
                  <button
                    onClick={() => setActivePhoto('academic')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                      activePhoto === 'academic' 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                        : 'text-slate-400 hover:text-white bg-slate-900'
                    }`}
                  >
                    Académique IFRI
                  </button>
                  <button
                    onClick={() => setActivePhoto('lifestyle')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition ${
                      activePhoto === 'lifestyle' 
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                        : 'text-slate-400 hover:text-white bg-slate-900'
                    }`}
                  >
                    Traditionnel
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
