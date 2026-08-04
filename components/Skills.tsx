import {
  ClipboardCheck,
  Microscope,
  Stethoscope,
  Users,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { skills } from "@/lib/data";

const groupIcons: Record<string, LucideIcon> = {
  Research: Microscope,
  "Clinical Education": Stethoscope,
  Leadership: Users,
  Communication: MessageSquare,
};

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        icon={ClipboardCheck}
        title="Competencies"
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => {
          const Icon = groupIcons[group.group] ?? ClipboardCheck;
          return (
            <Reveal key={group.group} delay={i * 0.07}>
              <div className="h-full rounded-3xl border border-line bg-canvas-raised p-7">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-sky" aria-hidden="true" />
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
          );
        })}
      </div>
    </Section>
  );
}
