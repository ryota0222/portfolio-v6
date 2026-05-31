import { memo } from 'react';

import { SectionSubTitle } from '@/cores/SectionSubTitle';
import { SectionTitle } from '@/cores/SectionTitle';
import { LINESticker } from '@/features/LINESticker';
import { SharePortfolioSection } from '@/features/SharePortfolioSection';
import { TShirtList } from '@/features/TShirt';

export const HobbySection = memo(() => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <SectionTitle index={2}>Hobbies</SectionTitle>
      {/*
       * LINE sticker
       */}
      <section className="sm:mt-16 mt-12 w-full">
        <div className="container mx-auto max-w-5xl px-6 flex-grow">
          <SectionSubTitle color="line">LINE sticker</SectionSubTitle>
        </div>
        <div className="mt-10 flex justify-center">
          <LINESticker />
        </div>
      </section>
      {/*
       * Share
       */}
      <section className="container mx-auto max-w-5xl px-6 flex-grow mt-24 mb-16 sm:my-60">
        <SharePortfolioSection isLast={false} />
      </section>
    </div>
  );
});
