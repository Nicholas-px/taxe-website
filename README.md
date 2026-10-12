# Insights & Solutions Consulting — Corporate Website

A responsive, multi-page corporate website for **Insights & Solutions Consulting (I&S Consulting)**, an Arlington, VA-based firm specializing in international development consulting, strategic advisory, and community impact.

## Overview

Insights & Solutions Consulting partners with organizations, governments, and communities worldwide to design and implement sustainable development programs that drive measurable social impact. This repository contains the complete source code for the firm's public-facing website, which communicates the company's service offerings, leadership expertise, thought-leadership insights, and contact information to prospective clients and partners.

## Key Features

- **Responsive Multi-Page Layout** — Fully mobile-optimized pages including Home, About Us, Our Services, Insights (blog), Contact Us, Privacy Policy, and Terms of Service.
- **Interactive Hero & Animated UI** — CSS keyframe animations (fade-in, float, rotate, pulse) and scroll-triggered counter animations deliver a polished, modern user experience.
- **Service Showcase** — Dedicated sections for Strategy & Advisory, Monitoring & Evaluation, Capacity Building, and Research & Analysis with a structured engagement workflow.
- **Insights & Thought Leadership** — A modular blog-style section featuring field narratives and professional insights drawn from decades of international development work.
- **Leadership Profile** — Highlights 30+ years of experience across USAID, UN Development Program, CARE International, IRC, and government agencies at city, state, and international levels.
- **Contact Integration** — Contact form, embedded Google Maps, office hours display, and direct email/phone links for streamlined client engagement.
- **Brand Carousel** — Auto-rotating partner/client logo carousel powered by Owl Carousel with custom navigation controls.
- **Sticky Navigation & Mobile Menu** — jQuery-driven mobile hamburger menu and sticky header for seamless navigation across all device sizes.

## Tech Stack

| Layer        | Technology                                                    |
|--------------|---------------------------------------------------------------|
| Markup       | HTML5 (semantic, multi-page)                                  |
| Styling      | Tailwind CSS (CDN), custom CSS with @font-face (Poppins, Raleway) |
| Interactivity | jQuery 3.7, Alpine.js 3.x                                    |
| Carousel     | Owl Carousel 2.3.4                                            |
| Icons        | Font Awesome 6.5                                              |
| Maps         | Google Maps Embed API                                         |
| Animations   | CSS keyframes, IntersectionObserver-based scroll triggers      |

## Project Structure

```
├── index.html                  # Homepage — hero, services overview, stats, partner carousel
├── about-us.html               # Company background, mission, leadership profile
├── our-services.html           # Detailed service offerings and engagement process
├── insights_page.html          # Blog/insights listing page
├── contact-us.html             # Contact form, map, and office hours
├── privacy-policy.html         # Privacy policy
├── terms-of-service.html       # Terms of service
├── insight-pages/              # Individual insight/blog post pages
│   ├── Hot_peppers.html
│   ├── Sunset_insight.html
│   ├── Stupidity_tour.html
│   └── Last_eggs.html
├── css/
│   └── style.css               # Tailwind directives, custom animations, font faces
├── js/
│   └── app.js                  # Tailwind config, mobile menu, carousel init, counter animation
└── assets/
    ├── img/                    # Logo variants and brand assets
    └── fonts/                  # Poppins and Raleway font files
```

## Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/samie-mirghani/insights_and_solutions_consulting_website.git
   cd insights_and_solutions_consulting_website
   ```

2. **Open locally**
   Since this is a static site using CDN-hosted dependencies, simply open `index.html` in a browser:
   ```bash
   open index.html
   # or use a local server for best results:
   npx serve .
   ```

3. **Development**
   - Edit HTML files directly; Tailwind CSS is loaded via CDN and configured in `js/app.js`.
   - Custom animations and font declarations live in `css/style.css`.
   - No build step is required — all dependencies are loaded from CDNs (Tailwind, jQuery, Alpine.js, Owl Carousel, Font Awesome).

## License

Copyright &copy; 2025 Insights & Solutions Consulting. All rights reserved.
