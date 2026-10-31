import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Phone, Thermometer, Droplets, Camera } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[680px] bg-[#0A1929] text-white flex flex-col lg:flex-row overflow-hidden border-b border-gold/20">
      
      {/* LEFT HALF (50% on Desktop): Editorial Typography & Conversion */}
      <div className="w-full lg:w-1/2 flex items-center justify-end px-6 sm:px-10 lg:pl-12 lg:pr-14 py-12 lg:py-20 z-10">
        <div className="max-w-xl w-full flex flex-col items-start text-left">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold/40 text-gold-light text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <ShieldCheck className="w-3.5 h-3.5 text-gold" />
            <span>Sarasota & Charlotte County</span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.16] mb-6">
            Your Home.{' '}
            <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark block sm:inline">
              Watched, Protected
            </span>{' '}
            <span className="block mt-1 sm:mt-0">& Ready When You Return.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-sm sm:text-base lg:text-lg text-cream/80 font-normal leading-relaxed mb-8">
            Professional scheduled home watch, property care and hurricane preparation for Southwest Florida homeowners who value uncompromised peace of mind.
          </p>

          {/* Single Clean Primary Action */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-navy-deep" />
            </button>

            <a
              href="tel:+19419790675"
              className="text-xs sm:text-sm text-cream/80 hover:text-white transition-colors inline-flex items-center gap-2 py-2"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>(941) 979-0675</span>
            </a>
          </div>

          {/* Minimalist Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-cream/70 pt-4 border-t border-white/10 w-full">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Family Owned</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Licensed & Bonded</span>
            </div>
            <span className="text-white/20">•</span>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-gold flex-shrink-0" />
              <span>50+ Years Local</span>
            </div>
          </div>

        </div>
      </div>

      {/* RIGHT HALF (50% on Desktop): Edge-to-Edge Sunlit Coastal Florida Estate */}
      <div className="w-full lg:w-1/2 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full flex items-end p-5 sm:p-8 lg:p-12">
        {/* Full-bleed Photo */}
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85"
          alt="Sunlit luxury Florida waterfront villa with pool and palms"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />

        {/* Sophisticated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent lg:bg-gradient-to-r lg:from-navy-deep/60 lg:via-transparent lg:to-transparent" />

        {/* Top-Right Floating Live Status Pill */}
        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-deep/90 backdrop-blur-md border border-white/20 text-xs font-semibold text-white shadow-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Walkthrough Verified</span>
            <span className="text-gold font-mono text-[10px] pl-1">• GPS</span>
          </div>
        </div>

        {/* Bottom Reassurance Card */}
        <div className="relative z-10 w-full max-w-lg bg-navy-deep/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gold/40 shadow-2xl text-left animate-fade-in">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs sm:text-sm text-white">
                Peace of Mind While Away
              </span>
            </div>
            <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              All Systems Clear
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-cream/75 leading-relaxed mb-3">
            Every scheduled visit includes a comprehensive 30–40 point checklist, timestamped photo evidence, HVAC humidity calibration, and instant reports sent straight to your phone.
          </p>

          {/* Micro Status Indicators */}
          <div className="grid grid-cols-2 gap-2 text-[10px] sm:text-[11px] pt-2.5 border-t border-white/10 text-cream/80">
            <div className="flex items-center gap-1.5">
              <Thermometer className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              <span>AC: <strong className="text-white">72°F Normal</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Droplets className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Humidity: <strong className="text-white">49% Safe</strong></span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
