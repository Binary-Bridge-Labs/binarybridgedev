import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-bold leading-tight text-fg sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-pretty text-base leading-relaxed text-body sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
