'use client';

import { Link } from '@nextui-org/link';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import NextImage from 'next/image';

import { TypingMessage } from './TypingMessage';

import { siteConfig } from '@/config/site';
import { NewTabLabel } from '@/cores/NewTabLabel';
import { MESSAGE_READ_PAUSE, PROFILE_MESSAGES } from '@/features/FirstView/constants';

const SOCIAL_LINKS = [
  { name: 'X', href: siteConfig.links.twitter, src: '/images/x.svg', size: 36 },
  { name: 'GitHub', href: siteConfig.links.github, src: '/images/github.svg', size: 40 },
  { name: 'Zenn', href: siteConfig.links.zenn, src: '/images/zenn.svg', size: 40 },
  { name: 'Qiita', href: siteConfig.links.qiita, src: '/images/qiita.png', size: 40 },
  { name: 'note', href: siteConfig.links.note, src: '/images/note.svg', size: 36 },
] as const;

export const FirstView = memo(() => {
  const [messageIndex, setMessageIndex] = useState(0);
  const pauseTimer = useRef<ReturnType<typeof setTimeout>>();
  const shouldReduceMotion = useReducedMotion();

  const goToNextMessage = useCallback(() => {
    setMessageIndex((prev) => (prev + 1) % PROFILE_MESSAGES.length);
  }, []);

  // 1メッセージを打ち終わったら、少し読む間を置いてから次の文へ進む。
  // モーション過敏設定の場合は自動では切り替えず、クリックしたときだけ進める。
  const handleTypingComplete = useCallback(() => {
    clearTimeout(pauseTimer.current);
    if (shouldReduceMotion) return;
    pauseTimer.current = setTimeout(goToNextMessage, MESSAGE_READ_PAUSE);
  }, [goToNextMessage, shouldReduceMotion]);

  // ペンギンをクリックしたら待ち時間を飛ばして即座に次の文へ。
  const handleClick = useCallback(() => {
    clearTimeout(pauseTimer.current);
    goToNextMessage();
  }, [goToNextMessage]);

  useEffect(() => () => clearTimeout(pauseTimer.current), []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex min-h-[3em] items-end justify-center px-4 w-full max-w-[360px] sm:max-w-[540px] mb-3">
        <TypingMessage key={messageIndex} text={PROFILE_MESSAGES[messageIndex]} onComplete={handleTypingComplete} />
      </div>
      <button
        aria-label="自己紹介メッセージを切り替える"
        className="cursor-pointer rounded-full"
        type="button"
        onClick={handleClick}
      >
        <NextImage
          priority
          alt=""
          className="sm:w-[240px] sm:h-[240px] w-[160px] h-[160px] rounded-full"
          height={160}
          quality={50}
          sizes="(max-width: 768px) 160px, 240px"
          src="/images/icon.png"
          width={160}
        />
      </button>
      <h1 className="font-semibold text-[32px] sm:text-[40px] mt-8 mb-4">RyoTa.</h1>
      <p className="text-zinc-600 text-sm sm:text-md">Design Engineer from 2020.</p>
      <ul className="flex gap-6 sm:gap-10 mt-10 sm:mt-8" role="list">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.name} className="flex items-center">
            <Link isExternal className="group" href={link.href}>
              <NextImage
                priority
                alt={link.name}
                className="motion-safe:transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-safe:group-hover:-rotate-[8deg] motion-safe:group-hover:-translate-y-1"
                height={link.size}
                src={link.src}
                width={link.size}
              />
              <NewTabLabel />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
