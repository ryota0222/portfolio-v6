import { memo } from 'react';

import { STICKER_ORDER, STICKER_URL } from '../../constants';

import { SnapStickyItem } from './SnapStickyItem';

export const MobileScreen = memo(() => {
  return (
    <div className="sm:hidden w-screen">
      <div className="flex snap-x snap-mandatory overflow-auto w-[100vw]">
        {STICKER_ORDER.map((type) => (
          <SnapStickyItem key={type} href={STICKER_URL[type]} type={type} />
        ))}
      </div>
    </div>
  );
});
