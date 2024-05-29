import { Image } from "@nextui-org/react";
import { PropsWithChildren, memo } from "react";

interface Props {
  index: 1 | 2;
}

export const SectionTitle = memo<PropsWithChildren<Props>>(
  ({ index, children }) => {
    return (
      <div className="flex flex-col gap-2 items-center">
        <span role="presentation" aria-hidden>
          {index === 1 && <Image src="/images/section/01.svg" radius="none" />}
          {index === 2 && <Image src="/images/section/02.svg" radius="none" />}
        </span>
        <span
          role="presentation"
          aria-hidden
          className="w-[1px] h-8 bg-zinc-600 mt-4"
        />
        <h1 className="sm:text-[40px] text-[32px] font-semibold">{children}</h1>
      </div>
    );
  }
);
