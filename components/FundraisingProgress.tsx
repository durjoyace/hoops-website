'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Target, Users, TrendingUp, Sparkles } from 'lucide-react';

interface FundraisingProgressProps {
  goal: number;
  raised: number;
  donors: number;
  daysLeft?: number;
}

export default function FundraisingProgress({
  goal = 100000,
  raised = 78500,
  donors = 342,
  daysLeft = 45,
}: FundraisingProgressProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const percentage = Math.min((raised / goal) * 100, 100);

  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  const displayPercentage = useTransform(spring, (v) => Math.round(v));
  const [percentValue, setPercentValue] = useState(0);

  useEffect(() => {
    const unsubscribe = displayPercentage.on('change', (v) => setPercentValue(v));
    return () => unsubscribe();
  }, [displayPercentage]);

  useEffect(() => {
    if (isInView) {
      spring.set(percentage);
    }
  }, [isInView, percentage, spring]);

  return (
    <div ref={ref} className="w-full max-w-3xl mx-auto">
      {/* Main progress card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="glass border border-orange-primary/20 rounded-3xl p-8 md:p-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-primary to-orange-light flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">2025 Fundraising Goal</h3>
              <p className="text-sm text-gray-400">Help us reach our target</p>
            </div>
          </div>
          {daysLeft && (
            <div className="text-right">
              <span className="text-2xl font-bold text-white">{daysLeft}</span>
              <span className="block text-xs text-gray-400">days left</span>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="relative h-6 bg-dark-200 rounded-full overflow-hidden mb-6">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          </div>

          {/* Progress fill */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${percentage}%` } : {}}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-primary via-orange-light to-orange-primary rounded-full"
          >
            {/* Shine effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>

          {/* Percentage indicator */}
          <motion.div
            initial={{ left: 0 }}
            animate={isInView ? { left: `${Math.min(percentage, 95)}%` } : {}}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-1/2 -translate-y-1/2"
          >
            <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              {percentValue}%
            </div>
          </motion.div>
        </div>

        {/* Amount display */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-5xl font-display gradient-text"
            >
              ${raised.toLocaleString()}
            </motion.span>
            <span className="text-gray-400 ml-2">raised</span>
          </div>
          <div className="text-right">
            <span className="text-gray-400">of </span>
            <span className="text-2xl font-bold text-white">${goal.toLocaleString()}</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Users className="w-4 h-4 text-orange-primary" />
              <span className="text-2xl font-bold text-white">{donors}</span>
            </div>
            <span className="text-xs text-gray-400">Donors</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-2xl font-bold text-white">
                ${Math.round(raised / donors)}
              </span>
            </div>
            <span className="text-xs text-gray-400">Avg. Donation</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-purple-accent" />
              <span className="text-2xl font-bold text-white">
                {Math.round((raised / 500))}
              </span>
            </div>
            <span className="text-xs text-gray-400">Lives Changed</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Milestones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1 }}
        className="mt-6 flex justify-between px-4"
      >
        {[25, 50, 75, 100].map((milestone) => (
          <div
            key={milestone}
            className={`text-center ${
              percentage >= milestone ? 'text-orange-primary' : 'text-gray-600'
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full mx-auto mb-1 ${
                percentage >= milestone
                  ? 'bg-orange-primary shadow-glow-sm'
                  : 'bg-gray-700'
              }`}
            />
            <span className="text-xs font-medium">{milestone}%</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
