'use client';

import { memo, useMemo } from 'react';
import { Variants, motion, useReducedMotion } from 'framer-motion';

// .gradient-text の linear-gradient(270deg, ...) を「左→右」の読み順に並べ替えた色（RGB）。
// 270deg は左向きのため、CSS の指定順とは逆順になる。
const STOPS: [number, number, number][] = [
  [255, 149, 225], // #ff95e1
  [174, 126, 222], // #ae7ede
  [102, 170, 249], // #66aaf9
  [126, 231, 252], // #7ee7fc
  [116, 223, 162], // #74dfa2
  [249, 201, 124], // #f9c97c
  [248, 113, 160], // #f871a0
];

const colorAt = (t: number): string => {
  const x = Math.min(Math.max(t, 0), 1) * (STOPS.length - 1);
  const i = Math.floor(x);
  const f = x - i;
  const a = STOPS[i];
  const b = STOPS[Math.min(i + 1, STOPS.length - 1)];
  const ch = (idx: number) => Math.round(a[idx] + (b[idx] - a[idx]) * f);

  return `rgb(${ch(0)}, ${ch(1)}, ${ch(2)})`;
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.3 } },
};

// 表示前は黒。ビューポート到達後に各文字のグラデーション色へ変化させる。
const child: Variants = {
  hidden: { color: '#000000' },
  visible: (target: string) => ({ color: target, transition: { duration: 0.25 } }),
};

interface Props {
  text: string;
}

export const GradientReveal = memo<Props>(({ text }) => {
  const chars = useMemo(() => [...text], [text]);
  const shouldReduceMotion = useReducedMotion();
  const denominator = Math.max(chars.length - 1, 1);

  return (
    <motion.span
      className="font-bold"
      initial={shouldReduceMotion ? undefined : 'hidden'}
      variants={shouldReduceMotion ? undefined : container}
      viewport={{ once: true, amount: 0.6 }}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
    >
      {chars.map((c, i) => {
        const target = colorAt(i / denominator);

        return (
          <motion.span
            // 文字列は固定なので index を key に用いる
            key={i}
            custom={target}
            style={shouldReduceMotion ? { color: target } : undefined}
            variants={shouldReduceMotion ? undefined : child}
          >
            {c}
          </motion.span>
        );
      })}
    </motion.span>
  );
});
