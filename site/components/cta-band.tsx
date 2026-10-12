import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";

type CtaBandProps = {
  title: string;
  text: string;
  label: string;
  href: string;
};

// Khối kêu gọi liên hệ đặt ở cuối trang con.
export function CtaBand({ title, text, label, href }: CtaBandProps) {
  return (
    <section className="relative py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="glass glow-border relative overflow-hidden rounded-3xl p-8 text-center sm:p-14">
            <h2 className="mx-auto max-w-2xl text-balance text-2xl font-bold text-fg sm:text-3xl">{title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-body">{text}</p>
            <div className="mt-8 flex justify-center">
              <MagneticButton href={href}>
                {label}
                <span aria-hidden="true">→</span>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
