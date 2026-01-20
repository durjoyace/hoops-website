'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
}

export default function ParticleField({ count = 50, className = '' }: ParticleFieldProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export function FloatingBasketballs({ count = 8 }: { count?: number }) {
  const balls = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balls.map((ball) => (
        <motion.div
          key={ball.id}
          className="absolute"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: ball.size,
            height: ball.size,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
            rotate: [ball.rotation, ball.rotation + 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: ball.duration,
            delay: ball.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Mini basketball */}
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/30 to-orange-700/30 border border-orange-500/20 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-black/20" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[2px] h-full bg-black/20" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orb 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-orange-primary/30 to-transparent rounded-full blur-3xl"
      />

      {/* Large gradient orb 2 */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-purple-accent/30 to-transparent rounded-full blur-3xl"
      />

      {/* Medium orb */}
      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-gradient-radial from-orange-light/20 to-transparent rounded-full blur-2xl"
      />
    </div>
  );
}
