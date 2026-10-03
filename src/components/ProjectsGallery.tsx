import React, { useState } from 'react';
import { PROJECTS } from '../data/electricalData';
import { ShieldCheck, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showBeforeAfter, setShowBeforeAfter] = useState<boolean>(true);
  const [beforeAfterMode, setBeforeAfterMode] = useState<'after' | 'before'>('after');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'distribution', label: 'Distribution Boards' },
    { id: 'lighting', label: 'Lighting Installations' },
    { id: 'commercial', label: 'Commercial & Industrial' },
    { id: 'wiring', label: 'Electrical Wiring' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-800">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Demonstrated Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Electrical Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
              Inspect our recent electrical wiring, distribution board overhauls, high-bay commercial lighting, and critical industrial motor systems.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-slate-950 border border-slate-800 rounded-lg overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlight: Interactive Before & After Project Spotlight */}
        <div className="mb-14 bg-slate-950 border border-slate-800 rounded-2xl p-6 lg:p-8 overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20 mb-2">
                <span>BEFORE & AFTER UPGRADE CASE STUDY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Obsolete 100A Split-Bus Fuse Box to Modern 200A Smart Breaker Center
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                Commercial facility suffered recurring overloads and uninsurable fuse degradation. Our team executed a full live cutover with integrated Class 1 Whole-Building Surge Protection.
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-lg border border-slate-800 shrink-0">
              <button
                type="button"
                onClick={() => setBeforeAfterMode('before')}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${
                  beforeAfterMode === 'before'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Before Upgrade
              </button>
              <button
                type="button"
                onClick={() => setBeforeAfterMode('after')}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-colors ${
                  beforeAfterMode === 'after'
                    ? 'bg-amber-400 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Completed Result (After)
              </button>
            </div>
          </div>

          {/* Interactive Visual Window */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 h-[320px] sm:h-[400px]">
            {beforeAfterMode === 'after' ? (
              <div className="relative w-full h-full">
                <img
                  src="/src/assets/images/project_distribution_board_1791059316722.jpg"
                  alt="Modern clean electrical distribution board with tidy cables and surge protection"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded text-xs font-mono font-semibold">
                  STATUS: 100% CODE COMPLIANT & CERTIFIED
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-200 bg-slate-950/80 p-4 rounded-lg backdrop-blur-md border border-slate-800">
                  <div>
                    <span className="font-bold text-amber-400 block">Upgraded Architecture:</span>
                    <span>200A 42-Circuit Smart Panel with AFCI/GFCI breakers and whole-facility surge protection</span>
                  </div>
                  <div className="text-right font-mono text-slate-400">
                    Duration: <span className="text-white font-semibold">8.5 Hours Total Cutover</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-8 bg-slate-950 text-center">
                <div className="max-w-md space-y-4">
                  <div className="inline-block p-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                    <ShieldCheck className="w-8 h-8 text-red-400" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Pre-Existing Condition: High Fire Hazard</h4>
                  <p className="text-xs text-slate-400">
                    1968 100A double-tapped split-bus panel with burnt neutral lugs, lack of grounded conduits, and severe thermal hotspot readings exceeding 185°F under 70% load.
                  </p>
                  <button
                    type="button"
                    onClick={() => setBeforeAfterMode('after')}
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors"
                  >
                    View Modern Upgraded Solution →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded text-[11px] font-mono font-medium text-amber-400">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm border border-slate-800 px-2.5 py-1 rounded text-[11px] text-slate-300">
                    {project.clientType}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mt-1 mb-3">
                    <span>{project.location}</span>
                    <span aria-hidden="true">·</span>
                    <span>Completed in {project.completionTime}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="font-mono text-amber-400 font-medium">
                  {project.metrics}
                </span>

                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white flex items-center gap-1 font-medium"
                >
                  <span>Request Similar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
