import { StickerType } from '../types';

/** 表示する順番（新しい順） */
export const STICKER_ORDER: StickerType[] = [
  StickerType.Ojibaby,
  StickerType.Usamayusan,
  StickerType.Penguin,
  StickerType.Hiyoko,
  StickerType.Emojin,
  StickerType.Otoko,
];

export const STICKER_NAME: Record<StickerType, string> = {
  [StickerType.Ojibaby]: 'おじベイビー',
  [StickerType.Usamayusan]: 'うさまゆさん',
  [StickerType.Penguin]: '飛ばないペンギン',
  [StickerType.Hiyoko]: 'ひよっこエンジニア',
  [StickerType.Emojin]: 'えもじん',
  [StickerType.Otoko]: 'まんまる おとこのこ',
};

/** LINE スタンプのストアページ */
export const STICKER_URL: Record<StickerType, string> = {
  [StickerType.Ojibaby]: 'https://line.me/S/sticker/35300061',
  [StickerType.Usamayusan]: 'https://line.me/S/sticker/26728158',
  [StickerType.Penguin]: 'https://line.me/S/sticker/22249988',
  [StickerType.Hiyoko]: 'https://line.me/S/sticker/16990783',
  [StickerType.Emojin]: 'https://line.me/S/sticker/22630605',
  [StickerType.Otoko]: 'https://line.me/S/sticker/16627181',
};

/** public/images/sticker 以下の画像フォルダ名 */
const STICKER_DIR: Record<StickerType, string> = {
  [StickerType.Ojibaby]: 'ojibaby',
  [StickerType.Usamayusan]: 'usamayusan',
  [StickerType.Penguin]: 'penguin',
  [StickerType.Hiyoko]: 'hiyoko',
  [StickerType.Emojin]: 'emojin',
  [StickerType.Otoko]: 'otoko',
};

/** 一覧のカードに出す代表スタンプ */
export const stickerMainSrc = (type: StickerType) => `/images/sticker/${STICKER_DIR[type]}/main.webp`;

/** トーク画面に並べたプレビュー */
export const stickerPreviewSrc = (type: StickerType) => `/images/sticker/${STICKER_DIR[type]}/preview.webp`;
