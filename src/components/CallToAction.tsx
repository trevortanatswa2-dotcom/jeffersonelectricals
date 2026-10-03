import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

interface CallToActionProps {
  onRequestQuote: () => void;
  onContactUs: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onRequestQuote, onContactUs }) => {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950">
      {/* Subtle industrial background pattern */}
      <div className="absolute inset-0 bg-circuit-lines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono font-black uppercase tracking-wider text-slate-900 bg-slate-950/10 px-2.5 py-1 rounded inline-block">
              24/7 EMERGENCY & SCHEDULED SERVICE
            </div>

            {/* Exact Required Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Need an Electrician?
            </h2>

            {/* Exact Required Supporting Line */}
            <p className="text-base sm:text-lg font-medium text-slate-900 max-w-2xl leading-relaxed">
              From installations and maintenance to repairs and fault finding, our team is ready to help.
            </p>
          </div>

          {/* Exact Required Buttons: Request a Quote | Contact Us */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 shrink-0">
            <button
              type="button"
              onClick={onRequestQuote}
              className="px-6 py-3.5 text-sm font-extrabold text-white bg-slate-950 hover:bg-slate-900 rounded-md shadow-xl transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              type="button"
              onClick={onContactUs}
              className="px-6 py-3.5 text-sm font-extrabold text-slate-950 bg-white/90 hover:bg-white border border-slate-950/20 rounded-md transition-all whitespace-nowrap shadow-sm"
            >
              Contact Us
            </button>

            {/* Direct WhatsApp Quick Chat */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3.5 text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-all flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
