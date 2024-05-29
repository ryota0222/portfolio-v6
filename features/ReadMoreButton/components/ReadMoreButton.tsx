import { RightUpArrowIcon } from "@/cores/icons";
import { Button } from "@nextui-org/button";
import { memo } from "react";

interface Props {
  href: string;
}

export const ReadMoreButton = memo<Props>(({ href }) => {
  return (
    <Button
      variant="bordered"
      radius="full"
      endContent={<RightUpArrowIcon size={20} />}
      className="text-sm border py-4 px-6 h-auto"
      href={href}
    >
      Read more
    </Button>
  );
});
