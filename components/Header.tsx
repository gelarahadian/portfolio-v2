"use client";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Home",    href: "#"         },
  { label: "About",   href: "#about"    },
  { label: "Skills",  href: "#skills"   },
  { label: "Work",    href: "#projects" },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [active,     setActive]     = useState("#");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const id of ["projects", "skills", "about", "hero"]) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(id === "hero" ? "#" : `#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Desktop header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center transition-all duration-300"
        style={{
          padding: scrolled ? "16px 40px" : "24px 40px",
          background: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid #252525" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); go("#"); }}
          className="flex items-center gap-2.5 no-underline font-display font-extrabold text-lg tracking-tight"
          style={{ color: "#ede9e4" }}
        >
          <span className="w-7 h-7 text-[13px] font-extrabold rounded-md flex items-center justify-center"
                style={{ background: "#c8f23a", color: "#080808" }}>
            G
          </span>
          Gelar
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-2">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); go(item.href); }}
              className="text-[13px] font-medium no-underline px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-all duration-200"
              style={{
                background: active === item.href ? "#c8f23a" : "transparent",
                color:      active === item.href ? "#080808" : "#6e6b66",
              }}
              onMouseEnter={(e) => {
                if (active !== item.href) {
                  (e.currentTarget as HTMLElement).style.background = "#181818";
                  (e.currentTarget as HTMLElement).style.color = "#ede9e4";
                }
              }}
              onMouseLeave={(e) => {
                if (active !== item.href) {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "#6e6b66";
                }
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go("#contact"); }}
            className="ml-1 text-[13px] font-bold font-display no-underline px-4 py-1.5 rounded-full tracking-wider transition-all duration-200 hover:opacity-90"
            style={{ background: "#c8f23a", color: "#080808" }}
          >
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[22px] transition-all duration-300 origin-center"
              style={{
                height: "1.5px",
                background: "#ede9e4",
                transform: mobileOpen
                  ? i === 0 ? "translateY(6.5px) rotate(45deg)"
                  : i === 2 ? "translateY(-6.5px) rotate(-45deg)"
                  : "scaleX(0)"
                  : "none",
              }}
            />
          ))}
        </button>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-6 transition-opacity duration-300"
        style={{
          background: "#080808",
          opacity:       mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
        }}
      >
        {[...NAV, { label: "Contact", href: "#contact" }].map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => { e.preventDefault(); go(item.href); }}
            className="font-display text-[36px] font-bold no-underline transition-colors duration-200"
            style={{ color: "#ede9e4" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#c8f23a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#ede9e4")}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
