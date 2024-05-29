import { memo } from "react";
import { ApplicationData } from "../constants";
import { ApplicationItem } from "./ApplicationItem";

export const ApplicationList = memo(() => {
  return (
    <div className="flex flex-wrap justify-between gap-x-6 gap-y-16 w-full">
      {ApplicationData.map((item) => (
        <ApplicationItem key={item.name} {...item} />
      ))}
    </div>
  );
});
