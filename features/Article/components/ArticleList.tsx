import { memo, useMemo } from "react";
import RssData from "@/data/rss.json";
import { ArticleItem } from "./ArticleItem";

export const ArticleList = memo(() => {
  const latestData = useMemo(() => {
    const list = RssData["all"];
    list.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    return list;
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-16 w-full">
      {latestData.slice(0, 4).map((item) => (
        <ArticleItem key={item.title} {...item} />
      ))}
    </div>
  );
});
