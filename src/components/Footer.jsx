import React from 'react';
import { ArrowUp, Github, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative text-slate-400 font-light text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div>
              <span className="font-bold text-white text-sm font-display tracking-tight">
                {personal.fullName}
              </span>
              <span className="text-[11px] text-cyan-400 font-mono block">
                L3 Sécurité Informatique · IFRI UAC
              </span>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex items-center space-x-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`https://wa.me/${personal.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition"
              title="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition flex items-center space-x-1"
              title="Haut de page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <div>
            © {new Date().getFullYear()} {personal.fullName}. Tous droits réservés.
          </div>
        </div>

      </div>
    </footer>
  );
}
