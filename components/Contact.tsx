import { Mail, Download, ArrowUpRight } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { contact, profile } from "@/lib/data";
import { asset } from "@/lib/basePath";

const channels = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: true },
  { label: "LinkedIn", value: "Professional profile", href: contact.linkedin },
  { label: "ORCID", value: "Research identifier", href: contact.orcid },
  { label: "ResearchGate", value: "Publications & preprints", href: contact.researchgate },
];

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Open to research, collaboration, and academic opportunities"
        intro="For observerships, research collaboration, conference participation, or academic correspondence — the fastest route is email."
        align="center"
      />

      <Reveal delay={0.08}>
        <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
          >
            <Mail className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={asset(contact.cv)}
            download
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-7 py-4 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={0.05 * i} className="bg-white">
            <a
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between gap-6 p-7 transition-colors hover:bg-canvas-subtle"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[11px] font-semibold tracking-[0.12em] text-ink-muted uppercase">
                  {channel.label}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>
              <p className="font-display text-[1.05rem] leading-snug tracking-tight break-words transition-colors group-hover:text-accent">
                {channel.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-10 text-center text-[14px] text-ink-muted">
          {profile.name} · {profile.institution} · {profile.institutionDetail}
        </p>
      </Reveal>
    </Section>
  );
}
