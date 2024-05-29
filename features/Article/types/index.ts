export interface IArticleItem {
  title: string;
  content: string;
  url: string;
  date: string;
  thumbnail: string;
  favicon: string;
  site: "zenn" | "qiita" | "note";
}
