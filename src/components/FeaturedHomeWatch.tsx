import React from 'react';
import { ShieldCheck, Check, Clock, FileText, Wrench, Camera, MapPin, ArrowRight } from 'lucide-react';

interface FeaturedHomeWatchProps {
  onOpenQuote: (service?: string) => void;
  onOpenChecklist: () => void;
}

export const FeaturedHomeWatch: React.FC<FeaturedHomeWatchProps> = ({ onOpenQuote, onOpenChecklist }) => {
  const highlights = [
    { icon: Clock, title: '30–45 Minute Walkthroughs', desc: 'Thorough, unhurried inspection of your interior and exterior.' },
    { icon: Check, title: '30–40 Point Inspections', desc: 'Systematic check of HVAC, plumbing, electric, pool, and perimeter.' },
    { icon: Camera, title: 'High-Resolution Photos Included', desc: 'Visual proof of temperature, humidity, water valves, and property status.' },
    { icon: MapPin, title: 'GPS-Verified Timestamps', desc: 'Uncompromised proof of inspector presence on your property.' },
    { icon: FileText, title: 'Digital Report After Every Visit', desc: 'Detailed PDF and email summary sent immediately to your phone.' },
    { icon: Wrench, title: 'In-House Handyman for Minor Repairs', desc: 'Quick resolution of small items before they become major expenses.' },
  ];

  return (
    <section id="home-watch" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                alt="Safe Haven Home Watch inspection walk-through"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              
              {/* Floating verified badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-charcoal/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold text-navy-deep flex items-center justify-center flex-shrink-0 shadow-md">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-navy-deep text-sm sm:text-base">
                      QRIDit Verified Reports
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Live GPS
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Every visit includes time-stamped checklist verification and photo documentation.
                  </p>
                </div>
              </div>
            </div>

            {/* Subtle background decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy/15 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/10 text-navy font-bold text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-dark" />
              <span>Core Specialization</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep tracking-tight mb-5 leading-tight">
              Your Home Doesn't Stop Needing Attention When You Leave.
            </h2>

            <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed mb-8">
              Southwest Florida’s heat, humidity, afternoon storm surges, and plumbing wear can compromise a vacant house in as little as 48 hours. Safe Haven provides scheduled, meticulous walkthroughs and instantaneous digital reporting so you always know your sanctuary is safe.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-charcoal/5 shadow-sm hover:border-gold/40 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-navy-soft text-navy flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-navy" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-navy-deep leading-snug">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-subtle pl-9">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5">
              <button
                onClick={onOpenChecklist}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy hover:bg-navy-deep text-white font-bold text-sm shadow-md transition-all inline-flex items-center justify-center gap-2 group"
              >
                <span>View Home Watch Checklist</span>
                <ArrowRight className="w-4 h-4 text-gold transform group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenQuote('Home Watch')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gold hover:bg-gold-hover text-navy-deep font-bold text-sm shadow-md transition-all text-center"
              >
                Get a Quote
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
