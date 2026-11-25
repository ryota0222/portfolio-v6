import { Image } from '@nextui-org/image';
import { memo } from 'react';
import NextImage from 'next/image';

import { StickerType } from '../types';
import { STICKER_NAME, stickerMainSrc } from '../constants';

interface Props {
  type: StickerType;
  hiddenLabel?: boolean;
  withBorder?: boolean;
}

export const StickerCard = memo<Props>(({ type, hiddenLabel = false, withBorder = false }) => {
  const name = STICKER_NAME[type];

  return (
    <div className="flex flex-col items-center gap-2 hover:cursor-pointer">
      <div
        className={`w-40 h-40 flex items-center bg-zinc-50 rounded-3xl border ${
          withBorder ? 'border-zinc-300' : 'border-zinc-50'
        } hover:border-zinc-300`}
      >
        {/* スタンプ名は必ず文字で表示される（ここか呼び出し側）ため、画像は装飾扱いにして二重の読み上げを防ぐ */}
        <Image
          alt=""
          as={NextImage}
          className="w-full"
          height={136}
          quality={50}
          src={stickerMainSrc(type)}
          width={158}
        />
      </div>
      {!hiddenLabel && <span className="text-sm text-black">{name}</span>}
    </div>
  );
});
