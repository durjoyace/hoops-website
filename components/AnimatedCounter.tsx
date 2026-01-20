'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
  once = true,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    mass: 1,
    stiffness: 75,
    damping: 15,
    duration: duration * 1000,
  });

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    const unsubscribe = display.on('change', (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [display]);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {displayValue}
      </motion.span>
      {suffix}
    </span>
  );
}

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export function AnimatedStat({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2,
  delay = 0,
}: AnimatedStatProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/10 to-purple-accent/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative glass border border-orange-primary/20 rounded-3xl p-8 text-center hover:border-orange-primary/50 transition-all duration-300 hover:-translate-y-2">
        <div className="text-6xl md:text-7xl font-display gradient-text mb-3">
          <AnimatedCounter
            value={value}
            suffix={suffix}
            prefix={prefix}
            duration={duration}
          />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          className="text-gray-400 font-semibold uppercase tracking-wider text-sm"
        >
          {label}
        </motion.p>
      </div>
    </motion.div>
  );
}
