import React from 'react';
import { QuoteForm } from './QuoteForm';
import { ShieldCheck, Phone, Mail, Clock } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Value Prop */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-navy font-bold text-xs uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-gold-dark" />
              <span>Direct Quote & Consultation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-navy-deep tracking-tight mb-4">
              Get Your Custom Property Care Proposal
            </h2>

            <p className="text-base text-charcoal/85 leading-relaxed mb-8">
              Every home and homeowner’s travel schedule is unique. Complete the form to receive a prompt, no-obligation estimate tailored specifically to your residence.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+19419790675"
                className="p-4 rounded-xl bg-cream border border-charcoal/10 hover:border-gold/40 transition-colors flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-subtle uppercase tracking-wider block">
                    Direct Phone / Text
                  </span>
                  <span className="text-base font-bold text-navy-deep group-hover:text-navy transition-colors">
                    (941) 979-0675
                  </span>
                </div>
              </a>

              <a
                href="mailto:Jacob@safehavenswfl.com"
                className="p-4 rounded-xl bg-cream border border-charcoal/10 hover:border-gold/40 transition-colors flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:text-navy-deep transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-subtle uppercase tracking-wider block">
                    Direct Email
                  </span>
                  <span className="text-base font-bold text-navy-deep group-hover:text-navy transition-colors">
                    Jacob@safehavenswfl.com
                  </span>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-cream border border-charcoal/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span className="text-xs text-charcoal-subtle uppercase tracking-wider block">
                    Service Hours
                  </span>
                  <span className="text-sm font-bold text-navy-deep">
                    Monday – Sunday: 8:00 AM – 6:00 PM EST
                  </span>
                  <span className="text-[11px] text-charcoal-muted block">
                    Emergency response on-call for active clients
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form Card */}
          <div className="lg:col-span-7 bg-cream-light p-6 sm:p-10 rounded-3xl border border-charcoal/10 shadow-premium">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-deep mb-2">
              Request Your Free Quote
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-muted mb-6">
              Fill out the details below. We typically reply within 2–4 business hours.
            </p>

            <QuoteForm />
          </div>

        </div>
      </div>
    </section>
  );
};
