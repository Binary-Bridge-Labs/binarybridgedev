import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/process";
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
    path: "/process",
    title: dict.nav.process,
    description: dict.sections.process.description,
  });
}

export default async function ProcessPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);
  const { sections, ui } = dict;

  return (
    <>
      <PageHero
        eyebrow={sections.process.eyebrow}
        title={sections.process.title}
        description={sections.process.description}
        breadcrumbLabel={ui.breadcrumb}
      />
      <Process dict={dict} showHeading={false} />
      <CtaBand title={ui.ctaTitle} text={ui.ctaText} label={ui.startProject} href={localePath(lang, "/contact")} />
    </>
  );
}
