# G3 Architects — Website Requirements Document

---

## 1. Project Overview

**Project Name:** G3 Architects Landing Page  
**Canvas / Design Width:** 1600px  
**Responsive:** Yes — Desktop (1600px), Laptop (1280px), Tablet (768px), Mobile (375px)  
**Tech Stack:** Vanilla HTML5, CSS3, JavaScript (ES6+) — three separate files  
**Files:**
- `index.html` — Markup & structure
- `style.css` — All styling, layout, responsive rules
- `script.js` — Interactivity, animations, scroll behavior

---

## 2. Global Design Tokens

| Token | Value |
|---|---|
| Background (cream) | `#FAF0E6` |
| White | `#FFFFFF` |
| Accent / Orange | `#F4A324` |
| Text Primary | `#1A1A1A` |
| Text Secondary | `#666666` |
| Border | `#E0E0E0` |
| Font (Display/Headings) | `"Playfair Display", serif` |
| Font (Body) | `"DM Sans", sans-serif` |
| Section H-Padding (desktop) | `200px` |
| Section V-Padding (desktop) | `80px` |
| Nav H-Padding | `80px` |
| Border Radius (cards) | `8px` |
| Border Radius (buttons) | `6px` |
| Transition | `0.3s ease` |

---

## 3. File Structure

```
g3-architects/
├── index.html
├── style.css
└── script.js
```

---

## 4. Section-by-Section Requirements

---

### 4.1 Navigation Bar

**Height:** 70px  
**Position:** Sticky top, `z-index: 1000`  
**Background:** `#FAF0E6`  
**Padding:** `0 80px`  
**Layout:** Flexbox, `justify-content: space-between`, `align-items: center`

#### Logo
- Text: `G3 Architects`
- Font: `"Playfair Display"`, bold, 20px
- Color: `#1A1A1A`

#### Nav Links
- Items: `Home`, `About`, `Contact Us`, `Login`
- Font: `"DM Sans"`, 15px, medium weight
- Color: `#1A1A1A`
- Gap between links: `32px`
- Hover: color `#F4A324`, transition `0.3s`
- Active state: `#F4A324` with underline

#### Hamburger Menu (Mobile only)
- Visible below `768px`
- 3 horizontal bars, color `#1A1A1A`
- Toggles full-width dropdown nav on click
- JS controlled: `aria-expanded` toggle

---

### 4.2 Hero Section

**Min-height:** 620px  
**Background:** `#FAF0E6`  
**Padding:** `80px 200px 60px`  
**Layout:** Flex column, centered (text center, image center)

#### Headline
- Line 1: `Brand New`
- Line 2: `Group of Architects`
- Font: `"Playfair Display"`, 52px, bold
- Color: `#1A1A1A`
- Line-height: 1.2

#### Subtext
- Content: Lorem Ipsum paragraph
- Font: `"DM Sans"`, 15px, color `#888`
- Max-width: 520px
- Margin: `16px auto 0`
- Line-height: 1.6
- Text-align: center

#### CTA Button — "Explore More"
- Background: `#F4A324`
- Text: white, 14px, bold
- Padding: `12px 28px`
- Border-radius: `6px`
- Border: none
- Margin-top: `24px`
- Hover: background `#d4891a`, transform `translateY(-2px)`, box-shadow
- Cursor: pointer

#### Hero Image
- Alt: `"Three G3 Architects professionals standing confidently in front of a modern glass building"`
- Width: ~1160px (max-width 100%)
- Height: ~360px
- Object-fit: cover
- Border-radius: `12px`
- Margin-top: `40px`
- Placeholder: `https://placehold.co/1160x360/d4c5b0/555555?text=G3+Architects+Team`

---

### 4.3 Features Intro Section

**Background:** `#FFFFFF`  
**Padding:** `80px 200px`  
**Layout:** 2-column flex, `gap: 80px`, `align-items: center`

#### Left Column — 2×2 Image Grid
- Layout: CSS Grid, `grid-template-columns: 1fr 1fr`, `gap: 12px`
- Total width: ~460px

| Slot | Alt Text | Placeholder |
|---|---|---|
| Top-left | `"Architect lead discussing blueprints with a client in the office"` | `560x360/ccc/555?text=Team+Meeting` |
| Top-right | `"Three G3 team members in a professional group meeting"` | `560x360/ccc/555?text=Group+Meeting` |
| Bottom-left | `"Female architect reviewing design documents with a colleague"` | `560x360/ccc/555?text=Design+Review` |
| Bottom-right | `"Business partners shaking hands after a successful project deal"` | `560x360/ccc/555?text=Partnership` |

Each image: `width: 100%`, `height: 180px`, `object-fit: cover`, `border-radius: 6px`

#### Right Column — Text Block
- Eyebrow: `"Quick list of"` — 16px, normal, `#1A1A1A`
- Headline: `"Our Features"` — 30px, bold, `#F4A324`
- Body: Lorem paragraph — 14px, `#888`, max-width 320px, margin-top 12px
- CTA Button: Same style as hero "Explore More", margin-top 24px

---

### 4.4 Features Detail Section

**Background:** `#FFFFFF`  
**Padding:** `80px 200px`  
**Layout:** 2-column flex, `gap: 80px`, `align-items: center`

#### Left Column — Feature List

**Section Headline:**
- Left accent bar: `4px wide`, `#F4A324`, `border-radius: 2px`, height ~60px
- Headline: `"Features you will love & enjoy"` — 28px, bold, `#1A1A1A`
- Body: 14px, `#888`, max-width 360px, margin-top 12px
- Margin-bottom before list: `32px`

