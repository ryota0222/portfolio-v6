export type SiteConfig = typeof siteConfig;

interface ILink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'RyoTa. Portfolio',
  description: 'RyoTa Portfolio. I am a design engineer. I am interested in development, design, and illustrator.',
  navItems: [
    // {
    //   label: "Home",
    //   href: "/",
    // },
    // {
    //   label: "Docs",
    //   href: "/docs",
    // },
    // {
    //   label: "Pricing",
    //   href: "/pricing",
    // },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ] as ILink[],
  navMenuItems: [] as ILink[],
  links: {
    github: 'https://github.com/ryota0222',
    twitter: 'https://x.com/ryota_des_eng',
    pitta: 'https://pitta.me/matches/RUhiedyaOOtp',
    qiita: 'https://qiita.com/ryotanny',
    zenn: 'https://zenn.dev/ryota0222',
    note: 'https://note.com/ryotanny',
  },
  url: 'https://portfolio.site.ryotanny.com',
};
