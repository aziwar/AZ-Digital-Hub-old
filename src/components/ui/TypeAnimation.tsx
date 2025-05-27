'use client'

import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';

// Simple wrapper that handles the TypeAnimation component
export default function TypeAnimation(props: any) {
  return (
    <div className={props.className} style={props.style}>
      <ReactTypeAnimation
        sequence={props.sequence}
        wrapper={props.wrapper || 'span'}
        speed={typeof props.speed === 'number' ? props.speed : 50}
        deletionSpeed={typeof props.deletionSpeed === 'number' ? props.deletionSpeed : 30}
        cursor={props.cursor !== false}
        repeat={props.repeat || Infinity}
        omitDeletionAnimation={props.omitDeletionAnimation || false}
        preRenderFirstString={props.preRenderFirstString || false}
      />
    </div>
  );
}
