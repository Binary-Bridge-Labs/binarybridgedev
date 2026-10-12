import Link from "next/link";
import { Reveal } from "@/components/reveal";

type Crumb = { label: string; href: string };

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  breadcrumbLabel: string;
  aurora?: boolean;
};

// Phần đầu của trang con: breadcrumb, tiêu đề và mô tả ngắn.
export function PageHero({ eyebrow, title, description, breadcrumbs, breadcrumbLabel, aurora = true }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="relative isolate overflow-hidden pb-16 pt-32 sm:pt-40">
      {aurora ? (
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="aurora-blob -left-32 top-0 h-[360px] w-[360px] bg-blue-600/40" />
          <div className="aurora-blob -right-24 top-10 h-[320px] w-[320px] bg-violet-600/30 [animation-delay:-7s]" />
          <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        </div>
      ) : null}

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <nav aria-label={breadcrumbLabel}>
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  <Link href={crumb.href} className="transition-colors hover:text-fg">
                    {crumb.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <Reveal className="mt-6 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
          <h1 id="page-title" className="mt-4 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
