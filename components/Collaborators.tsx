import Image from "next/image";
import { Handshake, ArrowUpRight } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";
import { collaborators } from "@/lib/data";
import { asset } from "@/lib/basePath";

export default function Collaborators() {
  const { intro, partner, people } = collaborators;

  return (
    <Section id="collaborators" subtle>
      <SectionHeading
        eyebrow="Collaborators"
        icon={Handshake}
        title="Advisory, built alongside people who know the ground"
        intro={intro}
      />

      {/* The three collaborators together, in front of the partner's own
          banner — establishes the partnership before the cards name each
          person individually. */}
      <Reveal delay={0.05}>
        <figure className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[1.75rem] border border-line shadow-[0_18px_50px_-28px_color-mix(in_srgb,var(--ink)_40%,transparent)]">
          <Image
            src={asset("/collaborators.jpg")}
            alt="Kishore Muthukumar, Dominika Lewandowska, and Raakesh Naidu at Akademia Polskiego"
            width={1600}
            height={860}
            sizes="(max-width: 1024px) 100vw, 48rem"
            className="h-auto w-full object-cover"
          />
        </figure>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {people.map((person, i) => {
          const href = "href" in person ? person.href : undefined;
          const Card = href ? "a" : "div";
          return (
            <Reveal key={person.name} delay={i * 0.07}>
              <Card
                {...(href
                  ? { href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col items-center gap-3 rounded-3xl border border-line bg-canvas-raised p-7 text-center transition-colors hover:border-accent/40"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-[16px] text-white">
                  {person.initials}
                </span>
                <div>
                  <p className="font-display text-[17px] tracking-tight text-ink transition-colors group-hover:text-accent">
                    {person.name}
                  </p>
                  <p className="mt-1 text-[13px] tracking-wide text-sky uppercase">
                    {person.role}
                  </p>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.24}>
        <a
          href={partner.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl border border-line bg-canvas-raised p-7 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:p-8"
        >
          <div>
            <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-muted uppercase">
              Partner organisation
            </p>
            <p className="mt-2 font-display text-[1.3rem] tracking-tight text-ink transition-colors group-hover:text-accent">
              {partner.name}
            </p>
            <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {partner.description}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-canvas px-5 py-2.5 text-sm font-medium text-ink transition-colors group-hover:border-accent group-hover:text-accent">
            Visit site
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
