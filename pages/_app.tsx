import type { AppProps } from "next/app";
import localFont from "next/font/local";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import "@/styles/globals.css";
import "@splidejs/react-splide/css";

const lineSeedJP = localFont({
  src: [
    {
      path: "../fonts/LINESeedJP_OTF_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Rg.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Bd.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Eb.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        <div className={lineSeedJP.className}>
          <Component {...pageProps} />
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
