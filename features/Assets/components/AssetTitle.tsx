import { Tab, Tabs } from '@nextui-org/tabs';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/breadcrumbs';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

export const AssetTitle = memo(() => {
  const pathname = usePathname();

  return (
    <>
      <Breadcrumbs
        color="foreground"
        itemClasses={{
          separator: 'px-2',
        }}
        separator="/"
        underline="always"
      >
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Assets</BreadcrumbItem>
      </Breadcrumbs>
      <div className="flex flex-col sm:flex-row justify-between mt-6">
        <h1 className="font-semibold text-4xl">Assets</h1>
        <Tabs
          fullWidth
          aria-label="change asset type"
          className="sm:w-auto mt-6 sm:mt-0"
          classNames={{
            tab: ' sm:min-w-[80px] text-xs sm:text-sm py-2 sm:w-fit h-auto',
          }}
          color="secondary"
          radius="full"
          selectedKey={pathname}
        >
          <Tab key="/assets" href="/assets" title="All" />
          <Tab key="/assets/zenn" href="/assets/zenn" title="Zenn" />
          <Tab key="/assets/qiita" href="/assets/qiita" title="Qiita" />
          <Tab key="/assets/note" href="/assets/note" title="Note" />
          <Tab key="/assets/presentation" href="/assets/presentation" title="Presentation" />
        </Tabs>
      </div>
    </>
  );
});
