import { Link } from '@nextui-org/link';
import { memo } from 'react';
import NextImage from 'next/image';

import { siteConfig } from '@/config/site';

export const FirstView = memo(() => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <NextImage
        priority
        alt="profile image"
        className="sm:w-[240px] sm:h-[240px] w-[160px] h-[160px] rounded-full"
        height={240}
        src="/images/profile.webp"
        width={240}
      />
      <h1 className="font-semibold text-[32px] sm:text-[40px] mt-8 mb-4">RyoTa.</h1>
      <p className="text-zinc-600 text-sm sm:text-md">Design Engineer from 2020.</p>
      <div className="flex gap-6 sm:gap-10 mt-10 sm:mt-8">
        <Link isExternal href={siteConfig.links.twitter}>
          <NextImage priority alt="logo" height={36} src="/images/x.svg" width={36} />
        </Link>
        <Link isExternal href={siteConfig.links.github}>
          <NextImage priority alt="logo" height={40} src="/images/github.svg" width={40} />
        </Link>
        <Link isExternal href={siteConfig.links.zenn}>
          <NextImage priority alt="logo" height={40} src="/images/zenn.svg" width={40} />
        </Link>
        <Link isExternal href={siteConfig.links.qiita}>
          <NextImage priority alt="logo" height={40} src="/images/qiita.png" width={40} />
        </Link>
        <Link isExternal href={siteConfig.links.note}>
          <NextImage priority alt="logo" height={36} src="/images/note.svg" width={36} />
        </Link>
      </div>
    </div>
  );
});
