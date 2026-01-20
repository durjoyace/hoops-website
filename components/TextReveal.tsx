'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  once = true,
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface SplitTextProps {
  text: string;
  className?: string;
  charClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function SplitText({
  text,
  className = '',
  charClassName = '',
  delay = 0,
  stagger = 0.03,
  once = true,
}: SplitTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => {
            const totalIndex =
              words.slice(0, wordIndex).join(' ').length + charIndex + wordIndex;
            return (
              <motion.span
                key={charIndex}
                initial={{ y: 50, opacity: 0, rotateX: -90 }}
                animate={
                  isInView
                    ? { y: 0, opacity: 1, rotateX: 0 }
                    : { y: 50, opacity: 0, rotateX: -90 }
                }
                transition={{
                  duration: 0.5,
                  delay: delay + totalIndex * stagger,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className={`inline-block ${charClassName}`}
                style={{ transformOrigin: 'bottom' }}
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}

export function WordReveal({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.1,
  once = true,
}: WordRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            initial={{ y: '100%' }}
            animate={isInView ? { y: 0 } : { y: '100%' }}
            transition={{
              duration: 0.5,
              delay: delay + index * stagger,
              ease: [0.33, 1, 0.68, 1],
            }}
            className={`inline-block ${wordClassName}`}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
