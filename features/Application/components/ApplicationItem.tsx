import { memo } from 'react';
import Link from 'next/link';
import { Image } from '@nextui-org/react';
import NextImage from 'next/image';

import { IApplicationItem } from '../types';
import { ApplicationType } from '../constants';

export const ApplicationItem = memo<IApplicationItem>(({ name, link, type, thumbnailUrl, skills }) => {
  return (
    <Link className="card" href={link} rel="noopener noreferrer" target="_blank">
      <div className="border border-zinc-200 hover:border-zinc-300 rounded-2xl overflow-hidden w-fit">
        <Image
          isZoomed
          alt="thumbnail image"
          as={NextImage}
          className="w-full lg:w-[450px] md:w-[360px]"
          height={270}
          src={thumbnailUrl}
          width={480}
        />
      </div>
      <div className="mt-2 flex gap-2 items-center w-full lg:w-[450px] md:w-[360px]">
        <span className="sm:text-md text-sm">{name}</span>
        {type.map((t) => (
          <span
            key={t}
            className={`text-xs text-white px-2 py-1 rounded-full ${
              t === ApplicationType.Line
                ? 'bg-green-700'
                : t === ApplicationType.Web
                  ? 'bg-blue-600'
                  : t === ApplicationType.Mobile
                    ? 'bg-pink-600'
                    : t === ApplicationType.Pwa
                      ? 'bg-zinc-800'
                      : t === ApplicationType.Figma
                        ? 'bg-purple-700'
                        : ''
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="sm:mt-2 mt-3 flex gap-2">
        {skills.map((skill) => (
          <Image
            key={skill.name}
            alt={`${skill.name}のアイコン`}
            height={20}
            loading="lazy"
            radius="none"
            src={skill.image}
            title={skill.name}
            width={20}
          />
        ))}
      </div>
    </Link>
  );
});
