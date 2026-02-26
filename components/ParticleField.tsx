'use client';

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

export default function ParticleField({ count = 12, className = '' }: ParticleFieldProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-white animate-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingBasketballs({ count = 3 }: { count?: number }) {
  const balls = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 20,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute animate-float-gentle"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: ball.size,
            height: ball.size,
            animationDuration: `${ball.duration}s`,
            animationDelay: `${ball.delay}s`,
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500/20 to-orange-700/20 border border-orange-500/10 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[2px] bg-black/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[2px] h-full bg-black/10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-orange-primary/20 to-transparent rounded-full blur-3xl animate-float-gentle" style={{ animationDuration: '20s' }} />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-purple-accent/20 to-transparent rounded-full blur-3xl animate-float-gentle" style={{ animationDuration: '25s', animationDelay: '5s' }} />
    </div>
  );
}
