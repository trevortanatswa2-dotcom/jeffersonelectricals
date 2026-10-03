import React, { useState } from 'react';
import { X, Send, CheckCircle2, Zap } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/electricalData';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Electrical Installations'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(defaultService);
  const [notes, setNotes] = useState('');
  const [urgency, setUrgency] = useState('Standard (Next 1-3 Days)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `JE-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedId);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">Service Request Dispatched!</h3>
            <p className="text-xs text-slate-300">
              Reference Ticket: <strong className="text-amber-400 font-mono">{ticketId}</strong>
            </p>
            <p className="text-xs text-slate-400">
              Our dispatch officer has received your priority ticket for <strong>{service}</strong> and will call {phone} immediately.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded bg-amber-400 text-slate-950">
                <Zap className="w-4 h-4 fill-current" />
              </span>
              <h3 className="text-lg font-bold text-white">Direct Service Dispatch</h3>
            </div>
            <p className="text-xs text-slate-400">
              Schedule certified technicians for prompt on-site diagnostics or installations.
            </p>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. David Sterling"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. (555) 019-2834"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Service Category *
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Emergency Fault Diagnostic">Emergency Fault Diagnostic (24/7)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Urgency
              </label>
              <select
                value={urgency}
                onChange={(e) => setUrgency(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Emergency (Immediate Dispatch)">Emergency (Immediate Dispatch &lt; 1hr)</option>
                <option value="Today (Within 4-6 hours)">Today (Within 4-6 hours)</option>
                <option value="Standard (Next 1-3 Days)">Standard (Next 1-3 Days)</option>
                <option value="Flexible Planning">Flexible Planning</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-300 mb-1">
                Brief Scope / Problem Description *
              </label>
              <textarea
                required
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Details of repair, breaker trips, upgrade requirements..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Dispatch Request</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
