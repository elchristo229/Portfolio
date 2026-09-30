import React from 'react';
import { FileText, Eye, Download, ShieldCheck, FolderDown, FileCode, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Documents({ onOpenDoc }) {
  const { documents } = portfolioData;

  return (
    <section id="documents" className="py-24 relative overflow-hidden bg-slate-950 cyber-grid-dense border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderDown className="w-3.5 h-3.5" />
            <span>CENTRE DE RESSOURCES & DOCUMENTS OFFICIELS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Documents, CV & Rapports Techniques
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Tous mes rapports de travaux pratiques, attestations et CV sont consultables page par page dans le lecteur haute fidélité intégré, ou téléchargeables au format d'origine.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => {
            const hasPreview = !!doc.previewPrefix;
            return (
              <div
                key={doc.id}
                className="p-6 rounded-3xl glass-card border border-cyan-500/15 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl shadow-black/40 group"
              >
                <div>
                  {/* Badge & Type */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {doc.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      {doc.type}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white font-display mb-1.5 group-hover:text-cyan-300 transition leading-snug">
                    {doc.title}
                  </h3>
                  <div className="text-xs text-teal-400 font-mono mb-3">
                    {doc.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                    {doc.description}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2">
                  {hasPreview ? (
                    <button
                      onClick={() => onOpenDoc({
                        id: doc.id,
                        title: doc.title,
                        subtitle: doc.subtitle,
                        pages: doc.pages,
                        previewPrefix: doc.previewPrefix,
                        fileUrl: doc.fileUrl
                      })}
                      className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lire en ligne ({doc.pages}p)</span>
                    </button>
                  ) : null}

                  <a
                    href={doc.fileUrl}
                    download
                    className={`${hasPreview ? 'p-2.5' : 'flex-1 py-2.5 space-x-1.5'} flex items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition`}
                    title="Télécharger le fichier"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {!hasPreview && <span>Télécharger</span>}
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
