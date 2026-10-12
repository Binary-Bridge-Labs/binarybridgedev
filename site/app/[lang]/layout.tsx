import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { beVietnam } from "@/lib/fonts";
import { getDictionary, locales, type Locale } from "@/lib/i18n";
import { resolveLocale } from "@/lib/resolve-locale";
import { contactEmail, localePath, siteUrl } from "@/lib/site";
import "../globals.css";

// Đặt theme trước khi trang được vẽ để tránh nháy sáng/tối. Mặc định là sáng.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"?"dark":"light";}catch(e){document.documentElement.dataset.theme="light";}})();`;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Metadata riêng của từng trang nằm trong page.tsx qua buildMetadata.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Binary Bridge Labs", template: "%s | Binary Bridge Labs" },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070f" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
  width: "device-width",
  initialScale: 1,
};

function organizationJsonLd(lang: Locale) {
  const dict = getDictionary(lang);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: dict.company.name,
    url: `${siteUrl}${localePath(lang)}`,
    logo: `${siteUrl}/brand/logo.png`,
    email: contactEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: dict.company.address,
      addressCountry: "VN",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const lang = await resolveLocale(params);
  const dict = getDictionary(lang);

  return (
    <html lang={dict.meta.htmlLang} className={beVietnam.variable} data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[#05070f]"
        >
          {dict.ui.skipToContent}
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(lang)) }}
        />
        <SiteHeader lang={lang} dict={dict} />
        <main id="main">{children}</main>
        <SiteFooter lang={lang} dict={dict} />
      </body>
    </html>
  );
}
