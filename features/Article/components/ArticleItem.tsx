import { memo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';

import { IArticleItem } from '../types';

export const ArticleItem = memo<IArticleItem>(({ title, url, thumbnail, favicon, siteName }) => {
  return (
    <Link className="card" href={url} rel="noopener noreferrer" target="_blank">
      <div className="border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden w-fit">
        <Image
          isZoomed
          alt="thumbnail image"
          as={NextImage}
          className="w-full lg:w-[40vw] lg:max-w-[460px] md:w-[360px]"
          height={241}
          quality={40}
          src={thumbnail}
          width={460}
        />
      </div>
      <div className="mt-2 w-full lg:w-[40vw] lg:max-w-[460px] md:w-[360px]">{title}</div>
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
});
