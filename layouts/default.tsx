import { Head } from './head';
import { Navbar } from '@/cores/Navbar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="w-full">{children}</main>
    </div>
  );
}
