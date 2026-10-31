import React from 'react';
import { Shield, Phone, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';
import { servicesData } from '../data/services';

interface FooterProps {
  onOpenQuote: (service?: string) => void;
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onSelectService }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-cream border-t border-navy-card pb-20 md:pb-8 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Brand Info (col-span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-navy-deep rounded-[7px] flex items-center justify-center">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-white uppercase block">
                  Safe Haven SWFL
                </span>
                <span className="text-[11px] tracking-widest text-gold font-medium uppercase block">
                  Home Watch & Property Care
                </span>
              </div>
            </div>

            <p className="text-sm text-cream/75 max-w-sm leading-relaxed">
              Family-owned and operated property care protecting Southwest Florida homes while owners are away. Licensed, insured, bonded, and backed by 50+ years of local experience.
            </p>

            <div className="space-y-2 pt-2 text-xs text-cream/90">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+19419790675" className="hover:text-gold transition-colors font-semibold">
                  (941) 979-0675
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:Jacob@safehavenswfl.com" className="hover:text-gold transition-colors">
                  Jacob@safehavenswfl.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Serving Sarasota & Charlotte County, Florida</span>
              </div>
            </div>

            {/* Trust Tags */}
            <div className="flex flex-wrap gap-2 pt-2 text-[11px]">
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-gold-light">
                ✓ Family Owned & Operated
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-gold-light">
                ✓ Licensed, Insured & Bonded
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">All Services</a>
              </li>
              <li>
                <a href="#home-watch" className="hover:text-white transition-colors">Home Watch</a>
              </li>
              <li>
                <a href="#storm-protection" className="hover:text-white transition-colors">Storm Protection</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Safe Haven</a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-white transition-colors">Service Areas</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-cream/80">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(svc.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Client Portal & Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
              Client Portal
            </h4>
            <p className="text-xs text-cream/70 leading-relaxed">
              Access your real-time QRIDit inspection reports, photos, and property history.
            </p>
            <a
              href="https://safehavenswfl.qridithomewatch.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gold hover:bg-gold-hover text-navy-deep font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
            >
              <span>Client Login</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-cream font-semibold text-xs border border-white/10 transition-colors text-center"
              >
                Request a Free Quote
              </button>
            </div>
          </div>

        </div>

        {/* Subtle Faith / Scripture Identity element */}
        <div className="py-6 border-y border-white/10 text-center">
          <p className="text-xs sm:text-sm text-cream/60 italic font-serif">
            "Whatever you do, work with all your might, as for the Lord and not for men."
            <span className="block sm:inline font-sans font-medium text-gold/70 text-xs sm:ml-2 not-italic">
              — Colossians 3:23
            </span>
          </p>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <div>
            © {currentYear} Safe Haven SWFL. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Sarasota & Charlotte County, Florida</span>
            <span>•</span>
            <span>Licensed, Insured & Bonded</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
