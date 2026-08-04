import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <Section id="leadership">
      <SectionHeading
        eyebrow="Leadership"
        title="Building things for other students"
        intro="Roles centred on teaching, organising, mentoring, and representing the programme across international collaborations."
      />

      <div className="mt-14 border-t border-line">
        {leadership.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.05}>
            <article className="group grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors hover:bg-canvas-subtle/70 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-4 lg:grid-cols-[auto_0.9fr_1.1fr] lg:gap-14">
              <span className="font-display text-[15px] text-ink-muted tabular-nums transition-colors group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-display text-[1.45rem] leading-snug tracking-tight transition-colors group-hover:text-accent">
                  {item.role}
                </h3>
                <p className="mt-1.5 text-[13px] tracking-wide text-sky uppercase">
                  {item.org}
                </p>
              </div>

              <p className="text-[16px] leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
