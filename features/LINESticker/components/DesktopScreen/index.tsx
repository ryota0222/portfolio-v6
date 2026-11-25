import { memo, useState } from 'react';

import { StickerType } from '../../types';
import { STICKER_ORDER, STICKER_URL, stickerPreviewSrc } from '../../constants';

import { PreviewImage } from './PreviewImage';
import { HoverStickerCard } from './HoverStickerCard';

export const DesktopScreen = memo(() => {
  const [selectedType, setSelectedType] = useState<StickerType>(STICKER_ORDER[0]);

  return (
    <div className="hidden sm:flex gap-4 container mx-auto max-w-5xl px-6 flex-grow">
      {/* 左パネル */}
      <div>
        {STICKER_ORDER.map((type) => (
          <PreviewImage key={type} selected={selectedType === type} src={stickerPreviewSrc(type)} type={type} />
        ))}
      </div>
      {/* 右パネル */}
      <div className="flex-1 flex flex-wrap gap-10 h-fit">
        {STICKER_ORDER.map((type) => (
          <HoverStickerCard key={type} href={STICKER_URL[type]} type={type} onHover={() => setSelectedType(type)} />
        ))}
      </div>
    </div>
  );
});
