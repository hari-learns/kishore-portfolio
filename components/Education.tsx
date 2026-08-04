import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" subtle>
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation"
        intro="Medical training in an international English-language programme, paired from the outset with research and teaching."
      />

      <div className="mt-14 space-y-8">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 0.08}>
            <article className="grid grid-cols-1 gap-6 rounded-3xl border border-line bg-canvas-raised p-7 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-14">
              <div className="lg:w-44">
                <span className="inline-flex rounded-full bg-accent-soft px-3 py-1.5 text-[12px] font-semibold tracking-wide text-accent">
                  {entry.period}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                  {entry.degree}
                </h3>
                <p className="mt-2 text-[17px] font-medium text-ink">{entry.school}</p>
                <p className="mt-0.5 text-[14px] text-ink-muted">{entry.detail}</p>

                <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />
                      <span className="text-[15px] leading-relaxed text-ink-soft">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
