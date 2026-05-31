import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import { memo } from 'react';

import { siteConfig } from '@/config/site';

interface Props {
  isLast: boolean;
}

export const SharePortfolioSection = memo<Props>(({ isLast }) => {
  return (
    <div>
      {isLast && (
        <div className="flex justify-center sm:mb-16 mb-9">
          <Image
            alt="profile image"
            className="sm:w-[100px] sm:h-[100px] w-[64px] h-[64px]"
            loading="lazy"
            radius="full"
            src="/images/icon.png"
          />
        </div>
      )}
      <h2 className={`font-bold text-center sm:text-2xl text-md ${isLast && 'text-white'}`}>
        {isLast ? <>One last favor!&nbsp;Would you share your portfolio?</> : 'Would you like to share?'}
      </h2>
      <div className="flex sm:gap-24 gap-10 justify-center sm:mt-24 mt-16">
        <Link
          isExternal
          className="group"
          href={`https://twitter.com/intent/tweet?url=${siteConfig.url}&text=${siteConfig.name}`}
        >
          <Image
            alt="Xのアイコン"
            className="w-10 sm:w-16 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            loading="lazy"
            src="/images/share/x.png"
          />
        </Link>
        <Link
          isExternal
          className="group"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteConfig.url}`}
        >
          <Image
            alt="Linkedinのアイコン"
            className="w-10 sm:w-16 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            loading="lazy"
            src="/images/share/linkedin.png"
          />
        </Link>
        <Link isExternal className="group" href={`https://line.me/R/msg/text/?${siteConfig.name}%20${siteConfig.url}`}>
          <Image
            alt="LINEのアイコン"
            className="w-10 sm:w-16 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            loading="lazy"
            src="/images/share/line.png"
          />
        </Link>
        <Link isExternal className="group" href={`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.url}`}>
          <Image
            alt="Facebookのアイコン"
            className="w-10 sm:w-16 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            loading="lazy"
            src="/images/share/facebook.png"
          />
        </Link>
      </div>
    </div>
  );
});
