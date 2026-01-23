'use client';

import { cn } from '@/lib/utils';

interface PinkOverlayProps {
  enabled?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
  children?: React.ReactNode;
}

/**
 * PinkOverlay - Adds a pink tint overlay to sections
 * Similar to hoopscreatinghope.org style
 *
 * Usage:
 * <PinkOverlay enabled={true} intensity="medium">
 *   <YourContent />
 * </PinkOverlay>
 */
export default function PinkOverlay({
  enabled = true,
  intensity = 'medium',
  className,
  children,
}: PinkOverlayProps) {
  if (!enabled) {
    return <>{children}</>;
  }

  const intensityClasses = {
    light: 'bg-pink-500/10',
    medium: 'bg-pink-500/20',
    strong: 'bg-pink-500/30',
  };

  return (
    <div className={cn('relative', className)}>
      {children}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none mix-blend-multiply',
          intensityClasses[intensity]
        )}
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * Standalone overlay div for layering within existing sections
 */
export function PinkOverlayLayer({
  enabled = true,
  intensity = 'medium',
  className,
}: Omit<PinkOverlayProps, 'children'>) {
  if (!enabled) return null;

  const intensityClasses = {
    light: 'bg-gradient-to-br from-pink-500/10 via-pink-400/5 to-transparent',
    medium: 'bg-gradient-to-br from-pink-500/20 via-pink-400/10 to-transparent',
    strong: 'bg-gradient-to-br from-pink-500/30 via-pink-400/15 to-transparent',
  };

  return (
    <div
      className={cn(
        'absolute inset-0 pointer-events-none mix-blend-multiply',
        intensityClasses[intensity],
        className
      )}
      aria-hidden="true"
    />
  );
}
