# PROMPT FOR DEVELOPMENT AI AGENT

Build a complete, production-ready website for Meridian Admissions based on the comprehensive design brief and wireframe provided. This is an elite college counseling service that requires a distinctive, sophisticated aesthetic that avoids generic AI design patterns.

## Critical Design Principles

**AVOID AT ALL COSTS:**
- Generic fonts (Inter, Roboto, Arial, system fonts)
- Purple gradients on white backgrounds
- Generic blue corporate aesthetics
- Predictable layouts and cookie-cutter design
- Any "AI slop" aesthetic

**REQUIRED AESTHETIC - "Academic Prestige Meets Modern Sophistication":**
- Inspired by Ivy League architecture, prestigious scholarship ceremonies, and leather-bound academic journals
- Rich, deep burgundy/wine colors (#6b2737) as primary
- Elegant serif typography (Cormorant Garamond or Playfair Display) for headings
- Refined sans-serif (Outfit or similar) for body text
- Antique gold accents (#d4a574) for achievement elements
- Warm cream/parchment backgrounds (#faf7f2, #f5f1eb)
- Sophisticated animations with staggered reveals
- Asymmetric layouts with generous negative space
- Decorative borders, elegant dividers, atmospheric depth

## Technical Requirements

**Framework & Tools:**
- Modern React with TypeScript (or Next.js if preferred)
- Tailwind CSS for styling with custom configuration
- Framer Motion for animations
- React Hook Form for form handling
- Responsive design (mobile-first approach)
- Smooth scroll behavior
- Intersection Observer for scroll animations
- SEO optimized (meta tags, semantic HTML)

**Color Palette (Use CSS Variables):**
```css
--primary: #6b2737;           /* Deep burgundy */
--primary-light: #8b3d4f;     /* Lighter burgundy */
--accent-gold: #d4a574;       /* Antique gold */
--cream: #faf7f2;             /* Warm cream background */
--off-white: #f5f1eb;         /* Off-white background */
--text-dark: #2a1f1f;         /* Dark text */
--text-mid: #5a4f4f;          /* Mid-tone text */
--shadow: rgba(107, 39, 55, 0.12); /* Branded shadow */
```

**Typography:**
- Headings: 'Cormorant Garamond' or 'Playfair Display' (serif)
- Body: 'Outfit' or similar refined sans-serif (NOT Inter, NOT Roboto)
- Font weights: 300, 400, 500, 600, 700
- Letter spacing: Slightly increased for elegance

**Animation Requirements:**
- Fade-in on scroll for all major sections
- Staggered reveals (use animation-delay: 0.2s, 0.4s, etc.)
- Smooth hover states with transform and box-shadow
- Page load animations for hero section
- Custom cubic-bezier easing: cubic-bezier(0.4, 0, 0.2, 1)
- Scroll-triggered animations using Intersection Observer

## Website Structure & Content

### 1. NAVIGATION (Fixed/Sticky)
- Logo: "MERIDIAN ADMISSIONS" (Cormorant Garamond, burgundy)
- Links: About | Success | Services | Testimonials | Contact
- Backdrop blur when scrolled
- Smooth scroll to sections
- Mobile hamburger menu

### 2. HERO SECTION
**Layout:** Asymmetric grid (2 columns on desktop, stacked on mobile)

**Left Column:**
- Eyebrow text: "Elite Admissions Counseling" (uppercase, gold, small)
- H1: "Crafting Your Story" (large serif, burgundy)
- H1 continued: "for the Nation's Top Institutions" (on next line)
- Decorative gold line divider
- Subtitle: "With college admissions more competitive than ever, Dr. Abha Sinha helps ambitious students stand out and gain admission to Ivy League universities, top graduate schools, and prestigious scholarship programs."
- CTA Button: "Book Your Free Consultation" → (burgundy background, white text, arrow icon)

**Right Column:**
- Achievement card with shadow and gold left border
- Large stat: "100%" (Cormorant Garamond, 3.5rem)
- Description: "Success rate at top-tier institutions including every Ivy League university"
- Two smaller achievement cards below:
  - Trophy icon + "Rhodes, Marshall, Gates - Scholarship winners & finalists"
  - Graduation cap icon + "Harvard, Stanford, Wharton - Graduate school placements"

**Background:** Subtle radial gradient overlay (gold, very subtle)

### 3. CREDIBILITY SECTION (White Background)
**Header:**
- Eyebrow: "Proven Excellence"
- Title: "Success at America's Most Selective Institutions"
- Subtitle: "Dr. Sinha's students have been accepted to every Ivy League university, Stanford, and MIT. Her scholarship students have been selected as winners, finalists, and school candidates for the world's most prestigious awards."

**University Logos Grid:**
- Section title: "University Acceptances"
- Logo cards in responsive grid (6-8 per row on desktop)
- Logos: HARVARD, YALE, PRINCETON, COLUMBIA, PENN, DARTMOUTH, BROWN, CORNELL, STANFORD, MIT, CHICAGO, CAMBRIDGE
- Each logo card: off-white background, burgundy text, hover animation (lift + shadow + gold border)

**Scholarship Logos Grid:**
- Section title: "Competitive Scholarships"
- Logo cards: RHODES, MARSHALL, GATES, CHURCHILL
- Same styling as university logos

**Animation:** Slide-in animation on hover with gradient overlay

### 4. ABOUT SECTION (Cream Background) - THREE PANELS
**Header:**
- Eyebrow: "The Meridian Difference"
- Title: "Personal Attention. Strategic Insight. Proven Results."
- Gold decorative line (centered)

**Three Equal Columns (Responsive - stack on mobile):**

**Panel 1: Exceptional Track Record**
- Icon: 🏆 (large, filtered/grayscale)
- Heading: "Exceptional Track Record" (serif, burgundy)
- Bullet list with gold diamond bullets (✦):
  - Over 15 years of elite college counseling experience
  - Students accepted to all eight Ivy League institutions
  - MIT, Stanford, University of Chicago, Cambridge, LSE admissions
  - Graduate placements at Harvard, Stanford, Wharton
  - Rhodes, Marshall, Gates, and Churchill Scholarship winners
  - 20+ years as Columbia University alumni interviewer

**Panel 2: Personalized Strategic Approach**
- Icon: 🎯
- Heading: "Personalized Strategic Approach"
- Bullet list:
  - One-on-one personal attention—Dr. Sinha oversees every aspect
  - No teams, no handoffs, no templates
  - Analytical rigor combined with creative storytelling
  - Uncover your authentic strengths and unique narrative
  - Insider knowledge from two decades as alumni interviewer
  - Strategic positioning for competitive advantage
- Quote box (italic, serif, off-white background, gold left border):
  "I believe that every student makes a unique and essential contribution to their educational community. Each student possesses distinct gifts, and effective counseling helps them discover, articulate, and leverage those strengths."
  — Dr. Abha Sinha

**Panel 3: Complete Guidance**
- Icon: 🎓
- Heading: "Complete Guidance"
- Three sub-sections (off-white boxes with gold left border):
  
  **Undergraduate Admissions**
  - Application strategy & school selection
  - Personal statement development
  - Supplemental essays & activities optimization
  - Interview preparation
  
  **Graduate School**
  - Top MBA, medical, and law school placements
  - Harvard, Stanford, Wharton successes
  - Professional application expertise
  
  **Competitive Scholarships**
  - Rhodes, Marshall, Gates, Churchill prep
  - Winners, finalists, school candidates
  - Strategic positioning for elite awards

**Hover Effect:** Cards lift up, show shadow, gold border animates from left

### 5. PACKAGES SECTION (White to Off-White Gradient Background)
**Header:**
- Eyebrow: "Investment in Excellence"
- Title: "Choose Your Path to Success"
- Subtitle: "Whether you need focused essay support or comprehensive full-season guidance, Dr. Sinha provides personalized service tailored to your ambitions."

**Three Package Cards (Equal Width, Responsive):**

**Package 1: Personal Statement Intensive**
- Price: $2,500 (large, serif, burgundy)
- Subtitle: "Deep-dive brainstorming + 2–3 rounds of edits" (gold)
- Features (gold diamond bullets):
  - Comprehensive brainstorming session
  - 2-3 rounds of detailed editing
  - One powerful, compelling essay
- CTA: "Get Started" (outlined button, burgundy border, fills on hover)

**Package 2: Three-School Essay Package**
- Price: $12,500
- Price note: "Range: $10,000–$15,000 depending on complexity" (italic, small)
- Subtitle: "Common App + supplements for 2 schools"
- Features:
  - Common App personal statement
  - Supplemental essays for 2 schools
  - Comprehensive strategy & editing
- CTA: "Get Started"

**Package 3: Comprehensive Ivy Strategy** ⭐ FEATURED
- Badge: "MOST POPULAR" (burgundy background, white text, positioned at top right)
- Price: $20,000
- Subtitle: "Full-season support for top applicants"
- Features:
  - Personal statement development
  - All supplemental essays
  - Activities list optimization
  - Application strategy & school selection
  - Key summer programs identification & application support
  - Interview preparation with Dr. Sinha AND real college interviewers
  - Complete personalized guidance from start to finish
- CTA: "Get Started"
- Special styling: Gold border (2-3px), elevated shadow

**Card Styling:**
- White background
- Subtle border
- Top border animates to gold gradient on hover
- Hover: Lift up (-10px), increase shadow

**Note Below Packages (Centered, off-white box with gold border):**
"All packages include direct, personal attention from Dr. Sinha. No teams. No templates. Just strategic, authentic storytelling that helps you stand out from the crowd."

### 6. TESTIMONIALS SECTION (Cream Background)
**Header:**
- Eyebrow: "Student Success"
- Title: "What Families Say"

**Three Testimonial Cards (Equal Width):**

**Testimonial 1:**
- Large decorative opening quote mark (gold, Cormorant Garamond, faded)
- Quote: "Dr. Sinha helped me discover and articulate my authentic story. Her strategic guidance was invaluable throughout the entire process." (italic serif)
- Author: "Student Name" (bold)
- School: "Harvard '26" (smaller)

**Testimonial 2:**
- Quote: "The personal attention and insider knowledge Dr. Sinha provided made all the difference. Our daughter was accepted to her dream school."
- Author: "Parent Name"
- School: "Parent, Stanford '27"

**Testimonial 3:**
- Quote: "From essay development to interview prep, Dr. Sinha was with us every step of the way. The results speak for themselves."
- Author: "Student Name"
- School: "Yale '25 | Rhodes Finalist"

**Card Styling:**
- White background
- Soft shadow
- Top border animates to gold on hover
- Hover: Lift slightly

### 7. CTA SECTION (Burgundy Background, White Text)
- Background: Solid burgundy with subtle radial gradient overlay (white, very faded)
- H2: "Ready to Craft Your Story?" (large serif, white)
- Subtitle: "Schedule your free consultation with Dr. Sinha to discuss your goals and discover how personalized guidance can transform your application."
- CTA Button: "Book Your Free Consultation →" (white background, burgundy text, hover: gold background)

### 8. CONTACT FORM SECTION (White Background)
**Header:**
- Eyebrow: "Begin Your Journey"
- Title: "Get In Touch"

**Form (Centered, Max-Width 700px, Off-White Background, Gold Top Border):**

**Two-Column Row:**
- Student Name * (required)
- Parent/Guardian Name

**Two-Column Row:**
- Email Address * (required)
- Phone Number

**Full Width:**
- Current Grade Level * (dropdown: Sophomore, Junior, Senior, Gap Year, Graduate School)
- Schools/Programs of Interest (textarea, placeholder: "Share your aspirations...")
- How did you hear about us? (dropdown: Google Search, Referral, Social Media, Other)
- Message/Questions (textarea, placeholder: "Tell us about your goals...")

**Submit Button:** "Send Message" (full width, burgundy background, white text, hover effect)

**Input Styling:**
- White background
- Light burgundy border
- Focus: Gold border with subtle shadow
- Rounded corners (subtle, 2px)

### 9. FOOTER (Dark Background)
- Background: Very dark brown/burgundy (#2a1f1f)
- Text: Light gray/white (rgba(255, 255, 255, 0.8))
- Content (centered):
  - © 2025 Meridian Admissions | Dr. Abha Sinha
  - Privacy Policy | Terms of Service (gold links)

## Animation & Interaction Details

**Scroll Animations:**
1. Implement Intersection Observer
2. Add `scroll-reveal` class to all major sections
3. When element enters viewport (85% threshold), add `revealed` class
4. `revealed` class triggers: opacity 0 → 1, translateY(30px) → 0
5. Use staggered delays for grid items (0.2s, 0.4s increments)

**Hover States:**
- Cards: translateY(-5px to -10px), increase box-shadow, border color change
- Buttons: translateY(-2px), increase shadow, background transition
- Logo items: Slide-in gradient overlay, lift effect
- Links: Underline animation from center

**Page Load:**
- Hero content: fadeInUp animation (1s)
- Hero visual: fadeInRight animation (1s, 0.3s delay)
- Smooth entrance for all elements

**Navbar:**
- Transparent initially
- On scroll (50px): Add backdrop blur, subtle shadow
- Smooth transition (0.4s ease)

## Code Structure

```
meridian-admissions/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Credibility.tsx
│   │   ├── About.tsx
│   │   ├── Packages.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CTA.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── styles/
│   │   ├── globals.css (Tailwind imports + custom CSS variables)
│   │   └── animations.css
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── lib/
│   │   └── utils.ts
│   └── app/
│       ├── page.tsx (Main page)
│       └── layout.tsx
├── public/
│   └── (assets if needed)
├── tailwind.config.ts (Custom colors, fonts, animations)
└── package.json
```

## Implementation Checklist

- [ ] Set up Next.js/React project with TypeScript
- [ ] Install dependencies (Tailwind, Framer Motion, React Hook Form)
- [ ] Configure Tailwind with custom theme (colors, fonts, animations)
- [ ] Import Google Fonts (Cormorant Garamond, Outfit)
- [ ] Create reusable components for each section
- [ ] Implement scroll reveal animation system
- [ ] Build responsive navigation with mobile menu
- [ ] Create all sections with exact content from this spec
- [ ] Implement form handling with validation
- [ ] Add smooth scroll behavior
- [ ] Test all animations and transitions
- [ ] Ensure full mobile responsiveness
- [ ] Optimize for performance (lazy loading, image optimization)
- [ ] Add SEO meta tags
- [ ] Test in multiple browsers
- [ ] Deploy to production

## Additional Notes

**Design Philosophy:**
This is a boutique, premium service for elite college admissions. Every design choice should convey:
- Sophistication and prestige (not corporate)
- Personal attention (not mass-market)
- Academic excellence (Ivy League aesthetic)
- Trustworthiness and results (testimonials, logos)

**Quality Standards:**
- Production-ready code (clean, commented, maintainable)
- Fully responsive (mobile-first)
- Accessible (WCAG 2.1 AA compliance)
- Fast loading (optimized assets, lazy loading)
- Smooth animations (60fps, no jank)
- Cross-browser compatible

**Reference Files:**
- Design Brief: meridian-admissions-design-brief.md (comprehensive content guide)
- Wireframe: meridian-admissions-distinctive.html (visual reference for styling and layout)

Build this website with the same level of care and attention to detail that Dr. Sinha provides to her students. Every pixel matters.

---

**CRITICAL REMINDERS:**
1. NO Inter, NO Roboto, NO generic fonts
2. NO purple gradients, NO generic blue schemes
3. USE Cormorant Garamond + Outfit (or approved alternatives)
4. USE burgundy/cream/gold color palette
5. IMPLEMENT sophisticated animations (staggered reveals, elegant hovers)
6. CREATE asymmetric, interesting layouts (not cookie-cutter grids)
7. ENSURE every element has intentional design choices
8. MAKE this look like a premium, boutique service

This should be a website that Dr. Sinha would be proud to show to Harvard-bound students and their discerning parents.