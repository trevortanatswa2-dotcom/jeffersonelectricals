import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

interface QuoteEstimatorProps {
  onPreFillContact: (service: string, notes: string) => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onPreFillContact }) => {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'industrial'>('residential');
  const [serviceCategory, setServiceCategory] = useState<string>('panel-upgrade');
  const [projectSize, setProjectSize] = useState<number>(2000);
  const [urgency, setUrgency] = useState<'standard' | 'emergency'>('standard');
  const [needInspection, setNeedInspection] = useState<boolean>(true);

  // Calculation logic
  const calculateEstimate = () => {
    let baseRate = 250;
    let multiplier = 1.0;

    if (propertyType === 'commercial') multiplier = 1.6;
    if (propertyType === 'industrial') multiplier = 2.4;

    let serviceBase = 800;
    if (serviceCategory === 'panel-upgrade') serviceBase = propertyType === 'residential' ? 1800 : 4200;
    if (serviceCategory === 'rewiring') serviceBase = Math.round((projectSize * 2.2) * multiplier);
    if (serviceCategory === 'lighting-retrofit') serviceBase = Math.round((projectSize * 0.85) * multiplier);
    if (serviceCategory === 'troubleshooting') serviceBase = propertyType === 'residential' ? 320 : 650;
    if (serviceCategory === 'ev-charger') serviceBase = 1150;

    let subtotal = serviceBase;
    if (needInspection) subtotal += propertyType === 'residential' ? 180 : 350;
    if (urgency === 'emergency') subtotal += 250;

    const minEstimate = Math.round(subtotal * 0.9);
    const maxEstimate = Math.round(subtotal * 1.15);

    return { minEstimate, maxEstimate };
  };

  const { minEstimate, maxEstimate } = calculateEstimate();

  const handleApplyToContact = () => {
    let serviceLabel = 'Electrical Upgrades';
    if (serviceCategory === 'panel-upgrade') serviceLabel = 'Electrical Upgrades (Panel Upgrade)';
    if (serviceCategory === 'rewiring') serviceLabel = 'Electrical Installations (Rewiring)';
    if (serviceCategory === 'lighting-retrofit') serviceLabel = 'Electrical Installations (Lighting)';
    if (serviceCategory === 'troubleshooting') serviceLabel = 'Electrical Repairs (Troubleshooting)';
    if (serviceCategory === 'ev-charger') serviceLabel = 'Electrical Installations (EV Charger)';

    const notes = `Online Estimator Calculation: Property: ${propertyType.toUpperCase()} | Scope: ${serviceLabel} | Approx Size: ${projectSize} sq ft | Urgency: ${urgency} | Estimated Range: $${minEstimate} - $${maxEstimate}`;
    onPreFillContact(serviceLabel, notes);

    // Scroll to contact form
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded border border-amber-400/20 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>TRANSPARENT COST ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Calculate Your Electrical Project Estimate
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Get an instant, transparent ballpark cost range based on property type, engineering scope, and facility dimensions.
          </p>
        </div>

        {/* Interactive Estimator Tool Box */}
        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Property Type */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  1. Select Facility / Property Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['residential', 'commercial', 'industrial'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-2.5 px-3 rounded-lg text-xs font-bold capitalize transition-all border ${
                        propertyType === type
                          ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-sm'
                          : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Service Scope */}
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  2. Required Electrical Scope
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                >
                  <option value="panel-upgrade">Service Panel Upgrade (100A to 200A/400A)</option>
                  <option value="rewiring">Full / Partial Wiring & Rewiring</option>
                  <option value="lighting-retrofit">Commercial / Residential Lighting Retrofit</option>
                  <option value="troubleshooting">Fault Finding, Repairs & Diagnostics</option>
                  <option value="ev-charger">EV Charger or Dedicated High-Load Circuit</option>
                </select>
              </div>

              {/* Step 3: Facility Size */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  <span>3. Approximate Square Footage</span>
                  <span className="text-amber-400 tabular-nums">{projectSize.toLocaleString()} sq ft</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="20000"
                  step="250"
                  value={projectSize}
                  onChange={(e) => setProjectSize(Number(e.target.value))}
                  className="w-full accent-amber-400 bg-slate-950 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>500 sq ft</span>
                  <span>10,000 sq ft</span>
                  <span>20,000+ sq ft</span>
                </div>
              </div>

              {/* Step 4: Dispatch Urgency */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setUrgency('standard')}
                  className={`p-3 rounded-lg border text-left text-xs transition-colors ${
                    urgency === 'standard'
                      ? 'bg-amber-400/10 border-amber-400/40 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">Standard Scheduling</div>
                  <div className="text-[11px]">Next 2–5 business days</div>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgency('emergency')}
                  className={`p-3 rounded-lg border text-left text-xs transition-colors ${
                    urgency === 'emergency'
                      ? 'bg-amber-400/10 border-amber-400/40 text-amber-300'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-300'
                  }`}
                >
                  <div className="font-bold text-white mb-0.5">Rapid / 24/7 Dispatch</div>
                  <div className="text-[11px]">Same-day emergency response</div>
                </button>
              </div>

              {/* Toggle: Include official permit & inspection */}
              <label className="flex items-center gap-3 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={needInspection}
                  onChange={(e) => setNeedInspection(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-400 accent-amber-400 bg-slate-950 border-slate-700"
                />
                <span className="text-xs text-slate-300">
                  Include municipal permit pulling & formal safety code compliance report
                </span>
              </label>

            </div>

            {/* Calculated Output Card */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                  Estimated Investment Range
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                  <span className="text-amber-400">${minEstimate.toLocaleString()}</span>
                  <span className="text-slate-500 text-2xl mx-1.5">–</span>
                  <span>${maxEstimate.toLocaleString()}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Includes certified master technician labor, materials & testing</span>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Class of Work:</span>
                    <span className="font-semibold capitalize text-white">{propertyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Workmanship Warranty:</span>
                    <span className="font-semibold text-white">5 Years Comprehensive</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Permit & Code Signoff:</span>
                    <span className="font-semibold text-white">{needInspection ? 'Included' : 'Customer Standard'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Upfront Price Lock:</span>
                    <span className="font-semibold text-emerald-400">100% Guaranteed</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={handleApplyToContact}
                  className="w-full py-3.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 transition-colors"
                >
                  <span>Lock In Quote & Request Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center text-[11px] text-slate-500 mt-2">
                  Final quote verified on site with zero hidden fees.
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
