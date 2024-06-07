import { Image } from '@nextui-org/react';
import { memo } from 'react';

interface Props {
  src: string;
  selected: boolean;
}

export const PreviewImage = memo<Props>(({ src, selected }) => {
  return <Image className={selected ? 'block' : 'hidden'} src={src} width={300} />;
});
