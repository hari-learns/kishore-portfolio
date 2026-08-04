"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * An ECG trace that draws itself when scrolled into view.
 *
 * Used as decoration only — always inside a `pointer-events-none` wrapper or an
 * absolutely-positioned gutter, so it never affects layout.
 *
 * On reduced-motion the path renders fully drawn and static. The
 * `prefers-reduced-motion` block in globals.css only zeroes CSS animation and
 * transition durations; framer-motion drives `pathLength` in JS and is not
 * affected by it, so the preference has to be honoured explicitly here.
 */

/** One horizontal heartbeat cycle: flat baseline, P wave, QRS spike, T wave. */
const BEAT =
  "0,20 22,20 28,20 32,12 36,26 40,4 45,34 49,20 55,20 62,20 66,16 70,20 78,20";

function beatPath(repeat: number, cycle = 78) {
  const points: string[] = [];
  for (let i = 0; i < repeat; i++) {
    const offset = i * cycle;
    for (const pair of BEAT.trim().split(/\s+/)) {
      const [x, y] = pair.split(",").map(Number);
      points.push(`${x + offset},${y}`);
    }
  }
  return `M ${points.join(" L ")}`;
}

export default function EcgLine({
  repeat = 4,
  className = "",
  strokeClassName = "text-sky",
  strokeWidth = 1.5,
  duration = 2.4,
  delay = 0,
  loop = false,
}: {
  repeat?: number;
  className?: string;
  strokeClassName?: string;
  strokeWidth?: number;
  duration?: number;
  delay?: number;
  /** Redraw continuously — used for the ambient hero trace. */
  loop?: boolean;
}) {
  const reduced = useReducedMotion();
  const width = repeat * 78;
  const d = beatPath(repeat);

  return (
    <svg
      viewBox={`0 0 ${width} 40`}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`${className} ${strokeClassName}`}
    >
      <motion.path
        d={d}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        {...(reduced
          ? {}
          : loop
            ? {
                animate: { pathLength: [0, 1, 1] },
                transition: {
                  duration,
                  delay,
                  times: [0, 0.7, 1],
                  repeat: Infinity,
                  repeatDelay: 0.6,
                  ease: "easeInOut",
                },
              }
            : {
                whileInView: { pathLength: 1 },
                viewport: { once: true, margin: "-70px" },
                transition: { duration, delay, ease: "easeInOut" },
              })}
      />
    </svg>
  );
}
