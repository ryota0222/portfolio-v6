'use client';

import { memo, useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import { TYPING_SPEED } from '@/features/FirstView/constants';

interface Props {
  /** 表示するメッセージ全文 */
  text: string;
  /** 打ち終わったときに呼ばれる */
  onComplete: () => void;
}

export const TypingMessage = memo(({ text, onComplete }: Props) => {
  const shouldReduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  // text が変わるたびに先頭から打ち直す。
  // モーション過敏設定の場合は一気に全文表示する。
  useEffect(() => {
    if (shouldReduceMotion) {
      setCount(text.length);

      return;
    }

    setCount(0);

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= text.length) {
          clearInterval(timer);

          return prev;
        }

        return prev + 1;
      });
    }, TYPING_SPEED);

    return () => clearInterval(timer);
  }, [text, shouldReduceMotion]);

  // 打ち終わったら親へ通知する（次のメッセージへ進む合図）。
  const isDone = count >= text.length;

  useEffect(() => {
    if (!isDone) return;

    onComplete();
  }, [isDone, onComplete]);

  // 1文字ずつ増える表示はスクリーンリーダーには隠し、全文を別に渡す。
  // aria-live にすると1文字ごとに読み上げが割り込むため使わない。
  return (
    <p className="w-full min-h-[1.5em] text-center font-bold text-sm sm:text-md text-zinc-700">
      <span aria-hidden="true">
        {text.slice(0, count)}
        {!isDone && <span className="ml-0.5 inline-block w-px animate-pulse text-zinc-400">|</span>}
      </span>
      <VisuallyHidden>{text}</VisuallyHidden>
    </p>
  );
});

TypingMessage.displayName = 'TypingMessage';
