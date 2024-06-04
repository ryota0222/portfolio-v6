import { RightUpArrowIcon } from '@/cores/icons';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PropsWithChildren, memo } from 'react';

interface Props {
  href: string;
  type: 'bordered' | 'solid';
  isExternal?: boolean;
}

export const LinkButton = memo<PropsWithChildren<Props>>(({ href, type, isExternal, children }) => {
  return (
    <Button
      variant={type}
      radius="full"
      endContent={<RightUpArrowIcon size={20} />}
      className={`text-sm border py-4 px-6 h-auto ${type === 'solid' && 'bg-zinc-800 text-white border-zinc-300'}`}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      href={href}
      as={Link}
    >
      {children}
    </Button>
  );
});
