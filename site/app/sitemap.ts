import type { MetadataRoute } from "next";
import { getDictionary, locales } from "@/lib/i18n";
import { localePath, siteUrl } from "@/lib/site";

// Đường dẫn không gồm ngôn ngữ. Trang dự án được thêm theo slug của từng ngôn ngữ.
function staticPaths(): string[] {
  return ["", "/about", "/careers", "/projects", "/process", "/technology", "/contact", "/privacy", "/terms"];
}

// Mỗi URL đều liệt kê cả hai ngôn ngữ để công cụ tìm kiếm hiểu quan hệ hreflang.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const slugPaths = {
    en: getDictionary("en"),
    vi: getDictionary("vi"),
  };

  const pathSet = new Set<string>(staticPaths());
  for (const dict of Object.values(slugPaths)) {
    dict.projects.forEach((project) => pathSet.add(`/projects/${project.slug}`));
  }

  const entries: MetadataRoute.Sitemap = [];
  for (const path of pathSet) {
    const languages = Object.fromEntries(locales.map((locale) => [locale, `${siteUrl}${localePath(locale, path)}`]));
    for (const locale of locales) {
      entries.push({
        url: `${siteUrl}${localePath(locale, path)}`,
        lastModified,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
        alternates: { languages },
      });
    }
  }
  return entries;
}
