# Jade Garden — Restaurant Website

A modern, fully static restaurant website for **Jade Garden**, an authentic Chinese fine dining restaurant in San Diego. Built with Next.js 16 App Router and exported as static HTML for zero-server hosting on Hostinger (or any Apache/Nginx shared host).

---

## Live Preview

**[https://jaderestaurant.veloraweb.co.uk](https://jaderestaurant.veloraweb.co.uk)**

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router, Static Export) | 16.2.6 |
| UI Library | [React](https://react.dev) | 19.2.4 |
| Language | [TypeScript](https://www.typescriptlang.org) | ^5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 + custom CSS variables | ^4 |
| Animations | [Framer Motion](https://www.framer.com/motion) | ^12 |
| Fonts | Google Fonts — Cormorant Garamond & Inter | — |
| Hosting | [Hostinger](https://www.hostinger.com) shared (Apache) | — |
| Package manager | npm | — |

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, featured experiences, signature dishes, awards, testimonials, CTA |
| `/menu` | Full menu with category filter (Appetisers, Signature Dishes, Desserts) |
| `/about` | Story, values, team profiles, awards |
| `/gallery` | Photo grid with lightbox — Menu / Interior / People categories |
| `/reservations` | Online reservation form with date, time slot, and guest picker |
| `/contact` | Contact form, address, hours, Google Maps embed |

---

## Features

- Static export — deploys to any shared host, no Node.js server needed
- Smooth page hero with parallax-scale entry animation on every inner page
- Scroll-triggered fade-in animations via `AnimateIn` utility component
- Mobile-responsive navbar with animated hamburger drawer
- Menu page with animated category filter tabs
- Gallery with animated grid + full-screen lightbox (prev/next navigation)
- Reservation form with time-slot availability and inline validation
- SEO-ready: `<Metadata>` per page, Open Graph tags, Twitter card, JSON-LD restaurant schema
- Apache `.htaccess` included: HTTPS redirect, clean URLs, gzip compression, 1-year asset caching, security headers

---

## Project Structure

```
jade-next/
├── app/
│   ├── about/
│   │   └── page.tsx              # About page (server component)
│   ├── contact/
│   │   ├── page.tsx
│   │   └── ContactClient.tsx     # Contact form (client component)
│   ├── gallery/
│   │   ├── page.tsx
│   │   └── GalleryClient.tsx     # Gallery grid + lightbox
│   ├── menu/
│   │   ├── page.tsx
│   │   └── MenuClient.tsx        # Menu with category filter
│   ├── reservations/
│   │   ├── page.tsx
│   │   └── ReservationsClient.tsx
│   ├── globals.css               # CSS variables, resets, utility classes
│   ├── layout.tsx                # Root layout — Navbar, Footer, fonts, schema
│   └── page.tsx                  # Home page
├── components/
│   ├── AnimateIn.tsx             # Scroll-triggered animation wrapper
│   ├── Footer.tsx
│   ├── HomeAwards.tsx
│   ├── HomeCta.tsx
│   ├── HomeFeatured.tsx
│   ├── HomeHero.tsx
│   ├── HomeMenu.tsx
│   ├── HomeTestimonials.tsx
│   ├── Navbar.tsx
│   └── PageHero.tsx              # Reusable inner-page hero
├── lib/
│   └── data.ts                   # All static data (menu, gallery, team, awards)
├── public/
│   └── .htaccess                 # Apache config — copied to out/ on build
├── next.config.ts                # output: "export", trailingSlash: true
├── postcss.config.mjs
├── tsconfig.json
└── jade-garden-hostinger.zip     # Ready-to-upload production build
```

---

## Getting Started (Local Development)

### Prerequisites

- Node.js 18 or later
- npm

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/KodeByDeep/jade-restaurant-website.git
cd jade-garden

# 2. Install dependencies
npm install

# macOS only — remove quarantine flag if you get "bad interpreter" errors
xattr -r -d com.apple.quarantine node_modules

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Build for Production

```bash
npm run build
```

This generates a fully static site in the `out/` folder. All pages are pre-rendered as `.html` files — no server required.

---

## Deploy to Hostinger

### Option A — Upload the zip (quickest)

1. Log in to Hostinger hPanel
2. Go to **Files → File Manager** → open `public_html`
3. Click **Upload** and select `jade-garden-hostinger.zip`
4. Right-click the zip → **Extract here**
5. Delete the zip file after extraction
6. Visit your domain — the site is live

### Option B — FTP / SFTP

1. Run `npm run build` locally
2. Connect to Hostinger via FTP (hPanel → **Files → FTP Accounts**)
3. Upload the **contents** of the `out/` folder into `public_html`
   - Do **not** upload the `out/` folder itself — upload what's *inside* it

### Domain & SSL

- Point your domain's nameservers to Hostinger in your domain registrar
- In hPanel go to **SSL → Let's Encrypt** and install a free certificate
- The `.htaccess` already forces HTTPS automatically once the certificate is active

---

## Customising Content

All site content lives in one file: [lib/data.ts](lib/data.ts)

| Export | What it controls |
|---|---|
| `menuItems` | Menu dishes, prices, labels, badges |
| `galleryItems` | Gallery photos and categories |
| `teamMembers` | Team member cards on About page |
| `awards` | Awards list (home + about pages) |
| `faqItems` | FAQ accordion items |
| `timeSlots` | Available booking time slots |
| `fullyBookedSlots` | Slots shown as unavailable |

For business details (address, phone, hours) search for `110 Coastal Avenue` and `555-0123` across the codebase and replace with your real values.

---

## GitHub Push (First Time)

```bash
# Make sure you are in the project directory
cd jade-next

# Stage all files
git add .

# Commit
git commit -m "feat: Jade Garden restaurant website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/KodeByDeep/jade-restaurant-website.git
git branch -M main
git push -u origin main
```

> Tip: The `out/` folder and `*.zip` are ignored via `.gitignore` by default — they are build artefacts and should not be committed.

---

## .gitignore

Make sure your `.gitignore` contains at least:

```
node_modules/
.next/
out/
*.zip
.DS_Store
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on [localhost:3000](http://localhost:3000) |
| `npm run build` | Build production static export to `out/` |
| `npm run lint` | Run ESLint on all source files |

---

## License

For personal and commercial use by the site owner. Images are sourced from [Unsplash](https://unsplash.com) (free for commercial use under the Unsplash License).
# Jade_restaurent-
