import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { ScrollWords } from "@/components/scroll-words";
import { SpotlightCard } from "@/components/spotlight-card";
import type { Dictionary } from "@/lib/i18n";

type AboutProps = {
  dict: Dictionary;
  showHeading?: boolean;
};

export function About({ dict, showHeading = true }: AboutProps) {
  const { about } = dict;
  return (
    <section
      id="about"
      aria-labelledby={showHeading ? "about-title" : undefined}
      aria-label={showHeading ? undefined : about.title}
      className="relative isolate overflow-hidden py-16 lg:py-20"
    >
      <Image
        src="/generated/about-ribbons.webp"
        alt=""
        fill
        sizes="100vw"
        className="ribbon-bg -z-10 object-cover"
      />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          {showHeading ? (
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{about.eyebrow}</p>
              <h2 id="about-title" className="mt-4 text-balance text-3xl font-bold leading-tight text-fg sm:text-4xl lg:text-5xl">
                {about.title}
              </h2>
            </Reveal>
          ) : null}

          <div className={showHeading ? "mt-8 space-y-5" : "space-y-5"}>
            {about.paragraphs.map((paragraph) => (
              <ScrollWords key={paragraph} text={paragraph} className="text-base leading-relaxed text-body sm:text-lg" />
            ))}
          </div>
        </div>

        <ul className="grid gap-5 self-center">
          {about.values.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={0.1 * i}>
                <SpotlightCard className="p-6 sm:p-7">
                  <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-body">{item.text}</p>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
