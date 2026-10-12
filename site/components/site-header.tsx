"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitch } from "@/components/language-switch";
import { MagneticButton } from "@/components/magnetic-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath, navRoutes } from "@/lib/site";

type SiteHeaderProps = {
  lang: Locale;
  dict: Dictionary;
};

export function SiteHeader({ lang, dict }: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { ui, nav, company } = dict;
  const homeHref = localePath(lang);
  const contactHref = localePath(lang, "/contact");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Đóng menu di động khi chuyển trang.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-line bg-header backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:h-20">
        <Link href={homeHref} aria-label={ui.homeAria} className="flex shrink-0 items-center">
          {/* Hai bản logo: chữ trắng cho nền tối, chữ đậm cho nền sáng. CSS chọn bản phù hợp theo data-theme. */}
          <Image
            src="/brand/logo.png"
            alt={company.name}
            width={1984}
            height={384}
            priority
            className="logo-on-dark h-7 w-auto lg:h-8"
          />
          <Image
            src="/brand/logo-light.png"
            alt=""
            aria-hidden="true"
            width={1984}
            height={384}
            priority
            className="logo-on-light h-7 w-auto lg:h-8"
          />
        </Link>

        <nav aria-label={ui.mainNav} className="hidden xl:block">
          <ul className="flex items-center gap-7 text-sm text-body">
            {navRoutes.map((item) => {
              const href = localePath(lang, item.path);
              const active = pathname === href;
              return (
                <li key={item.key}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn("transition-colors hover:text-fg", active && "text-fg")}
                  >
                    {nav[item.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden 2xl:block">
            <MagneticButton href={contactHref} className="px-5 py-2.5">
              {ui.startProject}
            </MagneticButton>
          </div>
          <LanguageSwitch current={lang} groupLabel={ui.languageLabel} names={ui.languageNames} />
          <ThemeToggle labelToLight={ui.themeToLight} labelToDark={ui.themeToDark} />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            className="glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-fg xl:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-300",
                  open && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 w-5 rounded bg-current transition-transform duration-300",
                  open && "-translate-y-[6px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass mx-4 mb-4 rounded-3xl p-6 xl:hidden"
          >
            <nav aria-label={ui.mobileNav}>
              <ul className="flex flex-col gap-4 text-base text-body">
                {navRoutes.map((item) => (
                  <li key={item.key}>
                    <Link href={localePath(lang, item.path)} className="block py-1 hover:text-fg">
                      {nav[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-6">
              <MagneticButton href={contactHref} className="w-full">
                {ui.startProject}
              </MagneticButton>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
