import React from 'react';
import { ShieldCheck, FileCode, Flame, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function StatsBar() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    FileCode: FileCode,
    Flame: Flame,
    Building2: Building2
  };

  return (
    <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioData.stats.map((stat, idx) => {
          const Icon = iconMap[stat.icon] || ShieldCheck;
          return (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/40 group"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-cyan-400 transition">
                  {stat.value}
                </div>
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
