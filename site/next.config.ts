import type { NextConfig } from "next";

// Xuất site thành HTML tĩnh để GitHub Pages phục vụ (xem .github/workflows/deploy.yml).
// Static export không chạy được redirects(), nên trang gốc "/" được xử lý bằng public/index.html.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },
};

export default nextConfig;
