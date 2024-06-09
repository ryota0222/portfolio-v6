import { Image } from '@nextui-org/react';
import { memo, useCallback } from 'react';
import NextImage from 'next/image';

import { ChangelogData } from '../constants';

import { ChangelogItem } from './ChangelogItem';

import { getVersion } from '@/utils/version';

export const ChangelogSection = memo(() => {
  const getIsLatestVersion = useCallback((version: string) => {
    return version === getVersion();
  }, []);

  return (
    <div className="w-full flex flex-col items-center max-w-2xl mx-auto">
      <Image alt="icon" as={NextImage} height={96} src="/images/changelog-icon.png" width={96} />
      <h2 className="text-4xl text-white mt-2 mb-8">Changelog</h2>
      <div className="my-12 flex flex-col gap-16">
        {ChangelogData.map((data) => (
          <ChangelogItem key={data.version} data={data} isLatestVersion={getIsLatestVersion(data.version)} />
        ))}
      </div>
    </div>
  );
});
