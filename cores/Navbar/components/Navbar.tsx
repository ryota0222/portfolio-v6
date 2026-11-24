'use client';

import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { memo } from 'react';

import { siteConfig } from '@/config/site';
import { NewTabLabel } from '@/cores/NewTabLabel';
import { prefersReducedMotion } from '@/libs/prefersReducedMotion';

export const Navbar = memo(() => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <NextUINavbar isBlurred={false} maxWidth="xl" position="sticky">
      <NavbarContent as="div" justify="start">
        <NavbarBrand>
          <NextLink aria-label="ページ上部へ戻る" href="/" onClick={handleLogoClick}>
            <NextImage priority alt="" height={24} src="/images/logo.svg" width={24} />
          </NextLink>
        </NavbarBrand>
        <NavbarItem as="div">
          <Link
            isExternal
            className="flex gap-2 items-center text-sm"
            color="foreground"
            href={siteConfig.links.twitter}
          >
            <span>Contact</span>
            <NextImage priority alt="X" height={32} src="/images/x.svg" width={32} />
            <NewTabLabel />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
});
