import React, { useState } from 'react';
import { Phone, Zap, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

interface HeaderProps {
  onRequestService: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestService }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Top emergency dispatch announcement bar */}
      <div className="bg-slate-900/90 border-b border-slate-800/80 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">24/7 Rapid Emergency Dispatch Active</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">Average response time: 45 minutes</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{COMPANY_INFO.licenseNumber}</span>
            </div>
            <span>·</span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1-2 Primary Actions) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
          <span className="flex items-center justify-center w-8 h-8 rounded bg-amber-400 text-slate-950 font-black shadow-md">
            <Zap className="w-5 h-5 fill-current" />
          </span>
          <span className="tracking-tight text-lg sm:text-xl font-extrabold uppercase">
            Jefferson Electricals
          </span>
        </a>

        {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Services
          </a>
          <a href="#why-choose-us" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Why Us
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            About
          </a>
          <a href="#projects" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Projects
          </a>
          <a href="#estimator" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Estimator
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1–2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-md transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onRequestService}
            className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-md shadow-sm transition-colors whitespace-nowrap"
          >
            Request Service
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onRequestService}
            className="sm:hidden px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded transition-colors whitespace-nowrap"
          >
            Request
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Services
          </a>
          <a
            href="#why-choose-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Why Choose Us
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            About Us
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Projects & Work
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Free Quote Estimator
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-amber-400"
          >
            Contact
          </a>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-slate-800 text-amber-400 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: {COMPANY_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestService();
              }}
              className="w-full px-4 py-2.5 rounded-md bg-amber-400 text-slate-950 font-bold text-sm"
            >
              Request a Service
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
