import React from 'react';
import { Phone, MessageSquare, ClipboardCheck } from 'lucide-react';

interface StickyMobileBarProps {
  onOpenQuote: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenQuote }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy-deep/95 backdrop-blur-md border-t border-gold/30 px-3 py-2.5 shadow-2xl safe-area-inset-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href="tel:+19419790675"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-navy/90 hover:bg-navy text-white text-[11px] font-semibold border border-white/10 active:scale-95 transition-all"
          aria-label="Call Safe Haven at 941-979-0675"
        >
          <Phone className="w-4 h-4 text-gold mb-1" />
          <span>CALL</span>
        </a>

        {/* Text button */}
        <a
          href="sms:+19419790675"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-navy/90 hover:bg-navy text-white text-[11px] font-semibold border border-white/10 active:scale-95 transition-all"
          aria-label="Text Safe Haven at 941-979-0675"
        >
          <MessageSquare className="w-4 h-4 text-gold mb-1" />
          <span>TEXT</span>
        </a>

        {/* Quote button */}
        <button
          onClick={onOpenQuote}
          type="button"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-gold-light via-gold to-gold text-navy-deep text-[11px] font-bold shadow-md active:scale-95 transition-all"
          aria-label="Request a Free Quote"
        >
          <ClipboardCheck className="w-4 h-4 text-navy-deep mb-1" />
          <span>GET QUOTE</span>
        </button>
      </div>
    </div>
  );
};
