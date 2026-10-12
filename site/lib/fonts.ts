import { Be_Vietnam_Pro } from "next/font/google";

// Be Vietnam Pro có đầy đủ dấu tiếng Việt và cả bảng chữ Latin cho tiếng Anh.
export const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam",
  display: "swap",
});
