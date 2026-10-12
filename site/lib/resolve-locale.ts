import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";

// Lấy ngôn ngữ từ params của route và trả về 404 nếu không hợp lệ.
export async function resolveLocale(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
