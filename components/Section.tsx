import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal>
      <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
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
