'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Users, GraduationCap, Trophy } from 'lucide-react';

interface CityData {
  id: string;
  name: string;
  x: number;
  y: number;
  students: number;
  programs: number;
  year: number;
  description: string;
}

const cities: CityData[] = [
  {
    id: 'chennai',
    name: 'Chennai',
    x: 55,
    y: 78,
    students: 1200,
    programs: 4,
    year: 2010,
    description: 'Our founding city where it all began',
  },
  {
    id: 'bangalore',
    name: 'Bangalore',
    x: 48,
    y: 72,
    students: 900,
    programs: 3,
    year: 2015,
    description: 'Tech hub with growing basketball culture',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    x: 52,
    y: 58,
    students: 400,
    programs: 2,
    year: 2020,
    description: 'Our newest chapter with rapid growth',
  },
];

export default function IndiaMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCity, setActiveCity] = useState<CityData | null>(null);

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto">
      {/* Map container */}
      <div className="relative aspect-[4/5] md:aspect-[3/4]">
        {/* India outline SVG - Improved shape */}
        <motion.svg
          viewBox="0 0 100 120"
          className="w-full h-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* More accurate India outline */}
          <motion.path
            d="M50 3 L58 5 L68 8 L75 12 L80 18 L82 25 L80 30 L78 35 L80 42 L82 48 L83 55 L80 62 L76 70 L72 78 L68 85 L62 92 L55 98 L48 103 L42 105 L38 103 L35 100 L32 95 L28 88 L25 80 L22 72 L20 65 L18 58 L17 50 L18 42 L20 35 L23 28 L27 22 L32 16 L38 10 L44 6 L50 3 Z"
            fill="rgba(255, 107, 53, 0.05)"
            stroke="url(#mapGradient)"
            strokeWidth="0.8"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          {/* Kashmir region accent */}
          <motion.path
            d="M38 10 L42 5 L50 3 L58 5 L52 12 L45 10 L38 10 Z"
            fill="rgba(255, 107, 53, 0.1)"
            stroke="url(#mapGradient)"
            strokeWidth="0.4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Southern tip (Kanyakumari) */}
          <motion.circle
            cx="48"
            cy="103"
            r="2"
            fill="url(#mapGradient)"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 2 }}
          />

          {/* Connection lines between cities */}
          {isInView && (
            <>
              <motion.line
                x1={cities[0].x}
                y1={cities[0].y}
                x2={cities[1].x}
                y2={cities[1].y}
                stroke="rgba(255, 107, 53, 0.3)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1={cities[1].x}
                y1={cities[1].y}
                x2={cities[2].x}
                y2={cities[2].y}
                stroke="rgba(255, 107, 53, 0.3)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
              />
            </>
          )}

          {/* Gradient definition */}
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#C8288C" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* City markers */}
        {cities.map((city, index) => (
          <motion.div
            key={city.id}
            className="absolute cursor-pointer group"
            style={{ left: `${city.x}%`, top: `${city.y}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            onClick={() => setActiveCity(activeCity?.id === city.id ? null : city)}
            onMouseEnter={() => setActiveCity(city)}
            onMouseLeave={() => setActiveCity(null)}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 -m-4 rounded-full bg-orange-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />

            {/* Marker */}
            <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-primary to-orange-light rounded-full shadow-glow group-hover:scale-150 transition-transform duration-300" />
              <div className="absolute inset-1 bg-white rounded-full" />
            </div>

            {/* City label */}
            <motion.div
              className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
            >
              <span className="text-white font-bold text-sm md:text-base">{city.name}</span>
              <span className="block text-orange-primary text-xs">{city.students}+ students</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Active city info card */}
        {activeCity && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 glass border border-orange-primary/30 rounded-2xl p-5"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-primary to-orange-light flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-white">{activeCity.name}</h4>
                <p className="text-xs text-gray-400">Since {activeCity.year}</p>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-4">{activeCity.description}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-orange-primary" />
                <span className="text-sm text-white">{activeCity.students}+ students</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-orange-primary" />
                <span className="text-sm text-white">{activeCity.programs} programs</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Stats summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.5 }}
        className="mt-8 grid grid-cols-3 gap-4 text-center"
      >
        <div>
          <div className="text-3xl font-display gradient-text">3</div>
          <div className="text-sm text-gray-400">Cities</div>
        </div>
        <div>
          <div className="text-3xl font-display gradient-text">2,500+</div>
          <div className="text-sm text-gray-400">Students</div>
        </div>
        <div>
          <div className="text-3xl font-display gradient-text">9</div>
          <div className="text-sm text-gray-400">Programs</div>
        </div>
      </motion.div>
    </div>
  );
}
