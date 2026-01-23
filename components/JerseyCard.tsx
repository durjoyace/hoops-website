'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface JerseyCardProps {
  number: string | number;
  title: string;
  description?: string;
  color?: 'orange' | 'purple' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

/**
 * JerseyCard - A basketball jersey-styled card component
 * Used for Theory of Change steps, Impact categories, milestones, etc.
 */
export default function JerseyCard({
  number,
  title,
  description,
  color = 'orange',
  size = 'md',
  className,
  onClick,
}: JerseyCardProps) {
  const colorClasses = {
    orange: 'from-orange-primary to-orange-light',
    purple: 'from-purple-accent to-pink-500',
    gradient: 'from-orange-primary via-orange-light to-purple-accent',
  };

  const sizeClasses = {
    sm: 'w-32 h-40',
    md: 'w-40 h-52',
    lg: 'w-48 h-64',
  };

  const numberSizes = {
    sm: 'text-4xl',
    md: 'text-5xl',
    lg: 'text-6xl',
  };

  return (
    <motion.div
      className={cn('flex flex-col items-center', className)}
      whileHover={{ y: -10, rotate: 2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
    >
      {/* Jersey Hanger */}
      <div className="relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full" />
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-4 border-t-4 border-x-4 border-gray-600 rounded-t-full" />
      </div>

      {/* Jersey */}
      <div
        className={cn(
          'relative bg-gradient-to-br rounded-t-3xl rounded-b-lg shadow-xl cursor-pointer',
          colorClasses[color],
          sizeClasses[size]
        )}
      >
        {/* Jersey neckline */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-5 bg-black/20 rounded-b-full" />

        {/* Jersey sleeves */}
        <div className="absolute top-4 -left-4 w-6 h-12 bg-gradient-to-br from-orange-primary to-orange-light rounded-l-lg transform -skew-y-12 opacity-90" />
        <div className="absolute top-4 -right-4 w-6 h-12 bg-gradient-to-br from-orange-primary to-orange-light rounded-r-lg transform skew-y-12 opacity-90" />

        {/* Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className={cn(
              'font-display text-white drop-shadow-lg',
              numberSizes[size]
            )}
            style={{
              textShadow: '2px 2px 0 rgba(0,0,0,0.3), -1px -1px 0 rgba(255,255,255,0.2)',
            }}
          >
            {number}
          </span>
        </div>

        {/* Subtle jersey texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          }} />
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-t-3xl rounded-b-lg"
          animate={{ opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Title & Description */}
      <div className="text-center mt-4 max-w-[200px]">
        <h3 className="text-lg font-bold text-orange-primary mb-1">{title}</h3>
        {description && (
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}

/**
 * JerseyCardMini - Smaller version for grids and galleries
 */
export function JerseyCardMini({
  number,
  title,
  color = 'orange',
  className,
  onClick,
}: Omit<JerseyCardProps, 'description' | 'size'>) {
  const colorClasses = {
    orange: 'from-orange-primary to-orange-light',
    purple: 'from-purple-accent to-pink-500',
    gradient: 'from-orange-primary via-orange-light to-purple-accent',
  };

  return (
    <motion.div
      className={cn('flex flex-col items-center cursor-pointer', className)}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Mini Jersey */}
      <div
        className={cn(
          'relative w-20 h-24 bg-gradient-to-br rounded-t-xl rounded-b-md shadow-lg',
          colorClasses[color]
        )}
      >
        {/* Neckline */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-black/20 rounded-b-full" />

        {/* Number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl text-white drop-shadow-md">
            {number}
          </span>
        </div>
      </div>

      {/* Title */}
      <p className="text-xs font-bold text-white mt-2 text-center max-w-[80px]">
        {title}
      </p>
    </motion.div>
  );
}
