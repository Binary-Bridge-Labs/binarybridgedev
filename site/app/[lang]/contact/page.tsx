import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/resolve-locale";
import { buildMetadata } from "@/lib/seo";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: "/contact",
    title: dict.nav.contact,
    description: dict.contact.description,
  });
}

export default async function ContactPage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return <Contact dict={dict} />;
}
