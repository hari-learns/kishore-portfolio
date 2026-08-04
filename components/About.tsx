import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { about } from "@/lib/data";

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading
          eyebrow="About"
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
                <p className="text-[17px] leading-relaxed text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal delay={0.15}>
        <div className="mt-16 border-t border-line pt-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
            Clinical & Research Interests
          </p>
          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {about.interests.map((interest) => (
              <div
                key={interest}
                className="group bg-canvas-raised px-4 py-6 text-center transition-colors hover:bg-accent-soft/50"
              >
                <p className="font-display text-[15px] leading-snug text-ink transition-colors group-hover:text-accent">
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
