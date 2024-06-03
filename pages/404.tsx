import { LinkButton } from '@/features/LinkButton';
import DefaultLayout from '@/layouts/default';

export default function Custom404() {
  return (
    <DefaultLayout>
      <div className="w-full flex flex-col items-center justify-center full-height-without-header">
        <span className="text-2xl font-semibold gradient-text">404</span>
        <h1 className="text-4xl font-semibold mt-6 mb-[160px]">Page Not Found</h1>
        <LinkButton href="/" type="solid">
          Return to Home Page
        </LinkButton>
      </div>
    </DefaultLayout>
  );
}
