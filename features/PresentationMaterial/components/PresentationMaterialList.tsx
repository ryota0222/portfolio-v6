import { memo, useMemo } from "react";
import { SlideData } from "../constants";
import { PresentationMaterialItem } from "./PresentationMaterialItem";

export const PresentationMaterialList = memo(() => {
  const latestData = useMemo(() => {
    return SlideData.slice(0, 4);
  }, []);
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-16 w-full">
      {latestData.map((item) => (
        <PresentationMaterialItem key={item.title} {...item} />
      ))}
    </div>
  );
});
