# ✨ Abdelrahman Sherif — Portfolio

> A modern, neon-futuristic developer portfolio built with Next.js and designed with **Google Stitch**. Fast, responsive, and production-ready.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

---

## 🎯 Overview

This portfolio showcases **Abdelrahman Sherif** as a Full Stack Developer. The UI follows the **Google Stitch** design system from the *"portfolio For Work"* project: Space Grotesk typography, cyan neon accents (`#0da6f2`), 8px rounded corners, and a dark-first theme with smooth animations.

**Highlights:**

- **Design system** — Colors, typography, and spacing from Google Stitch (dark mode, neon glow, glassmorphism).
- **Dark / Light mode** — Theme toggle with persistence via `localStorage`.
- **Animations** — Section reveals and hover effects powered by Framer Motion.
- **Responsive** — Mobile-first layout with a collapsible navbar.
- **Performance** — Optimized fonts (`next/font`), minimal JS, ready for Vercel.

---

## 🛠 Tech Stack

| Category      | Technologies                                      |
|---------------|---------------------------------------------------|
| **Framework** | Next.js 16 (App Router)                           |
| **Language**  | TypeScript                                        |
| **Styling**   | Tailwind CSS v4                                   |
| **Animation** | Framer Motion                                     |
| **Icons**     | Lucide React                                      |
| **Theme**     | next-themes (class-based, persistent)             |
| **Utilities** | clsx, tailwind-merge                              |

---

## 📁 Project Structure

```
aroportfolio/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, theme
│   ├── page.tsx            # Home page (Hero → About → Projects → Contact)
│   ├── globals.css         # Stitch design tokens, theme variables
│   ├── providers.tsx        # next-themes ThemeProvider
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky nav + mobile menu
│   │   ├── ThemeToggle.tsx # Dark/Light switch
│   │   ├── Hero.tsx        # Headline, tagline, CTA, social links
│   │   ├── About.tsx       # Bio + skills grid
│   │   ├── Projects.tsx    # Projects section
│   │   ├── ProjectCard.tsx # Single project card (neon hover)
│   │   └── Contact.tsx     # Email, GitHub, LinkedIn
│   └── ...
├── lib/
│   └── utils.ts            # cn() for class names
├── package.json
└── README.md
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm (or yarn/pnpm).

```bash
# Clone the repository (if applicable)
git clone <your-repo-url>
cd aroportfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Other scripts:**

| Command        | Description              |
|----------------|--------------------------|
| `npm run build`| Production build         |
| `npm run start`| Start production server  |
| `npm run lint` | Run ESLint               |

---

## 🌐 Deploy on Vercel

One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

Or connect your Git repository in the [Vercel Dashboard](https://vercel.com/new); the project is configured for the Next.js App Router and requires no extra build settings.

---

## 📄 License

Private project. All rights reserved.

---

**Built with Next.js, Tailwind, and Google Stitch** — *Abdelrahman Sherif | Full Stack Developer*
