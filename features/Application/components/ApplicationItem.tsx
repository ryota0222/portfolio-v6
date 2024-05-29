import { memo } from "react";
import { IApplicationItem } from "../types";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import { ApplicationType } from "../constants";

export const ApplicationItem = memo<IApplicationItem>(
  ({ name, link, type, thumbnailUrl, skills }) => {
    return (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="card"
      >
        <div className="border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt="サムネイル画像"
            width={450}
            height={200}
            isZoomed
            sizes="min(100%, 450px)"
          />
        </div>
        <div className="mt-2 flex gap-2 items-center">
          <span className="sm:text-md text-sm">{name}</span>
          {type.map((t) => (
            <span
              key={t}
              className={`text-xs text-white px-2 py-1 rounded-full ${
                t === ApplicationType.line
                  ? "bg-green-500"
                  : t === ApplicationType.web
                  ? "bg-blue-400"
                  : t === ApplicationType.mobile
                  ? "bg-pink-400"
                  : t === ApplicationType.pwa
                  ? "bg-zinc-800"
                  : ""
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="sm:mt-2 mt-3 flex gap-2">
          {skills.map((skill) => (
            <Image
              src={skill.image}
              alt={`${skill.name}のアイコン`}
              width={20}
              height={20}
              title={skill.name}
              key={skill.name}
              radius="none"
            />
          ))}
        </div>
      </Link>
    );
  }
);
