import dynamic from 'next/dynamic';
import { memo } from 'react';

import { SectionSubTitle } from '@/cores/SectionSubTitle';
import { SectionTitle } from '@/cores/SectionTitle';
import { CareerList } from '@/features/Career';
import { LinkButton } from '@/features/LinkButton';

// Dynamic import
const ApplicationList = dynamic(() => import('@/features/Application').then((mod) => mod.ApplicationList), {
  ssr: false,
  loading: () => <></>,
});

const ArticleList = dynamic(() => import('@/features/Article').then((mod) => mod.ArticleList), {
  ssr: false,
  loading: () => <></>,
});

const PresentationMaterialList = dynamic(
  () => import('@/features/PresentationMaterial').then((mod) => mod.PresentationMaterialList),
  {
    ssr: false,
    loading: () => <></>,
  },
);

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
            <LinkButton ariaLabel="Read more articles" href="/assets" type="bordered">
              Read more articles
            </LinkButton>
          </div>
        </div>
        <div className="mt-10">
          <ArticleList />
          <div className="sm:hidden mt-6 flex justify-center">
            <LinkButton ariaLabel="Read more articles" href="/assets" type="bordered">
              Read more articles
            </LinkButton>
          </div>
        </div>
      </section>
      {/*
       * プレゼン一覧
       */}
      <section className="w-full h-full sm:mt-40 mt-24">
        <div className="flex justify-between items-center">
          <SectionSubTitle color="green">Presentation note</SectionSubTitle>
          <div className="hidden sm:block">
            <LinkButton ariaLabel="Read more presentation note" href="/assets/presentation" type="bordered">
              Read all presentation nates
            </LinkButton>
          </div>
        </div>
        <div className="mt-10">
          <PresentationMaterialList />
          <div className="sm:hidden mt-6 flex justify-center">
            <LinkButton ariaLabel="Read more presentation note" href="/assets/presentation" type="bordered">
              Read all presentation notes
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
});
