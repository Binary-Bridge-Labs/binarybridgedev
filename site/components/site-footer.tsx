import Image from "next/image";
import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { contactEmail, localePath, navRoutes } from "@/lib/site";

type SiteFooterProps = {
  lang: Locale;
  dict: Dictionary;
};

export function SiteFooter({ lang, dict }: SiteFooterProps) {
  const { ui, nav, company } = dict;

  return (
    <footer className="relative border-t border-line py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/logo.png"
            alt={company.name}
            width={1984}
            height={384}
            className="logo-on-dark h-7 w-auto"
          />
          <Image
            src="/brand/logo-light.png"
            alt=""
            aria-hidden="true"
            width={1984}
            height={384}
            className="logo-on-light h-7 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">{company.tagline}</p>
        </div>

        <nav aria-label={ui.footerNav}>
          <p className="text-sm font-semibold text-fg">{ui.footerExplore}</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            {navRoutes.map((item) => (
              <li key={item.key}>
                <Link href={localePath(lang, item.path)} className="transition-colors hover:text-accent">
                  {nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={ui.footerLegal}>
          <p className="text-sm font-semibold text-fg">{ui.footerLegal}</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <Link href={localePath(lang, "/privacy")} className="transition-colors hover:text-accent">
                {dict.legal.privacy.title}
              </Link>
            </li>
            <li>
              <Link href={localePath(lang, "/terms")} className="transition-colors hover:text-accent">
                {dict.legal.terms.title}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-fg">{ui.footerContact}</p>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a href={`mailto:${contactEmail}`} className="transition-colors hover:text-accent">
                {contactEmail}
              </a>
            </li>
            <li>{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} {company.name}. {ui.rights}
      </div>
    </footer>
  );
}
