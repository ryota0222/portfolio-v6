import { Image } from '@nextui-org/image';
import { Fragment, memo, useEffect, useMemo, useRef, useState } from 'react';
import NextImage from 'next/image';

import * as functions from '../functions';
import { PsiData, ReportData } from '../types';

import { PsiDescriptionItem } from './PsiDescriptionItem';

export const PerformanceScreen = memo(() => {
  const [fileData, setFileData] = useState<ReportData | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const f = async (): Promise<void> => {
      setFileData(await functions.getFileData());
    };

    void f();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // chartjsを動的にimport
            import('chart.js').then((chart) => {
              chart.Chart.register(chart.ArcElement);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 },
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

  const accessibilityData = useMemo(() => {
    return fileData?.lighthouseResult.accessibility;
  }, [fileData]);
  const performanceData = useMemo(() => {
    return fileData?.lighthouseResult.performance;
  }, [fileData]);
  const seoData = useMemo(() => {
    return fileData?.lighthouseResult.seo;
  }, [fileData]);

  const psiDataList = useMemo(() => {
    return [
      {
        title: 'Accessibility',
        score: accessibilityData?.score,
        description:
          'Evaluates how accessible the content is to users with disabilities. It checks for elements like color contrast, alt text for images, and keyboard navigation.',
      },
      {
        title: 'Performance',
        score: performanceData?.score,
        description:
          'Measures how quickly the page loads and becomes interactive. Key metrics include loading speed, responsiveness, and visual stability.',
      },
      {
        title: 'SEO',
        score: seoData?.score,
        description:
          'Assesses the page’s optimization for search engines. It looks at factors like meta tags, mobile-friendliness, and URL structure to ensure better search visibility.',
      },
    ] as PsiData[];
  }, [accessibilityData, performanceData, seoData]);

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center max-w-2xl mx-auto">
      <Image alt="icon" as={NextImage} height={96} loading="lazy" src="/images/peformance-icon.png" width={96} />
      <h2 className="text-4xl text-white mt-2 mb-8">Performance</h2>
      <p className="text-zinc-300">Using PageSpeed Insights, we measured the performance.</p>
      {isVisible && (
        <div className="my-12 flex flex-col gap-16">
          {psiDataList.map((data) => (
            <Fragment key={data.title}>
              <PsiDescriptionItem data={data} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
});
