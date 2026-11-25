import { IProjectItem, ITech } from '../types';

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;

// 使用技術。アイコンは Application セクションと同じく devicon を使い、ないものは名前だけを出す
const TECH = {
  nextjs: { name: 'Next.js', image: devicon('nextjs/nextjs-original.svg') },
  prisma: { name: 'Prisma', image: devicon('prisma/prisma-original.svg') },
  postgresql: { name: 'PostgreSQL', image: devicon('postgresql/postgresql-original.svg') },
  aws: { name: 'AWS', image: devicon('amazonwebservices/amazonwebservices-original.svg') },
  laravel: { name: 'Laravel', image: devicon('laravel/laravel-original.svg') },
  php: { name: 'PHP', image: devicon('php/php-original.svg') },
  svelteKit: { name: 'SvelteKit', image: devicon('svelte/svelte-original.svg') },
  typescript: { name: 'TypeScript', image: devicon('typescript/typescript-original.svg') },
  playwright: { name: 'Playwright', image: devicon('playwright/playwright-original.svg') },
  storybook: { name: 'Storybook', image: devicon('storybook/storybook-original.svg') },
  sentry: { name: 'Sentry', image: devicon('sentry/sentry-original.svg') },
  reduxToolkit: { name: 'Redux Toolkit', image: devicon('redux/redux-original.svg') },
  nuxtjs: { name: 'Nuxt.js', image: devicon('nuxtjs/nuxtjs-original.svg') },
  express: { name: 'Express', image: devicon('express/express-original.svg') },
  firebase: { name: 'Firebase', image: devicon('firebase/firebase-original.svg') },
  reactQuery: { name: 'React Query', image: '/images/skill/react-query.svg' },
  claudeCode: { name: 'Claude Code', image: '/images/claude-color.svg' },
  // Claude Code と同じアイコンが並ぶと区別できないため、名前だけを出す
  claudeDesign: { name: 'Claude Design' },
  mastra: { name: 'Mastra' },
  bedrock: { name: 'Amazon Bedrock' },
  paddleOcr: { name: 'PaddleOCR' },
  flowbiteSvelte: { name: 'Flowbite Svelte' },
  amplify: { name: 'AWS Amplify' },
  chromatic: { name: 'Chromatic' },
  liff: { name: 'LIFF' },
} satisfies Record<string, ITech>;

