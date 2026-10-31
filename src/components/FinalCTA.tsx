import React from 'react';
import { Phone, MessageSquare, ClipboardCheck, ArrowRight, ShieldCheck } from 'lucide-react';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-28 bg-navy-deep text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-light/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold-light font-bold text-xs uppercase tracking-wider mb-5 border border-gold/30">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>Rest Easy All Year Long</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
          Leave Your Home With Confidence.
        </h2>

        {/* Copy */}
        <p className="text-base sm:text-lg md:text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us about your property and we'll help you choose the right level of care.
        </p>

        {/* Primary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <ClipboardCheck className="w-5 h-5 text-navy-deep" />
            <span>GET A FREE QUOTE</span>
          </button>

          <a
            href="tel:+19419790675"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-navy-card hover:bg-navy-card/80 border border-white/20 transition-all duration-300 inline-flex items-center justify-center gap-2.5"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>CALL (941) 979-0675</span>
          </a>
        </div>

        {/* Text link */}
        <div className="mt-4">
          <a
            href="sms:+19419790675"
            className="inline-flex items-center gap-2 text-sm text-gold-light hover:text-white transition-colors underline underline-offset-4"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Prefer texting? Send us a message.</span>
          </a>
        </div>

      </div>
    </section>
  );
};
