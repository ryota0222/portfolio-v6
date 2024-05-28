import { title, subtitle } from "@/cores/primitives";
import { FirstView } from "@/features/FirstView";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="container mx-auto max-w-5xl px-6 flex-grow h-[80svh]">
        <FirstView />
      </section>
    </DefaultLayout>
  );
}
