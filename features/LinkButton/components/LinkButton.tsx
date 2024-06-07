import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';

import { RightUpArrowIcon } from '@/cores/icons';

interface Props {
  href: string;
  type: 'bordered' | 'solid';
  isExternal?: boolean;
}

export const LinkButton = memo<PropsWithChildren<Props>>(({ href, type, isExternal, children }) => {
  return (
    <Button
      as={Link}
      className={`text-sm border py-4 px-6 h-auto ${type === 'solid' && 'bg-zinc-800 text-white border-zinc-300'}`}
      endContent={<RightUpArrowIcon size={20} />}
      href={href}
      radius="full"
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      variant={type}
    >
      {children}
    </Button>
  );
});
