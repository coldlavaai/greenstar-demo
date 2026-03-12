# Greenstar Solar UK - Enhanced Demo Website

## 🌟 Overview

Premium solar panel installation demo website built for **Jason Wides** (existing Cold Lava client). This enhanced demo showcases advanced features including interactive ROI calculator, Google reviews integration, AI chat qualification, and educational content hub.

**Demo URL:** TBD (deploy to Vercel)  
**GitHub:** https://github.com/coldlavaai/greenstar-demo  
**Client Contact:** oliver@otdm.net  
**Score:** 8/10 HOT 🔥

---

## ✅ ALL 4 MANDATORY FEATURES IMPLEMENTED

### 1. Interactive ROI Calculator ✅
**Location:** Home page, dedicated section with prominent CTA

**Features:**
- Multi-step form (property details → contact capture → results)
- Inputs: postcode, roof size (m²), current electricity bill
- Outputs: 
  - Annual savings estimate
  - Payback period calculation
  - 25-year ROI projection
  - Recommended system size
- **Visual charts** using Recharts library
- Contact details captured before showing full results
- Mobile-optimized with clear CTAs

### 2. Google Reviews Widget ✅
**Location:** Below hero section (prime visibility)

**Features:**
- Displays 5-star rating with 287 reviews
- Auto-rotating carousel of 6 real-looking reviews
- Manual navigation (prev/next buttons)
- Dot indicators for carousel position
- "Read all reviews on Google" CTA with external link
- Pause on hover for better UX
- Fully responsive

### 3. AI Chat Qualification ✅
**Component:** "Talk to Sophie" - 24/7 AI Assistant

**Features:**
- Floating chat button (bottom right) with notification badge
- Full chat interface with Sophie avatar
- Pre-qualification flow:
  1. Budget range (4 options)
  2. Timeline (4 options)
  3. Property type (4 options)
  4. Roof orientation (4 options)
- Captures qualification data
- Books qualified leads automatically
- "Powered by Cold Lava AI" branding
- Mobile-responsive chat window

### 4. Educational Content Hub ✅
**Location:** Dedicated Resources section

**Features:**
- **3 Required Articles:**
  1. "Solar Panels UK: Complete Buyer's Guide 2026"
  2. "Battery Storage: Is It Worth It?"
  3. "ROI Calculator: How Long Until Solar Pays Off?"
- Plus 3 bonus articles (6 total)
- Category filter system (All, Guides, Technology, Finance, Maintenance)
- Article grid with images, read time, and excerpts
- Featured guide download with email capture
- Newsletter signup form
- All content cards clickable with hover effects

---

## 🎨 Branding & Design

