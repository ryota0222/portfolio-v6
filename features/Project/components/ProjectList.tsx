import { memo, useCallback, useEffect, useRef, useState } from 'react';

import { ProjectData } from '../constants';

import { ProjectItem } from './ProjectItem';

import { prefersReducedMotion } from '@/libs/prefersReducedMotion';

// 続きがある側の端を薄くして、横に続いていることを伝える。
// スナップ位置（scroll-pl-12）も同じ幅だけ内側にずらし、止まったカードの左端が薄くならないようにする
const FADE = 48;
const edgeMask = (isAtStart: boolean, isAtEnd: boolean) =>
  `linear-gradient(to right, ${isAtStart ? 'black' : 'transparent'} 0, black ${FADE}px, black calc(100% - ${FADE}px), ${
    isAtEnd ? 'black' : 'transparent'
  } 100%)`;

// 各カードを左端（フェードの内側）に揃えるときのスクロール位置
const getCardPositions = (el: HTMLElement) =>
  Array.from(el.querySelectorAll<HTMLLIElement>('ol > li')).map((card) => Math.max(0, card.offsetLeft - FADE));

const ArrowIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    aria-hidden="true"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    width="18"
  >
    {direction === 'left' ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
  </svg>
);

/**
 * プロジェクトを新しい順に横へ並べる年表。
 * 横スクロール（スワイプ・トラックパッド・キーボードの左右キー）と、下のページネーション・前後ボタンで移動できる。
 */
export const ProjectList = memo(() => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current;

    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
    const positions = getCardPositions(el);

    setIsAtStart(el.scrollLeft <= 1);
    setIsAtEnd(atEnd);
    // 末尾は複数枚が同時に見えて左端に寄せきれないため、端まで来たら最後の 1 件を現在地にする
    setActiveIndex(
      atEnd
        ? positions.length - 1
        : positions.reduce(
            (nearest, pos, i) =>
              Math.abs(pos - el.scrollLeft) < Math.abs(positions[nearest] - el.scrollLeft) ? i : nearest,
            0,
          ),
    );
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);

    return () => window.removeEventListener('resize', updateEdges);
  }, [updateEdges]);

  // 隣のカードの位置へ動かす。
  // 相対量（scrollBy）だとスクロールスナップと競合して進まないことがあるため、移動先の位置を求めて scrollTo する
  const scrollToNeighbor = (direction: 1 | -1) => {
    const el = scrollerRef.current;

    if (!el) return;
    const positions = getCardPositions(el);
    const current = el.scrollLeft;
    const target =
      direction === 1
        ? positions.find((pos) => pos > current + 2)
        : positions.reverse().find((pos) => pos < current - 2);

    if (target === undefined) return;
    el.scrollTo({ left: target, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;

    if (!el) return;
    el.scrollTo({ left: getCardPositions(el)[index], behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <div>
      {/* 端のフェード（mask）でフォーカスリングが消えないよう、リングは外側に出す */}
      <div className="rounded-2xl has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-zinc-800">
        <div
          ref={scrollerRef}
          aria-label="プロジェクトの年表"
          className="no-scrollbar overflow-x-auto snap-x snap-mandatory scroll-pl-12 focus:outline-none"
          role="region"
          style={{ maskImage: edgeMask(isAtStart, isAtEnd), WebkitMaskImage: edgeMask(isAtStart, isAtEnd) }}
          // 横スクロールする領域はキーボードでもフォーカスして左右キーで動かせる必要がある（axe: scrollable-region-focusable）
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          onScroll={updateEdges}
        >
          <div className="relative w-max pb-1">
            {/* 年表の軸。ドットの中心（年の行 24px + 余白 8px + ドット半径 6px）に合わせる */}
            <span aria-hidden="true" className="absolute left-0 right-0 top-[38px] h-px bg-zinc-300" />
            <ol className="relative flex gap-6" role="list">
              {ProjectData.map((project, index) => {
                const year = project.period.start.slice(0, 4);
                const isFirstOfYear = index === 0 || ProjectData[index - 1].period.start.slice(0, 4) !== year;

                return (
                  <li
                    key={project.title}
                    className="relative snap-start shrink-0 w-[72vw] max-w-[340px] sm:w-[340px] flex flex-col"
                  >
                    {/* 年は各年の最初のカードにだけ出す。期間はカード内で読み上げるため、ここは装飾扱い */}
                    <span aria-hidden="true" className="h-6 text-sm font-semibold tabular-nums text-zinc-800">
                      {isFirstOfYear ? year : ''}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`mt-2 block w-3 h-3 rounded-full ring-4 ring-white ${
                        isFirstOfYear ? 'bg-zinc-800' : 'bg-zinc-400'
                      }`}
                    />
                    <div className="mt-4 flex-1">
                      <ProjectItem {...project} />
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center sm:justify-between gap-3">
        {/* ページネーション。今どのプロジェクトを見ているかを示し、押すとそのカードへ移動する */}
        <div aria-label="表示するプロジェクト" className="flex items-center rounded-full bg-zinc-100 px-1" role="group">
          {ProjectData.map((project, index) => (
            <button
              key={project.title}
              aria-current={index === activeIndex ? 'true' : undefined}
              aria-label={`${index + 1} 件目：${project.title}`}
              className="group w-6 h-8 flex items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800"
              type="button"
              onClick={() => scrollToIndex(index)}
            >
              <span
                aria-hidden="true"
                className={`block h-1.5 rounded-full motion-safe:transition-all motion-safe:duration-300 ${
                  index === activeIndex ? 'w-4 bg-zinc-800' : 'w-1.5 bg-zinc-400 group-hover:bg-zinc-600'
                }`}
              />
            </button>
          ))}
        </div>
        {/* スマホはスワイプで動かせ、ドットと並べると幅が足りないため、前後ボタンは sm 以上で出す */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            aria-label="新しいプロジェクトへ戻る"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 disabled:opacity-40 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800"
            disabled={isAtStart}
            type="button"
            onClick={() => scrollToNeighbor(-1)}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            aria-label="過去のプロジェクトへ進む"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 disabled:opacity-40 disabled:hover:bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-800"
            disabled={isAtEnd}
            type="button"
            onClick={() => scrollToNeighbor(1)}
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
});
