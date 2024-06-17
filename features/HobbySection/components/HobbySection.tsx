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
       * T-shirts
       */}
      <section className="sm:mt-16 mt-12 w-full">
        <div className="container mx-auto max-w-5xl px-6 flex-grow">
          <SectionSubTitle color="yellow">T-shirt</SectionSubTitle>
          <p className="my-6">
            On sale at UNIQLO&apos;s UTme!
            <br />
            It&apos;s UNIQLO clothing, so it&apos;s very comfortable to wear✨
          </p>
        </div>
        <div className="mt-16 flex justify-center w-full">
          <TShirtList />
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