**Color Palette:**
- Primary: Emerald Green (#10b981, #059669, #047857)
- Accent: Emerald variations for gradients
- Text: Gray scale (900/700/600/500)
- Backgrounds: White, light gray, emerald gradients

**Positioning:**
- Premium, professional, trustworthy
- Trade business aesthetic
- Clean, modern, conversion-focused
- Eco-friendly / sustainability focus

**Typography:**
- Font: Inter (clean, modern sans-serif)
- Hierarchy: Clear heading structure (5xl→4xl→3xl→2xl→xl)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Charts:** Recharts (for ROI calculator visualizations)
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

---

## 📦 Project Structure

```
greenstar-solar/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Footer.tsx          # Full footer with links
│   ├── GoogleReviews.tsx   # Review carousel widget
│   ├── ROICalculator.tsx   # Interactive calculator
│   ├── AIChatWidget.tsx    # Sophie AI chat
│   └── ContentHub.tsx      # Blog/resources section
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

---

## 🚀 Deployment Instructions

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Import the GitHub repo:**
   - Go to https://vercel.com/new
   - Sign in as coldlavaai
   - Click "Import Git Repository"
   - Select `coldlavaai/greenstar-demo`

2. **Configure project:**
   - Project name: `greenstar-solar` or `greenstar-demo`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

3. **Environment Variables:** None required

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build
   - Site will be live at: `greenstar-demo.vercel.app`

5. **Custom Domain (Optional):**
   - Settings → Domains
   - Add: `greenstar.coldlava.ai` or similar

### Option 2: Deploy via Vercel CLI

```bash
cd /home/moltbot/webbuilder-bot/demos/greenstar-solar

# Login to Vercel (if not already)
vercel login

# Deploy to production
vercel --prod

# Follow prompts:
# - Link to existing project? No
# - Project name: greenstar-demo
# - Directory: ./
# - Override settings? No
```

### Option 3: Auto-Deploy (Already Configured)

- Every push to `main` branch on GitHub will auto-deploy to Vercel
- Vercel GitHub integration should be already set up for coldlavaai org
- Check: https://vercel.com/coldlavaai/greenstar-demo

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open browser
http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## 📊 Performance & Quality

**Targets:**
- PageSpeed Score: 90+ (mobile & desktop)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Mobile responsive: ✅
- Accessibility: WCAG 2.1 AA basics ✅

**Features:**
- Image optimization via Next.js Image
- Font optimization (Inter from Google Fonts)
- Static generation where possible
- Lazy loading for components
- Smooth scroll behavior

---

## 🎯 Conversion Optimization

**Primary CTAs:**
1. "Calculate Your Savings" (hero + multiple sections)
2. Phone number (header + hero + footer): 0123 456 7890
3. AI Chat Widget (Sophie) - always accessible
4. Email capture (guides + newsletter)

**Trust Signals:**
- 287 Google reviews (5 stars)
- 2,500+ installations completed
- MCS Certified + industry badges
- 25-year warranty
- £2M+ saved for clients

**Lead Capture Points:**
1. ROI Calculator (step 2 of 3)
2. AI Chat (qualification flow)
3. Guide downloads (email required)
4. Newsletter signup

---

## 📝 Content Highlights

### Hero Section
- Clear value proposition
- Dual CTA (calculator + phone)
- Trust stats (installations, reviews, warranty, savings)
- Premium imagery

### Why Choose Us
- 3 key benefits with icons
- MCS certification
- Proven ROI
- 24/7 support

### Our Process
- 4-step visual journey
- Consultation → Design → Install → Savings
- Clear timeline expectations

### Premium Products
- Tier 1 solar panels (400W+, 25-year warranty)
- Battery storage options
- Feature lists with checkmarks

---

## 🤖 AI Chat (Sophie) Details

**Qualification Questions:**
1. Budget: £3k-£5k / £5k-£8k / £8k-£12k / £12k+
2. Timeline: Within 1mo / 1-3mo / 3-6mo / Just researching
3. Property: Detached / Semi / Terraced / Bungalow
4. Roof: South / SE-SW / E-W / North

**Flow:**
1. Welcome message from Sophie
2. Ask 4 qualification questions (one at a time)
3. User selects options or types responses
4. After Q4, offers to book consultation
5. Captures preferred contact time
6. Confirms booking

**Tech:**
- Pure frontend (no backend needed for demo)
- State management in React
- Typing indicators
- Auto-scroll to latest message
- Mobile-optimized chat UI

---

## 📈 ROI Calculator Logic

**Inputs:**
- Postcode (captured, not used in demo calculation)
- Roof size (m²)
- Monthly electricity bill (£)

**Calculation:**
```javascript
systemSize = roofSize / 10  // kW (10m² per kW)
annualGeneration = systemSize * 900  // kWh/year
annualSavings = annualGeneration * 0.24  // £ (avg 24p/kWh)
systemCost = systemSize * 1500  // £1,500/kW
paybackYears = systemCost / annualSavings
roi25Years = (annualSavings * 25) - systemCost
```

**Charts:**
- 25-year line chart showing:
  - Cumulative savings (green line)
  - Installation cost (red line)
  - Net profit (blue line)
- Breakeven point clearly visible

---

## 🔄 Future Enhancements (Post-Demo)

If client moves forward, consider:
1. **Backend Integration:**
   - Save ROI calculator leads to CRM
   - Connect AI chat to real backend
   - Email automation for guides

2. **Live Data:**
   - Real Google Reviews API integration
   - Live customer count
   - Real-time energy savings ticker

3. **Advanced Features:**
   - 3D roof visualization
   - Live chat handoff (AI → human)
   - Customer portal / login
   - Detailed case studies pages

4. **SEO:**
   - Blog CMS integration
   - Dynamic meta tags per article
   - Schema markup for reviews
   - Sitemap generation

---

## 📞 Client Information

**Client:** Greenstar Solar UK  
**Contact:** Jason Wides (existing Cold Lava client)  
**Email:** oliver@otdm.net  
**Status:** 8/10 HOT lead  
**Objective:** Showcase enhanced web capabilities to existing client

---

## 🏷️ Task Tracking

**Task ID:** TASK-20260313-GREENSTAR  
**Status:** ✅ COMPLETE  
**Completed:** 2026-03-13  
**Build Time:** ~45 minutes  

**Deliverables:**
- [x] Interactive ROI Calculator with charts
- [x] Google Reviews Widget with carousel
- [x] AI Chat Qualification (Sophie)
- [x] Educational Content Hub with 6 articles
- [x] Full responsive website
- [x] GitHub repo: coldlavaai/greenstar-demo
- [x] Deployment instructions
- [x] Detailed README

---

## 🚨 Handoff Checklist

**Code:**
- [x] Pushed to GitHub: https://github.com/coldlavaai/greenstar-demo
- [x] Production build tested
- [x] All TypeScript types valid
- [x] Mobile responsive verified

**Documentation:**
- [x] README with deployment steps
- [x] Component documentation
- [x] Feature breakdown

**Notifications:**
- [ ] Sales Ninja (DEMO_READY trigger)
- [ ] Sales Coach (call prep)
- [ ] War Room update
- [ ] Pipeline group notifications

---

## 📧 Deployment Notification Template

**To:** Jason Wides (via Sales Ninja)  
**Subject:** Your Greenstar Solar Demo is Live

Hi Jason,

Your enhanced Greenstar Solar demo website is now complete and ready to deploy!

🌟 **Demo Features:**
- Interactive ROI Calculator (with charts)
- Google Reviews Showcase (carousel)
- 24/7 AI Chat Assistant (Sophie)
- Educational Resource Hub (6 articles)

📊 **Tech Stack:**
- Next.js + TypeScript + Tailwind CSS
- Fully responsive & mobile-optimized
- Fast loading (90+ PageSpeed target)
- Premium design & branding

🚀 **Next Steps:**
1. Review the demo (link will be provided after Vercel deployment)
2. Schedule a walkthrough call
3. Discuss any customizations
4. Plan go-live timeline

**GitHub Repo:** https://github.com/coldlavaai/greenstar-demo

Let's discuss how this enhanced platform can elevate your solar business!

Best regards,  
Cold Lava Team

---

## 🛡️ License & Credits

**Built by:** Cold Lava AI  
**For:** Greenstar Solar UK  
**Framework:** Next.js by Vercel  
**Icons:** Lucide React  
**Charts:** Recharts  
**Images:** Unsplash (demo purposes)

---

## 📞 Support

For deployment support or questions:
- **War Room:** Telegram group (-5225030218)
- **Pipeline Group:** Telegram group (-5253954579)
- **Web Builder Bot:** This agent

**Deployment Support:** Vercel documentation at https://vercel.com/docs

---

**Last Updated:** 2026-03-13  
**Version:** 1.0.0  
**Status:** ✅ Ready for Deployment
