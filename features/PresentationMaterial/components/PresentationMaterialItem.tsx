import { memo } from 'react';
import Link from 'next/link';
import { Image } from '@nextui-org/image';
import NextImage from 'next/image';

import { IPresentationMaterialItem } from '../types';

export const PresentationMaterialItem = memo<IPresentationMaterialItem>(
  ({ url, title, siteName, favicon, thumbnail }) => {
    return (
      <Link className="w-full" href={url} rel="noopener noreferrer" target="_blank">
        <div className="border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden w-full aspect-[16/9]">
          <Image
            isZoomed
            alt="thumbnail image"
            as={NextImage}
            className="w-full !h-full object-cover hover:scale-110"
            classNames={{ wrapper: 'w-full h-full !max-w-full', zoomedWrapper: 'w-full h-full' }}
            height={270}
            quality={40}
            src={thumbnail}
            width={480}
          />
        </div>
        <div className="mt-2 flex gap-2 items-center w-full">{title}</div>
        <div className="mt-2 flex gap-2 items-center">
          <Image
            alt={`${siteName}のアイコン`}
            height={20}
            loading="lazy"
            radius="none"
            src={favicon}
            title={siteName}
            width={20}
          />
          <span>{siteName}</span>
        </div>
      </Link>
    );
  },
);
