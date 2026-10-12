import type { ScreenKind } from "@/lib/i18n/types";

// Ảnh chụp màn hình thật cho khung điện thoại ở hero.
// Cách dùng: đặt file vào public/screens/ (nên là ảnh dọc, tỉ lệ khoảng 9:19, ví dụ 1170x2532),
// rồi điền đường dẫn vào đây. Mục nào để trống thì hero hiển thị giao diện minh họa mặc định.
export const HERO_SCREENSHOTS: Partial<Record<ScreenKind, string>> = {
  // chat: "/screens/chat.png",
  // image: "/screens/image.png",
  // face: "/screens/face.png",
  // dashboard: "/screens/dashboard.png",
};
