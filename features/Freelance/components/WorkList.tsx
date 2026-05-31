import { memo } from 'react';

import { WorkData } from '../constants';

import { WorkItem } from './WorkItem';

export const WorkList = memo(() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {WorkData.map((work) => (
        <WorkItem key={work.title} {...work} />
      ))}
    </div>
  );
});
