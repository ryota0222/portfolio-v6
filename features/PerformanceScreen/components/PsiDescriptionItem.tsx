import { memo, useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { PsiData } from '../types';
import * as functions from '../functions';

interface Props {
  data: PsiData;
}

export const PsiDescriptionItem = memo<Props>(({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
      // 10%が表示されたときにトリガー
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full py-4 flex justify-center gap-10 flex-col sm:flex-row items-center sm:items-start"
    >
      <div className="h-32 w-32 relative">
        {isVisible && (
          <>
            <Doughnut data={functions.getChartData(data.score ?? 0)} />
            <span className="text-white text-lg absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-25%]">
              {(data.score || 0) * 100}
            </span>
          </>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="text-white text-xl font-semibold">{data.title}</h3>
        <p className="text-zinc-300">{data.description}</p>
      </div>
    </div>
  );
});
