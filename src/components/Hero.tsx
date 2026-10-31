import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Thermometer, Droplets, Camera } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative overflow-hidden bg-[#0A1929] text-white pt-8 pb-16 sm:py-20 lg:py-28">
      {/* Soft Ambient Coastal Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-gold/10 via-navy-light/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-navy-card/30 via-navy/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#D7B875_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Airy, Elegant & Confident (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* County Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-gold/30 text-gold-light text-xs font-semibold tracking-wider uppercase mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Sarasota & Charlotte County</span>
            </div>

            {/* Main H1 - Generous line-height & breathing room */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.18] mb-6 sm:mb-8">
              Your Home.{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark block sm:inline">
                Watched, Protected
              </span>{' '}
              <span className="block mt-1 sm:mt-0">& Ready When You Return.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-cream/80 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10">
              Professional home watch, property management, cleaning, concierge and storm preparation for Southwest Florida homeowners.
            </p>

            {/* Single Clean Primary Action (No button overload!) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-navy-deep" />
              </button>

              <span className="text-xs text-cream/60 hidden sm:inline">
                or call directly at <a href="tel:+19419790675" className="text-gold hover:underline font-semibold">(941) 979-0675</a>
              </span>
            </div>

            {/* Minimalist Trust Badges with good whitespace */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-cream/70 pt-2">
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

          {/* Right Column: Coastal Florida Photography Frame (Col 5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gold/30 max-w-md mx-auto lg:max-w-none group">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
                alt="Sunlit modern luxury coastal estate in Sarasota Florida"
                className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/20" />

              {/* Floating Live Verification Badge (Top) */}
              <div className="absolute top-3.5 left-3.5 right-3.5 sm:top-4 sm:left-4 sm:right-4 bg-navy-deep/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-3.5 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">
                      Live Inspection Verified
                    </span>
                  </div>
                  <span className="text-[9px] text-gold font-mono bg-gold/15 px-2 py-0.5 rounded-full">
                    GPS Geofenced
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-white/5 rounded-lg p-1.5 flex items-center gap-2">
                    <Thermometer className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <div>
                      <span className="text-[9px] text-cream/60 block">AC Status</span>
                      <span className="font-bold text-white text-[11px]">72°F Normal</span>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-1.5 flex items-center gap-2">
                    <Droplets className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <span className="text-[9px] text-cream/60 block">Humidity</span>
                      <span className="font-bold text-white text-[11px]">49% (Safe)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Subtle Status Pill */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-2xl p-3 text-navy-deep shadow-2xl border border-charcoal/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-navy text-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-navy-deep block leading-tight">
                      Visit Report Delivered
                    </span>
                    <span className="text-[10px] text-charcoal-muted">
                      14 photos • Plumbing & Breakers Verified
                    </span>
                  </div>
                </div>

                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-1 rounded-md">
                  All Clear
                </span>
              </div>
            </div>

            {/* Decorative Gold Glow Accent */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold/15 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
