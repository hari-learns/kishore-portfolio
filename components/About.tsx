import {
  Stethoscope,
  HeartPulse,
  Droplets,
  Ribbon,
  Brain,
  Dna,
  type LucideIcon,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { about } from "@/lib/data";
import { asset } from "@/lib/basePath";
import Image from "next/image";

/**
 * Keyed by label rather than index, so reordering `about.interests` can't
 * silently mismatch icons. The fallback keeps a copy edit from rendering a gap.
 */
const interestIcons: Record<string, LucideIcon> = {
  "Internal Medicine": Stethoscope,
  "Cardiovascular Medicine": HeartPulse,
  Nephrology: Droplets,
  Oncology: Ribbon,
  Neuroscience: Brain,
  "Precision Medicine": Dna,
};

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="About"
          icon={Stethoscope}
          title={
            <>
              Medicine, studied from
              <br className="hidden sm:block" /> both directions.
            </>
          }
        />

        <div>
          <Reveal delay={0.05}>
            <p className="font-display text-[clamp(1.35rem,2.4vw,1.75rem)] leading-[1.45] text-ink">
              {about.lead}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={0.1 + i * 0.08}>
                <p className="text-[17px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.12}>
        <figure className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-[1.5rem] border border-line bg-canvas-raised shadow-[0_18px_50px_-28px_color-mix(in_srgb,var(--ink)_40%,transparent)]">
          <Image
            src={asset("/hero-clinical.png")}
            alt="Clinical work in a hospital setting"
            width={1600}
            height={639}
            sizes="(max-width: 1280px) 100vw, 64rem"
            className="h-auto w-full object-cover"
          />
        </figure>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-16 border-t border-line pt-10">
          <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
            <HeartPulse className="h-4 w-4 text-sky" aria-hidden="true" />
            Clinical & Research Interests
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {about.interests.map((interest) => {
              const Icon = interestIcons[interest] ?? Stethoscope;
              return (
                <div
                  key={interest}
                  className="group bg-canvas-raised px-4 py-6 text-center transition-colors hover:bg-accent-soft/50"
                >
                  <Icon
                    className="mx-auto mb-2.5 h-5 w-5 text-sky transition-colors group-hover:text-accent"
                    aria-hidden="true"
                  />
                  <p className="font-display text-[15px] leading-snug text-ink transition-colors group-hover:text-accent">
                    {interest}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
