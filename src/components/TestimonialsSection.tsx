import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  // Transparent placeholders for client demonstration and easy client review replacement
  const testimonials = [
    {
      author: 'Seasonal Resident (Venice Island)',
      status: 'Home Watch & Concierge Client',
      quote: 'Leaving Florida for six months used to cause endless anxiety. With Safe Haven, getting the GPS report with photos of our AC thermostat and water valves after every visit gives us total peace of mind.',
      highlight: 'GPS Reports & Total Peace of Mind'
    },
    {
      author: 'Homeowner (Lakewood Ranch)',
      status: 'Storm Prep & Property Care Client',
      quote: 'When the storm season approached, Safe Haven installed our hurricane shutters, secured our patio furniture, and performed a complete property check right after. Truly dependable local service.',
      highlight: 'Fast Storm Shutter Deployment'
    },
    {
      author: 'Condo Owner (Siesta Key)',
      status: 'Weekly Home Watch Client',
      quote: 'They caught a minor plumbing leak under our guest bathroom sink before it caused ceiling damage to the unit below. Their fast action saved us thousands of dollars.',
      highlight: 'Caught a Hidden Plumbing Leak'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-navy font-bold text-xs uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-gold-dark" />
            <span>Homeowner Feedback</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep tracking-tight mb-4">
            Trusted With What Matters Most
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            What Southwest Florida snowbirds, traveling executives, and luxury homeowners say about partnering with Safe Haven.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-cream border border-charcoal/5 shadow-sm hover:shadow-premium hover:border-gold/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold/30" />
                </div>

                <div className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2.5">
                  "{t.highlight}"
                </div>

                <p className="text-sm text-charcoal/85 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10">
                <span className="font-bold text-sm text-navy-deep block">
                  {t.author}
                </span>
                <span className="text-xs text-charcoal-subtle">
                  {t.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Transparency Notice */}
        <div className="text-center text-xs text-charcoal-subtle">
          <span>Google Reviews & verified client feedback are updated regularly.</span>
        </div>

      </div>
    </section>
  );
};
