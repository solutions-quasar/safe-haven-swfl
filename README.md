# Safe Haven SWFL — Premium Website Redesign

Modern, high-converting, mobile-first website for **Safe Haven SWFL** (Sarasota & Charlotte County, Florida).

- **Client:** Safe Haven SWFL
- **Direct Line:** (941) 979-0675
- **Email:** Jacob@safehavenswfl.com
- **Existing Website:** https://www.safehavenswfl.com/
- **Client Portal:** https://safehavenswfl.qridithomewatch.com/
- **Target Deployment:** GitHub Pages (`https://solutions-quasar.github.io/safe-haven-swfl/`)

---

## Key Highlights & Architectural Features

1. **Brand Aesthetic & Palette:**
   - Deep Navy (`#102A43`) & Navy Blue (`#173F73`)
   - Warm Sand/Gold (`#D7B875`) for subtle accents and high-converting CTAs
   - Soft Cream (`#F7F4ED`) & Crisp White (`#FFFFFF`)
   - Charcoal typography (`#18222D`)
   - Generous whitespace, refined cards, restrained shadows.

2. **Mobile-First Conversion:**
   - Immediate value proposition within 3 seconds.
   - Fixed Sticky Mobile Bar on screens < 768px (`CALL` | `TEXT` | `GET QUOTE`).
   - High touch targets, readable 16–20px typography, short digestible paragraphs.

3. **Core Services Architecture:**
   - **Home Watch (Featured Service):** 30–45 min walkthroughs, 30–40 point checklist, photos included, GPS verified reports.
   - **Property Management:** Vendor key-in, contractor oversight, scheduled maintenance.
   - **Cleaning Services:** Maintenance cleans, move-in/out, pre-arrival sanitation.
   - **Concierge Services:** Vehicle care, grocery restocking, delivery handling.
   - **Pre-Storm Inspection:** Vulnerability audit before tropical weather.
   - **Storm Preparation:** Hurricane shutters, flood mitigation, lanai furniture securing.

4. **Digital Reporting Showcase:**
   - Interactive live mockup of QRIDit Home Watch software report.
   - GPS geofencing, temperature/humidity monitoring, timestamped photo evidence.
   - Seamless link to external client portal.

5. **Local SEO Coverage:**
   - Dedicated coverage for 12 key communities across **Sarasota County** and **Charlotte County**:
     - *Sarasota, Lakewood Ranch, Osprey, Siesta Key, Nokomis, Venice, Wellen Park, North Port, Port Charlotte, Englewood, Manasota Beach, Boca Grande.*
   - Schema.org JSON-LD structured data (`HomeAndConstructionBusiness`).
   - Semantic heading structure, `robots.txt`, and `sitemap.xml`.

6. **Contact Form Security & Anti-Spam Strict Standards:**
   - Hidden honeypot field (`_gotcha`, styled hidden, non-tabbable).
   - Cyrillic characters filter (`/[А-Яа-яЁё]/`) to silently drop bot submissions.
   - Secret client token architecture (`x-safehaven-client`).
   - App-native modals only (no browser alert popups).

---

## Build & Local Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production (static output in `/dist`):
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```
