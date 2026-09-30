import React from 'react';
import { Award, ShieldCheck, CheckCircle, ExternalLink, Eye, Download, Calendar, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications({ onOpenDoc }) {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950 cyber-grid-dense">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>ACCRÉDITATIONS & TITRES OFFICIELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Certifications & Formations Validées
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Titres vérifiables avec attestations officielles extraites et consultables en haute résolution.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const isAnssi = cert.id === 'anssi-secnum';
            return (
              <div
                key={cert.id}
                className={`relative rounded-3xl p-6 sm:p-7 glass-card border transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-2xl ${
                  isAnssi 
                    ? 'border-emerald-500/40 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-emerald-950/20 lg:col-span-1 ring-1 ring-emerald-500/20' 
                    : 'border-cyan-500/20 hover:border-cyan-500/40 bg-slate-900/70'
                }`}
              >
                {/* Top Badge */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wide uppercase ${
                      isAnssi 
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                        : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                    }`}>
                      {cert.grade}
                    </span>

                    <span className="flex items-center space-x-1 text-slate-400 text-xs font-mono">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  {/* Certificate Title & Issuer */}
                  <h3 className="text-xl font-bold text-white font-display mb-1.5 hover:text-cyan-300 transition">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mb-4">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                    {cert.description}
                  </p>

                  {/* ANSSI Breakdown if applicable */}
                  {cert.modules && (
                    <div className="space-y-2 mb-6 p-3.5 rounded-2xl bg-slate-950/80 border border-emerald-500/20">
                      <div className="text-[11px] font-mono font-bold text-emerald-400 mb-2 uppercase flex items-center justify-between">
                        <span>Scores par Module</span>
                        <span className="text-white">Moyenne : 88.5%</span>
                      </div>
                      {cert.modules.map((mod, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs">
                          <span className="text-slate-300 truncate pr-2 font-light">{mod.name}</span>
                          <span className="font-mono font-bold text-emerald-300 shrink-0">{mod.score}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Thumbnail Preview Clickable */}
                  {cert.image && (
                    <div 
                      onClick={() => onOpenDoc({
                        id: cert.id,
                        title: cert.title,
                        subtitle: cert.issuer,
                        image: cert.image,
                        fileUrl: cert.image
                      })}
                      className="relative rounded-xl overflow-hidden border border-slate-700/60 group/img cursor-pointer mb-5 bg-slate-950 shadow-inner"
                    >
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-36 object-cover object-top opacity-85 group-hover/img:opacity-100 group-hover/img:scale-105 transition duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent flex items-end justify-center p-3">
                        <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                          <Eye className="w-3.5 h-3.5" />
                          <span>Agrandir l'attestation</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2">
                  <button
                    onClick={() => onOpenDoc({
                      id: cert.id,
                      title: cert.title,
                      subtitle: cert.issuer,
                      image: cert.image,
                      fileUrl: cert.image
                    })}
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Vérifier en HD</span>
                  </button>

                  <a
                    href={cert.image}
                    download
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                    title="Télécharger l'image de certification"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
