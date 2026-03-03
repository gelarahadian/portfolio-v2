export default function Footer() {
  return (
    <footer className="border-t border-line px-10 py-8
                       flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-[13px] text-muted text-center sm:text-left">
        © 2024{" "}
        <span className="text-accent">Gelar Rahadian Fajar</span>.
        {" "}Designed &amp; Built with passion.
      </p>
      <p className="text-[12px] text-muted uppercase tracking-[0.08em]">
        Frontend Developer · Indonesia
      </p>
    </footer>
  );
}
