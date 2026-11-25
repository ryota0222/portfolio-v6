import dynamic from 'next/dynamic';
import NextImage from 'next/image';
import { memo } from 'react';

import { Marker } from './Marker';

import { siteConfig } from '@/config/site';
import { NewTabLabel } from '@/cores/NewTabLabel';
import { SectionSubTitle } from '@/cores/SectionSubTitle';
import { SectionTitle } from '@/cores/SectionTitle';
import { CareerList } from '@/features/Career';
import { LinkButton } from '@/features/LinkButton';

// Dynamic import
const ProjectList = dynamic(() => import('@/features/Project').then((mod) => mod.ProjectList), {
  ssr: false,
  loading: () => <></>,
});

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
       * 職務経歴（プロジェクト）
       */}
      <section className="w-full h-full sm:mt-40 mt-24">
        <SectionSubTitle color="blue">Projects</SectionSubTitle>
        <div className="mt-10">
          <ProjectList />
        </div>
      </section>
      {/*
       * お仕事依頼
       */}
      <section className="w-full sm:mt-40 mt-24 rounded-3xl bg-zinc-50 px-6 py-12 sm:px-12 sm:py-16 flex flex-col items-center text-center">
        <h3 className="sm:text-3xl text-2xl font-semibold">Work with me</h3>
        <p className="mt-6 max-w-2xl text-sm sm:text-md text-zinc-600 leading-relaxed">
          要件定義からデザイン、Web・モバイルアプリ開発まで一貫してお引き受けします。ご契約は
          <a
            className="text-blue-600 underline underline-offset-4 decoration-blue-600/40 hover:text-blue-800 hover:decoration-blue-800 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800"
            href={siteConfig.links.lazurate}
            rel="noopener noreferrer"
            target="_blank"
          >
            ラズレイト株式会社
            <NewTabLabel />
          </a>
          ・個人のどちらでも可能です。どちらの場合も、ご相談から設計・実装まで私が直接担当します。
        </p>
        <p className="mt-4 max-w-2xl text-sm sm:text-md text-zinc-600 leading-relaxed">
          <Marker>
            スタートアップの新規事業や検証フェーズはもちろん、「アイデアを形にしたい」個人の方のご相談も歓迎します。
          </Marker>
        </p>
        <div className="mt-10">
          <LinkButton
            isExternal
            href={siteConfig.links.twitter}
            startContent={<NextImage alt="" className="invert" height={24} src="/images/x.svg" width={24} />}
            type="solid"
          >
            X で相談する
          </LinkButton>
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
          <SectionSubTitle color="yellow">Article</SectionSubTitle>
          <div className="hidden sm:block">
            <LinkButton href="/assets" type="bordered">
              Read more articles
            </LinkButton>
          </div>
        </div>
        <div className="mt-10">
          <ArticleList />
          <div className="sm:hidden mt-6 flex justify-center">
            <LinkButton href="/assets" type="bordered">
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
            <LinkButton href="/assets/presentation" type="bordered">
              Read all presentation notes
            </LinkButton>
          </div>
        </div>
        <div className="mt-10">
          <PresentationMaterialList />
          <div className="sm:hidden mt-6 flex justify-center">
            <LinkButton href="/assets/presentation" type="bordered">
              Read all presentation notes
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
});
