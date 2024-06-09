import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { memo } from 'react';

import { siteConfig } from '@/config/site';

export const Navbar = memo(() => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent as="div" justify="start">
        <NavbarBrand>
          <NextLink href="/">
            <NextImage priority alt="logo" height={24} src="/images/logo.svg" width={24} />
          </NextLink>
        </NavbarBrand>
        <NavbarItem as="div" className="flex gap-2 items-center">
          <span className="text-sm">Contact</span>
          <Link isExternal href={siteConfig.links.twitter}>
            <NextImage priority alt="logo" height={32} src="/images/x.svg" width={32} />
          </Link>
        </NavbarItem>
        <NavbarItem as="div" className="flex gap-2 items-center">
          <span className="text-sm">Online Talk</span>
          <Link isExternal href={siteConfig.links.pitta}>
            <NextImage priority alt="logo" height={32} src="/images/pitta.webp" width={86} />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
});
