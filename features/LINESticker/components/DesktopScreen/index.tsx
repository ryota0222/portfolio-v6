import { memo, useState } from "react";
import { StickerType } from "../../types";
import { PreviewImage } from "./PreviewImage";
import { HoverStickerCard } from "./HoverStickerCard";

export const DesktopScreen = memo(() => {
  const [selectedType, setSelectedType] = useState<StickerType>(
    StickerType.Usamayusan
  );
  return (
    <div className="hidden sm:flex gap-4 container mx-auto max-w-5xl px-6 flex-grow">
      {/* 左パネル */}
      <div>
        {/* うさまゆさん */}
        <PreviewImage
          src="/images/sticker/usamayusan/preview.webp"
          selected={selectedType === StickerType.Usamayusan}
        />
        {/* 飛ばないペンギン */}
        <PreviewImage
          src="/images/sticker/penguin/preview.webp"
          selected={selectedType === StickerType.Penguin}
        />
        {/* ひよっこエンジニア */}
        <PreviewImage
          src="/images/sticker/hiyoko/preview.webp"
          selected={selectedType === StickerType.Hiyoko}
        />
        {/* えもじん */}
        <PreviewImage
          src="/images/sticker/emojin/preview.webp"
          selected={selectedType === StickerType.Emojin}
        />
        {/* まんまる おとこのこ */}
        <PreviewImage
          src="/images/sticker/otoko/preview.webp"
          selected={selectedType === StickerType.Otoko}
        />
      </div>
      {/* 右パネル */}
      <div className="flex-1 flex flex-wrap gap-10 h-fit">
        <HoverStickerCard
          onHover={() => setSelectedType(StickerType.Usamayusan)}
          type={StickerType.Usamayusan}
          href="https://line.me/S/sticker/26728158"
        />
        <HoverStickerCard
          onHover={() => setSelectedType(StickerType.Penguin)}
          type={StickerType.Penguin}
          href="https://line.me/S/sticker/22249988"
        />
        <HoverStickerCard
          onHover={() => setSelectedType(StickerType.Hiyoko)}
          type={StickerType.Hiyoko}
          href="https://line.me/S/sticker/16990783"
        />
        <HoverStickerCard
          onHover={() => setSelectedType(StickerType.Emojin)}
          type={StickerType.Emojin}
          href="https://line.me/S/sticker/22630605"
        />
        <HoverStickerCard
          onHover={() => setSelectedType(StickerType.Otoko)}
          type={StickerType.Otoko}
          href="https://line.me/S/sticker/16627181"
        />
      </div>
    </div>
  );
});
