import { title, subtitle } from "@/cores/primitives";
import { EngineerSection } from "@/features/EngineerSection";
import { FirstView } from "@/features/FirstView";
import { HobbySection } from "@/features/HobbySection";
import DefaultLayout from "@/layouts/default";
import { Image } from "@nextui-org/react";

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
      <Image
        src="/images/dark-gradient.png"
        alt="dark gradient"
        role="presentation"
        className="w-full"
        radius="none"
      />
      <div className="py-24 bg-zinc-800"></div>
    </DefaultLayout>
  );
}
