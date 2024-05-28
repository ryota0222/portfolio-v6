import { siteConfig } from "@/config/site";
import { Image, Link } from "@nextui-org/react";
import { memo } from "react";

export const FirstView = memo(() => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src="/images/profile.webp"
        alt="profile image"
        radius="full"
        className="sm:w-[240px] sm:h-[240px] w-[160px] h-[160px]"
      />
      <h1 className="font-semibold text-[32px] sm:text-[40px] mt-8 mb-4">
        RyoTa.
      </h1>
      <p className="text-zinc-600 text-sm sm:text-md">
        Design Engineer from 2020.
      </p>
      <div className="flex gap-6 sm:gap-10 mt-10 sm:mt-8">
        <Link isExternal href={siteConfig.links.twitter}>
          <Image src="/images/x.svg" alt="logo" width={32} height={32} />
        </Link>
        <Link isExternal href={siteConfig.links.github}>
          <Image src="/images/github.svg" alt="logo" width={32} height={32} />
        </Link>
        <Link isExternal href={siteConfig.links.zenn}>
          <Image src="/images/zenn.svg" alt="logo" width={32} height={32} />
        </Link>
        <Link isExternal href={siteConfig.links.qiita}>
          <Image src="/images/qiita.png" alt="logo" width={32} height={32} />
        </Link>
        <Link isExternal href={siteConfig.links.note}>
          <Image src="/images/note.svg" alt="logo" width={32} height={32} />
        </Link>
      </div>
    </div>
  );
});
