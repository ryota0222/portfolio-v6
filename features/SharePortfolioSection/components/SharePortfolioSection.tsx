import { siteConfig } from "@/config/site";
import { Image, Link } from "@nextui-org/react";
import { memo } from "react";

interface Props {
  isLast: boolean;
}

export const SharePortfolioSection = memo<Props>(({ isLast }) => {
  return (
    <div>
      {isLast && (
        <div className="flex justify-center sm:mb-16 mb-9">
          <Image
            src="/images/profile.webp"
            alt="profile image"
            radius="full"
            className="sm:w-[100px] sm:h-[100px] w-[64px] h-[64px]"
          />
        </div>
      )}
      <h2
        className={`font-bold text-center sm:text-2xl text-md ${isLast && "text-white"}`}
      >
        {isLast ? (
          <>One last favor!&nbsp;Would you share your portfolio?</>
        ) : (
          "Would you like to share?"
        )}
      </h2>
      <div className="flex sm:gap-24 gap-10 justify-center sm:mt-24 mt-16">
        <Link
          isExternal
          href={`https://twitter.com/intent/tweet?url=${siteConfig.url}&text=${siteConfig.name}`}
        >
          <Image
            src="/images/share/x.png"
            alt="Xのアイコン"
            isZoomed
            className="w-10 sm:w-16"
          />
        </Link>
        <Link
          isExternal
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${siteConfig.url}`}
        >
          <Image
            src="/images/share/linkedin.png"
            alt="Linkedinのアイコン"
            isZoomed
            className="w-10 sm:w-16"
          />
        </Link>
        <Link
          isExternal
          href={`https://line.me/R/msg/text/?${siteConfig.name}%20${siteConfig.url}`}
        >
          <Image
            src="/images/share/line.png"
            alt="LINEのアイコン"
            isZoomed
            className="w-10 sm:w-16"
          />
        </Link>
        <Link
          isExternal
          href={`https://www.facebook.com/sharer/sharer.php?u=${siteConfig.url}`}
        >
          <Image
            src="/images/share/facebook.png"
            alt="Facebookのアイコン"
            isZoomed
            className="w-10 sm:w-16"
          />
        </Link>
      </div>
    </div>
  );
});
