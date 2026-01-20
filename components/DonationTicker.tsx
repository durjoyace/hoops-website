'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface Donation {
  id: number;
  name: string;
  amount: number;
  location: string;
  message?: string;
  time: string;
}

// Sample donation data - in production this would come from an API
const sampleDonations: Omit<Donation, 'id' | 'time'>[] = [
  { name: 'Sarah M.', amount: 100, location: 'New York', message: 'Keep up the great work!' },
  { name: 'Raj P.', amount: 50, location: 'Chennai' },
  { name: 'Anonymous', amount: 500, location: 'California', message: 'For the kids!' },
  { name: 'Michael K.', amount: 75, location: 'London' },
  { name: 'Priya S.', amount: 200, location: 'Bangalore', message: 'Proud to support' },
  { name: 'David L.', amount: 150, location: 'Toronto' },
  { name: 'Anita R.', amount: 25, location: 'Mumbai' },
  { name: 'James W.', amount: 1000, location: 'San Francisco', message: 'Amazing organization!' },
  { name: 'Lisa T.', amount: 50, location: 'Seattle' },
  { name: 'Kumar V.', amount: 100, location: 'Hyderabad' },
];

export default function DonationTicker() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [currentDonation, setCurrentDonation] = useState<Donation | null>(null);

  // Simulate incoming donations
  useEffect(() => {
    // Initial donation
    const initialDonation = {
      ...sampleDonations[Math.floor(Math.random() * sampleDonations.length)],
      id: Date.now(),
      time: 'just now',
    };
    setCurrentDonation(initialDonation);
    setDonations([initialDonation]);

    // Add new donations periodically
    const interval = setInterval(() => {
      const newDonation = {
        ...sampleDonations[Math.floor(Math.random() * sampleDonations.length)],
        id: Date.now(),
        time: 'just now',
      };
      setCurrentDonation(newDonation);
      setDonations((prev) => [newDonation, ...prev.slice(0, 9)]);
    }, 8000 + Math.random() * 7000); // Random interval between 8-15 seconds

    return () => clearInterval(interval);
  }, []);

  if (!currentDonation) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDonation.id}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="glass border border-orange-primary/30 rounded-2xl p-4 shadow-glow-sm"
        >
          <div className="flex items-start gap-3">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.1 }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-primary to-orange-light flex items-center justify-center flex-shrink-0"
            >
              <Heart className="w-5 h-5 text-white fill-white" />
            </motion.div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white truncate">{currentDonation.name}</span>
                <Sparkles className="w-4 h-4 text-orange-primary flex-shrink-0" />
              </div>
              <p className="text-sm text-gray-300">
                donated{' '}
                <span className="font-bold text-orange-primary">
                  ${currentDonation.amount}
                </span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {currentDonation.location} • {currentDonation.time}
              </p>
              {currentDonation.message && (
                <p className="text-xs text-gray-400 mt-2 italic">
                  &ldquo;{currentDonation.message}&rdquo;
                </p>
              )}
            </div>

            {/* Close button */}
            <button
              onClick={() => setCurrentDonation(null)}
              className="text-gray-500 hover:text-white transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>

          {/* Progress bar animation */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 8, ease: 'linear' }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-primary to-orange-light origin-left rounded-b-2xl"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Compact ticker for header/nav
export function DonationTickerCompact() {
  const [count, setCount] = useState(2547);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount((prev) => prev + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2 text-sm"
    >
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-gray-400">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-bold"
        >
          {count.toLocaleString()}
        </motion.span>{' '}
        supporters
      </span>
    </motion.div>
  );
}
