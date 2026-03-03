# Portfolio Redesign — Next.js 15

## Struktur File

```
src/
├── app/
│   ├── globals.css        ← Design system, CSS variables, animasi global
│   ├── layout.tsx         ← Root layout (Cursor + Header + Footer)
│   └── page.tsx           ← Home page (semua section)
├── components/
│   ├── Cursor.tsx         ← Custom cursor (dot + ring follower)
│   ├── Header.tsx         ← Sticky navbar + mobile menu
│   ├── Hero.tsx           ← Hero section full-screen
│   ├── MarqueeBanner.tsx  ← Tech stack scrolling marquee
│   ├── About.tsx          ← About section dengan foto
│   ├── Skills.tsx         ← Skills grid 6-kolom
│   ├── Projects.tsx       ← Project cards (large + small)
│   ├── Contact.tsx        ← Contact section
│   └── Footer.tsx         ← Footer
└── hooks/
    └── useReveal.ts       ← IntersectionObserver untuk scroll reveal
```

## Setup

1. Copy semua file ke project Next.js kamu
2. Pastikan sudah install dependencies:
   ```
   npm install
   ```
3. Tidak ada dependency tambahan — semua pakai vanilla CSS + built-in React hooks.
   (GSAP & react-tilt dari versi lama sudah dihapus, animasi sekarang pakai CSS)

## Design System (CSS Variables)

Semua warna dikontrol via CSS variables di `globals.css`:

| Variable        | Value                    | Keterangan         |
|-----------------|--------------------------|--------------------|
| `--bg`          | `#080808`                | Background utama   |
| `--surface`     | `#111111`                | Card background    |
| `--surface-2`   | `#181818`                | Card hover         |
| `--border`      | `#252525`                | Border halus       |
| `--text`        | `#ede9e4`                | Teks utama         |
| `--text-muted`  | `#6e6b66`                | Teks sekunder      |
| `--text-subtle` | `#9e9a95`                | Teks deskripsi     |
| `--accent`      | `#c8f23a`                | Electric lime      |
| `--accent-dim`  | `rgba(200,242,58,0.1)`   | Accent soft bg     |
| `--accent-glow` | `rgba(200,242,58,0.2)`   | Glow effect        |

## Font

- **Syne** — Display/heading (bold, geometric)
- **DM Sans** — Body (clean, readable)

Diload via Google Fonts di `globals.css`.

## Fitur

- ✅ Custom cursor dengan smooth follower
- ✅ Sticky header dengan glassmorphism scroll effect
- ✅ Mobile hamburger menu dengan overlay
- ✅ Scroll-based section reveal (IntersectionObserver)
- ✅ Hero dengan animated badge, grid background, glow
- ✅ Tech stack marquee banner
- ✅ About section dengan foto frame
- ✅ Skills grid hover effect
- ✅ Project cards alternating layout (besar + kecil)
- ✅ Contact section dengan ghost background text
- ✅ Responsive untuk mobile
