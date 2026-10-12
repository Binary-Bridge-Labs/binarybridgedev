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
    path: "/privacy",
    title: dict.legal.privacy.title,
    description: dict.legal.privacy.intro,
  });
}

export default async function PrivacyPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return <LegalDocument doc={dict.legal.privacy} lang={lang} dict={dict} />;
}
