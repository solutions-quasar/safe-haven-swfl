import React from 'react';
import { Award, CheckSquare, MapPin, ShieldCheck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustMetrics = [
    {
      icon: Award,
      value: '50+',
      label: 'Years of Local Experience',
      subtext: 'Deep Southwest Florida roots'
    },
    {
      icon: CheckSquare,
      value: '30–40',
      label: 'Point Home Inspections',
      subtext: 'Rigorous room-by-room check'
    },
    {
      icon: MapPin,
      value: 'GPS',
      label: 'Verified Visit Reports',
      subtext: 'Proof of presence with photos'
    },
    {
      icon: ShieldCheck,
      value: '100%',
      label: 'Licensed, Insured & Bonded',
      subtext: 'Full homeowner protection'
    }
  ];

  return (
    <section className="bg-navy border-y border-gold/20 py-8 relative z-20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-navy-deep/40 border border-white/5 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2.5 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gold tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white mt-1 leading-snug">
                  {metric.label}
                </span>
                <span className="text-[11px] text-cream/70 mt-0.5 hidden sm:block">
                  {metric.subtext}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
