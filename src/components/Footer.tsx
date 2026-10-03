import React from 'react';
import { Zap, Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/electricalData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Business logo, name, short description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded bg-amber-400 text-slate-950 font-black shadow-md">
                <Zap className="w-5 h-5 fill-current" />
              </span>
              <span className="text-lg font-black tracking-tight text-white uppercase">
                {COMPANY_INFO.name}
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Professional electrical installations, preventive maintenance, wiring, upgrades and 24/7 emergency repairs for homes, commercial properties, and heavy industrial facilities.
            </p>

            <div className="flex items-center gap-2 text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_INFO.licenseNumber}</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-[11px] font-mono uppercase text-slate-500 mb-2">Connect With Us</div>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="Google Business Profile"
                >
                  <span className="font-bold text-xs">G</span>
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="LinkedIn Company Page"
                >
                  <span className="font-bold text-xs">in</span>
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-slate-700 transition-colors"
                  aria-label="Facebook Page"
                >
                  <span className="font-bold text-xs">fb</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                  aria-label="WhatsApp Direct Support"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Electrical Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#estimator" className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">
                  Free Quote Calculator →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details & WhatsApp */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Contact & Dispatch
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-amber-400 font-semibold">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                    <span className="text-[10px] text-emerald-400 font-mono">(Primary)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={`tel:${COMPANY_INFO.secondaryPhone}`} className="text-white hover:text-amber-400 font-semibold">
                      {COMPANY_INFO.secondaryPhoneDisplay}
                    </a>
                    <span className="text-[10px] text-slate-500 font-mono">(Alt)</span>
                  </div>
                  <span className="text-[11px] text-slate-500 block pt-0.5">24/7 Rapid Emergency Response</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="pt-1">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors font-medium text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp: Direct Supervisor</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Business Hours */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Business Hours
            </h4>
            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="text-white font-medium">Standard Hours:</p>
              <p>Mon – Fri: 7:00 AM – 6:00 PM</p>
              <p>Saturday: 8:00 AM – 2:00 PM</p>
              <p className="pt-2 text-amber-400 font-bold">
                Emergency Dispatch:
              </p>
              <p className="text-slate-300">24 Hours / 7 Days On-Call</p>
            </div>
          </div>

        </div>

        {/* Local SEO & Natural Keyword Footprint */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-slate-400">Target Services:</span>
            <span>electrician near me</span>
            <span aria-hidden="true">·</span>
            <span>electrical installation</span>
            <span aria-hidden="true">·</span>
            <span>electrical repairs</span>
            <span aria-hidden="true">·</span>
            <span>electrical maintenance</span>
            <span aria-hidden="true">·</span>
            <span>electrical wiring</span>
            <span aria-hidden="true">·</span>
            <span>commercial electrician</span>
            <span aria-hidden="true">·</span>
            <span>residential electrician</span>
            <span aria-hidden="true">·</span>
            <span>panel upgrades</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-slate-400">Service Coverage Areas:</span>
            {COMPANY_INFO.serviceAreas.map((area, i) => (
              <React.Fragment key={area}>
                {i > 0 && <span aria-hidden="true">·</span>}
                <span>{area}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved. Licensed & Insured Master Electrical Contractors.
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-300 transition-colors">Safety Standards</a>
            <span>·</span>
            <a href="#services" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
