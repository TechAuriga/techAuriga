# TechAuriga Website - Product Requirements Document

## Project Overview
**Project Name:** TechAuriga - AI Software Company Website
**Date Created:** December 2025
**Status:** Frontend Complete with Mock Data

## Original Problem Statement
Create an advanced website for TechAuriga, an AI-based software company focusing on product development and services for enterprises. The website should feature:
- Blue and green color combination matching the company logo
- White background
- Advanced parallax effects and interactive tech elements
- Particle effects for a technology-driven feel
- Sections: Home, About, Services, Products, Contact

## User Personas
1. **Enterprise Decision Makers** - CTOs, VPs seeking AI solutions
2. **Technical Leads** - Developers evaluating AI services and products
3. **Business Analysts** - Professionals researching AI capabilities
4. **Potential Clients** - Companies looking for AI transformation partners

## Core Requirements

### Design Requirements
- ✅ Blue (#0066CC) and Green (#00E5A0) color scheme
- ✅ White background with subtle gradients
- ✅ Modern Inter font family
- ✅ Parallax scrolling effects
- ✅ Interactive particle background
- ✅ Smooth animations and transitions
- ✅ Responsive design for all devices
- ✅ Glassmorphism effects on cards

### Technology Stack
- **Frontend:** React 19, Tailwind CSS, Shadcn UI components
- **Styling:** Custom CSS animations, gradient effects
- **Routing:** React Router DOM
- **UI Components:** Lucide React icons, Shadcn components
- **Backend (Planned):** FastAPI, MongoDB

### Functional Requirements
- ✅ Sticky header with smooth scroll navigation
- ✅ Hero section with CTA buttons
- ✅ About section with company stats
- ✅ Services showcase (ML, Azure AI, Fabric, Consulting)
- ✅ Products catalog with features
- ✅ Dual contact forms (Contact & Demo Request)
- ✅ Toast notifications for form submissions
- ✅ Footer with company info and social links

## What's Been Implemented

### December 2025 - Initial Frontend Development
**Components Created:**
1. `ParticleBackground.jsx` - Interactive particle system with mouse interaction
2. `Header.jsx` - Sticky navigation with scroll effects
3. `Hero.jsx` - Parallax hero section with stats and CTAs
4. `About.jsx` - Company overview with animated stats cards
5. `Services.jsx` - 4 service cards with images and features
6. `Products.jsx` - 3 product cards with demo requests
7. `Contact.jsx` - Tabbed forms for contact and demo requests
8. `Footer.jsx` - Company information and social links

**Data Management:**
- `mock.js` - Complete mock data for all sections
- All content is currently using mock data
- Form submissions show toast notifications (frontend only)

**Features:**
- ✅ Smooth scroll navigation
- ✅ Parallax effects on multiple sections
- ✅ Particle effects in hero section
- ✅ Hover animations on cards
- ✅ Scroll-triggered fade-in animations
- ✅ Responsive grid layouts
- ✅ Custom scrollbar styling
- ✅ Interactive buttons with micro-animations

## Prioritized Backlog

### P0 - Critical (Backend Development)
- [ ] Set up FastAPI backend structure
- [ ] Create MongoDB schemas for contacts, demos, services, products
- [ ] Implement `/api/contact` endpoint
- [ ] Implement `/api/demo-request` endpoint
- [ ] Connect contact forms to backend
- [ ] Email notification system for form submissions
- [ ] Admin dashboard for managing inquiries

### P1 - High Priority
- [ ] CMS for managing services and products content
- [ ] Blog section for AI insights and case studies
- [ ] Testimonials section with client reviews
- [ ] Case studies showcase
- [ ] Newsletter subscription
- [ ] Analytics integration (Google Analytics)
- [ ] SEO optimization

### P2 - Medium Priority
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Advanced animations library integration
- [ ] Video backgrounds option
- [ ] Interactive 3D elements
- [ ] Chatbot integration
- [ ] Live chat support

## Next Tasks
1. **Backend API Development** - Build FastAPI endpoints for contact and demo forms
2. **Database Integration** - Set up MongoDB collections and schemas
3. **Email Service** - Integrate email service for form notifications
4. **Testing** - End-to-end testing with testing agent
5. **Content Management** - Build admin panel for content updates

## API Contracts (To Be Implemented)

### POST /api/contact
```json
Request:
{
  "name": "string",
  "email": "string",
  "company": "string",
  "phone": "string",
  "subject": "string",
  "message": "string"
}

Response:
{
  "success": true,
  "message": "Contact request received",
  "id": "contact_id"
}
```

### POST /api/demo-request
```json
Request:
{
  "name": "string",
  "email": "string",
  "company": "string",
  "phone": "string",
  "productInterest": "string",
  "message": "string"
}

Response:
{
  "success": true,
  "message": "Demo request received",
  "id": "demo_id"
}
```

## Design System

### Colors
- Primary Blue: `#0066CC`
- Primary Green: `#00E5A0`
- Background: `#FFFFFF`
- Text Primary: `#1F2937`
- Text Secondary: `#6B7280`

### Typography
- Font Family: 'Inter'
- Headings: Bold (700-900)
- Body: Regular (400-500)

### Spacing
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Section Padding: `py-24`
- Card Padding: `p-6`

### Effects
- Particle density: 60 particles
- Parallax speed: 0.1-0.5
- Transition duration: 300ms
- Hover scale: 1.05

## Updates - December 2025

### Enhanced Parallax Effects (Latest Update)
**Components Updated:**
1. All sections now feature multi-layer parallax backgrounds
2. Added `FloatingShapes.jsx` - Dynamic floating geometric shapes
3. Added `AnimatedGrid.jsx` - Subtle grid pattern overlay
4. Enhanced CSS with smoother transitions using cubic-bezier easing

**Parallax Layers:**
- **Layer 1 (Slowest):** Large gradient orbs - 0.05-0.15 speed
- **Layer 2 (Medium):** Geometric shapes - 0.15-0.25 speed  
- **Layer 3 (Fast):** Accent elements - 0.3-0.5 speed
- **Layer 4:** Floating shapes component with varied speeds
- **Layer 5:** Animated grid overlay

**Performance Optimizations:**
- Using `will-change: transform` for smooth GPU acceleration
- `transform: translateZ(0)` for hardware acceleration
- Optimized transition timing with cubic-bezier curves
- Reduced opacity for performance (0.02-0.025)

**Visual Enhancements:**
- Multi-directional movement (X and Y axis)
- Different speeds create depth perception
- Smooth 0.05-0.1s transitions for fluid motion
- 12-15 floating shapes per section
- Subtle grid overlay at 2-2.5% opacity

All sections now have immersive, buttery-smooth parallax scrolling that creates depth and enhances the technology-driven aesthetic.
