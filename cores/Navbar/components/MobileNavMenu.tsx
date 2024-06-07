import { Link, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarMenuItem } from '@nextui-org/react';
import { memo } from 'react';

import { siteConfig } from '@/config/site';

export const MobileNavMenu = memo(() => (
  <>
    <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
      <NavbarMenuToggle />
    </NavbarContent>

    <NavbarMenu>
      <div className="mx-4 mt-2 flex flex-col gap-2">
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? 'primary' : index === siteConfig.navMenuItems.length - 1 ? 'danger' : 'foreground'}
              href="#"
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </div>
    </NavbarMenu>
  </>
));
