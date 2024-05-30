import { SectionSubTitle } from "@/cores/SectionSubTitle";
import { SectionTitle } from "@/cores/SectionTitle";
import { LINESticker } from "@/features/LINESticker";
import { memo } from "react";

export const HobbySection = memo(() => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <SectionTitle index={2}>Hobbies</SectionTitle>
      {/*
       * LINE sticker
       */}
      <section className="sm:mt-16 mt-12">
        <div className="container mx-auto max-w-5xl px-6 flex-grow">
          <SectionSubTitle color="line">LINE sticker</SectionSubTitle>
        </div>
        <div className="mt-10 flex justify-center">
          <LINESticker />
        </div>
      </section>
    </div>
  );
});
