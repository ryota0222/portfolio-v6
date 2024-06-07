import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" prefix="og: https://ogp.me/ns#">
      <Head />
      <body className="min-h-screen bg-background antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
