import { Image } from '@nextui-org/react';
import { memo } from 'react';

import { StickerCard } from '../StickerCard';
import { StickerType } from '../../types';

import { LinkButton } from '@/features/LinkButton';

interface Props {
  type: StickerType;
  href: string;
}

export const SnapStickyItem = memo<Props>(({ type, href }) => {
  return (
    <div className="w-full snap-start">
      <div className="relative">
        {type === StickerType.Usamayusan ? (
          <Image className="w-[80vw] min-w-[80vw]" loading="lazy" src="/images/sticker/usamayusan/preview.webp" />
        ) : type === StickerType.Penguin ? (
          <Image className="w-[80vw] min-w-[80vw]" loading="lazy" src="/images/sticker/penguin/preview.webp" />
        ) : type === StickerType.Hiyoko ? (
          <Image className="w-[80vw] min-w-[80vw]" loading="lazy" src="/images/sticker/hiyoko/preview.webp" />
        ) : type === StickerType.Emojin ? (
          <Image className="w-[80vw] min-w-[80vw]" loading="lazy" src="/images/sticker/emojin/preview.webp" />
        ) : type === StickerType.Otoko ? (
          <Image className="w-[80vw] min-w-[80vw]" loading="lazy" src="/images/sticker/otoko/preview.webp" />
        ) : null}
        <div className="absolute bottom-2 left-4 z-10">
          <StickerCard hiddenLabel withBorder type={type} />
        </div>
      </div>
      <div className="flex justify-center my-2">
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
      </div>
      <div className="flex justify-center my-6">
        <LinkButton isExternal href={href} type="solid">
          See details
        </LinkButton>
      </div>
    </div>
  );
});
