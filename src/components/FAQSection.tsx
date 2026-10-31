import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-soft text-navy font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-gold-dark" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-deep tracking-tight mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Everything you need to know about professional home watch standards, visit reporting, and Florida storm procedures.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-charcoal/10 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-navy-deep leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center flex-shrink-0 text-navy transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 bg-gold/20 text-gold-dark' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-charcoal/85 leading-relaxed border-t border-charcoal/5 animate-fade-in">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact direct prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-white/80 border border-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-navy-deep text-base">
              Have another question not answered above?
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              We’re always available to discuss your specific property requirements.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+19419790675"
              className="px-4 py-2.5 rounded-xl bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-deep transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span>(941) 979-0675</span>
            </a>
            <a
              href="sms:+19419790675"
              className="px-4 py-2.5 rounded-xl bg-gold text-navy-deep text-xs font-bold uppercase tracking-wider hover:bg-gold-hover transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Text Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
