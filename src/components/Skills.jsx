import React, { useState } from 'react';
import { Cpu, Shield, Globe, Terminal, Server, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('cybersecurity');
  const { skills } = portfolioData;

  const categories = [
    { id: 'cybersecurity', label: 'Cybersécurité & SSI', icon: Shield, count: skills.cybersecurity.length },
    { id: 'networks', label: 'Réseaux & Forensique', icon: Globe, count: skills.networks.length },
    { id: 'fullstack', label: 'Web & Bases de Données', icon: Cpu, count: skills.fullstack.length },
    { id: 'devops', label: 'DevOps, Cloud & CLI', icon: Terminal, count: skills.devops.length },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950 cyber-grid-dense border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARSENAL TECHNIQUE & SPÉCIALITÉS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Matrice des Compétences
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Évaluation transparente et pratique basée sur mes travaux académiques à l'IFRI, mes certifications et mes projets réels.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-2xl text-xs font-semibold font-mono transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 shadow-lg shadow-cyan-500/20 font-bold scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                <span>{cat.label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {skills[activeTab].map((skill, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl glass-card border border-cyan-500/15 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-0.5 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white font-display group-hover:text-cyan-300 transition">
                  {skill.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-[10px] font-mono">
                  {skill.tag}
                </span>
              </div>

              {/* Progress bar container */}
              <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-slate-400">
                <span>Maîtrise pratique</span>
                <span className="text-cyan-400 font-bold">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
