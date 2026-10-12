import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { LegalDoc } from "@/lib/i18n/types";
import { localePath } from "@/lib/site";

type LegalDocumentProps = {
  doc: LegalDoc;
  lang: Locale;
  dict: Dictionary;
};

// Trang pháp lý dùng chung cho chính sách bảo mật và điều khoản.
export function LegalDocument({ doc, lang, dict }: LegalDocumentProps) {
  return (
    <section aria-labelledby="legal-title" className="relative isolate pb-24 pt-32 sm:pt-40">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <nav aria-label={dict.ui.backToHome}>
          <Link href={localePath(lang)} className="text-sm text-muted transition-colors hover:text-fg">
            ← {dict.ui.backToHome}
          </Link>
        </nav>

        <h1 id="legal-title" className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
          {doc.title}
        </h1>
        <p className="mt-4 text-sm text-muted">{doc.updated}</p>
        <p className="mt-8 text-pretty text-base leading-relaxed text-body">{doc.intro}</p>

        <p className="glass mt-8 rounded-2xl px-5 py-4 text-sm text-amber-500">{doc.draftNote}</p>

        <div className="mt-12 space-y-10">
          {doc.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-semibold text-fg">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
