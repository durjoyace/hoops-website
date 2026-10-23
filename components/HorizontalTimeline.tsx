'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import Image from 'next/image';
import { images, yearsOfImpact } from '@/lib/utils';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  stat?: string;
  statLabel?: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2010',
    title: 'Theory and Foundation',
    description: 'Theory and NGO paperwork and board recruitment. Shaun Jayachandran develops the vision to use basketball as a tool for educational retention.',
    stat: '1',
    statLabel: 'Vision born',
    image: images.hero,
  },
  {
    year: '2012',
    title: 'First Cohort',
    description: 'First cohort: 45 kids at St. Patrick\'s Anglo-Indian Higher Secondary School. The model was simple but rigorous: basketball practice combined with mandatory study sessions.',
    stat: '45',
    statLabel: 'First students',
    image: images.outdoorCourt,
  },
  {
    year: '2015',
    title: 'Bangalore Expansion',
    description: 'Opened our second chapter in Bangalore, bringing programs to a new community.',
    stat: '500+',
    statLabel: 'Total students',
    image: images.teamGathering,
  },
  {
    year: '2018',
    title: "Girls' Initiative",
    description: 'Launched dedicated programs for girls, reaching 60% female participation.',
    stat: '60%',
    statLabel: 'Girls participation',
    image: images.twoGirls,
  },
  {
    year: '2019',
    title: 'NBA India Partnership',
    description: 'Ran programs in Mumbai in conjunction with the NBA Games in India.',
    stat: 'NBA',
    statLabel: 'Partnership',
    image: images.coachHighFive,
  },
  {
    year: '2022',
    title: 'Hyderabad Expansion',
    description: 'Expanded to Hyderabad, our third major city in India.',
    stat: '3',
    statLabel: 'Cities across India',
    image: images.programActivity,
  },
  {
    year: '2024',
    title: '2,500+ Lives Changed',
    description: 'Reached major milestone with proven impact: 5.3x better outcomes than national average. 12 total programs so far.',
    stat: '2,500+',
    statLabel: 'Students impacted',
    image: images.portrait,
  },
];

// Number of card-to-card moves (7 cards = 6 moves). Card k is centred at progress k / STEPS.
const STEPS = timelineEvents.length - 1;
// How much page scrolling each move takes, in viewport heights.
const VH_PER_STEP = 75;

export default function HorizontalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Each card is exactly one viewport wide, so slide by viewport widths. (A % here would be a
  // percentage of the whole 7-screen-wide strip and fling every card off screen almost at once.)
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', `-${STEPS * 100}vw`]);

  // Sideways trackpad swipes (or Shift + wheel) advance the timeline too, not just vertical scrolling.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault(); // also stops the browser's swipe-to-go-back gesture
        window.scrollBy({ top: e.deltaX });
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative"
      // 100vh for the pinned panel + a scroll runway long enough to give every card its moment
      style={{ height: `${100 + STEPS * VH_PER_STEP}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-dark">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-100 to-dark-200" />

        {/* Section header */}
        <div className="absolute top-24 left-0 right-0 text-center z-10 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-primary font-bold uppercase tracking-widest mb-2"
          >
            Our Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display text-white"
          >
            {yearsOfImpact} Years of Impact
          </motion.h2>
        </div>

        {/* Timeline track */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 hidden md:block">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-gradient-to-r from-orange-primary to-orange-light origin-left"
          />
        </div>

        {/* Horizontal scroll content */}
        <motion.div
          style={{ x }}
          className="absolute top-0 left-0 h-full flex"
        >
          {timelineEvents.map((event, index) => (
            <TimelineCard key={event.year} event={event} index={index} progress={scrollYProgress} />
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
          {timelineEvents.map((event, index) => (
            <ProgressDot key={event.year} index={index} progress={scrollYProgress} />
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-gray-500 text-sm"
        >
          Scroll to explore →
        </motion.div>
      </div>
    </section>
  );
}

function ProgressDot({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const backgroundColor = useTransform(
    progress,
    [(index - 0.5) / STEPS, index / STEPS],
    ['#374151', '#FF6B35']
  );
  return <motion.div className="w-2 h-2 rounded-full" style={{ backgroundColor }} />;
}

function TimelineCard({
  event,
  index,
  progress,
}: {
  event: TimelineEvent;
  index: number;
  progress: MotionValue<number>;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const cardProgress = useTransform(
    progress,
    [(index - 0.5) / STEPS, (index + 0.5) / STEPS],
    [0, 1]
  );

  const scale = useTransform(cardProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(cardProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div
      ref={ref}
      className="w-screen h-full flex-shrink-0 flex items-center justify-center px-6 md:px-20 pt-44 pb-28 md:py-40"
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-4xl w-full"
      >
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Content */}
          <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
            {/* Year badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              className="inline-block mb-2 md:mb-4"
            >
              <span className="text-5xl md:text-8xl font-display gradient-text">
                {event.year}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4"
            >
              {event.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-4 md:mb-6"
            >
              {event.description}
            </motion.p>

            {event.stat && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-4 glass border border-orange-primary/20 rounded-2xl px-5 py-3 md:px-6 md:py-4"
              >
                <span className="text-4xl font-display gradient-text">{event.stat}</span>
                <span className="text-gray-400">{event.statLabel}</span>
              </motion.div>
            )}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`relative aspect-[16/9] md:aspect-[4/3] rounded-3xl overflow-hidden ${
              index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'
            }`}
          >
            {event.image && (
              <>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            )}

            {/* Year overlay */}
            <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-2">
              <span className="text-white font-bold">{event.year}</span>
            </div>
          </motion.div>
        </div>

        {/* Timeline dot */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-primary to-orange-light shadow-glow"
          />
        </div>
      </motion.div>
    </div>
  );
}
