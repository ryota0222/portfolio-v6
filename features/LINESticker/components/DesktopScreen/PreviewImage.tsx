import { Image } from '@nextui-org/image';
import { memo } from 'react';
import NextImage from 'next/image';

interface Props {
  src: string;
  selected: boolean;
}

export const PreviewImage = memo<Props>(({ src, selected }) => {
  return (
    <Image
      alt="preview of sticker"
      as={NextImage}
      className={selected ? 'block' : 'hidden'}
      height={566}
      loading="lazy"
      src={src}
      width={300}
    />
  );
});
