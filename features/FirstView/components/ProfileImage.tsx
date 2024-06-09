import { memo } from 'react';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';

export const ProfileImage = memo(() => {
  return (
    <Image
      priority
      alt="profile image"
      as={NextImage}
      className="sm:w-[240px] sm:h-[240px] w-[160px] h-[160px]"
      height={240}
      radius="full"
      src="/images/profile.webp"
      width={240}
    />
  );
});
