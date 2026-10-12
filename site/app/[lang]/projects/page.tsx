import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ProjectCards } from "@/components/project-cards";
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
    path: "/projects",
    title: dict.nav.projects,
    description: dict.sections.projects.description,
  });
}

export default async function ProjectsPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);
  const { sections, ui } = dict;

  return (
    <>
      <PageHero
        eyebrow={sections.projects.eyebrow}
        title={sections.projects.title}
        description={sections.projects.description}
        breadcrumbLabel={ui.breadcrumb}
      />
      <section aria-label={ui.projectList} className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ProjectCards lang={lang} dict={dict} />
        </div>
      </section>
      <CtaBand title={ui.ctaTitle} text={ui.ctaText} label={ui.startProject} href={localePath(lang, "/contact")} />
    </>
  );
}
