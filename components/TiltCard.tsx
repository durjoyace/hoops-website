'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareEnabled?: boolean;
  tiltAmount?: number;
}

export default function TiltCard({
  children,
  className = '',
  glareEnabled = true,
  tiltAmount = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [tiltAmount, -tiltAmount]);
  const rotateY = useTransform(xSpring, [0, 1], [-tiltAmount, tiltAmount]);

  const glareX = useTransform(xSpring, [0, 1], ['-100%', '200%']);
  const glareOpacity = useTransform(
    [xSpring, ySpring],
    ([latestX, latestY]: number[]) => {
      const distance = Math.sqrt(
        Math.pow(latestX - 0.5, 2) + Math.pow(latestY - 0.5, 2)
      );
      return Math.min(distance * 0.5, 0.15);
    }
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit overflow-hidden"
          style={{ opacity: glareOpacity }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent"
            style={{ x: glareX }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
