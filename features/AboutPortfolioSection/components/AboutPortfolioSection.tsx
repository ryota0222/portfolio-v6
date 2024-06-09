import { Image } from '@nextui-org/react';
import { memo } from 'react';
import NextImage from 'next/image';

import { ChangelogSection } from '@/features/ChangelogSection';
import { PerformanceScreen } from '@/features/PerformanceScreen';
import { SharePortfolioSection } from '@/features/SharePortfolioSection';

export const AboutPortfolioSection = memo(() => {
  return (
    <>
      <Image
        alt="background image"
        as={NextImage}
        className="w-full"
        loading="lazy"
        radius="none"
        src="/images/dark-gradient.png"
      />
      <div className="py-24 bg-zinc-800">
        <section className="container mx-auto max-w-5xl px-6 flex-grow">
          <PerformanceScreen />
        </section>
        <section className="container mx-auto max-w-5xl px-6 flex-grow mt-40">
          <ChangelogSection />
        </section>
        <div className="mt-60 mb-24">
          <SharePortfolioSection isLast />
        </div>
      </div>
    </>
  );
});