**4 Feature Items** (gap: 20px between each):

| # | Title | Description |
|---|---|---|
| 1 | Desktop & Mobile Version | Lorem description text |
| 2 | Drag & Drop Builder | Lorem description text |
| 3 | Awesome Modern Design | Lorem description text |
| 4 | Super Easy to Edit | Lorem description text |

Each item:
- Title: 15px, bold, `#1A1A1A`
- Description: 13px, `#888`, line-height 1.6, margin-top 4px

#### Right Column — Image + Badge

**Image:**
- Alt: `"G3 Architects project manager smiling while reviewing design plans on a whiteboard"`
- Width: ~420px, Height: ~500px
- Object-fit: cover
- Border-radius: `8px`
- Position: relative (for badge overlap)
- Placeholder: `https://placehold.co/420x500/c8b89a/333333?text=Project+Manager`

**Floating Badge:**
- Position: `absolute`, `bottom: -20px`, `left: -30px`
- Background: `#F4A324`
- Width: 160px, Height: 120px
- Border-radius: `8px`
- Display: flex column, centered
- Number: `"10+"` — 36px, bold, white
- Label: `"Year Experience"` — 14px, white

---

### 4.5 Stats Section — "Some Facts"

**Background:** `#FFFFFF`  
**Padding:** `80px 200px`

**Header:**
- Title: `"Some Facts"` — 28px, bold, `#1A1A1A`
- Subtext: 14px, `#888`, max-width 400px, margin-top 10px

**Stats Row:**
- Layout: Flex row, `gap: 20px`, `margin-top: 40px`
- 4 cards equal width (~240px)

| Icon | Number | Label |
|---|---|---|
| 🏆 | 54 | Awards Winnings |
| 📋 | 1458 | Project Finished |
| 👥 | 590 | Clients Worked |
| ✉️ | 22578 | Email Send |

Each card:
- Background: `#FFFFFF`
- Border: `1px solid #E0E0E0`
- Border-radius: `8px`
- Padding: `24px`
- Icon: 28px, top of card
- Number: 32px, bold, `#1A1A1A`, margin-top 8px
- Label: 13px, `#888`
- Hover: `box-shadow: 0 4px 20px rgba(0,0,0,0.08)`, `transform: translateY(-4px)`, transition `0.3s`

**Counter Animation:**
- Numbers count up from 0 to final value on scroll into view
- JS: `IntersectionObserver` triggers count-up animation
- Duration: 2000ms, easing: ease-out

---

### 4.6 Sponsors Section

**Background:** `#FFFFFF`  
**Padding:** `60px 200px`

**Header:**
- Title: `"Our Sponsors"` — 28px, bold, centered
- Subtext: 14px, `#888`, centered, max-width 460px, margin-top 10px

**Sponsor Logos Row:**
- Layout: Flex, `justify-content: space-evenly`, `align-items: center`
- Margin-top: `40px`
- 5 logos (SVG text-based or styled `<span>` elements)

| Logo | Alt Text |
|---|---|
| Spotify | `"Spotify — official sponsor of G3 Architects"` |
| Amazon | `"Amazon — official sponsor of G3 Architects"` |
| Google | `"Google — official sponsor of G3 Architects"` |
| Télérama | `"Telerama — official sponsor of G3 Architects"` |
| Figma | `"Figma — official sponsor of G3 Architects"` |

Logo styling:
- Color: `#888` (grayscale)
- Font: brand-appropriate weight, 18–22px
- Hover: color `#1A1A1A`, transition `0.3s`

---

### 4.7 Footer

**Background:** `#FAF0E6`  
**Height:** 60px  
**Layout:** Flex, centered both axes  
**Text:** `"All rights reserved copyright@2023 startup landing page design"`  
- Font-size: 13px  
- Color: `#888`

---

## 5. Responsive Breakpoints

| Breakpoint | Rules |
|---|---|
| `≤ 1280px` | Section padding: `80px 100px` |
| `≤ 1024px` | Section padding: `60px 60px`; 2-col layouts remain |
| `≤ 768px` | All 2-col layouts → single column; Nav collapses to hamburger; Hero font 36px; Stats cards → 2×2 grid |
| `≤ 480px` | Section padding: `40px 24px`; Hero font 28px; Stats cards → 1 col; Sponsor logos → 2-col wrap |
| `≤ 375px` | Full fluid layout; badge repositioned inside image container; font sizes reduced |

---

## 6. JavaScript Requirements

| Feature | Implementation |
|---|---|
| Sticky Nav shadow | Add `box-shadow` class on scroll > 10px via `scroll` event |
| Mobile hamburger | Toggle `.nav-open` class, animate menu slide-down |
| Scroll-triggered counter | `IntersectionObserver` on `.stat-number`, count up animation |
| Smooth scroll | `scroll-behavior: smooth` on `html` + JS fallback for anchor links |
| Scroll reveal | Fade-in + translateY on sections entering viewport via `IntersectionObserver` |

---

## 7. Accessibility Requirements

- All `<img>` tags must have descriptive `alt` attributes (specified per image above)
- Nav includes `aria-label="Main navigation"`
- Hamburger button: `aria-label="Toggle navigation"`, `aria-expanded` managed by JS
- Color contrast ratio ≥ 4.5:1 for all body text
- Focus states visible on all interactive elements
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>`

---

## 8. Performance Notes

- Images use `loading="lazy"` except hero (eager)
- CSS custom properties (variables) used throughout
- No external JS libraries — vanilla only
- Google Fonts loaded via `<link>` with `display=swap`
