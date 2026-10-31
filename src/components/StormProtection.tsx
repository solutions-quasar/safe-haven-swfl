import React from 'react';
import { Wind, ShieldAlert, CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck } from 'lucide-react';

interface StormProtectionProps {
  onOpenQuote: (service?: string) => void;
}

export const StormProtection: React.FC<StormProtectionProps> = ({ onOpenQuote }) => {
  const stormSteps = [
    {
      step: '01',
      title: 'PRE-STORM INSPECTION',
      subtitle: 'Auditing Vulnerabilities Before Storms Form',
      desc: 'We examine your shutter tracks, panel hardware, roof lines, drainage paths, and lanai enclosures well before hurricane season begins. Having a documented plan ensures swift execution when a named storm develops.',
      bullets: [
        'Shutter hardware & track operational check',
        'Roofline and gutter drainage assessment',
        'Identification of outdoor wind missiles',
        'Main water & electrical panel shutoff verification'
      ]
    },
    {
      step: '02',
      title: 'STORM PREPARATION',
      subtitle: 'Active Lockdown & Deployment',
      desc: 'When a tropical storm or hurricane warning is issued for Southwest Florida, our contracted team mobilizes to physically secure your property before landfall.',
      bullets: [
        'Deploying accordion, Bahama, or roll-down shutters',
        'Installing hurricane panels on vulnerable openings',
        'Bringing lanai furniture, grills, and pots indoors',
        'Shutting off water mains to mitigate interior flooding risks'
      ]
    },
    {
      step: '03',
      title: 'POST-STORM PROPERTY CHECK',
      subtitle: 'Priority Damage Assessment & Rapid Reporting',
      desc: 'Once local authorities clear roads and allow safe travel, Safe Haven visits your property to conduct a priority visual inspection and verify conditions.',
      bullets: [
        'Visual exterior and perimeter safety check',
        'Immediate photographic reporting to owner',
        'Identifying water intrusion, wind, or roof damage',
        'Assisting with emergency mitigation coordination'
      ]
    }
  ];

  return (
    <section id="storm-protection" className="py-20 sm:py-28 bg-[#0B1E32] text-white relative">
      {/* Background weather graphic texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D7B875_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-bold text-xs uppercase tracking-wider mb-4">
            <Wind className="w-4 h-4 text-amber-400" />
            <span>Southwest Florida Weather Readiness</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 leading-tight">
            Hurricane Season Doesn't Have to Catch You Off Guard.
          </h2>

          <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-6">
            Safe Haven can inspect and prepare your property before severe weather arrives, helping protect your home even when you're hundreds or thousands of miles away.
          </p>

          <div className="inline-flex items-center gap-2 text-xs text-cream/70 bg-navy-card/60 px-4 py-2 rounded-xl border border-white/5">
            <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Honest, experienced storm preparation without unrealistic guarantees.</span>
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {stormSteps.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-navy-deep/80 border border-white/10 hover:border-gold/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-gold/40 font-mono">
                    {card.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-navy flex items-center justify-center text-gold">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-bold text-base sm:text-lg text-white mb-1 tracking-tight">
                  {card.title}
                </h3>
                <span className="text-xs font-semibold text-gold-light/90 block mb-3">
                  {card.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-cream/80 leading-relaxed mb-6">
                  {card.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {card.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-cream/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenQuote(card.title)}
                  className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-gold hover:text-navy-deep text-xs font-bold uppercase tracking-wider text-cream transition-colors text-center"
                >
                  Request Storm Coverage
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-navy via-navy-card to-navy-deep border border-gold/30 p-8 text-center max-w-3xl mx-auto shadow-elevated">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Secure Your Property Before The Next Advisory
          </h3>
          <p className="text-sm text-cream/80 mb-6 max-w-xl mx-auto">
            Hurricane preparation spots are strictly capped each season to ensure our team can reliably reach and service every enrolled homeowner.
          </p>
          <button
            onClick={() => onOpenQuote('Storm Preparation')}
            className="px-8 py-3.5 rounded-xl bg-gold hover:bg-gold-hover text-navy-deep font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-gold-glow transition-all inline-flex items-center gap-2"
          >
            <span>PREPARE MY PROPERTY</span>
            <ArrowRight className="w-4 h-4 text-navy-deep" />
          </button>
        </div>

      </div>
    </section>
  );
};
