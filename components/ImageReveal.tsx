'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  containerClassName = '',
  direction = 'left',
  delay = 0,
  duration = 0.8,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitialClip = () => {
    switch (direction) {
      case 'left':
        return 'inset(0 100% 0 0)';
      case 'right':
        return 'inset(0 0 0 100%)';
      case 'up':
        return 'inset(100% 0 0 0)';
      case 'down':
        return 'inset(0 0 100% 0)';
      default:
        return 'inset(0 100% 0 0)';
    }
  };

  const getOverlayTransform = () => {
    switch (direction) {
      case 'left':
        return { x: ['0%', '100%'] };
      case 'right':
        return { x: ['0%', '-100%'] };
      case 'up':
        return { y: ['0%', '-100%'] };
      case 'down':
        return { y: ['0%', '100%'] };
      default:
        return { x: ['0%', '100%'] };
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${containerClassName}`}>
      {/* Image with clip animation */}
      <motion.div
        initial={{ clipPath: getInitialClip() }}
        animate={isInView ? { clipPath: 'inset(0 0 0 0)' } : {}}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="relative w-full h-full"
      >
        {fill ? (
          <Image src={src} alt={alt} fill className={`object-cover ${className}`} />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
          />
        )}
      </motion.div>

      {/* Color overlay that slides away */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={isInView ? getOverlayTransform() : {}}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute inset-0 bg-gradient-to-br from-orange-primary to-purple-accent z-10"
      />
    </div>
  );
}

// Simple wrapper that reveals children with clip-path
interface RevealWrapperProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
}

export function RevealWrapper({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.8,
  className = '',
}: RevealWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitialClip = () => {
    switch (direction) {
      case 'left':
        return 'inset(0 100% 0 0)';
      case 'right':
        return 'inset(0 0 0 100%)';
      case 'up':
        return 'inset(100% 0 0 0)';
      case 'down':
        return 'inset(0 0 100% 0)';
      default:
        return 'inset(0 100% 0 0)';
    }
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: getInitialClip() }}
        animate={isInView ? { clipPath: 'inset(0 0 0 0)' } : {}}
        transition={{
          duration,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Parallax image with depth effect
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
}

export function ParallaxImage({
  src,
  alt,
  speed = 0.5,
  className = '',
}: ParallaxImageProps) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      initial={{ scale: 1.2 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        style={{ y: 0 }}
        whileInView={{ y: `-${speed * 20}%` }}
        viewport={{ once: false, amount: 'some' }}
        transition={{ duration: 0 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-125"
        />
      </motion.div>
    </motion.div>
  );
}

// Image with hover zoom
export function ZoomImage({
  src,
  alt,
  className = '',
  containerClassName = '',
}: {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden group ${containerClassName}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full h-full"
      >
        <Image src={src} alt={alt} fill className={`object-cover ${className}`} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
