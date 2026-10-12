import type { Metadata } from "next";
import Link from "next/link";
import { beVietnam } from "@/lib/fonts";
import "./globals.css";

// Trang 404 cho đường dẫn ngoài hai ngôn ngữ. Dùng tiếng Anh vì đây là ngôn ngữ mặc định.
export const metadata: Metadata = {
  title: { absolute: "Page not found | Binary Bridge Labs" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <html lang="en" className={beVietnam.variable} data-theme="dark">
      <body className="antialiased">
        <main className="flex min-h-screen items-center justify-center px-5">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">404</p>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
            <p className="mt-4 text-slate-300">The page you are looking for may have moved or no longer exists.</p>
            <Link
              href="/en"
              className="mt-8 inline-flex rounded-full bg-linear-to-r from-blue-500 via-violet-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white"
            >
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
