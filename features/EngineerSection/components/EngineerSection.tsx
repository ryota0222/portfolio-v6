import { SectionSubTitle } from "@/cores/SectionSubTitle";
import { SectionTitle } from "@/cores/SectionTitle";
import { RightUpArrowIcon } from "@/cores/icons";
import { ApplicationList } from "@/features/Application";
import { ArticleList } from "@/features/Article";
import { CareerList } from "@/features/Career";
import { PresentationMaterialList } from "@/features/PresentationMaterial";
import { ReadMoreButton } from "@/features/ReadMoreButton";
import { Button } from "@nextui-org/button";
import { memo } from "react";

export const EngineerSectionView = memo(() => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <SectionTitle index={1}>Engineering</SectionTitle>
      {/*
       * 経歴
       */}
      <section className="w-full h-full sm:mt-16 mt-12">
        <SectionSubTitle color="pink">Career</SectionSubTitle>
        <div className="mt-10 flex justify-center">
          <CareerList />
        </div>
      </section>
      {/*
       * アプリケーション一覧
       */}
      <section className="w-full h-full sm:mt-40 mt-24">
        <SectionSubTitle color="red">Application</SectionSubTitle>
        <div className="mt-10 flex justify-center">
          <ApplicationList />
        </div>
      </section>
      {/*
       * 記事一覧
       */}
      <section className="w-full h-full sm:mt-40 mt-24">
        <div className="flex justify-between items-center">
          <SectionSubTitle color="red">Article</SectionSubTitle>
          <div className="hidden sm:block">
            <ReadMoreButton href="/" />
          </div>
        </div>
        <div className="mt-10">
          <ArticleList />
          <div className="sm:hidden mt-6 flex justify-center">
            <ReadMoreButton href="/" />
          </div>
        </div>
      </section>
      {/*
       * プレゼン一覧
       */}
      <section className="w-full h-full sm:mt-40 mt-24">
        <div className="flex justify-between items-center">
          <SectionSubTitle color="green">Presentation material</SectionSubTitle>
          <div className="hidden sm:block">
            <ReadMoreButton href="/" />
          </div>
        </div>
        <div className="mt-10">
          <PresentationMaterialList />
          <div className="sm:hidden mt-6 flex justify-center">
            <ReadMoreButton href="/" />
          </div>
        </div>
      </section>
    </div>
  );
});
