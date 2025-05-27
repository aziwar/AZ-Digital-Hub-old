'use client'

import type { CSSProperties } from 'react';
import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';

// Simple wrapper for the TypeAnimation component
export default function TypeAnimation(props: {
  className?: string;
  style?: CSSProperties;
  sequence: (string | number)[];
  [key: string]: unknown;
}) {
  return (
    <div className={props.className} style={props.style}>
      {/* @ts-expect-error - Suppressing type errors for the library component */}
      <ReactTypeAnimation
        sequence={props.sequence}
        wrapper={props.wrapper || 'span'}
        speed={props.speed || 50}
        deletionSpeed={props.deletionSpeed || 30}
        cursor={props.cursor !== false}
        repeat={props.repeat || Infinity}
        omitDeletionAnimation={props.omitDeletionAnimation || false}
        preRenderFirstString={props.preRenderFirstString || false}
      />
    </div>
  );
}
