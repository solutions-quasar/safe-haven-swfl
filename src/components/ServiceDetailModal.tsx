import React, { useEffect } from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  isOpen,
  onClose,
  onOpenQuote
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-navy-deep/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gold/40 my-8 overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Banner with Image */}
        <div className="relative h-44 sm:h-52 w-full bg-navy-deep flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-deep/70 backdrop-blur-md text-white hover:text-gold flex items-center justify-center transition-colors focus:outline-none border border-white/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold uppercase tracking-wider text-gold block mb-1">
              {service.subtitle}
            </span>
            <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-2">
              Service Overview
            </h4>
            <p className="text-sm sm:text-base text-charcoal/90 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-3">
              Included Standards & Protocols:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist if present */}
          {service.checklist && service.checklist.length > 0 && (
            <div className="p-4 sm:p-5 rounded-2xl bg-cream-light border border-charcoal/10">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-5 h-5 text-gold-dark" />
                <h4 className="font-bold text-sm text-navy-deep uppercase tracking-wider">
                  Verified Inspection Checklist Items:
                </h4>
              </div>
              <ul className="space-y-2">
                {service.checklist.map((item, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-xs text-charcoal/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-dark mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Direct CTA Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.title);
              }}
              className="w-full sm:flex-1 py-3.5 rounded-xl bg-gold hover:bg-gold-hover text-navy-deep font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Quote for {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+19419790675"
              className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-navy-soft text-navy hover:bg-navy hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-dark" />
              <span>(941) 979-0675</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
