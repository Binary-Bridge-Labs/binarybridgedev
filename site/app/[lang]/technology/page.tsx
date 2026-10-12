import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { TechStack } from "@/components/tech-stack";
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
    path: "/technology",
    title: dict.nav.technology,
    description: dict.sections.technology.description,
  });
}

export default async function TechnologyPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);
  const { sections, ui } = dict;

  return (
    <>
      <PageHero
        eyebrow={sections.technology.eyebrow}
        title={sections.technology.title}
        description={sections.technology.description}
        breadcrumbLabel={ui.breadcrumb}
      />
      <TechStack dict={dict} showHeading={false} />
      <CtaBand title={ui.ctaTitle} text={ui.ctaText} label={ui.startProject} href={localePath(lang, "/contact")} />
    </>
  );
}
