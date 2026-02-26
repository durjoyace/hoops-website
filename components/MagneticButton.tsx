'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useCallback, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = rectRef.current;
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }, [x, y, strength]);

  const handleMouseLeave = useCallback(() => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  }, [x, y]);

  const Component = href ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        target={href ? '_blank' : undefined}
        rel={href ? 'noopener noreferrer' : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative overflow-hidden group ${className}`}
      >
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-0 bg-gradient-to-r from-orange-primary to-orange-light blur-xl opacity-50" />
        </span>
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  );
}
