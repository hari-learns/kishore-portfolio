"use client";

import { useEffect, useRef, useState } from "react";
import { Mic } from "lucide-react";
import Section, { SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";

const VIDEO_ID = "U1Yc46QCQQc";

/**
 * True unmuted autoplay is blocked by every major browser regardless of what
 * an embed requests — "cleanly" here means: don't fire the request at all
 * until the frame is actually on screen, and start muted (the one autoplay
 * browsers do honour) rather than show a static thumbnail. A visible control
 * lets the visitor turn sound on with one click.
 */
export default function Podcast() {
  const [inView, setInView] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="podcast">
      <SectionHeading
        eyebrow="Podcast"
        icon={Mic}
        title="What is Psychodermatology?"
        intro="A panel discussion from the Medical University of Łódź — Multiple Perspectives."
        align="center"
      />

      <Reveal delay={0.1}>
        <div
          ref={frameRef}
          className="relative mx-auto mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-[2rem] border border-line bg-ink shadow-[0_24px_70px_-30px_color-mix(in_srgb,var(--ink)_40%,transparent)]"
        >
          {inView ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
              title="Podcast appearance"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
