import { memo } from 'react';

/** 年月は 'YYYY-MM' 形式で渡す。end に 'present' を渡すと「現在」と表示する */
export interface IPeriod {
  start: string;
  end?: string | 'present';
}

const toLabel = (yearMonth: string) => yearMonth.replace('-', '.');

/**
 * 期間を「2024.06 – 現在」の形で表示する。
 * 機械可読な日付を <time dateTime> で持たせる。
 */
export const Period = memo<IPeriod>(({ start, end }) => (
  <>
    <time dateTime={start}>{toLabel(start)}</time>
    {end && (
      <>
        {' – '}
        {end === 'present' ? '現在' : <time dateTime={end}>{toLabel(end)}</time>}
      </>
    )}
  </>
));
