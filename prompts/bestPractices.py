# LLM SEO Boilerplate

modernSEO="""Maintain strict adherence to ALL MAJOR SEO best practices from the following list:

**1. Content Strategy **
• E-E-A-T and Helpful Content
• Write original substantive text that answers user questions
• Adopt authoritative yet accessible tone
• Cite sources and real-world examples to build trust
• Keyword and Intent Alignment
• Use primary keyword naturally in title, H1, first 100 words
• Weave related terms in subheadings and body for semantic richness
• Avoid repeated exact-match stuffing
• Internal Linking
• Link contextually to relevant service or resource pages
• Use clear descriptive anchor text not “click here”
• Provide placeholders or URL lists if automating
**2. On-Page and Technical SEO **
• Semantic HTML Structure
• Wrap main content in <main> and break into <article>, <section>, <header>, <footer>
• One H1 per page then sequential H2–H6 without skipping levels
• Meta Tags
• Title tag 50–60 characters with primary keyword near start
• Meta description 150–160 characters summarizing page + call-to-action
• Image Optimization
• Descriptive alt text or empty alt for decorative images
• Include width/height attributes
• Comment to use compressed WebP or preload
• Performance and Core Web Vitals
• Target LCP ≤ 2.5 s by prioritizing above-the-fold assets and preloading
• Target INP < 200 ms by deferring non-critical scripts and minimizing main-thread tasks
• Target CLS < 0.1 by reserving space for images/embeds with explicit dimensions
• Generate clean HTML avoiding unnecessary tags or deep nested DOM
• Mobile-First Responsiveness
• Use fluid layouts, percentage widths, flex or grid
• Ensure tap targets large enough and text legible without zoom
• Avoid intrusive interstitials or pop-ups that cover content on entry
**3. Structured Data and Discoverability **
• JSON-LD Implementation
• Embed in <script type="application/ld+json"> in head or body
• Select most specific schema based on page type (Article, FAQPage, LocalBusiness, etc.)
• Populate all required and relevant recommended properties accurately
• High-Impact Schema Types (examples)
• LocalBusiness: name address telephone geo openingHours
• Article: headline image datePublished author publisher
• FAQPage: array of Question/Answer objects
• BreadcrumbList: ListItem array with position name and item URL
**4. Accessibility and Inclusive Design **
• WCAG 2.1 AA Compliance
• All images require alt attributes; decorative images use empty alt=""
• Form inputs must have visible associated <label> elements
• Ensure keyboard navigation for links buttons form fields and custom components
• Use ARIA only when semantic HTML is insufficient and apply correctly
• For multimedia embeds include captions and transcripts placeholders
• Note for CSS implementers: ensure 4.5:1 contrast for normal text and 3:1 for large text
**5. Google Ads Campaign Optimization **
• Account Structure
• Separate campaigns by service or intent (eg back-pain rehab sports injury)
• Dedicated brand campaign to protect clinic name
• Include remarketing campaign for site visitors who did not convert
• Keywords and Match Types
• Use exact and phrase match on high-value terms for control
• Use broad match + smart bidding to discover new relevant queries
• Regularly add negatives (eg “jobs” “courses”) to block irrelevant clicks
• Include long-tail and location-specific keywords (eg “Calgary shoulder therapy”)
• Ad Copy and Assets
• Patient-focused headlines listing USPs (eg “Certified Sports Rehab Specialists”)
• Clear CTA (eg “Book Your Appointment Now”)
• Enable location call sitelink callout structured snippet and image extensions
• Match ad text closely to landing page content for high Quality Score
• Bidding and Budget
• Use smart bidding (Target CPA or Maximize Conversions) tied to tracked conversions
• Apply geo bid modifiers boosting bids for nearby areas and reducing for farther zones
• Schedule ads during business hours or adjust bids off-hours
• Monitor impression share lost to budget and increase spend if CPA remains profitable
• Landing Page Experience
• Use dedicated pages per ad group matching ad headline and offer
• Strong above-the-fold headline subheadline and CTA button or form
• Optimize for speed core vitals and mobile usability
• Include testimonials insurance info and trust signals
• A/B test headlines CTAs and form layouts to improve conversion rate
• Attribution and Tracking
• Implement Google Ads conversion tags on thank-you pages and form submissions
• Enable call tracking via call extensions and website call conversions
• Link GA4 for deeper behavioral insights and import events as conversions
• Use data-driven attribution model to credit all relevant touchpoints
• Record offline conversions when possible (patient intake source question)
6. Practices to Exclude (Deprecated or Penalized)
• Keyword stuffing in titles headers body or alt text
• <meta name="keywords"> tag
• Invisible text tiny text or hidden links
• Over-optimized anchor text or link schemes
• Doorway pages targeting minor keyword variations with thin content
• Mandatory AMP for all pages (use responsive design instead)
• Excessive ads above the fold or intrusive pop-ups on entry

"""
