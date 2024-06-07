import { memo, useState } from 'react';

import { StickerType } from '../../types';

import { SnapStickyItem } from './SnapStickyItem';

export const MobileScreen = memo(() => {
  const [selectedType, setSelectedType] = useState<StickerType>(StickerType.Usamayusan);

  return (
    <div className="sm:hidden w-screen">
      <div className="flex snap-x snap-mandatory overflow-auto w-[100vw]">
        {/* うさまゆさん */}
        <SnapStickyItem href="https://line.me/S/sticker/26728158" type={StickerType.Usamayusan} />
        {/* 飛ばないペンギン */}
        <SnapStickyItem href="https://line.me/S/sticker/22249988" type={StickerType.Penguin} />
        {/* ひよっこエンジニア */}
        <SnapStickyItem href="https://line.me/S/sticker/16990783" type={StickerType.Hiyoko} />
        {/* えもじん */}
        <SnapStickyItem href="https://line.me/S/sticker/22630605" type={StickerType.Emojin} />
        {/* まんまる おとこのこ */}
        <SnapStickyItem href="https://line.me/S/sticker/16627181" type={StickerType.Otoko} />
      </div>
    </div>
  );
});
