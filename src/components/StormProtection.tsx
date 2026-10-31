import React from 'react';
import { Wind, ShieldAlert, CheckCircle2, ArrowRight, ShieldCheck, Eye, Lock, CheckCheck } from 'lucide-react';

interface StormProtectionProps {
  onOpenQuote: (service?: string) => void;
}

export const StormProtection: React.FC<StormProtectionProps> = ({ onOpenQuote }) => {
  const stormSteps = [
    {
      step: '01',
      title: 'PRE-STORM INSPECTION',
      subtitle: 'Auditing Vulnerabilities Before Storms Form',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80',
      badge: 'Pre-Season Audit',
      icon: Eye,
      desc: 'We examine your shutter tracks, panel hardware, roof lines, drainage paths, and lanai enclosures well before hurricane season begins. Having a documented plan ensures swift execution when a named storm develops.',
      bullets: [
        'Shutter hardware & track operational check',
        'Roofline and gutter drainage assessment',
        'Identification of outdoor wind missiles',
        'Main water & electrical panel shutoff verification'
      ],
      cta: 'Schedule Pre-Storm Audit'
    },
    {
      step: '02',
      title: 'STORM PREPARATION',
      subtitle: 'Active Lockdown & Deployment',
      image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80',
      badge: 'Active Lockdown',
      icon: Lock,
      desc: 'When a tropical storm or hurricane warning is issued for Southwest Florida, our contracted team mobilizes to physically secure your property before landfall.',
      bullets: [
        'Deploying accordion, Bahama, or roll-down shutters',
        'Installing hurricane panels on vulnerable openings',
        'Bringing lanai furniture, grills, and pots indoors',
        'Shutting off water mains to mitigate interior flooding risks'
      ],
      cta: 'Enroll in Storm Prep'
    },
    {
      step: '03',
      title: 'POST-STORM PROPERTY CHECK',
      subtitle: 'Priority Damage Assessment & Rapid Reporting',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
      badge: 'Priority Roster',
      icon: CheckCheck,
      desc: 'Once local authorities clear roads and allow safe travel, Safe Haven visits your property to conduct a priority visual inspection and verify conditions.',
      bullets: [
        'Visual exterior and perimeter safety check',
        'Immediate photographic reporting to owner',
        'Identifying water intrusion, wind, or roof damage',
        'Assisting with emergency mitigation coordination'
      ],
      cta: 'Reserve Post-Storm Roster'
    }
  ];

  return (
    <section id="storm-protection" className="py-20 sm:py-28 bg-[#091829] text-white relative overflow-hidden">
      {/* Dramatic atmospheric weather accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-navy-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D7B875_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4 shadow-sm">
            <Wind className="w-4 h-4 text-amber-400" />
            <span>Southwest Florida Weather Readiness</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Hurricane Season Doesn't Have to Catch You Off Guard.
          </h2>

          <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-6">
            Safe Haven can inspect and prepare your property before severe weather arrives, helping protect your home even when you're hundreds or thousands of miles away.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-cream/80 bg-white/5 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Honest, experienced storm preparation without unrealistic guarantees.</span>
          </div>
        </div>

        {/* 3 Step Cards with High-Quality Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stormSteps.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-navy-deep/90 border border-white/10 hover:border-gold/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                {/* High Quality Pro Photo Header */}
                <div className="relative h-52 w-full overflow-hidden bg-navy">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                  
                  {/* Step Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-deep/90 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-gold shadow-md">
                    <span>STEP {card.step}</span>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gold/90 text-navy-deep text-[10px] font-bold uppercase tracking-wider shadow-md">
                    <Icon className="w-3 h-3" />
                    <span>{card.badge}</span>
                  </div>

                  {/* Title overlay at bottom of photo */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-bold text-base sm:text-lg text-white leading-snug">
                      {card.title}
                    </h3>
                    <span className="text-xs font-semibold text-gold-light/90 block">
                      {card.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-cream/75 leading-relaxed mb-6">
                      {card.desc}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {card.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-cream/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card CTA */}
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => onOpenQuote(card.title)}
                      className="w-full py-3 rounded-xl bg-white/5 hover:bg-gold hover:text-navy-deep text-xs font-bold uppercase tracking-wider text-cream transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-navy via-navy-card to-navy-deep border border-gold/40 p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
          
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 relative z-10">
            Secure Your Property Before The Next Advisory
          </h3>
          <p className="text-sm text-cream/80 mb-6 max-w-xl mx-auto relative z-10">
            Hurricane preparation spots are strictly capped each season to ensure our team can reliably reach and service every enrolled homeowner.
          </p>
          <button
            onClick={() => onOpenQuote('Storm Preparation')}
            className="px-8 py-3.5 rounded-xl bg-gold hover:bg-gold-hover text-navy-deep font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-gold-glow transition-all inline-flex items-center gap-2 relative z-10 active:scale-95 cursor-pointer"
          >
            <span>PREPARE MY PROPERTY</span>
            <ArrowRight className="w-4 h-4 text-navy-deep" />
          </button>
        </div>

      </div>
    </section>
  );
};
