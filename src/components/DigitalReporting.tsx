import React from 'react';
import { Camera, MapPin, FileCheck2, History, ExternalLink, Smartphone, CheckCircle, Thermometer, Droplets } from 'lucide-react';

export const DigitalReporting: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: 'PHOTO DOCUMENTATION',
      desc: 'High-resolution date-stamped photos of thermostats, meters, appliances, and any noted concerns.'
    },
    {
      icon: MapPin,
      title: 'GPS VERIFIED VISITS',
      desc: 'Digital geo-fence verification confirms our exact arrival and departure time on your property.'
    },
    {
      icon: FileCheck2,
      title: 'DETAILED INSPECTION REPORTS',
      desc: 'Comprehensive 30–40 point checklist delivered straight to your inbox and secure portal.'
    },
    {
      icon: History,
      title: 'PROPERTY HISTORY',
      desc: 'Complete digital archive of all past visits, repairs, and vendor entries accessible 24/7.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-deep text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-navy-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/20 text-gold-light font-bold text-xs uppercase tracking-wider mb-4 border border-gold/30">
            <Smartphone className="w-4 h-4 text-gold" />
            <span>Powered by QRIDit Home Watch Software</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5">
            Know What's Happening at Home — From Anywhere.
          </h2>

          <p className="text-base sm:text-lg text-cream/80 leading-relaxed">
            After every Home Watch visit, clients receive detailed information about their property so they can stay informed wherever they are in the world.
          </p>
        </div>

        {/* Dashboard / Phone Mockup & Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Phone / Tablet Live Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-navy-card rounded-[2.5rem] p-4 sm:p-5 shadow-2xl border-2 border-gold/30 relative">
              {/* Screen Header */}
              <div className="bg-navy-deep rounded-2xl p-4 border border-white/10 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Visit Completed & Verified
                    </span>
                  </div>
                  <span className="text-[11px] text-gold font-mono">10:42 AM EST</span>
                </div>
                <div className="text-xs text-cream/70">
                  Property: <span className="text-white font-medium">Boca Grande Luxury Residence</span>
                </div>
                <div className="text-[11px] text-cream/50 mt-0.5">
                  Inspector: <span className="text-white font-medium">Safe Haven SWFL Team</span>
                </div>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-navy-deep/90 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center text-gold">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cream/60 uppercase block">Indoor AC Temp</span>
                    <span className="text-sm font-bold text-white">73°F (Normal)</span>
                  </div>
                </div>

                <div className="bg-navy-deep/90 rounded-xl p-3 border border-white/5 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-cream/60 uppercase block">Relative Humidity</span>
                    <span className="text-sm font-bold text-white">52% (Safe)</span>
                  </div>
                </div>
              </div>

              {/* Checklist items in preview */}
              <div className="bg-navy-deep/70 rounded-xl p-3 border border-white/5 space-y-2 mb-3 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-cream/90">Main Water Valve & Pressure</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" /> Checked
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-cream/90">Under-Sink Plumbing Leaks</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" /> No Leaks
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-cream/90">Lanai Screen & Pool Water Level</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5" /> Normal
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-cream/90">GPS Timestamp & Coordinate Check</span>
                  <span className="inline-flex items-center gap-1 text-gold font-mono text-[10px]">
                    GPS Match
                  </span>
                </div>
              </div>

              {/* Photos attached indicator */}
              <div className="p-2.5 rounded-lg bg-navy/60 border border-white/10 flex items-center justify-between text-xs text-cream/80">
                <span className="flex items-center gap-1.5 font-medium">
                  <Camera className="w-3.5 h-3.5 text-gold" />
                  14 Inspection Photos Attached
                </span>
                <span className="text-gold font-bold text-[11px]">View Full Report</span>
              </div>
            </div>
          </div>

          {/* Feature Pillars */}
          <div className="lg:col-span-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-navy-card/60 border border-white/10 hover:border-gold/40 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center text-gold mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm tracking-wider uppercase text-gold-light mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/80 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Portal Action Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-navy to-navy-card border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
              <div>
                <h4 className="font-bold text-white text-base">
                  Existing Safe Haven Client?
                </h4>
                <p className="text-xs text-cream/70 mt-0.5">
                  Access your real-time reports, inspection logs, and invoice records.
                </p>
              </div>

              <a
                href="https://safehavenswfl.qridithomewatch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gold hover:bg-gold-hover text-navy-deep font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 flex-shrink-0"
              >
                <span>Client Login</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
