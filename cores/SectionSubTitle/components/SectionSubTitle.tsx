import { Image } from '@nextui-org/react';
import { PropsWithChildren, memo } from 'react';

interface Props {
  color: 'pink' | 'blue' | 'yellow' | 'green' | 'red' | 'line';
}

export const SectionSubTitle = memo<PropsWithChildren<Props>>(({ color, children }) => {
  return (
    <div className="flex gap-2 items-center">
      <span aria-hidden role="presentation">
        {color === 'pink' && <Image height={40} radius="lg" src="/images/gradient-pink.webp" width={40} />}
        {color === 'blue' && <Image height={40} radius="lg" src="/images/gradient-blue.webp" width={40} />}
        {color === 'yellow' && <Image height={40} radius="lg" src="/images/gradient-yellow.webp" width={40} />}
        {color === 'green' && <Image height={40} radius="lg" src="/images/gradient-green.webp" width={40} />}
        {color === 'red' && <Image height={40} radius="lg" src="/images/gradient-red.webp" width={40} />}
        {color === 'line' && <Image height={40} radius="lg" src="/images/share/line.png" width={40} />}
      </span>
      <h2 className="sm:text-3xl text-2xl font-semibold">{children}</h2>
    </div>
  );
});
