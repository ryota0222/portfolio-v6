import { memo, useState } from 'react';

import { StickerType } from '../../types';

import { PreviewImage } from './PreviewImage';
import { HoverStickerCard } from './HoverStickerCard';

export const DesktopScreen = memo(() => {
  const [selectedType, setSelectedType] = useState<StickerType>(StickerType.Usamayusan);

  return (
    <div className="hidden sm:flex gap-4 container mx-auto max-w-5xl px-6 flex-grow">
      {/* 左パネル */}
      <div>
        {/* うさまゆさん */}
        <PreviewImage
          selected={selectedType === StickerType.Usamayusan}
          src="/images/sticker/usamayusan/preview.webp"
        />
        {/* 飛ばないペンギン */}
        <PreviewImage selected={selectedType === StickerType.Penguin} src="/images/sticker/penguin/preview.webp" />
        {/* ひよっこエンジニア */}
        <PreviewImage selected={selectedType === StickerType.Hiyoko} src="/images/sticker/hiyoko/preview.webp" />
        {/* えもじん */}
        <PreviewImage selected={selectedType === StickerType.Emojin} src="/images/sticker/emojin/preview.webp" />
        {/* まんまる おとこのこ */}
        <PreviewImage selected={selectedType === StickerType.Otoko} src="/images/sticker/otoko/preview.webp" />
      </div>
      {/* 右パネル */}
      <div className="flex-1 flex flex-wrap gap-10 h-fit">
        <HoverStickerCard
          href="https://line.me/S/sticker/26728158"
          type={StickerType.Usamayusan}
          onHover={() => setSelectedType(StickerType.Usamayusan)}
        />
        <HoverStickerCard
          href="https://line.me/S/sticker/22249988"
          type={StickerType.Penguin}
          onHover={() => setSelectedType(StickerType.Penguin)}
        />
        <HoverStickerCard
          href="https://line.me/S/sticker/16990783"
          type={StickerType.Hiyoko}
          onHover={() => setSelectedType(StickerType.Hiyoko)}
        />
        <HoverStickerCard
          href="https://line.me/S/sticker/22630605"
          type={StickerType.Emojin}
          onHover={() => setSelectedType(StickerType.Emojin)}
        />
        <HoverStickerCard
          href="https://line.me/S/sticker/16627181"
          type={StickerType.Otoko}
          onHover={() => setSelectedType(StickerType.Otoko)}
        />
      </div>
    </div>
  );
});
