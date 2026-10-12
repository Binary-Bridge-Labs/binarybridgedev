"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { locales, switchLocalePath, type Locale } from "@/lib/i18n";

type LanguageSwitchProps = {
  current: Locale;
  groupLabel: string;
  names: Record<Locale, string>;
};

// Chuyển giữa tiếng Anh và tiếng Việt, giữ nguyên trang đang xem.
export function LanguageSwitch({ current, groupLabel, names }: LanguageSwitchProps) {
  const pathname = usePathname();

  return (
    <div role="group" aria-label={groupLabel} className="glass flex shrink-0 items-center rounded-full p-1">
      {locales.map((locale) => {
        const selected = locale === current;
        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            lang={locale}
            aria-label={names[locale]}
            aria-current={selected ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1.5 text-[11px] font-semibold tracking-wide transition-colors sm:px-3 sm:text-xs",
              selected ? "bg-linear-to-r from-blue-500 via-violet-500 to-cyan-400 text-white" : "text-muted hover:text-fg",
            )}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
