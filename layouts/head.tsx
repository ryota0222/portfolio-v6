import React from 'react';
import NextHead from 'next/head';

import { siteConfig } from '@/config/site';

export const Head = () => {
  return (
    <NextHead>
      <title>{siteConfig.name}</title>
      <meta key="title" content={siteConfig.name} property="og:title" />
      <meta content={siteConfig.description} property="og:description" />
      <meta content={siteConfig.description} name="description" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:locale" content="ja_JP" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content="https://portfolio.site.ryotanny.com/images/mv.png" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
