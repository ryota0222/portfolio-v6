import { memo } from "react";
import { IArticleItem } from "../types";
import Link from "next/link";
import { Image } from "@nextui-org/react";

export const ArticleItem = memo<IArticleItem>(
  ({ title, url, thumbnail, favicon, siteName }) => {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <div className="border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden">
          <Image
            src={thumbnail}
            alt="サムネイル画像"
            width={450}
            height={200}
            isZoomed
            sizes="min(100%, 450px)"
          />
        </div>
        <div className="mt-2">{title}</div>
        <div className="mt-2 flex gap-2 items-center">
          <Image
            src={favicon}
            alt={`${siteName}のアイコン`}
            width={20}
            height={20}
            title={siteName}
            radius="none"
          />
          <span>{siteName}</span>
        </div>
      </Link>
    );
  }
);
