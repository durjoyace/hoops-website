'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-conic from-orange-primary/20 via-transparent to-purple-accent/20"
            />
          </div>

          {/* Basketball animation */}
          <div className="relative mb-12">
            <motion.div
              animate={{
                y: [0, -60, 0],
                rotateX: [0, 360],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: [0.5, 0, 0.5, 1],
              }}
              className="relative"
            >
              {/* Basketball */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden shadow-2xl">
                {/* Basketball seams - horizontal center line */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[3px] bg-black/40" />
                </div>
                {/* Vertical center line */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[3px] h-full bg-black/40" />
                </div>
                {/* Left curved seam */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M 30 10 Q 15 50 30 90"
                    fill="none"
                    stroke="rgba(0,0,0,0.4)"
                    strokeWidth="3"
                  />
                </svg>
                {/* Right curved seam */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M 70 10 Q 85 50 70 90"
                    fill="none"
                    stroke="rgba(0,0,0,0.4)"
                    strokeWidth="3"
                  />
                </svg>
                {/* Pebbled texture effect */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 1px, transparent 1px)',
                    backgroundSize: '6px 6px',
                  }}
                />
                {/* Shine effect */}
                <motion.div
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </div>
            </motion.div>

            {/* Shadow */}
            <motion.div
              animate={{
                scale: [1, 0.6, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: [0.5, 0, 0.5, 1],
              }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-orange-primary/30 rounded-full blur-md"
            />
          </div>

          {/* Logo text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-display text-white mb-2">
              HOOPS CREATING HOPE
            </h1>
            <p className="text-gray-400 text-sm tracking-widest uppercase">
              Changing Lives Through Basketball
            </p>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64">
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="h-full bg-gradient-to-r from-orange-primary to-orange-light"
              />
            </div>
            <p className="text-center text-gray-500 text-xs mt-3 font-mono">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
