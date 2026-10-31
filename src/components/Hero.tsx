import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-navy-deep text-white">
      {/* Background Image with Controlled Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury waterfront home in Southwest Florida"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          loading="eager"
        />
        {/* Layered high-end gradients */}
        <div className="absolute inset-0 bg-navy-deep/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold-light text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>Sarasota & Charlotte County</span>
        </div>

        {/* Main H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15] sm:leading-[1.18] mb-5">
          Your Home. Watched, Protected & Ready When You Return.
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-cream/90 max-w-2xl font-normal leading-relaxed mb-8">
          Professional home watch, property management, cleaning, concierge and storm preparation for Southwest Florida homeowners.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-cream/95 mb-8">
          <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Family Owned & Operated</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Licensed, Insured & Bonded</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
            <Award className="w-4 h-4 text-gold flex-shrink-0" />
            <span>50+ Years of Local Experience</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Get a Free Quote
          </button>

          <a
            href="tel:+19419790675"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-navy-card/80 hover:bg-navy-card border border-white/15 transition-all duration-300 inline-flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call (941) 979-0675</span>
          </a>
        </div>

        {/* Explore Link */}
        <div className="mt-8">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold-light hover:text-white transition-colors group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
