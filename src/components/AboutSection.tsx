import React from 'react';
import { COMPANY_INFO } from '../data/electricalData';
import { ShieldCheck, HardHat, CheckCircle2, Award, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Company Background & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
              About {COMPANY_INFO.name}
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Dependable Electrical Infrastructure Built for Longevity & Safety
            </h2>

            {/* Prompt Mandated Mission Statement Quote Box */}
            <div className="border-l-4 border-amber-400 pl-4 py-2 bg-slate-900/60 rounded-r-lg">
              <div className="text-xs font-mono uppercase text-slate-400 mb-1">Company Mission</div>
              <p className="text-base sm:text-lg font-medium text-slate-200 italic">
                “{COMPANY_INFO.mission}”
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {COMPANY_INFO.name} provides dependable, comprehensive electrical services with an uncompromising focus on safety, quality workmanship, customer satisfaction, and long-term reliability. From complex industrial three-phase distribution systems to modern residential wiring and rapid fault repairs, our licensed master electricians handle every stage with technical precision.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Founded on the belief that electrical systems should never be a source of uncertainty, our teams deploy calibrated testing instruments, thermal imaging cameras, and premium copper wiring so that every connection performs flawlessly under peak load.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Uncompromising Safety</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Strict adherence to NFPA 70E, OSHA-30, and zero-accident protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HardHat className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Master Technicians</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Continuous technical training and certified master journeymen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Quality Materials Only</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Commercial-grade copper wiring, Eaton & Square D panels, and UL-rated gear.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Guaranteed Transparency</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Upfront line-item quotes with clear scopes before a wrench is turned.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Facility & Certification Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">Licensed Electrical Contractor</h3>
                  <p className="text-xs text-slate-400 font-mono">{COMPANY_INFO.licenseNumber}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">General Liability Insurance:</span>
                  <span className="font-semibold text-white">$5,000,000 Aggregate</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Workers' Compensation:</span>
                  <span className="font-semibold text-white">100% Fully Covered</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Regional Dispatch Center:</span>
                  <span className="font-semibold text-white">Metro City Operational Base</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Service Coverage:</span>
                  <span className="font-semibold text-white">Residential, Commercial & Industrial</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Emergency Dispatch:</span>
                  <span className="font-semibold text-amber-400">24 Hours / 7 Days / 365 Days</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-200">Our Craftsmanship Guarantee:</p>
                <p>
                  Every wire pulled, panel upgraded, and fixture installed is backed by our comprehensive warranty and post-installation safety inspection.
                </p>
              </div>

              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-colors"
              >
                Connect With Our Engineering Team
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
