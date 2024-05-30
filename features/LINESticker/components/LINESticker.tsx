import { memo } from "react";
import { DesktopScreen } from "./DesktopScreen";
import { MobileScreen } from "./MobileScreen";

export const LINESticker = memo(() => {
  return (
    <div className="w-full">
      <DesktopScreen />
      <MobileScreen />
    </div>
  );
});
