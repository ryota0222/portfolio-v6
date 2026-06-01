import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './cores/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(button|navbar|image|link|tabs|breadcrumbs).js',
  ],
  theme: {
    extend: {},
  },
  // タッチ端末でhover:のズーム等が「タップ後に固定」される問題を防ぐため、
  // hover系ユーティリティを (hover: hover) 対応端末のみに限定する
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            secondary: {
              DEFAULT: '#333333',
            },
          },
        },
      },
    }),
  ],
};
