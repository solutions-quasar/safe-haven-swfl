import React, { useState } from 'react';
import { locationsData } from '../data/locations';
import { MapPin, CheckCircle, Navigation, ShieldCheck } from 'lucide-react';

interface ServiceAreaSectionProps {
  onOpenQuote: (service?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenQuote }) => {
  const [selectedCounty, setSelectedCounty] = useState<'all' | 'Sarasota County' | 'Charlotte County'>('all');
  const [activeLocationId, setActiveLocationId] = useState<string>(locationsData[0].id);

  const filteredLocations = selectedCounty === 'all'
    ? locationsData
    : locationsData.filter((loc) => loc.county === selectedCounty);

  const activeLoc = locationsData.find((l) => l.id === activeLocationId) || locationsData[0];

  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Navigation className="w-4 h-4 text-gold-dark" />
            <span>Local Presence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep tracking-tight mb-4">
            Proudly Serving Southwest Florida
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Our coverage encompasses both Sarasota and Charlotte counties, with prompt dispatch across coastal islands, gated golf enclaves, and quiet residential communities.
          </p>

          {/* County Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCounty('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCounty === 'all'
                  ? 'bg-navy-deep text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-navy-soft'
              }`}
            >
              All Communities ({locationsData.length})
            </button>
            <button
              onClick={() => setSelectedCounty('Sarasota County')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCounty === 'Sarasota County'
                  ? 'bg-navy-deep text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-navy-soft'
              }`}
            >
              Sarasota County
            </button>
            <button
              onClick={() => setSelectedCounty('Charlotte County')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCounty === 'Charlotte County'
                  ? 'bg-navy-deep text-white shadow-md'
                  : 'bg-white text-charcoal hover:bg-navy-soft'
              }`}
            >
              Charlotte County
            </button>
          </div>
        </div>

        {/* Visual Map / Location Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Location Badges Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {filteredLocations.map((loc) => {
                const isSelected = loc.id === activeLocationId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocationId(loc.id)}
                    className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-navy text-white border-gold shadow-md ring-2 ring-gold/40'
                        : 'bg-white text-charcoal border-charcoal/10 hover:border-navy/40 hover:bg-cream-light'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-gold-light' : 'text-charcoal-subtle'
                      }`}>
                        {loc.county.replace(' County', '')}
                      </span>
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-gold' : 'text-charcoal-subtle'}`} />
                    </div>

                    <span className="font-bold text-sm sm:text-base leading-snug">
                      {loc.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 p-4 rounded-xl bg-white/70 border border-charcoal/5 flex items-center justify-between text-xs text-charcoal-muted">
              <span>Have a property nearby not listed here?</span>
              <button
                onClick={() => onOpenQuote()}
                className="font-bold text-navy hover:text-gold-dark underline"
              >
                Inquire About Your Neighborhood →
              </button>
            </div>
          </div>

          {/* Active Location Detail Spotlight */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-charcoal/5 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-navy-soft text-navy flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-gold-dark" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-1">
              {activeLoc.county}
            </span>

            <h3 className="text-2xl font-bold text-navy-deep mb-3">
              {activeLoc.name}, Florida
            </h3>

            <p className="text-sm text-charcoal/85 leading-relaxed mb-6">
              {activeLoc.description}
            </p>

            <div className="space-y-2.5 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted">
                Key Local Protocols:
              </h4>
              {activeLoc.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenQuote(`Home Watch in ${activeLoc.name}`)}
              className="w-full py-3.5 rounded-xl bg-navy hover:bg-navy-deep text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors text-center"
            >
              Schedule Inspection in {activeLoc.name}
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-charcoal-subtle">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" />
              <span>Full GPS verification for all {activeLoc.name} visits</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
