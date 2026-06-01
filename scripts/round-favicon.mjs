// public/images/icon.png（ペンギンのマスター画像）を円形に切り抜き、favicon一式を再生成する。
//   実行: npm install --no-save sharp && node scripts/round-favicon.mjs
// マスター画像自体は変更しない（他箇所で使用される可能性があるため）。
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { writeFile } from "node:fs/promises";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "public", "images", "icon.png");
const pub = path.join(root, "public");

// 正方形画像に内接する円でマスクし、四隅を透明化する
async function roundPng(size) {
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`
  );
  return sharp(src)
    .resize(size, size, { fit: "cover" })
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

// PNGを内包する .ico を生成（Vista以降のブラウザが対応）
function buildIco(entries) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(entries.length, 4);

  const dir = Buffer.alloc(16 * entries.length);
  let offset = 6 + 16 * entries.length;
  const parts = [];
  entries.forEach((e, i) => {
    const b = i * 16;
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 0);
    dir.writeUInt8(e.size >= 256 ? 0 : e.size, b + 1);
    dir.writeUInt8(0, b + 2);
    dir.writeUInt8(0, b + 3);
    dir.writeUInt16LE(1, b + 4);
    dir.writeUInt16LE(32, b + 6);
    dir.writeUInt32LE(e.data.length, b + 8);
    dir.writeUInt32LE(offset, b + 12);
    offset += e.data.length;
    parts.push(e.data);
  });
  return Buffer.concat([header, dir, ...parts]);
}

const [p16, p32, p48, p180] = await Promise.all([
  roundPng(16),
  roundPng(32),
  roundPng(48),
  roundPng(180),
]);

await writeFile(path.join(pub, "favicon-16x16.png"), p16);
await writeFile(path.join(pub, "favicon-32x32.png"), p32);
await writeFile(path.join(pub, "apple-touch-icon.png"), p180);
await writeFile(
  path.join(pub, "favicon.ico"),
  buildIco([
    { size: 16, data: p16 },
    { size: 32, data: p32 },
    { size: 48, data: p48 },
  ])
);

console.log("done: favicon-16x16 / favicon-32x32 / apple-touch-icon / favicon.ico を円形に再生成しました");
