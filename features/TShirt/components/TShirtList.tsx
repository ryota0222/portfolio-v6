import { memo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Link from "next/link";

import { ShirtData } from "../constants";

export const TShirtList = memo(() => {
  return (
    <div className="w-screen">
      <Splide
        aria-label="Tシャツ一覧"
        options={{
          type: "loop",
          gap: "2rem",
          autoWidth: true,
          arrows: false,
          pagination: false,
          pauseOnHover: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: false,
            speed: 0.5,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {ShirtData.map((sticker) => (
          <SplideSlide key={sticker.id}>
            <Link href={sticker.url} target="_blank" rel="noopener noreferrer">
              <div className="w-[80vw] sm:w-64 hover:-translate-y-2 transition-all">
                <img src={sticker.image} alt="Tシャツの画像" />
              </div>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
});
