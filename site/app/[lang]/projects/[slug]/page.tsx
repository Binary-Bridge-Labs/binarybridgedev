import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AppScreen } from "@/components/app-screens";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { PhoneMockup } from "@/components/phone-mockup";
import { getDictionary, locales } from "@/lib/i18n";
import { resolveLocale } from "@/lib/resolve-locale";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => getDictionary(lang).projects.map((project) => ({ lang, slug: project.slug })));
}

type ProjectParams = { params: Promise<{ lang: string; slug: string }> };

export async function generateMetadata({ params }: ProjectParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const dict = getDictionary(locale);
  const project = dict.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return buildMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: project.name,
    description: project.summary,
  });
}

export default async function ProjectDetailPage({ params }: ProjectParams) {
  const lang = await resolveLocale(params);
  const { slug } = await params;
  const dict = getDictionary(lang);
  const { ui, projects } = dict;
  const index = projects.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.summary}
        breadcrumbs={[{ label: dict.nav.projects, href: localePath(lang, "/projects") }]}
        breadcrumbLabel={ui.breadcrumb}
      />

      <section aria-label={project.name} className="relative pb-20">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <div className="mx-auto max-w-[300px]">
              <PhoneMockup>
                <AppScreen kind={project.screen} lang={lang} />
              </PhoneMockup>
            </div>
            <p className="mt-6 text-center text-xs text-muted">{ui.illustrative}</p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{ui.challengeLabel}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{ui.approachLabel}</h2>
              <p className="mt-4 text-lg leading-relaxed text-body">{project.approach}</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{ui.highlightsLabel}</h2>
              <ul className="mt-4 space-y-3">
                {project.highlights.map((item) => (
                  <li key={item} className="glass flex gap-3 rounded-2xl px-5 py-4 leading-relaxed text-body">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full bg-chip px-3 py-1 text-xs text-accent ring-1 ring-accent/20">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-line px-5 pt-8 sm:px-8">
          <Link href={localePath(lang, "/projects")} className="text-sm font-medium text-muted transition-colors hover:text-fg">
            ← {ui.backToProjects}
          </Link>
          <Link
            href={localePath(lang, `/projects/${next.slug}`)}
            className="group text-sm font-medium text-accent"
          >
            <span className="text-muted">{ui.nextProject}: </span>
            {next.name}{" "}
            <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <CtaBand title={ui.ctaTitle} text={ui.ctaText} label={ui.startProject} href={localePath(lang, "/contact")} />
    </>
  );
}
