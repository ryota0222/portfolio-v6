import dynamic from 'next/dynamic';

import { EngineerSection } from '@/features/EngineerSection';
import { FirstView } from '@/features/FirstView';
import DefaultLayout from '@/layouts/default';

// Dynamic import
const AboutPortfolioSection = dynamic(
  () => import('@/features/AboutPortfolioSection').then((mod) => mod.AboutPortfolioSection),
  {
    ssr: false,
    loading: () => <></>,
  },
);

const HobbySection = dynamic(() => import('@/features/HobbySection').then((mod) => mod.HobbySection), {
  ssr: false,
  loading: () => <></>,
});

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="container mx-auto max-w-5xl px-6 flex-grow h-[80svh]">
        <FirstView />
      </section>
      <section className="container mx-auto max-w-5xl px-6 flex-grow">
        <EngineerSection />
      </section>
      <section className="w-full sm:mt-48 mt-32">
        <HobbySection />
      </section>
      <AboutPortfolioSection />
    </DefaultLayout>
  );
}
