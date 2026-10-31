import React from 'react';
import { servicesData } from '../data/services';
import { ShieldCheck, Briefcase, Sparkles, Key, AlertTriangle, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Briefcase':
        return Briefcase;
      case 'Sparkles':
        return Sparkles;
      case 'Key':
        return Key;
      case 'AlertTriangle':
        return AlertTriangle;
      case 'ShieldAlert':
        return ShieldAlert;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-navy font-bold text-xs tracking-wider uppercase mb-3">
            <span>Comprehensive Property Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep tracking-tight mb-4">
            Everything Your Home Needs. One Trusted Team.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Eliminate the hassle of coordinating multiple contractors. Safe Haven delivers complete peace of mind with tailored services for Southwest Florida homes.
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = getIcon(service.icon);
            const isFeatured = service.popular;

            return (
              <div
                key={service.id}
                className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group border ${
                  isFeatured
                    ? 'border-gold shadow-elevated ring-2 ring-gold/30 bg-cream-light'
                    : 'border-charcoal/10 bg-white hover:border-navy/30 hover:shadow-premium'
                }`}
              >
                {/* Image Banner */}
                <div className="relative h-52 w-full overflow-hidden bg-navy-deep">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/30 to-transparent" />
                  
                  {isFeatured && (
                    <div className="absolute top-4 right-4 bg-gold text-navy-deep text-xs font-extrabold uppercase px-3 py-1 rounded-full shadow-md tracking-wider">
                      Featured Service
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gold text-navy-deep flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-gold-light uppercase">
                        {service.subtitle}
                      </span>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-charcoal/85 leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 mb-6">
                      {service.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal">
                          <CheckCircle2 className="w-4 h-4 text-gold-dark mt-0.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-charcoal/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service.id)}
                      className="text-xs sm:text-sm font-bold text-navy hover:text-navy-light inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 text-gold-dark" />
                    </button>

                    <button
                      onClick={() => onOpenQuote(service.title)}
                      className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-navy-soft text-navy hover:bg-navy hover:text-white transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
