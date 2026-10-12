import type { Locale } from "@/lib/i18n";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bblvn.com";
export const contactEmail = "contact@binarybridge.dev";

// Đường dẫn gốc của một trang trong một ngôn ngữ. path bắt đầu bằng "/" hoặc để trống.
export function localePath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}

// Các mục điều hướng chính. Khóa trùng với dictionary.nav.
export const navRoutes = [
  { key: "careers", path: "/careers" },
  { key: "projects", path: "/projects" },
  { key: "process", path: "/process" },
  { key: "technology", path: "/technology" },
  { key: "about", path: "/about" },
  { key: "contact", path: "/contact" },
] as const;

export type NavKey = (typeof navRoutes)[number]["key"];
