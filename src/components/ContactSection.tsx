import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/electricalData';
import { ContactFormState } from '../types';

interface ContactSectionProps {
  preFilledService?: string;
  preFilledNotes?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preFilledService, preFilledNotes }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    phone: '',
    email: '',
    serviceRequired: 'Electrical Installations',
    description: '',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<{ id: string; timestamp: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync external prefilled data if provided (e.g. from service cards or estimator)
  useEffect(() => {
    if (preFilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceRequired: preFilledService,
        description: preFilledNotes ? preFilledNotes : prev.description
      }));
    }
  }, [preFilledService, preFilledNotes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.description.trim()) {
      setErrorMessage('Please complete all required fields so our master electrician can assist you promptly.');
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic async dispatch routing
    setTimeout(() => {
      const ticketId = `JE-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
      setSubmittedTicket({
        id: ticketId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setIsSubmitting(false);
    }, 700);
  };

  const handleResetForm = () => {
    setSubmittedTicket(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceRequired: 'Electrical Installations',
      description: '',
      preferredDate: '',
      preferredTime: 'Morning (8:00 AM - 12:00 PM)',
      address: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Licensed Electrical Contractor Dispatch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Our Certified Electricians
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Looking for a licensed <strong className="text-white font-semibold">electrician near me</strong>? Whether you require planned <strong className="text-white font-semibold">electrical installation</strong>, urgent <strong className="text-white font-semibold">electrical repairs</strong>, routine <strong className="text-white font-semibold">electrical maintenance</strong>, or full <strong className="text-white font-semibold">electrical wiring</strong> for residential or commercial properties, our master technicians respond immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & WhatsApp Button */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Callout Card */}
            <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30 rounded-xl p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Instant WhatsApp Chat</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Send photos of your electrical panel, tripped breaker, or circuit schematic directly to our on-duty supervisor for rapid evaluation.
                  </p>
                  
                  {/* WhatsApp button allowing direct contact */}
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp Chat Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Structured Contact Details Cards */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5">
              
              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono uppercase text-slate-400">Phone Numbers</div>
                  <div className="flex flex-col gap-1">
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-2"
                    >
                      <span>{COMPANY_INFO.phoneDisplay}</span>
                      <span className="text-[11px] font-normal text-emerald-400 font-mono">(Primary / WhatsApp)</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.secondaryPhone}`}
                      className="text-base font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-2"
                    >
                      <span>{COMPANY_INFO.secondaryPhoneDisplay}</span>
                      <span className="text-[11px] font-normal text-slate-400 font-mono">(Direct Line)</span>
                    </a>
                  </div>
                  <span className="text-xs text-slate-400 block pt-0.5">Available for urgent calls & service scheduling</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Email Inquiries</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-white hover:text-amber-400 transition-colors block"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <span className="text-xs text-slate-400">Average response time: &lt; 30 minutes</span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Physical Address</div>
                  <p className="text-sm text-slate-200">
                    {COMPANY_INFO.address}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">Central Warehouse & Master Tool Facility</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono uppercase text-slate-400">Business Hours</div>
                  <p className="text-xs text-slate-200">{COMPANY_INFO.hours.weekdays}</p>
                  <p className="text-xs text-slate-200">{COMPANY_INFO.hours.saturday}</p>
                  <p className="text-xs text-amber-400 font-semibold mt-1">
                    ⚡ {COMPANY_INFO.hours.emergency}
                  </p>
                </div>
              </div>

            </div>

            {/* Local Coverage note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Licensed residential electrician and commercial contractor serving Metro City and all surrounding municipal zones.
              </span>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl relative">
              
              {submittedTicket ? (
                /* Success Confirmation State */
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Service Request Received!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your service dispatch request has been logged into our queue.
                  </p>
                  
                  <div className="max-w-xs mx-auto p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-1.5 font-mono text-left">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Ticket ID:</span>
                      <span className="text-amber-400 font-bold">{submittedTicket.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="text-slate-200">{formData.serviceRequired}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Logged At:</span>
                      <span className="text-slate-300">{submittedTicket.timestamp}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    Our on-call supervisor will call <strong className="text-white">{formData.phone}</strong> shortly to confirm technician arrival.
                  </p>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href={COMPANY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-colors"
                    >
                      Track on WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form Asking for: Name, Phone, Email, Service required, Brief description, Preferred date/time */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="text-xl font-bold text-white">Book an Electrician / Request Free Quote</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete this form for immediate service scheduling or guaranteed project pricing.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Full Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Robert Mitchell"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (555) 328-7422"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rmitchell@domain.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                      />
                    </div>

                    {/* Service Required */}
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Service Required <span className="text-amber-400">*</span>
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Emergency 24/7 Troubleshooting">Emergency 24/7 Troubleshooting</option>
                        <option value="General Electrical Inspection & Audit">General Electrical Inspection & Audit</option>
                      </select>
                    </div>
                  </div>

                  {/* Brief description of the problem */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Brief Description of the Problem / Scope <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Please describe symptoms, number of circuits involved, equipment details, or installation requirements..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-amber-400 placeholder:text-slate-600"
                    />
                  </div>

                  {/* Preferred date/time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                        Preferred Time Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        <option value="Urgent 24/7 ASAP">Urgent 24/7 Dispatch (Within 1 hour)</option>
                        <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                        <option value="Flexible / Contact to Arrange">Flexible / Contact to Arrange</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Dispatching Request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Service Request / Free Quote</span>
                      </>
                    )}
                  </button>

                  <div className="text-center text-[11px] text-slate-500">
                    Strict privacy protected. We never sell your personal information or contact details.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
