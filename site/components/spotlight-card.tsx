"use client";

import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

// Thẻ kính có ánh sáng đi theo con trỏ và viền phát sáng khi hover.
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  }

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "spotlight glass glow-border rounded-3xl transition-transform duration-500 hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
