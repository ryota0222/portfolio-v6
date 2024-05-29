import { memo, useMemo } from "react";
import RssData from "@/data/rss.json";
import { ArticleItem } from "./ArticleItem";

export const ArticleList = memo(() => {
  const latestData = useMemo(() => {
    const data: any = RssData;
    const list = [];
    for (const key in data) {
      list.push(...data[key]);
    }
    list.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return list;
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-8 w-full">
      {latestData.slice(0, 4).map((item) => (
        <ArticleItem key={item.name} {...item} />
      ))}
    </div>
  );
});
