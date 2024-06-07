import * as React from 'react';

import { IconSvgProps } from '@/types';

export const RightUpArrowIcon: React.FC<IconSvgProps> = ({ size = 36, height, width, ...props }) => (
  <svg fill="none" height={size || height} role="presentation" viewBox="0 0 20 21" width={size || width} {...props}>
    <path
      d="M15.158 12.8016L15.158 5.64807L8.00443 5.64807"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
    <path
      d="M4.98908 15.506L14.9062 5.58887"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
    />
  </svg>
);

export const OpenIcon: React.FC<IconSvgProps> = ({ size = 36, height, width, ...props }) => (
  <svg fill="none" height={size || height} viewBox="0 0 16 17" width={size || width} {...props}>
    <path
      clipRule="evenodd"
      d="M10 2.5C10 2.22386 10.2239 2 10.5 2H14C14.2761 2 14.5 2.22386 14.5 2.5V6C14.5 6.27614 14.2761 6.5 14 6.5C13.7239 6.5 13.5 6.27614 13.5 6V3.70711L7.35355 9.85355C7.15829 10.0488 6.84171 10.0488 6.64645 9.85355C6.45118 9.65829 6.45118 9.34171 6.64645 9.14645L12.7929 3H10.5C10.2239 3 10 2.77614 10 2.5ZM3.25 5C3.05109 5 2.86032 5.07902 2.71967 5.21967C2.57902 5.36032 2.5 5.55109 2.5 5.75V13.25C2.5 13.4489 2.57902 13.6397 2.71967 13.7803C2.86032 13.921 3.05109 14 3.25 14H10.75C10.8485 14 10.946 13.9806 11.037 13.9429C11.128 13.9052 11.2107 13.85 11.2803 13.7803C11.35 13.7107 11.4052 13.628 11.4429 13.537C11.4806 13.446 11.5 13.3485 11.5 13.25V7.5C11.5 7.22386 11.7239 7 12 7C12.2761 7 12.5 7.22386 12.5 7.5V13.25C12.5 13.4798 12.4547 13.7074 12.3668 13.9197C12.2788 14.132 12.1499 14.3249 11.9874 14.4874C11.8249 14.6499 11.632 14.7788 11.4197 14.8668C11.2074 14.9547 10.9798 15 10.75 15H3.25C2.78587 15 2.34075 14.8156 2.01256 14.4874C1.68437 14.1592 1.5 13.7141 1.5 13.25V5.75C1.5 5.28587 1.68437 4.84075 2.01256 4.51256C2.34075 4.18437 2.78587 4 3.25 4H8.48375C8.75989 4 8.98375 4.22386 8.98375 4.5C8.98375 4.77614 8.75989 5 8.48375 5H3.25Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);
