import { memo } from 'react';

import { IWorkItem } from '../types';

export const WorkItem = memo<IWorkItem>(({ title, period, tags, description }) => {
  return (
    <div className="border border-zinc-200 rounded-2xl p-5 sm:p-6 w-full h-full">
      <span className="text-xs text-zinc-500">
        <time>{period}</time>
      </span>
      <h3 className="mt-1 font-semibold sm:text-lg">{title}</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
});
