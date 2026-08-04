"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Syringe,
  Pill,
  Activity,
  FlaskConical,
  TestTubes,
  Atom,
  Bone,
  ClipboardPlus,
  HeartHandshake,
  BriefcaseMedical,
  type LucideIcon,
} from "lucide-react";

type Glyph = {
  icon: LucideIcon;
  /** Tailwind position + colour, e.g. "top-10 left-[6%] text-sky/25". */
  className: string;
  size?: number;
  rotate?: number;
  delay?: number;
  duration?: number;
};

/**
 * Presets live here rather than being passed in, because this is a client
 * component and most callers are server components — handing a `LucideIcon`
 * across that boundary fails at prerender ("Functions cannot be passed directly
 * to Client Components"). Callers pass a variant name instead.
 */
/**
 * Positions hug the page gutters — the space outside the `max-w-6xl` content
 * column — so glyphs never sit behind text. That gutter only exists on wide
 * viewports, which is why the whole layer is `hidden xl:block` below.
 */
const VARIANTS: Record<string, Glyph[]> = {
  hero: [
    { icon: Stethoscope, className: "top-[16%] left-[0.5%] text-sky/70", size: 78, rotate: -12 },
    { icon: Syringe, className: "bottom-[24%] left-[1.5%] text-sky/60", size: 56, rotate: 22, delay: 2.1, duration: 12 },
    { icon: Activity, className: "top-[52%] left-[0%] text-accent/55", size: 46, rotate: 6, delay: 1.8 },
    { icon: Pill, className: "bottom-[6%] right-[1%] text-sky/60", size: 54, rotate: -18, delay: 0.6, duration: 11 },
  ],
  research: [
    { icon: FlaskConical, className: "top-[3%] right-[0.5%] text-sky/65", size: 70, rotate: 12 },
    { icon: Atom, className: "top-[46%] left-[0%] text-accent/50", size: 84, rotate: -8, delay: 1.4, duration: 13 },
    { icon: TestTubes, className: "bottom-[4%] right-[1%] text-sky/60", size: 60, rotate: -14, delay: 2.2 },
  ],
  teaching: [
    { icon: Bone, className: "top-[10%] right-[0.5%] text-sky/60", size: 76, rotate: -16 },
    { icon: ClipboardPlus, className: "bottom-[8%] left-[0.5%] text-accent/50", size: 62, rotate: 8, delay: 1.9, duration: 12 },
  ],
  vision: [
    { icon: Stethoscope, className: "top-[16%] left-[2%] text-sky-light/55", size: 80, rotate: -14 },
    { icon: HeartHandshake, className: "bottom-[16%] right-[2%] text-sky-light/50", size: 72, rotate: 10, delay: 1.6, duration: 12 },
  ],
  contact: [
    { icon: BriefcaseMedical, className: "top-[12%] left-[1%] text-sky/60", size: 68, rotate: -10 },
    { icon: HeartPulse, className: "bottom-[12%] right-[1%] text-accent/50", size: 60, rotate: 12, delay: 1.5, duration: 11 },
  ],
};

/**
 * A drifting layer of oversized medical line-art.
 *
 * Strictly decorative: the wrapper is `pointer-events-none` and renders before
 * content in DOM order, so it always paints behind and can never intercept a
 * click or shift layout.
 *
 * Uses a thinner stroke than the icon system on purpose — at 45–95px the
 * default weight reads as a clunky UI icon rather than an illustration.
 *
 * Honours `prefers-reduced-motion`: the CSS block in globals.css only zeroes
 * CSS durations, and framer-motion animates in JS.
 */
export default function FloatingGlyphs({
  variant,
  className = "",
}: {
  variant: keyof typeof VARIANTS;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const glyphs = VARIANTS[variant] ?? [];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 hidden overflow-hidden xl:block ${className}`}
    >
      {glyphs.map((g, i) => {
        const Icon = g.icon;
        const rotate = g.rotate ?? 0;
        return (
          <motion.div
            key={i}
            className={`absolute ${g.className}`}
            style={{ rotate }}
            animate={
              reduced
                ? undefined
                : { y: [0, -16, 0], rotate: [rotate, rotate + 5, rotate] }
            }
            transition={{
              duration: g.duration ?? 10,
              delay: g.delay ?? 0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon
              strokeWidth={1.1}
              style={{ width: g.size ?? 72, height: g.size ?? 72 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
