import { memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { AssetTitle } from './AssetTitle';

import RssData from '@/data/rss.json';
import { ArticleItem } from '@/features/Article';
import { SlideData } from '@/features/PresentationMaterial/constants';

export const AssetList = memo(() => {
  const pathname = usePathname();
  const latestData = useMemo(() => {
    let list = [...RssData, ...SlideData];

    if (pathname === '/assets/zenn') {
      list = RssData.filter((item) => item.siteName === 'Zenn');
    }
    if (pathname === '/assets/qiita') {
      list = RssData.filter((item) => item.siteName === 'Qiita');
    }
    if (pathname === '/assets/note') {
      list = RssData.filter((item) => item.siteName === 'Note');
    }
    if (pathname === '/assets/presentation') {
      list = SlideData;
    }
    list.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return list;
  }, []);

  return (
    <>
      <AssetTitle />
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-16 w-full mt-16 mb-40">
        {latestData.map((item) => (
          <ArticleItem key={item.title} {...item} />
        ))}
      </div>
    </>
  );
});
