const ITEMS = [
  "React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS",
  "Node.js", "GSAP", "MongoDB", "Nuxt.js", "Git",
];

export default function MarqueeBanner() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="border-t border-b border-line py-5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-10 whitespace-nowrap
                                  font-display text-[13px] font-semibold
                                  uppercase tracking-[0.1em] text-muted">
            <span>{item}</span>
            <span className="w-1 h-1 bg-accent rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
