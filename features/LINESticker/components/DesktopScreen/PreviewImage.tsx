import { Image } from '@nextui-org/react';
import { memo } from 'react';

interface Props {
  src: string;
  selected: boolean;
}

export const PreviewImage = memo<Props>(({ src, selected }) => {
  return (
    <Image
      alt="スタンプのプレビュー"
      className={selected ? 'block' : 'hidden'}
      height={566}
      loading="lazy"
      src={src}
      width={300}
    />
  );
});
