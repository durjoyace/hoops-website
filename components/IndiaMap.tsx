'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Users, Trophy } from 'lucide-react';
import india from '@svg-maps/india';

// Real state outlines from MapSVG (CC BY 4.0), packaged as @svg-maps/india.
// The artwork is a Web Mercator projection in a 612 x 696 box.
const MAP_W = 612;
const MAP_H = 696;
const states = (india as unknown as { locations: { id: string; name: string; path: string }[] }).locations;

// States where we operate: Chennai (Tamil Nadu), Bangalore (Karnataka), Hyderabad (Telangana).
const OPERATING_STATES = new Set(['Tamil Nadu', 'Karnataka', 'Telangana']);

interface CityData {
  id: string;
  name: string;
  /** Position inside the 612 x 696 map, projected from the city's real latitude/longitude. */
  x: number;
  y: number;
  /** Which side of the marker the label sits on, so labels don't collide. */
  labelSide: 'left' | 'right';
  students: number;
  programs: number;
  year: number;
  description: string;
}

const cities: CityData[] = [
  {
    id: 'chennai',
    name: 'Chennai', // 13.08 N, 80.27 E
    x: 254.0,
    y: 561.1,
    labelSide: 'right',
    students: 1200,
    programs: 4,
    year: 2010,
    description: 'Our founding city where it all began',
  },
  {
    id: 'bangalore',
    name: 'Bangalore', // 12.97 N, 77.59 E
    x: 198.1,
    y: 563.5,
    labelSide: 'left',
    students: 900,
    programs: 3,
    year: 2015,
    description: 'Tech hub with growing basketball culture',
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad', // 17.39 N, 78.49 E
    x: 216.7,
    y: 467.9,
    labelSide: 'right',
    students: 400,
    programs: 2,
    year: 2020,
    description: 'Our newest chapter with rapid growth',
  },
];

const pct = (value: number, total: number) => `${(value / total) * 100}%`;

export default function IndiaMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCity, setActiveCity] = useState<CityData | null>(null);

  return (
    <div ref={ref} className="relative w-full max-w-xl mx-auto">
      {/* Map container: same proportions as the artwork so % positions line up exactly */}
      <div className="relative w-full" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
        <motion.svg
          viewBox={`0 0 ${MAP_W} ${MAP_H}`}
          className="absolute inset-0 w-full h-full"
          role="img"
          aria-label="Map of India highlighting Tamil Nadu, Karnataka and Telangana, where Hoops Creating Hope runs programs in Chennai, Bangalore and Hyderabad"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <defs>
            {/* userSpaceOnUse so one gradient spans the whole country instead of restarting in each state */}
            <linearGradient id="mapGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={MAP_W} y2={MAP_H}>
              <stop offset="0%" stopColor="#FF6B35" />
              <stop offset="100%" stopColor="#C8288C" />
            </linearGradient>
          </defs>

          {/* Every state outline is traced in; the three operating states glow */}
          {states.map((state) => {
            const operating = OPERATING_STATES.has(state.name);
            return (
              <motion.path
                key={state.id}
                d={state.path}
                fill={operating ? 'rgba(255, 107, 53, 0.30)' : 'rgba(255, 107, 53, 0.06)'}
                stroke={operating ? 'url(#mapGradient)' : 'rgba(255, 255, 255, 0.22)'}
                strokeWidth={operating ? 1.6 : 0.8}
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 2, ease: 'easeInOut' }}
              >
                <title>{state.name}</title>
              </motion.path>
            );
          })}

          {/* Connection lines between cities */}
          {isInView && (
            <>
              <motion.line
                x1={cities[0].x}
                y1={cities[0].y}
                x2={cities[1].x}
                y2={cities[1].y}
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1={cities[1].x}
                y1={cities[1].y}
                x2={cities[2].x}
                y2={cities[2].y}
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.2"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
              />
            </>
          )}
        </motion.svg>

        {/* City markers */}
        {cities.map((city, index) => (
          <motion.button
            key={city.id}
            type="button"
            className="absolute w-0 h-0 p-0 border-0 bg-transparent cursor-pointer group focus:outline-none"
            style={{ left: pct(city.x, MAP_W), top: pct(city.y, MAP_H) }}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
            onClick={() => setActiveCity(activeCity?.id === city.id ? null : city)}
            onMouseEnter={() => setActiveCity(city)}
            onMouseLeave={() => setActiveCity(null)}
            onFocus={() => setActiveCity(city)}
            onBlur={() => setActiveCity(null)}
            aria-label={`${city.name}: ${city.students}+ students`}
          >
            {/* Everything is positioned around the exact point (the button itself is zero-size) */}
            <span className="pointer-events-none">
              {/* Pulse ring */}
              <motion.span
                className="absolute -left-5 -top-5 w-10 h-10 rounded-full bg-orange-primary/30"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />

              {/* Marker */}
              <span className="absolute -left-2 -top-2 w-4 h-4">
                <span className="absolute inset-0 bg-gradient-to-br from-orange-primary to-orange-light rounded-full shadow-glow group-hover:scale-150 group-focus-visible:scale-150 transition-transform duration-300" />
                <span className="absolute inset-1 bg-white rounded-full" />
              </span>

              {/* City label */}
              <motion.span
                className={`absolute top-0 -translate-y-1/2 whitespace-nowrap ${
                  city.labelSide === 'left' ? 'right-4 text-right' : 'left-4 text-left'
                }`}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.2 }}
              >
                <span className="block text-white font-bold text-sm md:text-base [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
                  {city.name}
                </span>
                <span className="block text-orange-primary text-xs [text-shadow:0_1px_4px_rgba(0,0,0,0.9)]">
                  {city.students}+ students
                </span>
              </motion.span>
            </span>
          </motion.button>
        ))}

        {/* Active city info card (outer div centres it; the animated card inside can't override that) */}
        {activeCity && (
          <div className="absolute bottom-0 inset-x-0 flex justify-center pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="w-72 max-w-full glass border border-orange-primary/30 rounded-2xl p-5"
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
          </div>
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

      {/* Attribution required by the map's CC BY 4.0 license */}
      <p className="mt-6 text-center text-xs text-gray-600">
        Map:{' '}
        <a href="https://mapsvg.com/maps/india" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">
          MapSVG
        </a>{' '}
        (
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-400">
          CC BY 4.0
        </a>
        )
      </p>
    </div>
  );
}
