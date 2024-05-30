import { memo, useState } from "react";
import { StickerType } from "../../types";
import { SnapStickyItem } from "./SnapStickyItem";

export const MobileScreen = memo(() => {
  const [selectedType, setSelectedType] = useState<StickerType>(
    StickerType.Usamayusan
  );
  return (
    <div className="sm:hidden w-screen">
      <div className="flex snap-x snap-mandatory overflow-auto w-[100vw]">
        {/* うさまゆさん */}
        <SnapStickyItem
          type={StickerType.Usamayusan}
          href="https://line.me/S/sticker/26728158"
        />
        {/* 飛ばないペンギン */}
        <SnapStickyItem
          type={StickerType.Penguin}
          href="https://line.me/S/sticker/22249988"
        />
        {/* ひよっこエンジニア */}
        <SnapStickyItem
          type={StickerType.Hiyoko}
          href="https://line.me/S/sticker/16990783"
        />
        {/* えもじん */}
        <SnapStickyItem
          type={StickerType.Emojin}
          href="https://line.me/S/sticker/22630605"
        />
        {/* まんまる おとこのこ */}
        <SnapStickyItem
          type={StickerType.Otoko}
          href="https://line.me/S/sticker/16627181"
        />
      </div>
    </div>
  );
});
