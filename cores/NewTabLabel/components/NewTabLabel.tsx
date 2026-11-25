import { VisuallyHidden } from '@react-aria/visually-hidden';
import { memo } from 'react';

/**
 * target="_blank" のリンク内に置き、スクリーンリーダーに新しいタブで開くことを伝える。
 * 見た目には表示されない。
 */
export const NewTabLabel = memo(() => <VisuallyHidden elementType="span">（新しいタブで開きます）</VisuallyHidden>);
