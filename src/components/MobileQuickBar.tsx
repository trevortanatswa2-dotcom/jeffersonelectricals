import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/electricalData';

interface MobileQuickBarProps {
  onRequestService: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onRequestService }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2 flex items-center justify-between gap-2 h-14">
      {/* Direct Call */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-slate-900 border border-slate-700 rounded-md text-amber-400 text-xs font-bold whitespace-nowrap"
      >
        <Phone className="w-3.5 h-3.5" />
        <span>Call</span>
      </a>

      {/* Direct WhatsApp */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-white text-xs font-bold whitespace-nowrap"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-current" />
        <span>WhatsApp</span>
      </a>

      {/* Book / Request */}
      <button
        type="button"
        onClick={onRequestService}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 bg-amber-400 hover:bg-amber-300 rounded-md text-slate-950 text-xs font-black whitespace-nowrap"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book</span>
      </button>
    </div>
  );
};
