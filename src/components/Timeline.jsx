import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline() {
  const { timeline } = portfolioData;

  const experiences = timeline.filter(t => t.type === 'experience');
  const education = timeline.filter(t => t.type === 'education' || t.type === 'certification');

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>TRAJECTOIRE & FORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Expérience & Parcours Académique
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Une progression continue combinant immersion en entreprise et rigueur universitaire.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Professional Experiences */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-teal-500/15 border border-teal-500/30 text-teal-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Expériences en Entreprise
              </h3>
            </div>

            <div className="relative border-l-2 border-cyan-500/30 pl-6 sm:pl-8 space-y-8 ml-3">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Indicator Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition"></div>

                  <div className="glass-card p-5 sm:p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/15 text-cyan-300 text-[11px] font-mono font-semibold">
                      {exp.period}
                    </span>

                    <h4 className="text-lg font-bold text-white font-display mt-2 group-hover:text-cyan-300 transition">
                      {exp.title}
                    </h4>

                    <div className="text-xs text-slate-300 font-semibold mt-0.5">
                      {exp.organization}
                    </div>

                    {exp.mentor && (
                      <div className="text-[11px] text-teal-400 font-mono mt-1">
                        Encadrement : {exp.mentor}
                      </div>
                    )}

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-300 font-light">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-cyan-400 mt-0.5">▪</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Academic & Certifications */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-white font-display">
                Formation & Études
              </h3>
            </div>

            <div className="relative border-l-2 border-teal-500/30 pl-6 sm:pl-8 space-y-8 ml-3">
              {education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Indicator Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:scale-125 group-hover:bg-teal-400 transition"></div>

                  <div className="glass-card p-5 sm:p-6 rounded-2xl border border-teal-500/20 hover:border-teal-500/40 transition">
                    <span className="px-2.5 py-1 rounded-md bg-teal-500/15 text-teal-300 text-[11px] font-mono font-semibold">
                      {edu.period}
                    </span>

                    <h4 className="text-lg font-bold text-white font-display mt-2 group-hover:text-teal-300 transition">
                      {edu.title}
                    </h4>

                    <div className="text-xs text-slate-300 font-semibold mt-0.5">
                      {edu.organization}
                    </div>

                    {edu.mentor && (
                      <div className="text-[11px] text-cyan-400 font-mono mt-1">
                        {edu.mentor}
                      </div>
                    )}

                    <ul className="mt-3 space-y-1.5 text-xs text-slate-300 font-light">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-teal-400 mt-0.5">▪</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
