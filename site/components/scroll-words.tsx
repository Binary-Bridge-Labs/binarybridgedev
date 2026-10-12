"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

type ScrollWordsProps = {
  text: string;
  className?: string;
};

// Mỗi từ sáng dần theo vị trí cuộn, giống cách đọc văn bản chạy theo trang.
export function ScrollWords({ text, className }: ScrollWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.55"] });

  if (reduced) {
    return <p className={className}>{text}</p>;
  }

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <Word
          key={`${i}-${word}`}
          word={word}
          progress={scrollYProgress}
          start={i / words.length}
          end={(i + 1) / words.length}
        />
      ))}
    </p>
  );
}

type WordProps = {
  word: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
};

function Word({ word, progress, start, end }: WordProps) {
  const opacity = useTransform(progress, [start, end], [0.25, 1]);

  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>
      {" "}
    </>
  );
}
