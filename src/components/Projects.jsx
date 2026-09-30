import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Download, 
  Eye, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Terminal, 
  Layers,
  ChevronRight,
  FileText
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onOpenDoc }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const { projects } = portfolioData;

  const filters = [
    { id: 'all', label: 'Tous les Travaux' },
    { id: 'security', label: 'Cybersécurité & Audits' },
    { id: 'web', label: 'Développement Web & SaaS' },
    { id: 'network', label: 'Réseaux & Protocoles' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>RÉALISATIONS, AUDITS & LABS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Projets & Travaux Pratiques
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Une combinaison de réalisations concrètes : audits de risques certifiés, applications décentralisées, déploiements cloud et analyses forensiques.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all ${
                activeFilter === f.id
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-md shadow-cyan-500/25 font-bold scale-105'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => {
            const hasPreview = !!project.docPreview;
            return (
              <div
                key={project.id}
                className="rounded-3xl glass-card border border-cyan-500/15 hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/50 group"
              >
                <div>
                  {/* Category Pill & Context */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-mono font-semibold uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                        En Vedette
                      </span>
                    )}
                  </div>

                  {/* Context note */}
                  <div className="text-[11px] text-slate-400 font-mono mb-2 flex items-center space-x-1">
                    <span className="text-cyan-500">▶</span>
                    <span>{project.context}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-display mb-2.5 group-hover:text-cyan-300 transition">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet List */}
                  {project.highlights && (
                    <ul className="space-y-1.5 mb-5 p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80">
                      {project.highlights.slice(0, 3).map((item, i) => (
                        <li key={i} className="text-[11px] text-slate-300 flex items-start space-x-2">
                          <span className="text-teal-400 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  {hasPreview ? (
                    <button
                      onClick={() => onOpenDoc({
                        id: project.id,
                        title: project.title,
                        subtitle: `${project.docPreview.totalDocPages} pages au total · Aperçu interactif`,
                        pages: project.docPreview.pages,
                        previewPrefix: project.docPreview.prefix,
                        fileUrl: project.fileUrl
                      })}
                      className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Feuilleter le rapport ({project.docPreview.pages}p)</span>
                    </button>
                  ) : project.fileUrl ? (
                    <a
                      href={project.fileUrl}
                      download
                      className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Télécharger le fichier</span>
                    </a>
                  ) : project.presentationFile ? (
                    <a
                      href={project.presentationFile}
                      download
                      className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Télécharger Slides PPTX</span>
                    </a>
                  ) : (
                    <a
                      href="https://github.com/elchristo229"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Voir sur GitHub</span>
                    </a>
                  )}

                  {project.fileUrl && hasPreview && (
                    <a
                      href={project.fileUrl}
                      download
                      className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition"
                      title="Télécharger le PDF complet"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
