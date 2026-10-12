import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/resolve-locale";
import { buildMetadata } from "@/lib/seo";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/terms",
    title: dict.legal.terms.title,
    description: dict.legal.terms.intro,
  });
}

export default async function TermsPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return <LegalDocument doc={dict.legal.terms} lang={lang} dict={dict} />;
}
