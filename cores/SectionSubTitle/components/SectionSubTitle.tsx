import { Image } from '@nextui-org/image';
import { PropsWithChildren, memo } from 'react';

interface Props {
  color: 'pink' | 'blue' | 'yellow' | 'green' | 'red' | 'line';
}

export const SectionSubTitle = memo<PropsWithChildren<Props>>(({ color, children }) => {
  return (
    <div className="flex gap-2 items-center">
      <span aria-hidden role="presentation">
        {color === 'pink' && <Image alt="" height={40} radius="lg" src="/images/gradient-pink.webp" width={40} />}
        {color === 'blue' && <Image alt="" height={40} radius="lg" src="/images/gradient-blue.webp" width={40} />}
        {color === 'yellow' && <Image alt="" height={40} radius="lg" src="/images/gradient-yellow.webp" width={40} />}
        {color === 'green' && <Image alt="" height={40} radius="lg" src="/images/gradient-green.webp" width={40} />}
        {color === 'red' && <Image alt="" height={40} radius="lg" src="/images/gradient-red.webp" width={40} />}
        {color === 'line' && <Image alt="" height={40} radius="lg" src="/images/share/line.png" width={40} />}
      </span>
      <h3 className="sm:text-3xl text-2xl font-semibold">{children}</h3>
    </div>
  );
});
