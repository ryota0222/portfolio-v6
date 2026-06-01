import { Image } from '@nextui-org/image';
import { memo } from 'react';
import NextImage from 'next/image';
import dynamic from 'next/dynamic';

// Dynamic import
const PerformanceScreen = dynamic(() => import('@/features/PerformanceScreen').then((mod) => mod.PerformanceScreen), {
  ssr: false,
  loading: () => <></>,
});
const SharePortfolioSection = dynamic(
  () => import('@/features/SharePortfolioSection').then((mod) => mod.SharePortfolioSection),
  {
    ssr: false,
    loading: () => <></>,
  },
);

export const AboutPortfolioSection = memo(() => {
  return (
    <>
      <Image
        alt="background image"
        as={NextImage}
        className="w-full h-auto"
        height={874}
        radius="none"
        src="/images/dark-gradient.png"
        width={2880}
      />
      <div className="py-24 bg-zinc-800">
        <section className="container mx-auto max-w-5xl px-6 flex-grow">
          <PerformanceScreen />
        </section>
        <div className="mt-60 mb-24">
          <SharePortfolioSection isLast />
        </div>
      </div>
    </>
  );
});
