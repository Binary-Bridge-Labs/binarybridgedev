import Link from "next/link";
import { AppScreen } from "@/components/app-screens";
import { Reveal } from "@/components/reveal";
import { SpotlightCard } from "@/components/spotlight-card";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/site";

// Lưới dự án cho trang danh sách và mục sản phẩm nổi bật. Mỗi thẻ có ảnh minh họa và liên kết tới trang chi tiết.
export function ProjectCards({
  lang,
  dict,
  projects = dict.projects,
}: {
  lang: Locale;
  dict: Dictionary;
  projects?: Dictionary["projects"];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={0.08 * i} className="h-full">
          <Link href={localePath(lang, `/projects/${project.slug}`)} className="group block h-full rounded-3xl">
            <SpotlightCard className="flex h-full flex-col p-6">
              <div className="relative mx-auto h-[300px] w-full max-w-[220px] overflow-hidden rounded-[28px] ring-1 ring-line">
                <div className="absolute inset-0 origin-top transition-transform duration-500 group-hover:scale-[1.03]">
                  <AppScreen kind={project.screen} lang={lang} />
                </div>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{project.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-fg">{project.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-body">{project.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-chip px-3 py-1 text-xs text-body ring-1 ring-line">
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                {dict.ui.viewDetails}
                <span aria-hidden="true">→</span>
              </span>
            </SpotlightCard>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
