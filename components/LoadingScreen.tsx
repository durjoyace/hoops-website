'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dismiss after a short delay — just enough for the page to hydrate
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* Basketball animation */}
          <div className="relative mb-12">
            <motion.div
              animate={{ y: [0, -40, 0] }}
              transition={{
                duration: 0.6,
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
              animate={{ scale: [1, 0.6, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                ease: [0.5, 0, 0.5, 1],
              }}
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-orange-primary/30 rounded-full blur-md"
            />
          </div>

          {/* Logo text */}
          <div className="text-center relative z-10">
            <h1 className="text-3xl md:text-4xl font-display text-white mb-2">
              HOOPS CREATING HOPE
            </h1>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Changing Lives Through Basketball
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
