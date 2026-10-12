import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Trang gốc chuyển sang ngôn ngữ mặc định (tiếng Anh).
      { source: "/", destination: "/en", permanent: false },
    ];
  },
};

export default nextConfig;
