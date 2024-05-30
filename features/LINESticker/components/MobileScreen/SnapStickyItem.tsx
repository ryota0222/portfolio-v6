import { Image } from "@nextui-org/react";
import { memo } from "react";
import { StickerCard } from "../StickerCard";
import { StickerType } from "../../types";
import { LinkButton } from "@/features/LinkButton";

interface Props {
  type: StickerType;
  href: string;
}

export const SnapStickyItem = memo<Props>(({ type, href }) => {
  return (
    <div className="w-full snap-start">
      <div className="relative">
        {type === StickerType.Usamayusan ? (
          <Image
            src="/images/sticker/usamayusan/preview.webp"
            className="w-[80vw] min-w-[80vw]"
          />
        ) : type === StickerType.Penguin ? (
          <Image
            src="/images/sticker/penguin/preview.webp"
            className="w-[80vw] min-w-[80vw]"
          />
        ) : type === StickerType.Hiyoko ? (
          <Image
            src="/images/sticker/hiyoko/preview.webp"
            className="w-[80vw] min-w-[80vw]"
          />
        ) : type === StickerType.Emojin ? (
          <Image
            src="/images/sticker/emojin/preview.webp"
            className="w-[80vw] min-w-[80vw]"
          />
        ) : type === StickerType.Otoko ? (
          <Image
            src="/images/sticker/otoko/preview.webp"
            className="w-[80vw] min-w-[80vw]"
          />
        ) : null}
        <div className="absolute bottom-2 left-4 z-10">
          <StickerCard type={type} hiddenLabel withBorder />
        </div>
      </div>
      <div className="flex justify-center my-2">
        <span className="text-sm">
          {type === StickerType.Usamayusan
            ? "うさまゆさん"
            : type === StickerType.Penguin
            ? "飛ばないペンギン"
            : type === StickerType.Hiyoko
            ? "ひよっこエンジニア"
            : type === StickerType.Emojin
            ? "えもじん"
            : type === StickerType.Otoko
            ? "まんまる おとこのこ"
            : ""}
        </span>
      </div>
      <div className="flex justify-center my-6">
        <LinkButton href={href} type="solid" isExternal>
          See details
        </LinkButton>
      </div>
    </div>
  );
});
