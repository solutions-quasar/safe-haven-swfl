import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, serviceTitle }) => {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-navy-deep/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gold/40 p-5 sm:p-8 my-8 overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-charcoal/10 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-navy-deep leading-tight">
                Get a Free Quote
              </h3>
              <p className="text-[11px] text-charcoal-subtle">
                Safe Haven SWFL • Sarasota & Charlotte County
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream hover:bg-navy-soft flex items-center justify-center text-charcoal hover:text-navy transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pt-4 pr-1">
          <QuoteForm
            initialService={serviceTitle}
            onSuccess={() => {
              // Handled within form, modal stays open showing success message
            }}
            isModal={true}
          />
        </div>
      </div>
    </div>
  );
};
