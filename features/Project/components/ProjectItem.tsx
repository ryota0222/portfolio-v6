import { Image } from '@nextui-org/image';
import { memo } from 'react';

import { IProjectItem } from '../types';

import { Period } from '@/cores/Period';

export const ProjectItem = memo<IProjectItem>(({ title, period, tags, description, techs }) => {
  const iconTechs = techs?.filter((tech) => tech.image) ?? [];
  const textTechs = techs?.filter((tech) => !tech.image) ?? [];

  return (
    <div className="border border-zinc-200 rounded-2xl p-5 sm:p-6 w-full h-full flex flex-col bg-white">
      <span className="text-xs text-zinc-500 tabular-nums">
        <Period {...period} />
      </span>
      <h4 className="mt-1 font-semibold sm:text-lg">{title}</h4>
      <ul aria-label="担当領域" className="mt-3 flex flex-wrap gap-2" role="list">
        {tags.map((tag) => (
          <li key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700">
            {tag}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{description}</p>
      {techs && (
        // アイコンがある技術はアイコンで、ない技術は名前で並べる（Application セクションと同じ見せ方）
        <ul
          aria-label="使用技術"
          className="mt-auto pt-4 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs text-zinc-500"
          role="list"
        >
          {iconTechs.map((tech) => (
            <li key={tech.name} className="flex">
              <Image alt={tech.name} height={20} radius="none" src={tech.image} title={tech.name} width={20} />
            </li>
          ))}
          {textTechs.map((tech) => (
            <li key={tech.name} className="px-2 py-0.5 rounded border border-zinc-200">
              {tech.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