// 開始時期の新しい順に並べる
export const ProjectData: IProjectItem[] = [
  {
    title: '請求・入金管理システムの新規開発',
    period: { start: '2026-08', end: 'present' },
    tags: ['業務フロー整理', 'デザイン', 'フロントエンド', 'AIエージェント', 'インフラ'],
    description:
      'Excel で行っていた請求・入金管理業務を Web アプリケーションに置き換える 3 名体制のプロジェクト。業務フローの整理と画面設計の提案から実装・テストまでを担当。書類の OCR は外部に送らず管理下の GPU 環境で処理し、クライアントが AI との対話でアプリを修正できるエージェントも、認証情報と通信先を制御した構成で構築している。',
    techs: [TECH.nextjs, TECH.prisma, TECH.postgresql, TECH.mastra, TECH.bedrock, TECH.paddleOcr, TECH.aws],
  },
  {
    title: '営業提案用アプリの高速プロトタイピング',
    period: { start: '2026-05' },
    tags: ['PoC', 'デザイン', 'フロントエンド'],
    description:
      '営業担当と協業し、見込み客への提案に使う簡易アプリを Claude Design と Claude Code で 1 日で作成。Claude Design であらかじめ整えておいたデザインシステムを使い、短期間でも UI の一貫性を保った。',
    techs: [TECH.claudeDesign, TECH.claudeCode],
  },
  {
    title: '旅行・アクティビティ予約システムの開発・保守',
    period: { start: '2026-02', end: 'present' },
    tags: ['要件定義', 'バックエンド', 'テスト', 'CI/CD'],
    description:
      'マイレージ会員サービスと連携した、長年運用されている Laravel 製予約システムの機能追加・改修を担当。CodeGraph とコード調査用の Claude の Skill で変更の影響範囲の洗い出しを効率化し、リグレッションテストの整備とリリース手順の自動化でリリース周期を短縮した。',
    techs: [TECH.laravel, TECH.php, TECH.claudeCode],
  },
  {
    title: '介護業界向けWebサービス開発',
    period: { start: '2025-08', end: '2026-04' },
    tags: ['フロントエンド', 'バックエンド', 'デザイン支援'],
    description: 'フロントエンド開発をメインに、バックエンド開発・デザイン支援・その他技術支援を実施。',
    techs: [TECH.nextjs, TECH.typescript, TECH.amplify],
  },
  {
    title: '航空会社の予約システムのリプレース',
    period: { start: '2024-08', end: '2026-01' },
    tags: ['デザイン', 'フロントエンド', 'アクセシビリティ', 'チームリーダー'],
    description:
      '4 名のスクラムチームでリーダーを務め、デザインとフロントエンド開発を担当。WCAG AA 準拠に向けて外部の監査ベンダーとの窓口を担い、指摘内容をもとにした週次の勉強会で、1 画面あたり平均 10 件以上あった指摘を 2〜3 件まで減らした。',
    techs: [TECH.svelteKit, TECH.typescript, TECH.flowbiteSvelte],
  },
  {
    title: 'FA業界向け管理システム開発',
    period: { start: '2024-04', end: '2026-06' },
    tags: ['デザイン', 'フロントエンド', 'アクセシビリティ', 'テスト'],
    description:
      'シード期のスタートアップに業務委託で参画し、デザインとフロントエンド開発を一人で担当。工場見学と現場ヒアリングで通信環境や利用者の IT リテラシーを把握し、軽量で迷わない UI を設計。Storybook と axe-playwright でアクセシビリティを継続的に検査した。',
    techs: [TECH.nextjs, TECH.reactQuery, TECH.playwright, TECH.storybook],
  },
  {
    title: 'エンジニア採用サービスの新規開発',
    period: { start: '2023-01', end: '2024-03' },
    tags: ['要件定義', 'デザイン', 'フロントエンド', '運用・保守'],
    description:
      'シード期のスタートアップで、BtoBtoC のエンジニア採用サービスを 2 名体制で立ち上げ。要件定義・画面設計・フロントエンド開発・運用までを担当し、ヒートマップ分析とユーザーヒアリングをもとに UI を改善。AWS Amplify で CI/CD を整え、デプロイの手間を最小限にした。',
    techs: [TECH.nextjs, TECH.typescript, TECH.reactQuery, TECH.amplify, TECH.sentry],
  },
  {
    title: '工場の安全を可視化する業務アプリケーションの開発',
    period: { start: '2021-12', end: '2022-12' },
    tags: ['フロントエンド', 'コンポーネント設計', 'チームリーダー'],
    description:
      'Django 製アプリケーションのフロントエンドを React へ単独でリプレイスし、20 画面以上を期限内に移行。製品版に向けた第二フェーズでは 4 名のフロントエンドチームを率い、開発ルールの文書化・コード生成・PR テンプレートでレビューを標準化して、遅延なく完了させた。',
    techs: [TECH.nextjs, TECH.typescript, TECH.reduxToolkit, TECH.storybook, TECH.chromatic],
  },
  {
    title: '視覚障害のある方向けの LINE アプリ開発',
    period: { start: '2020-07', end: '2022-07' },
    tags: ['要件定義', 'デザイン', 'アクセシビリティ', '運用・保守'],
    description:
      '視覚障害のある方が電車を利用する際の介助要請を検証する、実証実験用の LINE アプリを開発。利用者が支援技術をどう使っているかを観察・ヒアリングし、実機での読み上げテストを繰り返して改善。利用者から「ステップが少なく迷わなかった」との声をいただいた。',
    techs: [TECH.nuxtjs, TECH.express, TECH.firebase, TECH.liff],
  },
];
