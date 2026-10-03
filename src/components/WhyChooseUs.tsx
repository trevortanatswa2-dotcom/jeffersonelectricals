import React from 'react';
import { WHY_CHOOSE_US } from '../data/electricalData';
import { ShieldCheck, Clock, Award, Hammer, Sparkles, DollarSign, Users } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Hammer className="w-5 h-5 text-amber-400" />;
      case 1: return <Clock className="w-5 h-5 text-amber-400" />;
      case 2: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 3: return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 4: return <Clock className="w-5 h-5 text-amber-400" />;
      case 5: return <DollarSign className="w-5 h-5 text-amber-400" />;
      case 6: return <Users className="w-5 h-5 text-amber-400" />;
      default: return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
            The Jefferson Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Property & Facility Managers Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Electrical infrastructure leaves zero margin for error. We pair licensed technical mastery with transparent operations, rapid emergency triage, and long-term reliability.
          </p>
        </div>

        {/* 7 Highlight Cards with Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className={`bg-slate-950/70 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors ${
                index === 0 ? 'lg:col-span-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                  {getIcon(index)}
                </div>
                <span className="text-xs font-mono text-amber-400 font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                  {item.metric}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Adjacency proof note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              All personnel carry full liability coverage up to $5,000,000, state licensure, and OSHA-30 certification.
            </span>
          </div>
          <a
            href="#contact"
            className="text-amber-400 hover:text-amber-300 font-semibold whitespace-nowrap underline underline-offset-4"
          >
            Verify Credentials with Dispatch →
          </a>
        </div>

      </div>
    </section>
  );
};
