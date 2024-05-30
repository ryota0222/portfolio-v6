import { Image } from "@nextui-org/react";
import { memo } from "react";

interface Props {
  src: string;
  selected: boolean;
}

export const PreviewImage = memo<Props>(({ src, selected }) => {
  return (
    <Image src={src} width={300} className={selected ? "block" : "hidden"} />
  );
});
