"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { ScreenKind } from "@/lib/i18n/types";

type AppScreenProps = {
  kind: ScreenKind;
  lang: Locale;
  // Đường dẫn ảnh chụp màn hình thật. Nếu có thì thay cho giao diện minh họa.
  image?: string;
};

// Giao diện minh họa cho khung điện thoại. Không phải ảnh chụp sản phẩm thật, trừ khi truyền image.
// Màn hình luôn dùng nền tối (data-theme="dark") vì nằm trong khung thiết bị.
export function AppScreen({ kind, lang, image }: AppScreenProps) {
  const copy = COPY[lang];

  if (image) {
    return (
      <div data-theme="dark" className="relative h-full w-full">
        <Image src={image} alt="" fill sizes="260px" className="object-cover object-top" />
      </div>
    );
  }

  return (
    <div data-theme="dark" className="h-full">
      {kind === "chat" ? <ChatScreen copy={copy.chat} /> : null}
      {kind === "image" ? <ImageScreen copy={copy.image} /> : null}
      {kind === "face" ? <FaceScreen copy={copy.face} /> : null}
      {kind === "dashboard" ? <DashboardScreen copy={copy.dashboard} /> : null}
    </div>
  );
}

const COPY = {
  en: {
    chat: {
      online: "Online",
      question: "Summarize this quarter's revenue for me",
      answer: "Revenue grew compared with last quarter, led by the mobile app.",
      follow: "Would you like to see a detailed chart?",
      placeholder: "Type a question...",
    },
    image: { adjust: "Add sunset light", strength: "Strength" },
    face: { processing: "Processing", expression: "Expression", smile: "Smiling" },
    dashboard: {
      title: "Overview",
      kpis: [
        ["Users", "12.4K"],
        ["Sessions", "38K"],
        ["Retention", "64%"],
        ["Rating", "4.8"],
      ] as const,
    },
  },
  vi: {
    chat: {
      online: "Trực tuyến",
      question: "Tóm tắt giúp tôi báo cáo doanh thu quý này",
      answer: "Doanh thu quý này tăng so với quý trước, trong đó ứng dụng di động đóng góp nhiều nhất.",
      follow: "Bạn muốn xem biểu đồ chi tiết không?",
      placeholder: "Nhập câu hỏi...",
    },
    image: { adjust: "Thêm ánh hoàng hôn", strength: "Cường độ" },
    face: { processing: "Đang xử lý", expression: "Biểu cảm", smile: "Mỉm cười" },
    dashboard: {
      title: "Tổng quan",
      kpis: [
        ["Người dùng", "12,4K"],
        ["Phiên", "38K"],
        ["Giữ chân", "64%"],
        ["Đánh giá", "4,8"],
      ] as const,
    },
  },
} as const;

type Copy = (typeof COPY)[Locale];

function ChatScreen({ copy }: { copy: Copy["chat"] }) {
  return (
    <div className="flex h-full flex-col gap-3 bg-linear-to-b from-[#0e1838] to-[#070b17] px-4 pb-4 pt-12 text-[11px]">
      <div className="flex items-center justify-between text-slate-300">
        <span className="font-semibold text-white">Ask AI</span>
        <span className="flex items-center gap-1.5 text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {copy.online}
        </span>
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-linear-to-r from-blue-500 to-violet-500 px-3 py-2 text-white">
        {copy.question}
      </div>
      <div className="glass max-w-[90%] rounded-2xl rounded-bl-md px-3 py-2 leading-relaxed text-slate-200">{copy.answer}</div>
      <div className="glass max-w-[70%] rounded-2xl rounded-bl-md px-3 py-2 text-slate-200">{copy.follow}</div>
      <div className="glass mt-auto flex items-center gap-2 rounded-full px-3 py-2 text-slate-400">
        <span className="flex-1">{copy.placeholder}</span>
        <span className="h-6 w-6 rounded-full bg-cyan-400/80" />
      </div>
    </div>
  );
}

function ImageScreen({ copy }: { copy: Copy["image"] }) {
  return (
    <div className="flex h-full flex-col gap-3 bg-[#070b17] px-4 pb-4 pt-12 text-[11px]">
      <div className="flex items-center justify-between text-slate-300">
        <span className="font-semibold text-white">Wonder</span>
        <span className="rounded-full bg-violet-500/30 px-2 py-0.5 text-violet-200">AI</span>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 via-violet-600 to-cyan-400">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
        <div className="glass absolute bottom-3 left-3 right-3 rounded-xl px-3 py-2 text-slate-100">{copy.adjust}</div>
      </div>
      <div>
        <div className="flex justify-between text-slate-400">
          <span>{copy.strength}</span>
          <span>65%</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-[65%] rounded-full bg-linear-to-r from-blue-400 to-cyan-300" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="aspect-square rounded-xl bg-linear-to-br from-slate-700 to-slate-900 ring-1 ring-white/10" />
        ))}
      </div>
    </div>
  );
}

const FACE_POINTS: Array<[number, number]> = [
  [50, 36],
  [42, 46],
  [58, 46],
  [50, 56],
  [40, 62],
  [60, 62],
  [50, 70],
];

function FaceScreen({ copy }: { copy: Copy["face"] }) {
  return (
    <div className="relative flex h-full flex-col bg-[#070b17] px-4 pb-4 pt-12 text-[11px]">
      <div className="flex items-center justify-between text-slate-300">
        <span className="font-semibold text-white">FaceDance</span>
        <span className="text-cyan-300">{copy.processing}</span>
      </div>
      <div className="relative mx-auto mt-5 aspect-[3/4] w-[78%] rounded-[45%] bg-linear-to-b from-blue-500/25 to-violet-500/25 ring-1 ring-cyan-300/40 shadow-[0_0_40px_-6px_rgba(34,211,238,0.6)]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path
            d="M42 46 L50 36 L58 46 M40 62 L50 56 L60 62 M42 46 L40 62 M58 46 L60 62 M50 36 L50 56 L50 70"
            stroke="rgba(103,232,249,0.5)"
            strokeWidth="0.4"
            fill="none"
          />
          {FACE_POINTS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#67e8f9" />
          ))}
        </svg>
      </div>
      <div className="glass mt-auto rounded-2xl p-3 text-slate-200">
        <div className="flex justify-between">
          <span>{copy.expression}</span>
          <span className="text-cyan-300">{copy.smile}</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10">
          <div className="h-full w-[72%] rounded-full bg-linear-to-r from-violet-400 to-cyan-300" />
        </div>
      </div>
    </div>
  );
}

const BARS = [42, 68, 54, 82, 61, 90, 73];

function DashboardScreen({ copy }: { copy: Copy["dashboard"] }) {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full flex-col gap-3 bg-[#070b17] px-4 pb-4 pt-12 text-[11px]">
      <div className="font-semibold text-white">{copy.title}</div>
      <div className="grid grid-cols-2 gap-2">
        {copy.kpis.map(([label, value]) => (
          <div key={label} className="glass rounded-xl p-2.5">
            <p className="text-slate-400">{label}</p>
            <p className="mt-1 text-sm font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="glass mt-auto flex h-40 items-end gap-2 rounded-2xl p-3">
        {BARS.map((height, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 0.1 + i * 0.06, ease: "easeOut" }}
            style={{ height: `${height}%`, transformOrigin: "bottom" }}
            className="flex-1 rounded-t-md bg-linear-to-t from-blue-600 to-cyan-300"
          />
        ))}
      </div>
    </div>
  );
}
