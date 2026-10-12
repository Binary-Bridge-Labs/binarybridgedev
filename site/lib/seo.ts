import type { Metadata } from "next";
import { getDictionary, type Locale } from "@/lib/i18n";
import { localePath, siteUrl } from "@/lib/site";

type PageMetaInput = {
  locale: Locale;
  // Đường dẫn không gồm ngôn ngữ, ví dụ "/careers" hoặc "" cho trang chủ.
  path?: string;
  title?: string;
  description?: string;
  // Dùng khi tiêu đề đã có đủ tên công ty (trang chủ), để template không thêm hậu tố.
  absoluteTitle?: boolean;
};

const other = (locale: Locale): Locale => (locale === "en" ? "vi" : "en");

// Metadata cho từng trang: canonical, hreflang cho cả hai ngôn ngữ và Open Graph.
export function buildMetadata({ locale, path = "", title, description, absoluteTitle }: PageMetaInput): Metadata {
  const dict = getDictionary(locale);
  const alt = getDictionary(other(locale));
  const pageTitle = title ?? dict.meta.title;
  const pageDescription = description ?? dict.meta.description;
  const canonical = localePath(locale, path);

  return {
    title: absoluteTitle ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    keywords: dict.meta.keywords,
    alternates: {
      canonical,
      languages: {
        en: localePath("en", path),
        vi: localePath("vi", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      locale: dict.meta.ogLocale,
      alternateLocale: [alt.meta.ogLocale],
      url: `${siteUrl}${canonical}`,
      siteName: dict.company.name,
      title: pageTitle,
      description: pageDescription,
      images: [{ url: "/brand/logo.png", width: 1984, height: 384, alt: dict.company.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
  };
}
