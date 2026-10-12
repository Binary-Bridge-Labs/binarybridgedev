"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AppScreen } from "@/components/app-screens";
import { MagneticButton } from "@/components/magnetic-button";
import { Particles } from "@/components/particles";
import { PhoneMockup } from "@/components/phone-mockup";
import { cn } from "@/lib/cn";
import { format } from "@/lib/format";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { ScreenKind } from "@/lib/i18n/types";
import { HERO_SCREENSHOTS } from "@/lib/screenshots";
import { localePath } from "@/lib/site";

const SCREENS: ScreenKind[] = ["chat", "image", "face", "dashboard"];
const ROTATE_MS = 3800;

type HeroProps = {
  lang: Locale;
  dict: Dictionary;
};

export function Hero({ lang, dict }: HeroProps) {
  const { hero, stats, ui } = dict;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const titleWords = [
    ...hero.titleStart.split(" ").map((word) => ({ word, accent: false })),
    ...hero.titleAccent.split(" ").map((word) => ({ word, accent: true })),
  ];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % SCREENS.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  const current = SCREENS[index];
  const next = SCREENS[(index + 1) % SCREENS.length];

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pb-16 pt-24 sm:pt-28 lg:pb-20"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="aurora-blob -left-32 top-10 h-[420px] w-[420px] bg-blue-600/50" />
        <div className="aurora-blob -right-32 top-1/3 h-[480px] w-[480px] bg-violet-600/40 [animation-delay:-6s]" />
        <div className="aurora-blob bottom-[-160px] left-1/3 h-[380px] w-[380px] bg-cyan-400/30 [animation-delay:-11s]" />
        <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Particles />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1
            id="hero-title"
            className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {titleWords.map(({ word, accent }, i) => (
              <span
                key={`${word}-${i}`}
                className="mr-[0.25em] inline-block overflow-hidden pb-[0.1em] align-top last:mr-0"
              >
                <motion.span
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={cn("inline-block", accent && "text-gradient")}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-body sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={localePath(lang, "/contact")}>
              {hero.primaryCta}
              <span aria-hidden="true">→</span>
            </MagneticButton>
            <MagneticButton href={localePath(lang, "/projects")} variant="ghost">
              {hero.secondaryCta}
            </MagneticButton>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass flex flex-col rounded-2xl p-4">
                {/* Nhãn cố định 2 dòng để số liệu của các thẻ luôn thẳng hàng. */}
                <dt className="min-h-9 text-xs leading-snug text-muted">{stat.label}</dt>
                <dd className="text-gradient mt-auto pt-1 text-2xl font-bold">{stat.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div style={{ y: visualY }} className="relative mx-auto h-[560px] w-full max-w-[460px]">
          <motion.div
            aria-hidden="true"
            style={{ y: orbY }}
            className="hero-orb absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,black_60%,transparent)]"
          >
            <Image src="/generated/hero-orb.webp" alt="" fill sizes="560px" priority className="object-contain" />
          </motion.div>

          <div className="absolute right-0 top-12 hidden origin-top-right scale-[0.8] opacity-60 md:block">
            <PhoneMockup floating>
              <AppScreen kind={next} lang={lang} image={HERO_SCREENSHOTS[next]} />
            </PhoneMockup>
          </div>

          <div className="absolute left-1/2 top-4 z-10 -translate-x-1/2">
            <PhoneMockup floating>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 0.97, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.03, filter: "blur(6px)" }}
                  transition={{ duration: 0.55 }}
                >
                  <AppScreen kind={current} lang={lang} image={HERO_SCREENSHOTS[current]} />
                </motion.div>
              </AnimatePresence>
            </PhoneMockup>
          </div>

          <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {SCREENS.map((screen, i) => (
              <button
                key={screen}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={format(hero.screenN, { n: i + 1 })}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all duration-500",
                  i === index ? "w-8 bg-accent" : "w-2 bg-fg/25 hover:bg-fg/50",
                )}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <span className="sr-only">{ui.illustrative}</span>
    </section>
  );
}
