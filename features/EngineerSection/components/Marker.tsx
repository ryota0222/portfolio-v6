'use client';

import { PropsWithChildren, memo, useRef } from 'react';
import { useInView } from 'framer-motion';

/**
 * 文字の下半分にパステルのマーカーを引いて強調する。
 * 画面に入ると左から右へ線が引かれる（動きを減らす設定では最初から表示）。
 * 文字色は濃いグレーのままなので、背景とのコントラストが保たれる。
 */
export const Marker = memo<PropsWithChildren>(({ children }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <strong ref={ref} className="marker font-bold text-zinc-800" data-drawn={isInView}>
      {children}
    </strong>
  );
});
