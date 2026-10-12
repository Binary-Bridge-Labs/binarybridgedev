import { en } from "./en";
import { vi } from "./vi";
import type { Dictionary } from "./types";

export type { Dictionary } from "./types";

export const locales = ["en", "vi"] as const;
export type Locale = (typeof locales)[number];

// Tiếng Anh là ngôn ngữ mặc định. Trang gốc "/" chuyển hướng sang "/en".
export const defaultLocale: Locale = "en";

const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

// Đổi ngôn ngữ của một đường dẫn, ví dụ "/en/careers" -> "/vi/careers".
export function switchLocalePath(pathname: string, locale: Locale): string {
  const rest = pathname.replace(/^\/(en|vi)(?=\/|$)/, "");
  return `/${locale}${rest || ""}`;
}
