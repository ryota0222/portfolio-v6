import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Image,
} from "@nextui-org/react";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { memo } from "react";

export const Navbar = memo(() => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent justify="start">
        <NavbarBrand>
          <NextLink href="/">
            <Image src="/images/logo.svg" alt="logo" width={24} height={24} />
          </NextLink>
        </NavbarBrand>
        <NavbarItem className="flex gap-2 items-center">
          <span className="text-sm">Contact</span>
          <Link isExternal href={siteConfig.links.twitter}>
            <Image src="/images/x.svg" alt="logo" width={32} height={32} />
          </Link>
        </NavbarItem>
        <NavbarItem className="flex gap-2 items-center">
          <span className="text-sm">Online Talk</span>
          <Link isExternal href={siteConfig.links.pitta}>
            <Image src="/images/pitta.webp" alt="logo" width={86} height={32} />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
});
