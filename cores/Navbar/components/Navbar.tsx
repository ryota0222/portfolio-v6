'use client';

import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { memo } from 'react';

import { siteConfig } from '@/config/site';

export const Navbar = memo(() => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NextUINavbar isBlurred={false} maxWidth="xl" position="sticky">
      <NavbarContent as="div" justify="start">
        <NavbarBrand>
          <NextLink aria-label="ページ上部へ戻る" href="/" onClick={handleLogoClick}>
            <NextImage priority alt="logo" height={24} src="/images/logo.svg" width={24} />
          </NextLink>
        </NavbarBrand>
        <NavbarItem as="div" className="flex gap-2 items-center">
          <span className="text-sm">Contact</span>
          <Link isExternal href={siteConfig.links.twitter}>
            <NextImage priority alt="logo" height={32} src="/images/x.svg" width={32} />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
});
