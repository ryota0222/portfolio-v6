import { Image } from "@nextui-org/react";
import { memo } from "react";

export const PerformanceScreen = memo(() => {
  return (
    <div className="w-full flex flex-col items-center">
      <Image
        src="/images/peformance-icon.png"
        alt="icon"
        width={96}
        height={96}
      />
      <h2 className="text-4xl text-white mt-2 mb-8">Performance</h2>
      <p className="text-zinc-300">
        Using PageSpeed Insights, we measured the performance.
      </p>
    </div>
  );
});
