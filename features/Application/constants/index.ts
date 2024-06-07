export enum ApplicationType {
  mobile = 'Mobile',
  web = 'Web',
  pwa = 'PWA',
  line = 'LINE',
  figma = 'Figma',
}

export const ApplicationData = [
  {
    name: 'FigTodo',
    link: 'https://www.figma.com/community/plugin/1376174862254820112',
    type: [ApplicationType.figma],
    thumbnailUrl: '/images/services/figtodo.webp',
    skills: [
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        name: 'React',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        name: 'Figma',
      },
    ],
  },
  {
    name: 'TimeShare',
    link: 'https://time-share.site.ryotanny.com',
    type: [ApplicationType.web, ApplicationType.pwa],
    thumbnailUrl: '/images/services/timeshare.webp',
    skills: [
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        name: 'Next.js',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        name: 'Figma',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
        name: 'Firebase',
      },
      {
        name: 'storybook',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original.svg',
      },
    ],
  },
  {
    name: '旧ポートフォリオ',
    link: 'https://portfolio.site.ryotanny.com',
    type: [ApplicationType.web, ApplicationType.pwa],
    thumbnailUrl: '/images/services/portfolio.webp',
    skills: [
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg',
        name: 'astro',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        name: 'Figma',
      },
    ],
  },
  {
    name: '瞑想Time',
    link: 'https://apps.apple.com/jp/app/%E7%9E%91%E6%83%B3time/id6475310806',
    type: [ApplicationType.mobile],
    thumbnailUrl: '/images/services/meiso.webp',
    skills: [
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        name: 'React Native',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        name: 'Figma',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
        name: 'express',
      },
      {
        name: 'Firebase',
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
      },
      {
        name: 'microCMS',
        image: '/images/skill/microcms.svg',
      },
      {
        name: 'React Query',
        image: '/images/skill/react-query.svg',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg',
        name: 'sentry',
      },
    ],
  },
  {
    name: 'Polaris',
    link: 'https://public-ryotanny.notion.site/Polaris-ea3e411dfeaa46629862bf6080a00c40?pvs=4',
    type: [ApplicationType.line],
    thumbnailUrl: '/images/services/polaris.webp',
    skills: [
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        name: 'Next.js',
      },
      {
        image: '/images/share/line.png',
        name: 'LINE',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg',
        name: 'Firebase',
      },
    ],
  },
  {
    name: 'Tetris',
    link: 'https://w-tetris.site.ryotanny.com/',
    type: [ApplicationType.web, ApplicationType.pwa],
    thumbnailUrl: '/images/services/w-tetris.webp',
    skills: [
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
        name: 'Next.js',
      },
      {
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
        name: 'Figma',
      },
    ],
  },
];
