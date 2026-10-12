// Sinh các ảnh nền/trang trí bằng OpenAI Images API.
// Chạy: npm run gen:assets   (cần OPENAI_API_KEY trong .env.local)
// Dùng quality "low" để tiết kiệm ngân sách. Ảnh đã tồn tại sẽ bị bỏ qua trừ khi truyền --force.
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const apiKey = process.env.OPENAI_API_KEY;
if (!apiKey) {
  console.error("Thiếu OPENAI_API_KEY trong .env.local");
  process.exit(1);
}

const force = process.argv.includes("--force");
const outDir = join(process.cwd(), "public", "generated");

const common =
  "no text, no letters, no logos, no people, no device mockups, premium minimal technology aesthetic, deep navy and near-black background, electric blue, violet and cyan accents";

const assets = [
  {
    name: "hero-orb",
    size: "1024x1024",
    prompt: `Abstract premium 3D glass orb with glossy translucent surface, soft refraction, centered, cinematic lighting, ${common}`,
  },
  {
    name: "about-ribbons",
    size: "1536x1024",
    prompt: `Abstract flowing light ribbons and a soft gradient mesh, smooth long curves, ${common}`,
  },
  {
    name: "process-arcs",
    size: "1536x1024",
    prompt: `Faint concentric glowing arcs and a subtle field of light particles, large negative space, ${common}`,
  },
  {
    name: "contact-aurora",
    size: "1536x1024",
    prompt: `Luminous aurora gradient rising from the bottom edge with soft bokeh, calm and airy, ${common}`,
  },
];

await mkdir(outDir, { recursive: true });

for (const asset of assets) {
  const target = join(outDir, `${asset.name}.webp`);
  if (!force && (await access(target).then(() => true, () => false))) {
    console.log(`bỏ qua ${asset.name} (đã có)`);
    continue;
  }

  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt: asset.prompt,
      size: asset.size,
      quality: "low",
      output_format: "webp",
      n: 1,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error(`Lỗi ${asset.name}: HTTP ${res.status} ${detail.slice(0, 300)}`);
    process.exit(1);
  }

  const json = await res.json();
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) {
    console.error(`Không nhận được ảnh cho ${asset.name}`);
    process.exit(1);
  }

  await writeFile(target, Buffer.from(b64, "base64"));
  console.log(`đã tạo ${asset.name}.webp`);
}
