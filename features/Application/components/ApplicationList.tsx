import { memo } from "react";
import { ApplicationData } from "../constants";
import { ApplicationItem } from "./ApplicationItem";

export const ApplicationList = memo(() => {
  return (
    <div className="flex flex-wrap justify-between gap-8 w-full">
      {ApplicationData.map((item) => (
        <ApplicationItem key={item.name} {...item} />
      ))}
    </div>
  );
});
