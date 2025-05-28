'use client'

import type { CSSProperties } from 'react';
import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';

type Wrapper = 'p' | 'span' | 'strong' | 'em' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'b' | 'i';

interface TypeAnimationProps {
  className?: string;
  style?: CSSProperties;
  sequence: (string | number)[];
  wrapper?: Wrapper;
  speed?: number | { type: 'keyStrokeDelayInMs'; value: number };
  deletionSpeed?: number | { type: 'keyStrokeDelayInMs'; value: number };
  cursor?: boolean;
  repeat?: number;
  omitDeletionAnimation?: boolean;
  preRenderFirstString?: boolean;
}

// Simple wrapper for the TypeAnimation component
export default function TypeAnimation(props: TypeAnimationProps) {
  const {
    className,
    style,
    sequence,
    wrapper = 'span',
    speed = 50,
    deletionSpeed = 30,
    cursor = true,
    repeat = Infinity,
    omitDeletionAnimation = false,
    preRenderFirstString = false,
  } = props;

  return (
    <div className={className} style={style}>
      <ReactTypeAnimation
        sequence={sequence}
        wrapper={wrapper}
        speed={speed}
        deletionSpeed={deletionSpeed}
        cursor={cursor}
        repeat={repeat}
        omitDeletionAnimation={omitDeletionAnimation}
        preRenderFirstString={preRenderFirstString}
      />
    </div>
  );
}
