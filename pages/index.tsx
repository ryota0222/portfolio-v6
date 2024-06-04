import { EngineerSection } from '@/features/EngineerSection';
import { FirstView } from '@/features/FirstView';
import { HobbySection } from '@/features/HobbySection';
import DefaultLayout from '@/layouts/default';
import { AboutPortfolioSection } from '@/features/AboutPortfolioSection';

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
