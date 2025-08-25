'use client';

import React, { type CSSProperties } from 'react';
import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';

// Simplified types compatible with Next.js 15 and React 19
interface TypeAnimationProps {
  sequence: Array<string | number | (() => void)>;
  wrapper?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  speed?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  deletionSpeed?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
  cursor?: boolean;
  repeat?: number;
  omitDeletionAnimation?: boolean;
  preRenderFirstString?: boolean;
  className?: string;
  style?: CSSProperties;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
  role?: string;
}

/**
 * TypeAnimation component optimized for Next.js 15 and React 19
 * Fixed compatibility issues with App Router and React 19 type system
 */
const TypeAnimation = ({
  sequence,
  wrapper = 'span',
  speed = 50,
  deletionSpeed = 30,
  cursor = true,
  repeat = Infinity,
  className,
  style,
  ...restProps
}: TypeAnimationProps) => {
  return (
    <ReactTypeAnimation
      sequence={sequence}
      wrapper={wrapper}
      speed={speed}
      deletionSpeed={deletionSpeed}
      cursor={cursor}
      repeat={repeat}
      className={className}
      style={style}
      {...restProps}
    />
  );
};

export default TypeAnimation;