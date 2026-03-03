"use client";

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none bg-hero-grid opacity-30"
        style={{
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
          maskImage:        "radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)",
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(200,242,58,0.22) 0%, transparent 70%)", animation: "glowDrift 8s ease-in-out infinite" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-10">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2
                        bg-accent/10 border border-accent/25 text-accent
                        text-[11px] font-medium px-3.5 py-1.5 rounded-full
                        uppercase tracking-[0.08em] mb-8">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" style={{ animation: "blink 2s infinite" }} />
          Available for new projects
        </div>

        {/* Title */}
        <h1 className="hero-title font-display font-extrabold leading-[0.95]
                       tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(52px, 8vw, 120px)" }}>
          <span className="block">Crafting</span>
          <span className="block text-accent">Digital</span>
          <span className="block text-outline">Experiences</span>
        </h1>

        {/* Description */}
        <p className="hero-desc max-w-[480px] text-[17px] leading-[1.7] font-light mb-12"
           style={{ color: "#9e9a95" }}>
          Full-stack developer specializing in building fast, elegant, and memorable
          web experiences. I turn design concepts into pixel-perfect, performant products.
        </p>

        {/* CTAs */}
        <div className="hero-actions flex items-center gap-4">
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); go("#projects"); }}
            className="btn-primary"
          >
            View My Work ↗
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); go("#about"); }}
            className="text-sm font-medium no-underline px-5 py-3.5 rounded-full transition-colors duration-200"
            style={{ color: "#6e6b66" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ede9e4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6e6b66")}
          >
            About Me →
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2
                      hidden sm:flex flex-col items-center gap-2
                      text-[11px] uppercase tracking-[0.12em]"
           style={{ color: "#6e6b66" }}>
        <div className="w-px h-10"
             style={{ background: "linear-gradient(to bottom, #c8f23a, transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        Scroll
      </div>

      {/* Stats */}
      <div className="hero-stats absolute right-10 bottom-10 hidden sm:flex gap-10">
        {[
          { num: "4+",  label: "Years Experience"   },
        ].map((s) => (
          <div key={s.label} className="text-right">
            <p className="font-display font-bold text-[32px] leading-none" style={{ color: "#c8f23a" }}>
              {s.num}
            </p>
            <p className="text-xs mt-1" style={{ color: "#6e6b66" }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
