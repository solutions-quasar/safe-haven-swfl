import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'home-watch',
    slug: 'home-watch',
    title: 'Home Watch',
    subtitle: 'Scheduled Physical Property Inspections',
    badge: 'Most Popular',
    popular: true,
    shortDesc: 'Professional scheduled property inspections with detailed reporting, photos and GPS verification after every visit.',
    fullDesc: 'Safe Haven SWFL provides rigorous, scheduled visual inspections of unoccupied homes and condominiums across Sarasota and Charlotte County. Each visit takes 30 to 45 minutes, systematically verifying your HVAC system, plumbing fixtures, electrical panels, hurricane protection, pool equipment, and pest barriers.',
    features: [
      '30–40 point comprehensive inspection checklist',
      'High-resolution photos with timestamped documentation',
      'GPS-verified visit reports sent immediately via email',
      'HVAC & humidity monitoring to prevent mold growth',
      'Water line inspection & scheduled appliance cycling',
      'Rapid escalation & coordination when issues arise'
    ],
    checklist: [
      'HVAC temperature and relative humidity verification',
      'Visual check for water leaks under all sinks and around water heaters',
      'Running faucets and flushing toilets to prevent dry traps and sewer gas',
      'Electrical breaker panel review and check for tripped circuits',
      'Refrigerator and freezer temperature check and ice maker cycle',
      'Inspection of doors, windows, and sliders for forced entry or seal failures',
      'Lanai, pool water level, and screen cage integrity check',
      'Exterior perimeter inspection for signs of storm or pest intrusion'
    ],
    icon: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'property-management',
    slug: 'property-management',
    title: 'Property Management',
    subtitle: 'Vendor Coordination & Turnkey Oversight',
    shortDesc: 'Coordinate vendors, maintenance, contractors and everyday property needs while the owner is away.',
    fullDesc: 'Managing home maintenance remotely can be stressful. Safe Haven acts as your dedicated local liaison, meeting trusted service providers, overseeing scheduled repairs, granting controlled property access, and verifying that completed work meets the highest standards before you pay invoices.',
    features: [
      'Vendor key-in and supervised property access',
      'Oversight of landscapers, pool techs, and contractors',
      'Coordination of HVAC filter replacement and servicing',
      'Post-repair inspection with photographic evidence',
      'Preventative maintenance scheduling',
      'Emergency response liaison during severe weather'
    ],
    checklist: [
      'Pre-service walkthrough with third-party service contractors',
      'On-site presence during sensitive installations or repairs',
      'Post-service quality audit with photo documentation',
      'Securing all entry points, alarms, and locks after vendor departure',
      'Digital receipt and service report logged to your account'
    ],
    icon: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cleaning-services',
    slug: 'cleaning',
    title: 'Cleaning Services',
    subtitle: 'Meticulous Residential & Turnover Care',
    shortDesc: 'Weekly, bi-weekly, monthly, move-in/move-out and deep cleaning services tailored for Florida homeowners.',
    fullDesc: 'Florida heat and humidity require attentive care to prevent dust mites, musty odors, and grime build-up. Safe Haven offers dedicated residential cleaning performed by trusted, vetted professionals. Whether preparing for your seasonal return or welcoming guests, we ensure your home is spotless.',
    features: [
      'Scheduled weekly, bi-weekly, or monthly cleans',
      'Comprehensive deep cleaning and pre-arrival refresh',
      'Move-in and move-out thorough sanitation',
      'Eco-friendly, surface-safe cleaning solutions',
      'Lanai, outdoor kitchen, and patio washing',
      'Customized cleaning tailored to your personal preferences'
    ],
    checklist: [
      'Kitchen deep wipe: appliance exteriors, countertops, sinks, backsplashes',
      'Bathroom sanitation: showers, tubs, tiles, mirrors, and grout',
      'Dusting baseboards, crown molding, ceiling fans, and light fixtures',
      'Vacuuming rugs and sanitizing hard surface floors',
      'Fresh linen change and bed styling upon request',
      'Trash removal and eco-disinfection of high-touch contact areas'
    ],
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'concierge-services',
    slug: 'concierge',
    title: 'Concierge Services',
    subtitle: 'White-Glove Florida Lifestyle Assistance',
    shortDesc: 'Vehicle checks, groceries, vendor access, errands, pet care and other bespoke property assistance.',
    fullDesc: 'Experience seamless arrivals with our personalized concierge services. We treat your Florida property like our own, ensuring your vehicle battery is charged, your refrigerator is stocked with your favorite provisions, and your package deliveries are safely placed inside before you land.',
    features: [
      'Vehicle maintenance: battery charging, tire pressure, and engine starts',
      'Pre-arrival grocery and pantry restocking',
      'Package retrieval, mail forwarding, and secure storage',
      'Airport transport coordination and vehicle staging',
      'Patio furniture setup before you arrive & storage upon departure',
      'Pet sitting coordination and local errand assistance'
    ],
    checklist: [
      'Starting vehicles and trickle-charging batteries to prevent failure',
      'Tire flat-spot prevention and pressure monitoring',
      'Stocking refrigerator with fresh dairy, produce, and beverages',
      'Adjusting thermostat to comfortable arrival temperature (e.g. 72°F)',
      'Unpacking deliveries and placing delicate parcels inside safely',
      'Opening blinds, powering on water heaters, and checking ice makers'
    ],
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'pre-storm-inspection',
    slug: 'storm-inspection',
    title: 'Pre-Storm Inspection',
    subtitle: 'Thorough Pre-Season & Storm Readiness Assessment',
    shortDesc: 'Property assessment before hurricane season or an approaching tropical storm or hurricane.',
    fullDesc: 'Early detection of vulnerabilities is the single best way to protect your residence from tropical storms and hurricanes. We conduct thorough pre-season and pre-storm audits, identifying loose roof tiles, overgrown foliage, drain blockages, and shutter mechanism faults before warnings are issued.',
    features: [
      'Detailed vulnerability audit of windows, doors, and rooflines',
      'Testing hurricane shutter tracks, motors, and hardware',
      'Assessment of outdoor furniture, decor, and potential wind missiles',
      'Drainage channel and gutter overflow check',
      'Backup generator and battery backup readiness verification',
      'Action plan documentation shared directly with homeowner'
    ],
    checklist: [
      'Testing accordion shutter locks and lubrication of tracks',
      'Inventory check of impact panels, hardware, and fasteners',
      'Identifying heavy decorative pots and patio furniture needing stowage',
      'Roofline visual check for cracked tile or loose shingles',
      'Tree limb clearance near power lines and pool enclosures',
      'Emergency shut-off valve locations tagged and verified'
    ],
    icon: 'AlertTriangle',
    image: 'https://images.unsplash.com/photo-1527030280862-64139fba04ca?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'storm-preparation',
    slug: 'storm-preparation',
    title: 'Storm Preparation',
    subtitle: 'Hands-On Hurricane Shutter & Barrier Deployment',
    shortDesc: 'Shutters, outdoor furniture, flood barriers, sandbags and other hands-on hurricane preparation.',
    fullDesc: 'When a tropical storm or hurricane approaches Southwest Florida, time is critical. Safe Haven mobilizes rapidly for contracted clients to close storm shutters, secure lanais, bring indoor patio sets, position flood barriers, and lock down your home to weather the storm safely.',
    features: [
      'Closing and securing accordions, bahama shutters, and roll-downs',
      'Installation of aluminum or clear polycarbonate hurricane panels',
      'Bringing lanai furniture, grills, and plants indoors',
      'Deploying sandbags and flood mitigation barriers',
      'Shutting main water supply to eliminate internal flood risks',
      'Post-storm priority check and rapid photographic status update'
    ],
    checklist: [
      'Securing all exterior shutters and bolting track locks',
      'Moving outdoor furniture and ornaments into garages or lanais',
      'Turning off main water valve and cycling water heater breaker off',
      'Closing hurricane fabric screens or deploying quick-dams',
      'Final high-resolution 360-degree pre-storm photo log',
      'Automatic placement on priority post-storm inspection roster'
    ],
    icon: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
  }
];
