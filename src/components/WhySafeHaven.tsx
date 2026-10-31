import React from 'react';
import { Compass, Users2, MessageCircle, Network, HeartHandshake, ShieldCheck } from 'lucide-react';

export const WhySafeHaven: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'LOCAL KNOWLEDGE',
      desc: 'More than 50 years living and serving Southwest Florida. We understand local environmental quirks, intense humidity patterns, and tropical storms.'
    },
    {
      icon: Users2,
      title: 'ONE TRUSTED TEAM',
      desc: 'Home watch, property care, cleaning, concierge and storm preparation under a single roof. No need to juggle five different sub-contractors.'
    },
    {
      icon: MessageCircle,
      title: 'DEPENDABLE COMMUNICATION',
      desc: 'Stay informed about what’s happening at your property. Receive clear photographic reports immediately after every walkthrough.'
    },
    {
      icon: Network,
      title: 'LOCAL VENDOR NETWORK',
      desc: 'Established, vetted relationships with honest HVAC technicians, plumbers, electricians, pool specialists, and licensed builders.'
    },
    {
      icon: HeartHandshake,
      title: 'FAMILY OWNED',
      desc: 'Personal, attentive service from a locally operated business. When you reach out, you talk directly with the owners who care about your home.'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-soft text-navy font-bold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-gold-dark" />
            <span>The Safe Haven Standard</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep tracking-tight mb-4">
            Local Experience You Can Trust
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            We aren't a national franchise or an absentee referral agency. We are your dedicated Southwest Florida neighbors protecting what matters most.
          </p>
        </div>

        {/* 5 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-7 rounded-2xl bg-cream-light border border-charcoal/5 hover:border-gold/40 hover:shadow-premium transition-all duration-300 flex flex-col justify-between group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-navy-deep transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-extrabold text-sm sm:text-base text-navy-deep uppercase tracking-wider mb-2">
                    {b.title}
                  </h3>

                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    {b.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal/5 flex items-center text-xs font-semibold text-navy group-hover:text-gold-dark transition-colors">
                  <span>Verified Safe Haven Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
