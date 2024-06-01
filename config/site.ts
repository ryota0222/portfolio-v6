export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "RyoTa. Portfolio",
  description: "Make beautiful websites regardless of your design experience.",
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
  ] as {
    label: string;
    href: string;
  }[],
  navMenuItems: [] as {
    label: string;
    href: string;
  }[],
  links: {
    github: "https://github.com/ryota0222",
    twitter: "https://x.com/ryota_des_eng",
    pitta: "https://pitta.me/matches/RUhiedyaOOtp",
    qiita: "https://qiita.com/ryotanny",
    zenn: "https://zenn.dev/ryota0222",
    note: "https://note.com/ryotanny",
  },
  url: "https://portfolio.site.ryotanny.com",
};
