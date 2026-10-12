import type { Metadata } from "next";
import { About } from "@/components/about";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { getDictionary } from "@/lib/i18n";
import { localePath } from "@/lib/site";
import { resolveLocale } from "@/lib/resolve-locale";
import { buildMetadata } from "@/lib/seo";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/about",
    title: dict.nav.about,
    description: dict.about.paragraphs[0],
  });
}

export default async function AboutPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHero
        eyebrow={dict.about.eyebrow}
        title={dict.about.title}
        breadcrumbLabel={dict.ui.breadcrumb}
      />
      <About dict={dict} showHeading={false} />
      <CtaBand
        title={dict.ui.ctaTitle}
        text={dict.ui.ctaText}
        label={dict.ui.startProject}
        href={localePath(lang, "/contact")}
      />
    </>
  );
}
