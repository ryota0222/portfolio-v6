import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PropsWithChildren, ReactNode, memo } from 'react';

import { RightUpArrowIcon } from '@/cores/icons';
import { NewTabLabel } from '@/cores/NewTabLabel';

interface Props {
  href: string;
  type: 'bordered' | 'solid';
  isExternal?: boolean;
  startContent?: ReactNode;
}

// アクセシブルネームは表示テキスト（children）から作られる。
// 補足が必要な場合は aria-label で上書きせず、children に VisuallyHidden を含める。
export const LinkButton = memo<PropsWithChildren<Props>>(({ href, type, isExternal, startContent, children }) => {
  return (
    <Button
      as={Link}
      className={`text-sm border py-4 px-6 h-auto ${type === 'solid' && 'bg-zinc-800 text-white border-zinc-300'}`}
      endContent={<RightUpArrowIcon aria-hidden="true" size={20} />}
      href={href}
      radius="full"
      rel={isExternal ? 'noopener noreferrer' : undefined}
      startContent={startContent}
      target={isExternal ? '_blank' : undefined}
      variant={type}
    >
      {children}
      {isExternal && <NewTabLabel />}
    </Button>
  );
});
