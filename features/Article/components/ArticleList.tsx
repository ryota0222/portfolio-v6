import { memo } from 'react';

import { ArticleItem } from './ArticleItem';

import RssData from '@/data/latestRss.json';

export const ArticleList = memo(() => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 w-full" role="list">
      {RssData.slice(0, 4).map((item) => (
        <li key={item.title}>
          <ArticleItem {...item} />
        </li>
      ))}
    </ul>
  );
});
