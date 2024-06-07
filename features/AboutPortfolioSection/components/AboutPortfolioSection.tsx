import { ChangelogSection } from '@/features/ChangelogSection';
import { PerformanceScreen } from '@/features/PerformanceScreen';
import { SharePortfolioSection } from '@/features/SharePortfolioSection';
import { Image } from '@nextui-org/react';
import { memo } from 'react';

export const AboutPortfolioSection = memo(() => {
  return (
    <>
      <Image alt="dark gradient" className="w-full" radius="none" role="presentation" src="/images/dark-gradient.png" />
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
