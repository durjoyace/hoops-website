'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(10px)',
  },
  enter: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: 'blur(10px)',
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Slide transition overlay
const slideVariants = {
  initial: {
    scaleY: 1,
  },
  animate: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Page content */}
        <motion.div
          initial="initial"
          animate="enter"
          exit="exit"
          variants={pageVariants}
        >
          {children}
        </motion.div>

        {/* Slide overlay */}
        <motion.div
          className="fixed inset-0 z-[100] bg-gradient-to-b from-orange-primary to-purple-accent origin-bottom pointer-events-none"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={slideVariants}
        />
      </motion.div>
    </AnimatePresence>
  );
}

// Stagger children animation wrapper
export function StaggerContainer({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: delay,
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item
export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
