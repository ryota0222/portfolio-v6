import DefaultLayout from '@/layouts/default';
import { AssetList } from '@/features/Assets';
import { SharePortfolioSection } from '@/features/SharePortfolioSection';

export default function AssetsAllPage() {
  return (
    <DefaultLayout>
      <div className="pb-40">
        <section className="container mx-auto max-w-5xl px-6 flex-grow">
          <AssetList />
        </section>
        <SharePortfolioSection isLast={false} />
      </div>
    </DefaultLayout>
  );
}
