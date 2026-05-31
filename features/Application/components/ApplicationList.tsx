import { memo } from 'react';

import { ApplicationData } from '../constants';

import { ApplicationItem } from './ApplicationItem';

export const ApplicationList = memo(() => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-16 w-full">
      {ApplicationData.map((item) => (
        <ApplicationItem key={item.name} {...item} />
      ))}
    </div>
  );
});
