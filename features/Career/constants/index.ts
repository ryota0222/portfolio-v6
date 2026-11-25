import { siteConfig } from '@/config/site';
import { IPeriod } from '@/cores/Period';

interface ICareer {
  period: IPeriod;
  label: string;
  note?: string;
  href?: string;
}

export const CareerData: ICareer[] = [
  {
    period: { start: '2024-06', end: 'present' },
    label: 'ラズレイト株式会社',
    note: '役員',
    href: siteConfig.links.lazurate,
  },
  {
    period: { start: '2024-04', end: '2024-06' },
    label: 'フリーランス',
  },
  {
    period: { start: '2023-01', end: '2024-03' },
    label: '株式会社ニュートラル',
  },
  {
    period: { start: '2020-04', end: '2022-12' },
    label: '株式会社神戸デジタル・ラボ',
  },
  {
    period: { start: '2020-03' },
    label: '神戸大学 工学部 機械工学科 卒業',
  },
];
