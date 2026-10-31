import React from 'react';
import { ArrowRight, HeartHandshake, Home, MapPin } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Subtle badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-soft text-navy text-xs font-semibold tracking-wider uppercase mb-4">
          <HeartHandshake className="w-4 h-4 text-navy" />
          <span>Locally Owned & Operated</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-deep tracking-tight mb-6">
          Peace of Mind While You're Away
        </h2>

        {/* Primary Copy */}
        <p className="text-base sm:text-lg md:text-xl text-charcoal/90 leading-relaxed font-normal mb-6">
          Whether you're a seasonal resident, traveling for an extended period or simply want another set of eyes on your property, Safe Haven helps protect and maintain your Southwest Florida home.
        </p>

        {/* Local Family Business Message */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-premium border border-charcoal/5 mb-8 max-w-3xl mx-auto text-left flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold-dark flex-shrink-0">
            <Home className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-navy-deep text-base sm:text-lg mb-1.5">
              Personalized, Attentive Family Care
            </h3>
            <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
              We live and work right here in Southwest Florida. We treat every home as if it were our own—monitoring changes in weather, checking humidity levels, and catching minor plumbing or mechanical issues before they escalate into costly damage while you are away.
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-navy">
              <MapPin className="w-3.5 h-3.5 text-gold-dark" />
              <span>Serving Sarasota, Charlotte County & Barrier Islands</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div>
          <a
            href="#why-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy hover:bg-navy-deep text-white font-semibold text-sm transition-all shadow-md group"
          >
            <span>Why Homeowners Choose Us</span>
            <ArrowRight className="w-4 h-4 text-gold transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
