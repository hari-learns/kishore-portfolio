import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Competencies" />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.07}>
            <div className="h-full rounded-3xl border border-line bg-white p-7">
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                <h3 className="font-display text-[1.2rem] tracking-tight">
                  {group.group}
                </h3>
              </div>

              <ul className="mt-6 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line/70 pb-2.5 text-[15px] text-ink-soft last:border-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
