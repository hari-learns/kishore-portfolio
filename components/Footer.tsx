import EcgLine from "@/components/EcgLine";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-canvas px-6 py-10 sm:px-8">
      {/* Bookends the hero trace. Decoration only — sits over the top border. */}
      <EcgLine
        repeat={6}
        duration={3}
        strokeClassName="text-sky"
        className="pointer-events-none absolute inset-x-0 -top-6 h-12 w-full opacity-80"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-[12px] text-white">
            {profile.initials}
          </span>
          <span className="font-display text-[15px] tracking-tight">
            {profile.name}
          </span>
        </div>

        <p className="text-[13px] text-ink-muted">
          © {new Date().getFullYear()} · {profile.roles.join(" · ")}
        </p>
      </div>
    </footer>
  );
}
