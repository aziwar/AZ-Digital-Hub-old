'use client';

import Image from 'next/image';
import { imageConfig } from '@/lib/images.config';

export function LinkedInProfileImage({ className = '', width = 400, height = 400 }: {
  className?: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={imageConfig.profile.profileImage}
        alt="Ahmed Ziwar - Digital Marketing Expert"
        width={width}
        height={height}
        className="rounded-full object-cover"
        priority
      />
    </div>
  );
}