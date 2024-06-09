import { memo } from 'react';

import { ArticleItem } from './ArticleItem';

import RssData from '@/data/latestRss.json';

export const ArticleList = memo(() => {
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-16 w-full">
      {RssData.slice(0, 4).map((item) => (
        <ArticleItem key={item.title} {...item} />
      ))}
    </div>
  );
});
