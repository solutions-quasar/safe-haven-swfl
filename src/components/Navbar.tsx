import React, { useState, useEffect } from 'react';
import { Shield, Phone, MessageSquare, Menu, X, ExternalLink, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (service?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onSelectService }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const servicesList = [
    { id: 'home-watch', name: 'Home Watch (Featured)' },
    { id: 'property-management', name: 'Property Management' },
    { id: 'cleaning-services', name: 'Cleaning Services' },
    { id: 'concierge-services', name: 'Concierge Services' },
    { id: 'pre-storm-inspection', name: 'Pre-Storm Inspection' },
    { id: 'storm-preparation', name: 'Storm Preparation' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-navy-deep text-cream text-xs py-2 px-4 border-b border-navy-card/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-gold font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Sarasota & Charlotte County, FL
            </span>
            <span className="hidden md:inline text-cream/40">|</span>
            <span className="hidden md:inline text-cream/80">Family Owned & Operated • 50+ Years Local</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://safehavenswfl.qridithomewatch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gold-light hover:text-gold transition-colors font-medium"
            >
              Client Login
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-cream/40">•</span>
            <a
              href="tel:+19419790675"
              className="inline-flex items-center gap-1 font-semibold text-white hover:text-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              (941) 979-0675
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-navy-deep/95 backdrop-blur-md shadow-elevated border-b border-navy-card py-3'
            : 'bg-navy-deep/90 backdrop-blur-sm border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              if (window.location.hash) {
                window.location.hash = '';
              }
            }}
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-gold-light via-gold to-gold-dark p-0.5 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-navy-deep rounded-[7px] flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-gold transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase group-hover:text-gold-light transition-colors">
                Safe Haven
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-widest text-gold font-medium uppercase -mt-1">
                Home Watch & Property Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[13px] xl:text-sm font-medium text-cream/90">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                className="inline-flex items-center gap-1 hover:text-gold transition-colors py-2 focus:outline-none"
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-gold/80" />
              </a>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-navy-deep/98 backdrop-blur-md border border-gold/30 rounded-xl shadow-elevated p-2 space-y-1">
                    {servicesList.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => {
                          onSelectService(service.id);
                          setServicesDropdownOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-medium text-cream/90 hover:text-white hover:bg-navy-light/40 rounded-lg transition-colors flex items-center justify-between"
                      >
                        {service.name}
                        {service.id === 'home-watch' && (
                          <span className="bg-gold text-navy-deep text-[9px] font-bold px-1.5 py-0.5 rounded">
                            Core
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#home-watch" className="hover:text-gold transition-colors">
              Home Watch
            </a>
            <a href="#storm-protection" className="hover:text-gold transition-colors">
              Storm Protection
            </a>
            <a href="#why-us" className="hover:text-gold transition-colors">
              Why Us
            </a>
            <a href="#service-areas" className="hover:text-gold transition-colors">
              Service Areas
            </a>
            <a href="#faq" className="hover:text-gold transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3 pl-4 border-l border-white/10">
            <a
              href="tel:+19419790675"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-cream bg-white/5 hover:bg-white/10 border border-white/10 transition-colors inline-flex items-center gap-2 group"
            >
              <Phone className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
              <span>(941) 979-0675</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold hover:from-gold hover:to-gold-dark shadow-md hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenQuote()}
              className="md:hidden px-3 py-1.5 text-xs font-bold uppercase tracking-wide rounded-md bg-gold text-navy-deep"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cream hover:text-gold hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-navy-deep/98 px-4 pt-4 pb-6 space-y-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href="tel:+19419790675"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-navy text-white text-xs font-semibold border border-white/10"
              >
                <Phone className="w-4 h-4 text-gold" />
                Call (941) 979-0675
              </a>
              <a
                href="sms:+19419790675"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-navy text-white text-xs font-semibold border border-white/10"
              >
                <MessageSquare className="w-4 h-4 text-gold" />
                Text Safe Haven
              </a>
            </div>

            <div className="flex flex-col space-y-2 font-medium text-cream text-sm">
              <a
                href="#services"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                All Services
              </a>
              <div className="pl-4 space-y-1.5 border-l-2 border-gold/30">
                {servicesList.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      onSelectService(service.id);
                      closeMobileMenu();
                    }}
                    className="block w-full text-left text-xs text-cream/80 hover:text-gold py-1"
                  >
                    • {service.name}
                  </button>
                ))}
              </div>
              <a
                href="#home-watch"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Home Watch System
              </a>
              <a
                href="#storm-protection"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Storm Protection
              </a>
              <a
                href="#why-us"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Why Safe Haven
              </a>
              <a
                href="#service-areas"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Service Areas (Sarasota & Charlotte)
              </a>
              <a
                href="#faq"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Frequently Asked Questions
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="px-3 py-2 rounded-lg hover:bg-white/5 hover:text-gold"
              >
                Contact & Free Quote
              </a>
              <a
                href="https://safehavenswfl.qridithomewatch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg text-gold flex items-center justify-between border border-gold/30"
              >
                <span>Client Login (QRIDit Portal)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-lg text-sm font-bold uppercase tracking-wider text-navy-deep bg-gradient-to-r from-gold-light via-gold to-gold shadow-md text-center"
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
