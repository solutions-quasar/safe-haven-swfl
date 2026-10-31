import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Award, Thermometer, Droplets, Camera } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [selectedQuickService, setSelectedQuickService] = useState('Home Watch');
  const quickServices = ['Home Watch', 'Storm Preparation', 'Property Management', 'Concierge'];

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#0A1929] text-white pt-6 pb-12 sm:pb-16 lg:py-16">
      {/* Ambient Coastal Lighting & Subtle Gold Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/15 via-navy-light/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-navy-card/40 via-navy/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D7B875_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clear, uncluttered message (Col 7 on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* County Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold tracking-wider uppercase mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>Sarasota & Charlotte County</span>
            </div>

            {/* Main H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Your Home.{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark block sm:inline">
                Watched, Protected
              </span>{' '}
              <span className="block mt-1 sm:mt-0">& Ready When You Return.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-cream/85 font-normal leading-relaxed max-w-2xl mb-6">
              Professional home watch, property management, cleaning, concierge and storm preparation for Southwest Florida homeowners.
            </p>

            {/* Primary Action Buttons (Super clean & tap-friendly on mobile) */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-6">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-navy-deep" />
              </button>

              <a
                href="tel:+19419790675"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all inline-flex items-center justify-center gap-2.5 active:scale-95"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call (941) 979-0675</span>
              </a>
            </div>

            {/* Desktop Optional Quick Service Pills (Hidden on mobile to eliminate clutter!) */}
            <div className="hidden lg:block w-full max-w-xl bg-white/5 border border-white/10 rounded-xl p-3 mb-6">
              <div className="flex items-center justify-between text-xs text-cream/70 mb-2">
                <span className="font-semibold text-gold-light uppercase tracking-wider text-[11px]">Popular Services:</span>
                <span>Click to customize your quote</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {quickServices.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => {
                      setSelectedQuickService(svc);
                      onOpenQuote(svc);
                    }}
                    className="px-2 py-1.5 rounded-lg text-xs font-medium bg-white/5 hover:bg-gold hover:text-navy-deep text-cream/90 border border-white/5 transition-colors text-center"
                  >
                    {svc}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-4 text-xs text-cream/90 font-medium">
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>Family Owned</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>Licensed & Bonded</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                <Award className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>50+ Years Local</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sunlit Coastal Florida Estate Showcase (Col 5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 group max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
                alt="Sunlit modern luxury coastal estate in Sarasota Florida"
                className="w-full h-[320px] sm:h-[420px] lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/20" />

              {/* Floating Live Verification Badge (Top) */}
              <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 bg-navy-deep/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 shadow-xl">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider">
                      Live Inspection Verified
                    </span>
                  </div>
                  <span className="text-[9px] sm:text-[10px] text-gold font-mono bg-gold/15 px-2 py-0.5 rounded-full">
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

              {/* Floating Report Summary (Bottom) */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 text-navy-deep shadow-2xl border border-charcoal/5 flex items-center justify-between gap-2">
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
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/20 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
