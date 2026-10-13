import type { MetadataRoute } from "next";

// Bắt buộc với output: "export" để robots.txt được tạo thành file tĩnh.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bblvn.com";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
