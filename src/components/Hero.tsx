import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, HeartHandshake, Phone } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden bg-navy-deep text-white py-16 sm:py-24">
      {/* Reassuring Sunlit Coastal Florida Property Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Peaceful sunlit luxury home in Southwest Florida"
          className="w-full h-full object-cover object-center scale-100"
          loading="eager"
        />
        {/* Controlled Multi-Layered Luxury Gradient Overlays */}
        {/* Keeps natural warmth and tropical palm trees visible while ensuring 100% text readability */}
        <div className="absolute inset-0 bg-navy-deep/80 sm:bg-navy-deep/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 w-full text-center flex flex-col items-center">
        
        {/* Reassuring Trust Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold tracking-wider uppercase mb-6 sm:mb-8 shadow-lg">
          <HeartHandshake className="w-4 h-4 text-gold flex-shrink-0" />
          <span>Sarasota & Charlotte County • Local Family Owned</span>
        </div>

        {/* Main H1 Headline with Warm Gold Serif Accent */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.15] max-w-4xl mb-6">
          Your Home.{' '}
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark block sm:inline">
            Watched, Protected
          </span>{' '}
          <span className="block mt-1 sm:mt-0">& Ready When You Return.</span>
        </h1>

        {/* Reassuring Supporting Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-cream/90 font-normal leading-relaxed max-w-2xl mb-8 sm:mb-10">
          Professional scheduled home watch, property care and storm preparation. We inspect, protect and care for your Southwest Florida property with the same diligence as our own.
        </p>

        {/* Primary Action Button (Clean, clear, tap-friendly) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          <button
            onClick={() => onOpenQuote()}
            className="w-full sm:w-auto px-9 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-navy-deep" />
          </button>

          <a
            href="tel:+19419790675"
            className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all inline-flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call (941) 979-0675</span>
          </a>
        </div>

        {/* Reassuring Peace-of-Mind Floating Card */}
        <div className="max-w-xl mx-auto bg-navy-deep/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gold/30 shadow-2xl text-left flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-xs sm:text-sm">
                Rest Easy While You're Away
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                100% GPS Verified
              </span>
            </div>
            <p className="text-xs text-cream/75 leading-relaxed mt-1">
              Every visit includes a 30–40 point inspection, timestamped photo evidence, HVAC humidity checks, and an instant report sent straight to your phone.
            </p>
          </div>
        </div>

        {/* Minimalist Trust Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-cream/80 font-medium mt-8">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Family Owned & Operated</span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Licensed, Insured & Bonded</span>
          </div>
          <span className="text-white/30 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-gold flex-shrink-0" />
            <span>50+ Years Local Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
};
