import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  icon: Icon,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  /** Small medical glyph shown between the eyebrow rule and its label. */
  icon?: LucideIcon;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal>
      <div
        className={
          align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
        }
      >
        {/* `.eyebrow` is already inline-flex with a gap, so the icon slots in
            after the ::before rule without any CSS change. */}
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
          {eyebrow}
        </p>
        <h2
          className={`mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.08] tracking-tight ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`mt-5 text-lg leading-relaxed ${
              tone === "dark" ? "text-white/65" : "text-ink-soft"
            }`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function Section({
  id,
  children,
  className = "",
  subtle = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  subtle?: boolean;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-24 sm:px-8 sm:py-28 lg:py-32 ${
        subtle ? "bg-canvas-subtle" : "bg-canvas"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
