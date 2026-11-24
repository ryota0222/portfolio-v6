import { Image } from '@nextui-org/image';
import { memo } from 'react';
import NextImage from 'next/image';

import { StickerType } from '../../types';
import { STICKER_NAME } from '../../constants';

interface Props {
  src: string;
  selected: boolean;
  type: StickerType;
}

export const PreviewImage = memo<Props>(({ src, selected, type }) => {
  return (
    <Image
      alt={`${STICKER_NAME[type]}のスタンプのプレビュー`}
      as={NextImage}
      className={selected ? 'block' : 'hidden'}
      height={566}
      quality={50}
      src={src}
      width={300}
    />
  );
});
