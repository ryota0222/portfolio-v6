import { memo } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { Link } from '@nextui-org/react';

import { ShirtData } from '../constants';

export const TShirtList = memo(() => {
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
                <img alt="Tシャツの画像" src={sticker.image} />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
});
