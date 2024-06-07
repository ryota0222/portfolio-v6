import { Image, Link } from '@nextui-org/react';
import { memo } from 'react';

import { siteConfig } from '@/config/site';

export const FirstView = memo(() => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        alt="profile image"
        className="sm:w-[240px] sm:h-[240px] w-[160px] h-[160px]"
        radius="full"
        src="/images/profile.webp"
      />
      <h1 className="font-semibold text-[32px] sm:text-[40px] mt-8 mb-4">RyoTa.</h1>
      <p className="text-zinc-600 text-sm sm:text-md">Design Engineer from 2020.</p>
      <div className="flex gap-6 sm:gap-10 mt-10 sm:mt-8">
        <Link isExternal href={siteConfig.links.twitter}>
          <Image alt="logo" height={32} src="/images/x.svg" width={32} />
        </Link>
        <Link isExternal href={siteConfig.links.github}>
          <Image alt="logo" height={32} src="/images/github.svg" width={32} />
        </Link>
        <Link isExternal href={siteConfig.links.zenn}>
          <Image alt="logo" height={32} src="/images/zenn.svg" width={32} />
        </Link>
        <Link isExternal href={siteConfig.links.qiita}>
          <Image alt="logo" height={32} src="/images/qiita.png" width={32} />
        </Link>
        <Link isExternal href={siteConfig.links.note}>
          <Image alt="logo" height={32} src="/images/note.svg" width={32} />
        </Link>
      </div>
    </div>
  );
});
