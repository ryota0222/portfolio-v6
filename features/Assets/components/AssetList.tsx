import { memo, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { AssetTitle } from './AssetTitle';

import RssData from '@/data/rss.json';
import { ArticleItem } from '@/features/Article';
import { SlideData } from '@/features/PresentationMaterial/constants';
import { IPresentationMaterialItem } from '@/features/PresentationMaterial/types';

export const AssetList = memo(() => {
  const pathname = usePathname();
  const latestData = useMemo(() => {
    // RssDataをコピー
    const totalData = JSON.parse(JSON.stringify(RssData)) as Record<string, IPresentationMaterialItem[]>;

    totalData['presentation'] = JSON.parse(JSON.stringify(SlideData));
    totalData['all'] = [...totalData['all'], ...SlideData];
    let list = totalData['all'];

    if (pathname === '/assets/zenn') {
      list = totalData['zenn'];
    }
    if (pathname === '/assets/qiita') {
      list = totalData['qiita'];
    }
    if (pathname === '/assets/note') {
      list = totalData['note'];
    }
    if (pathname === '/assets/presentation') {
      list = totalData['presentation'];
    }
    list.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return list;
  }, []);

  console.log(pathname);

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
