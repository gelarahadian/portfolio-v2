# 💼 Portfolio Website -- Gelar Rahadian Fajar

Modern personal portfolio built with **Next.js**, featuring a clean dark
design system, smooth animations, and a fully responsive layout.

------------------------------------------------------------------------

## 📁 Project Structure

``` bash
src/
├── app/
│   ├── globals.css        # Design system, CSS variables, global animations
│   ├── layout.tsx         # Root layout (Cursor + Header + Footer)
│   └── page.tsx           # Home page (all sections)
├── components/
│   ├── Cursor.tsx         # Custom cursor (dot + ring follower)
│   ├── Header.tsx         # Sticky navbar + mobile menu
│   ├── Hero.tsx           # Full-screen hero section
│   ├── MarqueeBanner.tsx  # Scrolling tech stack marquee
│   ├── About.tsx          # About section with photo
│   ├── Skills.tsx         # 6-column skills grid
│   ├── Projects.tsx       # Project cards (large + small layout)
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
└── hooks/
    └── useReveal.ts       # IntersectionObserver for scroll reveal
```

------------------------------------------------------------------------

## ⚙️ Setup

1.  Clone the repository or copy the files into your Next.js project.
2.  Install dependencies:

``` bash
npm install
```

3.  Run the development server:

``` bash
npm run dev
```

> No additional dependencies required.\
> Animations use vanilla CSS and built-in React hooks.\
> (GSAP & react-tilt from the previous version have been removed.)

------------------------------------------------------------------------

## 🎨 Design System

All colors are controlled via CSS variables in `globals.css`.

  Variable          Value                    Description
  ----------------- ------------------------ ------------------------
  `--bg`            `#080808`                Main background
  `--surface`       `#111111`                Card background
  `--surface-2`     `#181818`                Card hover background
  `--border`        `#252525`                Subtle border
  `--text`          `#ede9e4`                Primary text
  `--text-muted`    `#6e6b66`                Secondary text
  `--text-subtle`   `#9e9a95`                Description text
  `--accent`        `#c8f23a`                Electric lime
  `--accent-dim`    `rgba(200,242,58,0.1)`   Soft accent background
  `--accent-glow`   `rgba(200,242,58,0.2)`   Glow effect

------------------------------------------------------------------------

## 🔤 Fonts

-   **Syne** --- Display / headings (bold, geometric)\
-   **DM Sans** --- Body text (clean, readable)

Loaded via Google Fonts in `globals.css`.

------------------------------------------------------------------------

## ✨ Features

-   Custom cursor with smooth follower\
-   Sticky header with glassmorphism scroll effect\
-   Mobile hamburger menu with overlay\
-   Scroll-based section reveal (IntersectionObserver)\
-   Hero section with animated badge, grid background, and glow\
-   Tech stack scrolling marquee banner\
-   About section with framed photo\
-   Skills grid with hover effects\
-   Alternating project card layouts (large + small)\
-   Contact section with ghost background text\
-   Fully responsive (mobile-first)

------------------------------------------------------------------------

## 🛠 Built With

-   Next.js\
-   React\
-   TypeScript\
-   Vanilla CSS (Custom Design System)

------------------------------------------------------------------------

## 📄 License

This project is for personal portfolio use.
