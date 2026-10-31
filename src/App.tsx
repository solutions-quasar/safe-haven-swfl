import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { StickyMobileBar } from './components/StickyMobileBar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedHomeWatch } from './components/FeaturedHomeWatch';
import { DigitalReporting } from './components/DigitalReporting';
import { StormProtection } from './components/StormProtection';
import { WhySafeHaven } from './components/WhySafeHaven';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { QuoteSection } from './components/QuoteSection';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Footer } from './components/Footer';
import { servicesData } from './data/services';
import { ServiceItem } from './types';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteServiceTitle, setQuoteServiceTitle] = useState<string | undefined>(undefined);
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  // Check URL query / hash on mount for deep linking
  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/services/')) {
        const slug = hash.replace('#/services/', '').replace(/\/$/, '');
        const matched = servicesData.find((s) => s.slug === slug || s.id === slug);
        if (matched) {
          setActiveServiceDetail(matched);
        }
      }
    };

    handleRoute();
    window.addEventListener('hashchange', handleRoute);
    return () => window.removeEventListener('hashchange', handleRoute);
  }, []);

  const handleOpenQuote = (serviceTitle?: string) => {
    setQuoteServiceTitle(serviceTitle);
    setQuoteModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    const found = servicesData.find((s) => s.id === serviceId || s.slug === serviceId);
    if (found) {
      setActiveServiceDetail(found);
    }
  };

  const handleOpenChecklist = () => {
    const homeWatch = servicesData.find((s) => s.id === 'home-watch');
    if (homeWatch) {
      setActiveServiceDetail(homeWatch);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal">
      {/* Header with Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onSelectService={handleSelectService}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Introduction */}
        <IntroSection />

        {/* 4. Core Services Grid */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenQuote={handleOpenQuote}
        />

        {/* 5. Featured Home Watch Focus */}
        <FeaturedHomeWatch
          onOpenQuote={handleOpenQuote}
          onOpenChecklist={handleOpenChecklist}
        />

        {/* 6. Digital Reporting & Client Portal Preview */}
        <DigitalReporting />

        {/* 7. Storm Protection Protocol */}
        <StormProtection onOpenQuote={handleOpenQuote} />

        {/* 8. Why Safe Haven */}
        <WhySafeHaven />

        {/* 9. Service Area & Local Coverage */}
        <ServiceAreaSection onOpenQuote={handleOpenQuote} />

        {/* 10. Homeowner Testimonials */}
        <TestimonialsSection />

        {/* 11. FAQ Accordion */}
        <FAQSection />

        {/* 12. Final Call to Action */}
        <FinalCTA onOpenQuote={() => handleOpenQuote()} />

        {/* 13. Dedicated Quote Form Section */}
        <QuoteSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onSelectService={handleSelectService}
      />

      {/* Sticky Mobile Action Bar (< 768px) */}
      <StickyMobileBar onOpenQuote={() => handleOpenQuote()} />

      {/* App Native Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        serviceTitle={quoteServiceTitle}
      />

      {/* App Native Service Details & Checklist Modal */}
      <ServiceDetailModal
        service={activeServiceDetail}
        isOpen={activeServiceDetail !== null}
        onClose={() => setActiveServiceDetail(null)}
        onOpenQuote={(title) => {
          setActiveServiceDetail(null);
          handleOpenQuote(title);
        }}
      />
    </div>
  );
};

export default App;
