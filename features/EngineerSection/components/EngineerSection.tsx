import { SectionSubTitle } from "@/cores/SectionSubTitle";
import { SectionTitle } from "@/cores/SectionTitle";
import { ApplicationList } from "@/features/Application";
import { ArticleList } from "@/features/Article";
import { CareerList } from "@/features/Career";
import { PresentationMaterialList } from "@/features/PresentationMaterial";
import { LinkButton } from "@/features/LinkButton";
import { memo } from "react";

export const EngineerSection = memo(() => {
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
            <LinkButton href="/" type="bordered">
              Read more
            </LinkButton>
          </div>
        </div>
        <div className="mt-10">
          <ArticleList />
          <div className="sm:hidden mt-6 flex justify-center">
            <LinkButton href="/" type="bordered">
              Read more
            </LinkButton>
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
            <LinkButton href="/" type="bordered">
              Read more
            </LinkButton>
          </div>
        </div>
        <div className="mt-10">
          <PresentationMaterialList />
          <div className="sm:hidden mt-6 flex justify-center">
            <LinkButton href="/" type="bordered">
              Read more
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
});
