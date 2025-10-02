# Kaylee Xiao — Portfolio

A warm, welcoming portfolio that highlights my projects, experience, and skills — with a soft, personalized design, gentle animations, and easy ways to get in touch. I hope you enjoy looking around! ✨

Live Site: [Kaylee Xiao ₊˚⊹ᰔ](https://kayleexiao.vercel.app)

## 💫 Features
- Responsive layout with a compact mobile nav
- Friendly hero: name fades in, role types/erases in a loop
- Smooth expandable “Experience” section
- Projects grid + individual pages at /projects/[slug] (with repo links)
- Tech Stack carousel; cards stay equal height and centered
- Contact section: mailto form + GitHub/LinkedIn buttons

## ⚙️ Tech Stack
- Framework: Next.js (App Router, React 18)
- Language: TypeScript
- Styling: Tailwind CSS (utility-first, custom tokens, soft pink theme)
- Icons: Custom SVG set (stored in public/assets) + simple inline SVG components
- Routing: Next.js App Router (app/ directory, nested layouts & metadata)
- Animations: CSS keyframes + small React hooks (typing effect, fades, accordion)
- Build Tool: Next.js (SWC)
- Package Manager: npm

## 📁 Project Structure
```
.
├─ app/
│  ├─ page.tsx                # Home: hero, about, experience, tech stack, projects, contact
│  ├─ projects/
│  │  ├─ [slug]/page.tsx      # Dynamic per-project page (title + “coming soon…” + repo link)
│  │  └─ page.tsx             # Optional projects index (may be unused)
│  ├─ api/                    # (If present) endpoints like /api/projects
│  └─ layout.tsx              # Root layout + <head> metadata (site title, icon, etc.)
│
├─ components/
│  ├─ ProjectCard.tsx
│  ├─ Navbar.tsx
│  ├─ ExperienceItem.tsx
│  ├─ TechStackCarousel.tsx
│  └─ ui/                     # Small, composable building blocks (buttons, badges, etc.)
│
├─ public/
│  └─ assets/
│     ├─ logo.png             # Site logo (also used in the navbar)
│     ├─ tech-*.svg           # Tech stack icons
│     └─ social-*.svg         # Social icons if needed
│
├─ styles/
│  └─ globals.css             # Tailwind base + global tweaks
│
├─ tailwind.config.js         # Design tokens & Tailwind setup
├─ tsconfig.json              # TypeScript config
├─ package.json
└─ README.md

```



