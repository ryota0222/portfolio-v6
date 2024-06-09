import { memo, useEffect } from 'react';
import { Link } from '@nextui-org/link';

import { StickerType } from '../../types';
import { StickerCard } from '../StickerCard';

import { useHover } from '@/hooks/useHover';
import { OpenIcon } from '@/cores/icons';

interface Props {
  onHover: () => void;
  type: StickerType;
  href: string;
}

export const HoverStickerCard = memo<Props>(({ onHover, type, href }) => {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  useEffect(() => {
    if (isHovered) {
      onHover();
    }
  }, [isHovered]);

  return (
    <Link isExternal href={href}>
      <div ref={hoverRef} className="w-40 h-40 sticker-card relative">
        <StickerCard type={type} />
        <div className="opacity-0 absolute z-50 bg-black/60 px-5 py-3 items-center gap-2 rounded-full backdrop-blur-sm top-14 left-1/2 translate-x-[-50%] hover-button flex">
          <OpenIcon color="white" size={16} />
          <span className="text-white text-sm">Open</span>
        </div>
      </div>
    </Link>
  );
});
