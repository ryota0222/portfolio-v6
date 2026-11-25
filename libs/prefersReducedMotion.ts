/**
 * OS の「視差効果を減らす／アニメーションを減らす」設定が有効かを返す。
 * React の外（chart.js の設定や window.scrollTo など）で使う。
 */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
