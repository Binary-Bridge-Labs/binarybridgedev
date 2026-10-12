import { ProjectCards } from "@/components/project-cards";
import { SectionHeading } from "@/components/section-heading";
import type { Dictionary, Locale } from "@/lib/i18n";

// Ba sản phẩm nổi bật đầu tiên, hiển thị trên trang chủ ngay trước danh sách dự án đầy đủ.
export function FeaturedProducts({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { sections, projects } = dict;
  return (
    <section id="featured" aria-label={sections.featured.title} className="relative py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading {...sections.featured} />
        <div className="mt-16">
          <ProjectCards lang={lang} dict={dict} projects={projects.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
