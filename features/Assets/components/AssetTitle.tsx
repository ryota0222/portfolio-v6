import { BreadcrumbItem, Breadcrumbs, Spacer, Tab, Tabs } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

export const AssetTitle = memo(() => {
  const pathname = usePathname();
  return (
    <>
      <Breadcrumbs
        underline="always"
        separator="/"
        color="foreground"
        itemClasses={{
          separator: 'px-2',
        }}
      >
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Assets</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex flex-col sm:flex-row justify-between mt-6">
        <h1 className="font-semibold text-4xl">Assets</h1>
        <Tabs
          selectedKey={pathname}
          aria-label="change asset type"
          radius="full"
          color="secondary"
          fullWidth
          className="sm:w-auto mt-6 sm:mt-0"
          classNames={{
            tab: ' sm:min-w-[80px] text-xs sm:text-sm py-2 sm:w-fit h-auto',
          }}
        >
          <Tab key="/assets" title="All" href="/assets" />
          <Tab key="/assets/zenn" title="Zenn" href="/assets/zenn" />
          <Tab key="/assets/qiita" title="Qiita" href="/assets/qiita" />
          <Tab key="/assets/note" title="Note" href="/assets/note" />
          <Tab key="/assets/presentation" title="Presentation" href="/assets/presentation" />
        </Tabs>
      </div>
    </>
  );
});
