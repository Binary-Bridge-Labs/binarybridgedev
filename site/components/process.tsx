"use client";

import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type ProcessProps = {
  dict: Dictionary;
  showHeading?: boolean;
};

export function Process({ dict, showHeading = true }: ProcessProps) {
  const { process: steps, sections, ui } = dict;
  const ref = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // Thanh tiến trình và việc đánh dấu bước hiện tại chạy theo cuộn trang.
  // Chỉ bật khi người dùng không yêu cầu giảm chuyển động.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!listRef.current || !barRef.current) return;

        gsap.fromTo(
          barRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 65%",
              end: "bottom 65%",
              scrub: true,
            },
          },
        );

        gsap.utils.toArray<HTMLElement>("[data-step]", listRef.current).forEach((el, i) => {
          ScrollTrigger.create({
            trigger: el,
            start: "top 55%",
            end: "bottom 55%",
            onToggle: (self) => {
              if (self.isActive) setActive(i);
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        if (barRef.current) gsap.set(barRef.current, { scaleY: 1 });
      });
    },
    { scope: ref },
  );

  const current = steps[active];

  return (
    <section id="process" ref={ref} aria-label={sections.process.title} className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading ? <SectionHeading {...sections.process} /> : null}

        <div className={cn("grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20", showHeading && "mt-16")}>
          <aside aria-hidden="true" className="hidden lg:sticky lg:top-32 lg:block lg:self-start">
            <div className="glass rounded-3xl p-8">
              <p className="text-sm text-muted">{ui.currentStage}</p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <p className="text-gradient mt-2 text-6xl font-extrabold">{current.step}</p>
                  <h3 className="mt-3 text-2xl font-bold text-fg">{current.title}</h3>
                  <p className="mt-3 leading-relaxed text-body">{current.text}</p>
                  <p className="mt-5 text-sm text-accent">
                    {ui.deliverableLabel}: {current.deliverable}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </aside>

          <div className="relative">
            <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-line" />
            <div
              ref={barRef}
              aria-hidden="true"
              style={{ transform: "scaleY(0)" }}
              className="absolute left-0 top-0 h-full w-px origin-top bg-linear-to-b from-blue-500 via-violet-500 to-cyan-400"
            />

            <ol ref={listRef} className="space-y-10 pl-8">
              {steps.map((step, i) => (
                <li key={step.step} data-step className="relative">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[38px] top-1.5 h-3 w-3 rounded-full ring-4 ring-canvas transition-colors duration-500",
                      i <= active ? "bg-accent shadow-[0_0_12px_rgba(34,211,238,0.9)]" : "bg-muted",
                    )}
                  />
                  <Reveal>
                    <p className="text-sm font-semibold text-accent">
                      {ui.stepLabel} {step.step}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-fg">{step.title}</h3>
                    <p className="mt-2 leading-relaxed text-body">{step.text}</p>
                    <p className="mt-3 text-sm text-muted">
                      {ui.deliverableLabel}: <span className="text-fg">{step.deliverable}</span>
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
