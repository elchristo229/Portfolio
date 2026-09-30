import React from 'react';
import { Shield, CheckCircle2, User, Target, BookOpen, ExternalLink, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenDoc }) {
  const { personal } = portfolioData;

  const highlights = [
    { title: "Formation d'excellence", desc: "Troisième année de Licence en Sécurité Informatique à l'IFRI (Université d'Abomey-Calavi)." },
    { title: "Certification d'État", desc: "SecNumacadémie ANSSI (France) validée avec 88.5% de moyenne générale." },
    { title: "Rigueur Méthodologique", desc: "Pratique confirmée d'EBIOS RM (16p d'audit), normes ISO 27005 et conformité BCEAO/APDP." },
    { title: "Expérience Terrain", desc: "Deux stages en entreprise : ANPE (infrastructure) et Quantum Technology (SaaS DAO)." }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>PROFIL PROFESSIONNEL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            À Propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Gille-Christ GANSE</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio & Trajectory */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-white font-display leading-snug">
              Étudiant en sécurité informatique avec une culture poussée du développement applicatif et des réseaux.
            </h3>
            
            <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              Je me prépare méthodiquement aux métiers d'<strong className="text-cyan-400 font-semibold">ingénieur sécurité des systèmes d'information</strong> et d'<strong className="text-cyan-400 font-semibold">analyste SOC</strong>. Ma démarche privilégie la compréhension intime des protocoles (TCP/IP, ICMP, DNS), l'analyse des incidents, la cryptographie appliquée et la modélisation rigoureuse des menaces.
            </p>

            <p className="text-slate-300 leading-relaxed font-light text-base">
              En parallèle de ce tronc cybersécurité, j'ai développé une solide compétence full-stack (<strong className="text-teal-300 font-medium">Next.js 15, Django, PostgreSQL, Prisma, Python</strong>). Cette double casquette me confère une capacité rare : comprendre les failles de sécurité tant au niveau bas réseau qu'au cœur de la logique logicielle et des architectures cloud.
            </p>

            {/* Philosophy quote */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-cyber-900 border-l-4 border-cyan-400 border-y border-r border-slate-800 shadow-xl">
              <p className="text-slate-200 italic font-light text-sm sm:text-base">
                « J'avance étape par étape : apprendre les fondamentaux, pratiquer sur banc d'essai, comprendre mes limites et forger une expertise solide et vérifiable. »
              </p>
              <div className="mt-2 text-xs font-mono text-cyan-400 font-semibold">
                — GANSE Kpèhoué Gille-Christ
              </div>
            </div>

            {/* Dual CV buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenDoc({
                  id: 'cv-securite',
                  title: 'CV — Sécurité Informatique',
                  subtitle: 'IFRI / UAC · 3 pages',
                  pages: 3,
                  previewPrefix: 'cv-securite',
                  fileUrl: './CV_GANSE_Kpehoue_Gille-Christ.pdf'
                })}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Voir CV Sécurité (3 pages)</span>
              </button>

              <button
                onClick={() => onOpenDoc({
                  id: 'cv-developpement',
                  title: 'CV — Développeur Full-Stack',
                  subtitle: 'Next.js, Django, Prisma · 1 page',
                  pages: 1,
                  previewPrefix: 'cv-developpement',
                  fileUrl: './CV_Ganse_Kpehoue_Gille-Christ_Developpeur.pdf'
                })}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>Voir CV Développeur (1 page)</span>
              </button>
            </div>

          </div>

          {/* Right: Key Pillars Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card border border-cyan-500/15 hover:border-cyan-500/40 transition group"
              >
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 w-fit mb-3 group-hover:scale-110 transition">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5 font-display group-hover:text-cyan-300 transition">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
