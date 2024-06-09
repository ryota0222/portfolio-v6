import { memo, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Image, Link } from '@nextui-org/react';
import NextImage from 'next/image';

import { ShirtData } from '../constants';

export const TShirtList = memo(() => {
  useEffect(() => {
    // DOMが読み込まれた後にカスタムロールを設定
    const slides = document.querySelectorAll('.splide__slide');

    slides.forEach((slide) => {
      slide.setAttribute('role', 'region');
      slide.removeAttribute('aria-roledescription'); // もし不要であれば
    });
  }, []);

  return (
    <div className="w-screen">
      <Splide
        aria-label="Tシャツ一覧"
        extensions={{ AutoScroll }}
        options={{
          type: 'loop',
          gap: '2rem',
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.8,
          },
        }}
      >
        {ShirtData.map((sticker) => (
          <SplideSlide key={sticker.id}>
            <Link href={sticker.url}>
              <div className="w-[80vw] sm:w-64 hover:-translate-y-2 transition-all pt-2">
                <Image alt="T-shirt image" as={NextImage} src={sticker.image} width={256} height={256} />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
});
