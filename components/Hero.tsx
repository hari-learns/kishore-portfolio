"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, ArrowDown } from "lucide-react";
import { profile, contact } from "@/lib/data";
import { asset } from "@/lib/basePath";

const ease = [0.16, 1, 0.3, 1] as const;

const credentials = [
  { value: "5th Year", label: "MBBS · MD Programme" },
  { value: "Mayo Clinic", label: "Nephrology Observership · Sept 2026" },
  { value: "IOCCM 2025", label: "Published Abstract" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-40 lg:pb-24"
    >
      {/* Background treatment */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-texture absolute inset-0" />
        <div className="absolute -top-40 right-[-15%] h-[34rem] w-[34rem] rounded-full bg-accent-soft/70 blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-sky/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* ── Left: identity ── */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/70 py-1.5 pr-4 pl-1.5 backdrop-blur-sm max-sm:border-0 max-sm:bg-transparent max-sm:p-0"
          >
            <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold tracking-wide whitespace-nowrap text-accent uppercase">
              {profile.year}
            </span>
            {/* The institution already appears in the portrait's "Currently"
                card, so drop it on mobile rather than wrapping onto two lines. */}
            <span className="hidden text-[13px] text-ink-soft sm:inline">
              {profile.institution}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="mt-7 font-display text-[clamp(2.75rem,8.5vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.02em]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-ink-muted" />}
                <span className="text-[15px] font-medium tracking-wide text-ink sm:text-base">
                  {role}
                </span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            {profile.mission}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-accent-deep"
            >
              View Research
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={asset(contact.cv)}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-canvas-raised px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* ── Right: portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative order-1 mx-auto w-full max-w-[22rem] lg:order-2 lg:max-w-[26rem]"
        >
          {/* offset decorative panel */}
          <div className="absolute -inset-3 -rotate-2 rounded-[2.25rem] bg-gradient-to-br from-accent/12 via-sky/10 to-transparent" />

          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-canvas-raised shadow-[0_24px_70px_-30px_color-mix(in_srgb,var(--ink)_40%,transparent)]">
            <Image
              src={asset(profile.portrait)}
              alt={`Portrait of ${profile.name}`}
              width={800}
              height={800}
              priority
              sizes="(max-width: 1024px) 22rem, 26rem"
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-canvas-raised via-canvas-raised/70 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease }}
            className="absolute -bottom-5 -left-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-6"
          >
            <p className="text-[10.5px] font-semibold tracking-[0.12em] text-sky uppercase">
              Currently
            </p>
            <p className="mt-0.5 font-display text-[15px] text-ink">
              {profile.institution}
            </p>
            <p className="text-[12px] text-ink-muted">{profile.institutionDetail}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Credential strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease }}
        className="mx-auto mt-20 grid w-full max-w-6xl grid-cols-1 divide-y divide-line border-y border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {credentials.map((item) => (
          <div key={item.value} className="px-2 py-5 sm:px-6 sm:py-6 sm:first:pl-0">
            <p className="font-display text-xl tracking-tight text-ink sm:text-2xl">
              {item.value}
            </p>
            <p className="mt-1 text-[13px] text-ink-soft">{item.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        aria-label="Scroll to About"
        className="mt-12 hidden justify-center text-ink-muted transition-colors hover:text-accent lg:flex"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
