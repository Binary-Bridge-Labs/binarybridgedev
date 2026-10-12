"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState, type KeyboardEvent } from "react";
import { AppScreen } from "@/components/app-screens";
import { PhoneMockup } from "@/components/phone-mockup";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/cn";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/site";

type ProjectsProps = {
  lang: Locale;
  dict: Dictionary;
  showHeading?: boolean;
};

export function Projects({ lang, dict, showHeading = true }: ProjectsProps) {
  const { projects, sections, ui } = dict;
  const [active, setActive] = useState(0);
  const project = projects[active];

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    const step = keys[event.key];
    if (step === undefined) return;
    event.preventDefault();
    const nextIndex = (active + step + projects.length) % projects.length;
    setActive(nextIndex);
    document.getElementById(`project-tab-${projects[nextIndex].slug}`)?.focus();
  }

  return (
    <section id="projects" aria-label={sections.projects.title} className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {showHeading ? <SectionHeading {...sections.projects} /> : null}

        <div className={cn("grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16", showHeading && "mt-16")}>
          <div>
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label={ui.projectList}
              onKeyDown={handleKeyDown}
              className="flex flex-col gap-3"
            >
              {projects.map((item, i) => {
                const selected = i === active;
                return (
                  <button
                    key={item.slug}
                    id={`project-tab-${item.slug}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="project-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent",
                      selected
                        ? "border-accent/50 bg-chip shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)]"
                        : "border-line bg-chip/50 hover:border-line hover:bg-chip",
                    )}
                  >
                    <span>
                      <span className="block text-lg font-semibold text-fg">{item.name}</span>
                      <span className="mt-0.5 block text-sm text-muted">{item.category}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "text-xl transition-transform duration-300 group-hover:translate-x-1",
                        selected ? "text-accent" : "text-muted",
                      )}
                    >
                      →
                    </span>
                  </button>
                );
              })}
            </div>

            <div id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${project.slug}`} className="mt-8 min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="text-2xl font-bold text-fg">{project.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-body">{project.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-chip px-3 py-1 text-xs text-accent ring-1 ring-accent/20">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={localePath(lang, `/projects/${project.slug}`)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-transform hover:translate-x-1"
                  >
                    {ui.viewDetails}
                    <span aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="aurora-blob left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 bg-violet-600/35" />
            <div className="relative">
              <PhoneMockup floating>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={project.slug}
                    className="absolute inset-0"
                    initial={{ opacity: 0, rotateY: -12 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: 12 }}
                    transition={{ duration: 0.5 }}
                  >
                    <AppScreen kind={project.screen} lang={lang} />
                  </motion.div>
                </AnimatePresence>
              </PhoneMockup>
            </div>
          </div>
        </div>
        <span className="sr-only">{ui.illustrative}</span>
      </div>
    </section>
  );
}
