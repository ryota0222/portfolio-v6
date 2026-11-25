import { Image } from '@nextui-org/image';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { memo } from 'react';

import { StickerCard } from '../StickerCard';
import { StickerType } from '../../types';
import { STICKER_NAME } from '../../constants';

import { LinkButton } from '@/features/LinkButton';

const PREVIEW_SRC: Record<StickerType, string> = {
  [StickerType.Usamayusan]: '/images/sticker/usamayusan/preview.webp',
  [StickerType.Penguin]: '/images/sticker/penguin/preview.webp',
  [StickerType.Hiyoko]: '/images/sticker/hiyoko/preview.webp',
  [StickerType.Emojin]: '/images/sticker/emojin/preview.webp',
  [StickerType.Otoko]: '/images/sticker/otoko/preview.webp',
};

interface Props {
  type: StickerType;
  href: string;
}

export const SnapStickyItem = memo<Props>(({ type, href }) => {
  const name = STICKER_NAME[type];

  return (
    <div className="w-full snap-start">
      <div className="relative">
        <Image alt={`${name}のスタンプのプレビュー`} className="w-[80vw] min-w-[80vw]" src={PREVIEW_SRC[type]} />
        <div className="absolute bottom-2 left-4 z-10">
          <StickerCard hiddenLabel withBorder type={type} />
        </div>
      </div>
      <div className="flex justify-center my-2">
        <span className="text-sm">{name}</span>
      </div>
      <div className="flex justify-center my-6">
        <LinkButton isExternal href={href} type="solid">
          See details
          {/* 同じ「See details」が並ぶため、どのスタンプのリンクかを読み上げで補う */}
          <VisuallyHidden elementType="span">：{name}</VisuallyHidden>
        </LinkButton>
      </div>
    </div>
  );
});
