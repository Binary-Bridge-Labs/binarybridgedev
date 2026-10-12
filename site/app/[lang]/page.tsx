import type { Metadata } from "next";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { FeaturedProducts } from "@/components/featured-products";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/resolve-locale";
import { buildMetadata } from "@/lib/seo";

type LangParams = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return buildMetadata({ locale, absoluteTitle: true });
}

export default async function HomePage({ params }: LangParams) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} dict={dict} />
      <About dict={dict} />
      <FeaturedProducts lang={lang} dict={dict} />
      <Projects lang={lang} dict={dict} />
      <Process dict={dict} />
      <TechStack dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
