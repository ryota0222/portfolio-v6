import { memo } from 'react';

import { WorkData } from '../constants';

import { WorkItem } from './WorkItem';

export const WorkList = memo(() => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" role="list">
      {WorkData.map((work) => (
        <li key={work.title}>
          <WorkItem {...work} />
        </li>
      ))}
    </ul>
  );
});
