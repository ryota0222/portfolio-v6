import { useHover } from "@/hooks/useHover";
import { StickerType } from "../../types";
import { memo, useEffect } from "react";
import { StickerCard } from "../StickerCard";
import { OpenIcon } from "@/cores/icons";
import { Link } from "@nextui-org/react";

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
    <Link href={href} isExternal>
      <div className="w-40 h-40 sticker-card relative" ref={hoverRef}>
        <StickerCard type={type} />
        <div className="opacity-0 absolute z-50 bg-black/60 px-5 py-3 items-center gap-2 rounded-full backdrop-blur-sm top-14 left-1/2 translate-x-[-50%] hover-button flex">
          <OpenIcon size={16} color="white" />
          <span className="text-white text-sm">Open</span>
        </div>
      </div>
    </Link>
  );
});
