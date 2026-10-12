import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/resolve-locale";
import { buildMetadata } from "@/lib/seo";
import { localePath } from "@/lib/site";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/careers",
    title: dict.nav.careers,
    description: dict.sections.careers.description,
  });
}

export default async function CareersPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);
  const { careers, sections, ui } = dict;

  return (
    <>
      <PageHero
        eyebrow={sections.careers.eyebrow}
        title={sections.careers.title}
        description={sections.careers.description}
        breadcrumbLabel={ui.breadcrumb}
      />
      <section aria-label={sections.careers.title} className="relative pb-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="rounded-2xl border border-line bg-chip px-5 py-4 text-sm text-muted">{careers.draftNote}</p>
          <div className="mt-8 space-y-4">
            {careers.roles.map((role, i) => (
              <Reveal key={role.title} delay={0.05 * i}>
                <article className="glass glow-border rounded-3xl p-6 sm:p-7">
                  <h2 className="text-xl font-semibold text-fg">{role.title}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {[role.team, role.location, role.type].join(" · ")}
                  </p>
                  <p className="mt-3 leading-relaxed text-body">{role.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title={careers.ctaTitle}
        text={careers.ctaText}
        label={careers.applyCta}
        href={localePath(lang, "/contact")}
      />
    </>
  );
}
