import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n";

type TechStackProps = {
  dict: Dictionary;
  showHeading?: boolean;
};

const MARQUEE_REPEATS = 4;

export function TechStack({ dict, showHeading = true }: TechStackProps) {
  const { sections, technology } = dict;
  const allItems = technology.groups.flatMap((group) => group.items);

  return (
    <section id="tech" aria-label={sections.technology.title} className="relative py-16 lg:py-20">
      {showHeading ? (
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading {...sections.technology} />
        </div>
      ) : null}

      <div className={cn("overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]", showHeading ? "mt-16" : "")}>
        {/* Mỗi nửa dải lặp lại danh sách đủ rộng để vượt màn hình lớn nhất, nên vòng lặp không bao giờ hở.
            Danh sách nhóm bên dưới đã có đầy đủ tên công nghệ cho người đọc màn hình. */}
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <ul key={half} aria-hidden="true" className="flex shrink-0 gap-4 pr-4">
              {Array.from({ length: MARQUEE_REPEATS }, (_, repeat) =>
                allItems.map((item) => (
                  <li
                    key={`${half}-${repeat}-${item.name}`}
                    className="glass whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium text-fg"
                  >
                    {item.name}
                  </li>
                )),
              )}
            </ul>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        {technology.groups.map((group, i) => (
          <Reveal key={group.title} delay={0.1 * i}>
            <div className="glass glow-border h-full rounded-3xl p-7 sm:p-8">
              <h3 className="text-lg font-semibold text-fg">{group.title}</h3>
              <ul className="mt-6 grid gap-5 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-semibold text-accent">{item.name}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <ul className="mx-auto mt-6 grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-3">
        {technology.principles.map((principle, i) => (
          <li key={principle.title}>
            <Reveal delay={0.1 * i} className="h-full">
              <SpotlightCard className="h-full p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-fg">{principle.title}</h3>
                <p className="mt-2 leading-relaxed text-body">{principle.text}</p>
              </SpotlightCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
