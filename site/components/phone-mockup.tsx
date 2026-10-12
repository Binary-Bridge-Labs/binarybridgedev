"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/cn";

type PhoneMockupProps = {
  children: ReactNode;
  className?: string;
  floating?: boolean;
};

// Khung điện thoại 3D nghiêng theo con trỏ. Nội dung màn hình truyền qua children.
export function PhoneMockup({ children, className, floating = false }: PhoneMockupProps) {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.div
      className={cn("relative mx-auto w-[240px] sm:w-[260px]", className)}
      animate={floating && !reduce ? { y: [0, -14, 0] } : undefined}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative aspect-[9/19] [perspective:1200px]" onMouseMove={handleMove} onMouseLeave={handleLeave}>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-full w-full rounded-[2.75rem] border border-white/15 bg-[#0a0f1f] p-2.5 shadow-[0_40px_90px_-24px_rgba(59,130,246,0.55)]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[2.75rem] bg-linear-to-b from-white/12 via-transparent to-transparent" />
          <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-[#070b17]">
            <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
            {children}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
