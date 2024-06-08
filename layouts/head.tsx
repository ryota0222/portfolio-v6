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
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="ja_JP" property="og:locale" />
      <meta content={siteConfig.name} property="og:site_name" />
      <meta content="https://portfolio.site.ryotanny.com/images/mv.png" property="og:image" />
      <meta
        key="viewport"
        content="viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        name="viewport"
      />
      <link href="/favicon.ico" rel="icon" />
    </NextHead>
  );
};
