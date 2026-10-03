import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

interface HeroProps {
  onRequestService: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestService, onOpenEstimator }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-16 lg:pt-18 lg:pb-24 bg-slate-950 bg-circuit-lines">
      {/* Subtle radial engineering glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Quiet unboxed trust credential */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1.5 rounded">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>LICENSED MASTER ELECTRICIAN · 24/7 RAPID DISPATCH</span>
            </div>

            {/* Exact Required Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]" style={{ textWrap: 'balance' }}>
              Reliable Electrical Solutions. Professional Service.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Built to Last.
              </span>
            </h1>

            {/* Exact Required Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Professional electrical installation, maintenance and repair services for homes, businesses and industrial facilities.
            </p>

            {/* Three Exact Required Prominent Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Button 1: Request a Service */}
              <button
                type="button"
                onClick={onRequestService}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Request a Service</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Button 2: Call Us */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-6 py-3.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 rounded-md transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Us ({COMPANY_INFO.phoneDisplay})</span>
              </a>

              {/* Button 3: Get a Free Quote */}
              <button
                type="button"
                onClick={onOpenEstimator}
                className="px-6 py-3.5 text-sm font-bold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 rounded-md transition-all whitespace-nowrap"
              >
                Get a Free Quote
              </button>
            </div>

            {/* Editorial trust bullet points */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Upfront Fixed Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero-Accident Safety Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lifetime Craftsmanship Warranty</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Image showing electrician working on electrical installation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/80 bg-slate-900 group">
              <img
                src="/src/assets/images/hero_electrician_install_1791059305145.jpg"
                alt="Master electrician installing modern distribution panel with precision wiring and safety equipment"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Overlay engineering badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">Certified Master Electricians</p>
                    <p className="text-xs text-slate-400">NEC, OSHA & NFPA 70E Code Compliant</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-amber-400 text-xs font-mono font-bold">24/7 ACTIVE</div>
                  <div className="text-slate-400 text-[11px]">Rapid Service Fleet</div>
                </div>
              </div>
            </div>

            {/* Subtle decorative technical callout box */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-xl items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400" />
              <div>
                <p className="text-[11px] font-mono uppercase text-slate-400">Rapid Response Window</p>
                <p className="text-xs font-bold text-white">45-Minute Emergency Avg</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
