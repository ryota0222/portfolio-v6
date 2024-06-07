import { memo } from 'react';
import dayjs from 'dayjs';

import { IChangelogItem } from '../types';

interface Props {
  data: IChangelogItem;
  isLatestVersion: boolean;
}

export const ChangelogItem = memo<Props>(({ data, isLatestVersion }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-zinc-400 flex gap-1 text-sm">
        <span>v{data.version}</span>
        <span>・</span>
        <span>{dayjs(data.date).format('YYYY/M/D')}</span>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-xl text-white font-semibold">{data.title}</h3>
        {isLatestVersion && (
          <span className="text-zinc-800 text-xs font-semibold bg-[url('/images/pastel_gradient.webp')] bg-cover bg-center px-4 py-3 rounded-full">
            Current Version
          </span>
        )}
      </div>
      <p className="text-zinc-200">{data.description}</p>
    </div>
  );
});
