import { Image } from '@nextui-org/image';
import { PropsWithChildren, memo } from 'react';

interface Props {
  index: 1 | 2;
}

export const SectionTitle = memo<PropsWithChildren<Props>>(({ index, children }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span aria-hidden role="presentation">
        {index === 1 && <Image radius="none" src="/images/section/01.svg" />}
        {index === 2 && <Image loading="lazy" radius="none" src="/images/section/02.svg" />}
      </span>
      <span aria-hidden className="w-[1px] h-8 bg-zinc-600 mt-4" role="presentation" />
      <h1 className="sm:text-[40px] text-[32px] font-semibold">{children}</h1>
    </div>
  );
});
