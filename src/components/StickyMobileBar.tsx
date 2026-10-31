import React from 'react';
import { Phone, MessageSquare, ClipboardCheck } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenQuote: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-deep/98 backdrop-blur-lg border-t border-white/10 px-3 py-2 shadow-2xl pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href="tel:+19419790675"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[10px] font-semibold border border-white/10 active:scale-95 transition-all"
          aria-label="Call Safe Haven at 941-979-0675"
        >
          <Phone className="w-3.5 h-3.5 text-gold mb-0.5" />
          <span>Call</span>
        </a>

        {/* Text button */}
        <a
          href="sms:+19419790675"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 hover:bg-white/10 text-white text-[10px] font-semibold border border-white/10 active:scale-95 transition-all"
          aria-label="Text Safe Haven at 941-979-0675"
        >
          <MessageSquare className="w-3.5 h-3.5 text-gold mb-0.5" />
          <span>Text</span>
        </a>

        {/* Quote button */}
        <button
          onClick={onOpenQuote}
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-gold-light via-gold to-gold text-navy-deep text-[10px] font-bold shadow-md active:scale-95 transition-all"
          aria-label="Request a Free Quote"
        >
          <ClipboardCheck className="w-3.5 h-3.5 text-navy-deep mb-0.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </div>
  );
};
