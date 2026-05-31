'use client';

import { Link } from '@nextui-org/link';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import NextImage from 'next/image';

import { TypingMessage } from './TypingMessage';

import { siteConfig } from '@/config/site';
import { MESSAGE_READ_PAUSE, PROFILE_MESSAGES } from '@/features/FirstView/constants';

export const FirstView = memo(() => {
  const [messageIndex, setMessageIndex] = useState(0);
  const pauseTimer = useRef<ReturnType<typeof setTimeout>>();

  const goToNextMessage = useCallback(() => {
    setMessageIndex((prev) => (prev + 1) % PROFILE_MESSAGES.length);
  }, []);

  // 1メッセージを打ち終わったら、少し読む間を置いてから次の文へ進む。
  const handleTypingComplete = useCallback(() => {
    clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(goToNextMessage, MESSAGE_READ_PAUSE);
  }, [goToNextMessage]);

  // ペンギンをクリックしたら待ち時間を飛ばして即座に次の文へ。
  const handleClick = useCallback(() => {
    clearTimeout(pauseTimer.current);
    goToNextMessage();
  }, [goToNextMessage]);

  useEffect(() => () => clearTimeout(pauseTimer.current), []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex min-h-[3em] items-end justify-center px-4 w-full max-w-[320px] sm:max-w-[420px] mb-3">
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
          alt="profile image"
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
      <div className="flex gap-6 sm:gap-10 mt-10 sm:mt-8">
        <Link isExternal className="group" href={siteConfig.links.twitter}>
          <NextImage
            priority
            alt="logo"
            className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            height={36}
            src="/images/x.svg"
            width={36}
          />
        </Link>
        <Link isExternal className="group" href={siteConfig.links.github}>
          <NextImage
            priority
            alt="logo"
            className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            height={40}
            src="/images/github.svg"
            width={40}
          />
        </Link>
        <Link isExternal className="group" href={siteConfig.links.zenn}>
          <NextImage
            priority
            alt="logo"
            className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            height={40}
            src="/images/zenn.svg"
            width={40}
          />
        </Link>
        <Link isExternal className="group" href={siteConfig.links.qiita}>
          <NextImage
            priority
            alt="logo"
            className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            height={40}
            src="/images/qiita.png"
            width={40}
          />
        </Link>
        <Link isExternal className="group" href={siteConfig.links.note}>
          <NextImage
            priority
            alt="logo"
            className="transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-[8deg] group-hover:-translate-y-1"
            height={36}
            src="/images/note.svg"
            width={36}
          />
        </Link>
      </div>
    </div>
  );
});
