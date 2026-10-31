import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Award, Thermometer, Droplets, Camera, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenQuote: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const [selectedQuickService, setSelectedQuickService] = useState('Home Watch');

  const quickServices = ['Home Watch', 'Storm Preparation', 'Property Management', 'Concierge'];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center overflow-hidden bg-[#0A1929] text-white pt-6 pb-16 lg:py-20">
      {/* Ambient Coastal Lighting & Subtle Gold Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-gold/15 via-navy-light/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-navy-card/40 via-navy/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D7B875_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-End Typography & Lead Conversion (Col 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* County Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span className="font-medium text-white/90">Sarasota & Charlotte County</span>
            </div>

            {/* Main H1 with Dual Font Luxury Treatment */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Your Home.{' '}
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark block sm:inline">
                Watched, Protected
              </span>{' '}
              <span className="block mt-1 sm:mt-0">& Ready When You Return.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-cream/85 font-normal leading-relaxed max-w-2xl mb-8">
              Professional home watch, property management, cleaning, concierge and storm preparation for Southwest Florida homeowners who value uncompromised peace of mind.
            </p>

            {/* Quick Interactive Service Selector Card */}
            <div className="w-full max-w-xl bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold block mb-2.5">
                Select Your Care Needs:
              </span>

              {/* Service Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {quickServices.map((svc) => (
                  <button
                    key={svc}
                    type="button"
                    onClick={() => setSelectedQuickService(svc)}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold transition-all text-center leading-tight ${
                      selectedQuickService === svc
                        ? 'bg-gold text-navy-deep font-bold shadow-md ring-1 ring-gold/50'
                        : 'bg-white/5 text-cream/80 hover:bg-white/10 hover:text-white border border-white/5'
                    }`}
                  >
                    {svc}
                  </button>
                ))}
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenQuote(selectedQuickService)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-elevated hover:shadow-gold-glow transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get a Free Quote for {selectedQuickService}</span>
                  <ArrowRight className="w-4 h-4 text-navy-deep group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:+19419790675"
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all inline-flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <Phone className="w-4 h-4 text-gold" />
                  <span>(941) 979-0675</span>
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-cream/90 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Family Owned & Operated</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Licensed, Insured & Bonded</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold flex-shrink-0" />
                <span>50+ Years Local Experience</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sunlit Coastal Florida Estate & Live Verification Overlay (Col 5) */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/40 group">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
                alt="Sunlit modern luxury coastal estate in Sarasota Florida"
                className="w-full h-[430px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
              {/* Subtle elegant gradient frame (keeps image vibrant and sun-drenched!) */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/20" />

              {/* Top Floating Badge: Live Status */}
              <div className="absolute top-4 left-4 right-4 bg-navy-deep/90 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-3.5 shadow-xl animate-fade-in">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Safe Haven Inspection Verified
                    </span>
                  </div>
                  <span className="text-[10px] text-gold font-mono bg-gold/15 px-2 py-0.5 rounded-full">
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

              {/* Bottom Floating Badge: Photo & Report Summary */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 text-navy-deep shadow-2xl border border-charcoal/5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-navy-deep">
                        Visit Report Delivered
                      </span>
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] font-extrabold px-1.5 py-0.5 rounded">
                        All Clear
                      </span>
                    </div>
                    <p className="text-[11px] text-charcoal-muted">
                      14 photos • Plumbing & Breakers Verified
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onOpenQuote('Home Watch')}
                  className="px-3 py-1.5 rounded-lg bg-gold hover:bg-gold-hover text-navy-deep font-bold text-[11px] uppercase tracking-wider flex-shrink-0 shadow-sm transition-colors"
                >
                  View Sample
                </button>
              </div>
            </div>

            {/* Decorative Gold Glow Accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/25 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-36 h-36 bg-navy-light/30 rounded-full blur-2xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
