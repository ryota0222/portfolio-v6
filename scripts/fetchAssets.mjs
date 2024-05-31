import { writeFileSync } from "fs";

import axios from "axios";
import { load } from "cheerio";
import Parser from "rss-parser";

const parser = new Parser({
  customFields: {
    item: [["media:thumbnail", "image"]],
  },
});

const rssFeed = {
  zenn: {
    label: "Zenn",
    url: "https://zenn.dev/ryota0222/feed",
    favicon: "/images/zenn.svg",
  },
  qiita: {
    label: "Qiita",
    url: "https://qiita.com/ryotanny/feed",
    favicon: "/images/qiita.png",
  },
  note: {
    label: "Note",
    url: "https://note.com/ryotanny/rss",
    favicon: "/images/note.svg",
  },
};

// URLからOGP情報を取得する関数
async function fetchOGPImage(url) {
  try {
    const { data } = await axios.get(url);
    const $ = load(data);
    let image = null;
    $("meta").each((i, elem) => {
      if (
        $(elem).attr("property") &&
        $(elem).attr("property")?.startsWith("og:image")
      ) {
        image = $(elem).attr("content") || null;
      }
    });
    return image;
  } catch (error) {
    console.error(`Error fetching OGP info: ${error}`);
    return null;
  }
}

try {
  console.log("🌟 Fetch RSS");
  const jsonFeed = {};
  for (const [site, info] of Object.entries(rssFeed)) {
    // RSSのデータ取得
    const feed = await parser.parseURL(info.url);
    const _items = [];

    for (const i of feed.items) {
      if (site === "qiita") {
        const image = await fetchOGPImage(i.link);
        _items.push({
          url: i.link,
          title: i.title,
          description: i.content,
          date: i.isoDate,
          siteName: info.label,
          favicon: info.favicon,
          thumbnail: image,
        });
      } else {
        _items.push({
          url: i.link,
          title: i.title,
          description: i.content,
          date: i.isoDate,
          siteName: info.label,
          favicon: info.favicon,
          thumbnail: i.enclosure?.url || i.image || null,
        });
      }
    }
    // jsonFeedに格納
    jsonFeed[site] = jsonFeed[site]?.length
      ? [...jsonFeed[site], ..._items]
      : _items;
    jsonFeed["all"] = jsonFeed["all"]?.length
      ? [...jsonFeed["all"], ..._items]
      : _items;
    console.log(`✅ Fetched ${info.label}`);
  }

  // static/rss.jsonに出力
  writeFileSync("./data/rss.json", JSON.stringify(jsonFeed));
} catch (err) {
  console.error(err);
}

console.log("✨ Finished!");
