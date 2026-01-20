'use client';

import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GripVertical } from 'lucide-react';

interface ImpactSliderProps {
  beforeValue: number;
  afterValue: number;
  beforeLabel: string;
  afterLabel: string;
  title: string;
  description: string;
  unit?: string;
}

export default function ImpactSlider({
  beforeValue = 16,
  afterValue = 85,
  beforeLabel = 'National Average',
  afterLabel = 'Our Students',
  title = 'High School Retention',
  description = 'Percentage of students who complete high school',
  unit = '%',
}: ImpactSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-8"
      >
        <h3 className="text-3xl md:text-4xl font-display text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </motion.div>

      {/* Comparison container */}
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="relative h-80 rounded-3xl overflow-hidden cursor-ew-resize select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        data-cursor="drag"
      >
        {/* Before side (full width background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 to-red-900">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring' }}
              className="text-8xl md:text-9xl font-display text-red-400"
            >
              {beforeValue}{unit}
            </motion.span>
            <span className="text-red-300 font-bold text-xl mt-2">{beforeLabel}</span>
            <span className="text-red-400/60 text-sm mt-1">Without intervention</span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        {/* After side (clipped) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-950 to-green-900"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <motion.span
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="text-8xl md:text-9xl font-display text-green-400"
            >
              {afterValue}{unit}
            </motion.span>
            <span className="text-green-300 font-bold text-xl mt-2">{afterLabel}</span>
            <span className="text-green-400/60 text-sm mt-1">With Hoops Creating Hope</span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        {/* Slider handle */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
          whileHover={{ scaleX: 2 }}
        >
          {/* Handle grip */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            <GripVertical className="w-5 h-5 text-gray-600" />
          </div>
        </motion.div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 glass rounded-lg px-3 py-1.5">
          <span className="text-sm font-bold text-white">Before</span>
        </div>
        <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-1.5">
          <span className="text-sm font-bold text-white">After</span>
        </div>
      </motion.div>

      {/* Multiplier callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-4 glass border border-orange-primary/20 rounded-2xl px-8 py-4">
          <span className="text-5xl font-display gradient-text">
            {(afterValue / beforeValue).toFixed(1)}x
          </span>
          <span className="text-gray-400 text-left">
            better outcomes<br />
            <span className="text-white font-semibold">with our programs</span>
          </span>
        </div>
      </motion.div>

      {/* Instruction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center text-gray-500 text-sm mt-4"
      >
        ← Drag the slider to compare →
      </motion.p>
    </div>
  );
}

// Multiple metrics comparison
export function ImpactComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    { before: 16, after: 85, label: 'High School Completion', unit: '%' },
    { before: 20, after: 60, label: 'Girls in Sports Programs', unit: '%' },
    { before: 5, after: 45, label: 'College Enrollment', unit: '%' },
  ];

  return (
    <div ref={ref} className="space-y-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.15 }}
          className="relative"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-semibold">{metric.label}</span>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-red-400">{metric.before}{metric.unit}</span>
              <span className="text-gray-600">→</span>
              <span className="text-green-400 font-bold">{metric.after}{metric.unit}</span>
            </div>
          </div>

          <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
            {/* Before bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${metric.before}%` } : {}}
              transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
              className="absolute inset-y-0 left-0 bg-red-500/50 rounded-full"
            />
            {/* After bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${metric.after}%` } : {}}
              transition={{ duration: 1.2, delay: 0.5 + index * 0.15 }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-primary to-green-500 rounded-full"
            />
          </div>

          {/* Multiplier */}
          <div className="text-right mt-1">
            <span className="text-xs text-gray-500">
              <span className="text-orange-primary font-bold">
                {(metric.after / metric.before).toFixed(1)}x
              </span>{' '}
              improvement
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
