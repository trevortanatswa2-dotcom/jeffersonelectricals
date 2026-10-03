import React from 'react';
import { Award, Zap, ShieldAlert, CheckCircle, Clock } from 'lucide-react';

export const TrustStats: React.FC = () => {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-white font-mono tabular-nums">20+</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Years of Service</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-white font-mono tabular-nums">15,000+</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Completed Projects</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-white font-mono tabular-nums">45 Min</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Avg Emergency Arrival</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl lg:text-3xl font-black text-white font-mono tabular-nums">100%</div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Code Safety Record</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
