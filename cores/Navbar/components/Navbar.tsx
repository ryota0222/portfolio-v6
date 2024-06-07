import { Link, Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem, Image } from '@nextui-org/react';
import NextLink from 'next/link';
import { memo } from 'react';

import { siteConfig } from '@/config/site';

export const Navbar = memo(() => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/">
            <Image alt="logo" height={24} src="/images/logo.svg" width={24} />
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="flex gap-2 items-center">
          <span className="text-sm">Contact</span>
          <Link isExternal href={siteConfig.links.twitter}>
            <Image alt="logo" height={32} src="/images/x.svg" width={32} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex gap-2 items-center">
          <span className="text-sm">Online Talk</span>
          <Link isExternal href={siteConfig.links.pitta}>
            <Image alt="logo" height={32} src="/images/pitta.webp" width={86} />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
});
