import { Image } from '@nextui-org/image';
import NextImage from 'next/image';
import { PropsWithChildren, memo } from 'react';

interface Props {
  index: 1 | 2;
}

export const SectionTitle = memo<PropsWithChildren<Props>>(({ index, children }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span aria-hidden role="presentation">
        {index === 1 && (
          <Image alt="1" as={NextImage} height={23} radius="none" src="/images/section/01.svg" width={27} />
        )}
        {index === 2 && (
          <Image
            alt="2"
            as={NextImage}
            height={23}
            loading="lazy"
            radius="none"
            src="/images/section/02.svg"
            width={27}
          />
        )}
      </span>
      <span aria-hidden className="w-[1px] h-8 bg-zinc-600 mt-4" role="presentation" />
      <h1 className="sm:text-[40px] text-[32px] font-semibold">{children}</h1>
    </div>
  );
});
