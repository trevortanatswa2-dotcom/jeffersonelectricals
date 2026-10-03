import React, { useState } from 'react';
import { SERVICES } from '../data/electricalData';
import { ElectricalService } from '../types';
import { Zap, Wrench, ShieldCheck, Factory, Home, ArrowUpRight, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ElectricalService | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'installations':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'repairs':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'maintenance':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'commercial-industrial':
        return <Factory className="w-5 h-5 text-amber-400" />;
      case 'residential':
        return <Home className="w-5 h-5 text-amber-400" />;
      case 'upgrades':
        return <ArrowUpRight className="w-5 h-5 text-amber-400" />;
      default:
        return <Zap className="w-5 h-5 text-amber-400" />;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => {
        if (activeCategory === 'residential') return s.id === 'residential' || s.id === 'upgrades';
        if (activeCategory === 'commercial') return s.id === 'commercial-industrial' || s.id === 'installations';
        if (activeCategory === 'maintenance') return s.id === 'maintenance' || s.id === 'repairs';
        return true;
      });

  return (
    <section id="services" className="py-20 bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Professional Electrical Services
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-sm sm:text-base">
              Engineered for absolute safety, maximum energy efficiency, and strict regulatory compliance across all scales of installation.
            </p>
          </div>

          {/* Interactive filter segmented controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'all' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services
            </button>
            <button
              onClick={() => setActiveCategory('residential')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'residential' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'commercial' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Commercial & Industrial
            </button>
            <button
              onClick={() => setActiveCategory('maintenance')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeCategory === 'maintenance' ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              Repairs & Maintenance
            </button>
          </div>
        </div>

        {/* 6 Attractive Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-amber-400/50 hover:bg-slate-900/90 transition-all duration-200 group"
            >
              <div>
                {/* Header row with icon and editorial number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Prompt-mandated bullet items */}
                <ul className="mt-5 space-y-2.5 pt-4 border-t border-slate-800/80">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom metadata and action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="text-slate-400">
                  <span className="text-slate-500">Warranty:</span>{' '}
                  <span className="text-slate-300 font-medium">{service.warranty}</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold group/btn"
                >
                  <span>Book Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet technical footnote */}
        <div className="mt-12 text-center text-xs text-slate-400">
          All electrical installations and maintenance strictly adhere to NEC 2026, OSHA 1910 standards, and local municipal inspection codes.
        </div>

      </div>
    </section>
  );
};
