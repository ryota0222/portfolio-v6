import { Image } from '@nextui-org/image';
import { memo } from 'react';
import NextImage from 'next/image';

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
        {type === StickerType.Usamayusan && (
          <Image
            alt="うさまゆさんのスタンプ"
            as={NextImage}
            className="w-full"
            height={136}
            quality={50}
            src="/images/sticker/usamayusan/main.webp"
            width={158}
          />
        )}
        {/* 飛ばないペンギン */}
        {type === StickerType.Penguin && (
          <Image
            alt="飛ばないペンギンのスタンプ"
            as={NextImage}
            className="w-full"
            height={136}
            quality={50}
            src="/images/sticker/penguin/main.webp"
            width={158}
          />
        )}
        {/* ひよっこエンジニア */}
        {type === StickerType.Hiyoko && (
          <Image
            alt="ひよっこエンジニアのスタンプ"
            as={NextImage}
            className="w-full"
            height={136}
            quality={50}
            src="/images/sticker/hiyoko/main.webp"
            width={158}
          />
        )}
        {/* えもじん */}
        {type === StickerType.Emojin && (
          <Image
            alt="えもじんのスタンプ"
            as={NextImage}
            className="w-full"
            height={136}
            quality={50}
            src="/images/sticker/emojin/main.webp"
            width={158}
          />
        )}
        {/* まんまる おとこのこ */}
        {type === StickerType.Otoko && (
          <Image
            alt="まんまる おとこのこのスタンプ"
            as={NextImage}
            className="w-full"
            height={136}
            quality={50}
            src="/images/sticker/otoko/main.webp"
            width={158}
          />
        )}
      </div>
      {!hiddenLabel && (
        <span className="text-sm text-black">
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
