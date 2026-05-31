import { memo } from 'react';

import { ArticleItem } from './ArticleItem';

import RssData from '@/data/latestRss.json';

export const ArticleList = memo(() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 w-full">
      {RssData.slice(0, 4).map((item) => (
        <ArticleItem key={item.title} {...item} />
      ))}
    </div>
  );
});
