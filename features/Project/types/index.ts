import { IPeriod } from '@/cores/Period';

export interface ITech {
  name: string;
  /** アイコン画像。対応するアイコンがない技術は名前だけを表示する */
  image?: string;
}

export interface IProjectItem {
  title: string;
  period: IPeriod;
  /** 担当した領域 */
  tags: string[];
  description: string;
  /** 主な使用技術 */
  techs?: ITech[];
}
