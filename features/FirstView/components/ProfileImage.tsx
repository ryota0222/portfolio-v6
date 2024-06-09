import { memo } from 'react';
import NextImage from 'next/image';

export const ProfileImage = memo(() => {
  return (
    <NextImage
      priority
      alt="profile image"
      className="sm:w-[240px] sm:h-[240px] w-[160px] h-[160px] rounded-full"
      height={240}
      src="/images/profile.webp"
      width={240}
    />
  );
});
