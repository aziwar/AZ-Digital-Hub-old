'use client';

import type { CSSProperties } from 'react';
import { TypeAnimation as ReactTypeAnimation } from 'react-type-animation';

// Type definitions based on react-type-animation's expected types
type Wrapper = string;
type Speed = number | { type: 'keyStrokeDelayInMs'; value: number };
type Sequence = Array<string | number | ((element: HTMLElement | null) => void | Promise<void>)>;

interface TypeAnimationProps {
  /**
   * Animation sequence
   * Can be an array of strings/numbers or a generator function
   */
  sequence: Sequence | (() => Generator<Sequence[number], void, unknown>);
  
  /**
   * HTML tag to be used as wrapper
   * @default 'div'
   */
  wrapper?: Wrapper;
  
  /**
   * Animation speed in milliseconds or configuration object
   * @default 50
   */
  speed?: Speed;
  
  /**
   * Deletion speed in milliseconds or configuration object
   * @default 30
   */
  deletionSpeed?: Speed;
  
  /** Show cursor */
  cursor?: boolean;
  
  /** Number of times to repeat the animation */
  repeat?: number;
  
  /** Skip the deletion animation */
  omitDeletionAnimation?: boolean;
  
  /** Pre-render the first string */
  preRenderFirstString?: boolean;
  
  /** Additional class name for the wrapper div */
  className?: string;
  
  /** Inline styles for the wrapper div */
  style?: CSSProperties;
  
  /** ARIA label for accessibility */
  'aria-label'?: string;
  
  /** ARIA hidden flag */
  'aria-hidden'?: boolean;
  
  /** ARIA role */
  role?: string;
  
  /** Splitter function for text */
  splitter?: (str: string) => string[];
}

/**
 * A wrapper around react-type-animation with proper TypeScript types
 * 
 * @example
 * ```tsx
 * <TypeAnimation
 *   sequence={['Hello', 1000, 'World', 1000]}
 *   wrapper="h1"
 *   speed={50}
 *   repeat={Infinity}
 * />
 * ```
 */
const TypeAnimation = ({
  className,
  style,
  sequence,
  wrapper = 'div',
  speed = 50,
  deletionSpeed = 30,
  ...props
}: TypeAnimationProps) => {
  // Type assertions to handle the react-type-animation component's expected types
  const animationProps = {
    sequence: sequence as any,
    wrapper: wrapper as any,
    speed: speed as any,
    deletionSpeed: deletionSpeed as any,
    ...props
  };

  return (
    <div className={className} style={style}>
      <ReactTypeAnimation {...animationProps} />
    </div>
  );
};

export default TypeAnimation;
