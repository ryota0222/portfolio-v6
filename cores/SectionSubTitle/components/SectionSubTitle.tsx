import { Image } from "@nextui-org/react";
import { PropsWithChildren, memo } from "react";

interface Props {
  color: "pink" | "blue" | "yellow" | "green" | "red";
}

export const SectionSubTitle = memo<PropsWithChildren<Props>>(
  ({ color, children }) => {
    return (
      <div className="flex gap-2 items-center">
        <span role="presentation" aria-hidden>
          {color === "pink" && (
            <Image
              src="/images/gradient-pink.webp"
              radius="lg"
              width={40}
              height={40}
            />
          )}
          {color === "blue" && (
            <Image
              src="/images/gradient-blue.webp"
              radius="lg"
              width={40}
              height={40}
            />
          )}
          {color === "yellow" && (
            <Image
              src="/images/gradient-yellow.webp"
              radius="lg"
              width={40}
              height={40}
            />
          )}
          {color === "green" && (
            <Image
              src="/images/gradient-green.webp"
              radius="lg"
              width={40}
              height={40}
            />
          )}
          {color === "red" && (
            <Image
              src="/images/gradient-red.webp"
              radius="lg"
              width={40}
              height={40}
            />
          )}
        </span>
        <h2 className="sm:text-3xl text-2xl font-semibold">{children}</h2>
      </div>
    );
  }
);
