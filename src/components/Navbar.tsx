import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageSquare, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onSelectService }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Main Clean Navigation Bar (Top bar completely removed) */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-navy-deep/95 backdrop-blur-md shadow-elevated border-b border-navy-card/80 py-3'
            : 'bg-navy-deep/95 backdrop-blur-sm border-b border-white/10 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            onClick={() => {
              if (window.location.hash) window.location.hash = '';
            }}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-gold-light via-gold to-gold-dark p-0.5 shadow-md flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-navy-deep rounded-[7px] flex items-center justify-center">
                <Shield className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-bold tracking-wider text-white uppercase group-hover:text-gold-light transition-colors leading-tight">
                Safe Haven
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-gold font-medium uppercase">
                Home Watch & Property Care
              </span>
            </div>
          </a>

          {/* Reduced, Streamlined Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-cream/90">
            <a href="#services" className="hover:text-gold transition-colors">
              Services
            </a>
            <a href="#home-watch" className="hover:text-gold transition-colors">
              Home Watch
            </a>
            <a href="#storm-protection" className="hover:text-gold transition-colors">
              Storm Protection
            </a>
            <a href="#service-areas" className="hover:text-gold transition-colors">
              Service Areas
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
            <a
              href="https://safehavenswfl.qridithomewatch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold-light hover:text-white transition-colors text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
            >
              <span>Client Login</span>
              <ExternalLink className="w-3 h-3 text-gold" />
            </a>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+19419790675"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-cream bg-white/5 hover:bg-white/10 border border-white/10 transition-colors inline-flex items-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
              <span>(941) 979-0675</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-md hover:shadow-gold-glow transition-all duration-300"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Right: Hamburger Only (Clean & Simple) */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cream hover:text-gold hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-gold" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer (Simple, clear, unconfusing) */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-navy-deep px-5 pt-4 pb-6 space-y-4 animate-fade-in shadow-2xl">
            <div className="grid grid-cols-2 gap-2 pb-1">
              <a
                href="tel:+19419790675"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-navy text-white text-xs font-semibold border border-white/10"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span>Call Us</span>
              </a>
              <a
                href="sms:+19419790675"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-navy text-white text-xs font-semibold border border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                <span>Text Us</span>
              </a>
            </div>

            <nav className="flex flex-col space-y-2.5 font-medium text-cream text-sm pt-1">
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gold flex items-center justify-between"
              >
                <span>Services</span>
                <span className="text-xs text-gold">6 Care Plans →</span>
              </a>
              <a
                href="#home-watch"
                onClick={closeMobileMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Home Watch (Featured)
              </a>
              <a
                href="#storm-protection"
                onClick={closeMobileMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Storm Protection
              </a>
              <a
                href="#service-areas"
                onClick={closeMobileMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Service Areas (Sarasota & Charlotte)
              </a>
              <a
                href="#faq"
                onClick={closeMobileMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Contact Us
              </a>
              <a
                href="https://safehavenswfl.qridithomewatch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-white/5 text-gold flex items-center justify-between border border-gold/30 text-xs font-semibold"
              >
                <span>Client Login (QRIDit Portal)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>

            <div className="pt-2">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuote();
                }}
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold shadow-md text-center"
              >
                Request a Free Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
