import { Image } from '@nextui-org/react';
import { memo } from 'react';

import { StickerType } from '../types';

interface Props {
  type: StickerType;
  hiddenLabel?: boolean;
  withBorder?: boolean;
}

export const StickerCard = memo<Props>(({ type, hiddenLabel = false, withBorder = false }) => {
  return (
    <div className="flex flex-col items-center gap-2 hover:cursor-pointer">
      <div
        className={`w-40 h-40 flex items-center bg-zinc-50 rounded-3xl border ${
          withBorder ? 'border-zinc-300' : 'border-zinc-50'
        } hover:border-zinc-300`}
      >
        {/* うさまゆさん */}
        {type === StickerType.Usamayusan && <Image className="w-full" src="/images/sticker/usamayusan/main.webp" />}
        {/* 飛ばないペンギン */}
        {type === StickerType.Penguin && <Image className="w-full" src="/images/sticker/penguin/main.webp" />}
        {/* ひよっこエンジニア */}
        {type === StickerType.Hiyoko && <Image className="w-full" src="/images/sticker/hiyoko/main.webp" />}
        {/* えもじん */}
        {type === StickerType.Emojin && <Image className="w-full" src="/images/sticker/emojin/main.webp" />}
        {/* まんまる おとこのこ */}
        {type === StickerType.Otoko && <Image className="w-full" src="/images/sticker/otoko/main.webp" />}
      </div>
      {!hiddenLabel && (
        <span className="text-sm">
          {type === StickerType.Usamayusan
            ? 'うさまゆさん'
            : type === StickerType.Penguin
              ? '飛ばないペンギン'
              : type === StickerType.Hiyoko
                ? 'ひよっこエンジニア'
                : type === StickerType.Emojin
                  ? 'えもじん'
                  : type === StickerType.Otoko
                    ? 'まんまる おとこのこ'
                    : ''}
        </span>
      )}
    </div>
  );
});
