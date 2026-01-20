'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { images } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
  year?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Basketball gave me hope when I had none. Now I'm the first person in my family going to college.",
    name: 'Priya Sharma',
    role: 'Hoops Scholar, Class of 2024',
    image: images.portrait,
    year: '2024',
  },
  {
    id: 2,
    quote: 'Before joining Crossover, I was afraid to speak up. Now I lead my team on and off the court.',
    name: 'Arjun Kumar',
    role: 'Program Graduate',
    image: images.coachHighFive,
    year: '2023',
  },
  {
    id: 3,
    quote: 'The coaches believed in me when no one else did. They taught me that I could achieve anything.',
    name: 'Meera Patel',
    role: 'College Student & Mentor',
    image: images.twoGirls,
    year: '2022',
  },
  {
    id: 4,
    quote: "This program didn't just teach me basketball—it taught me discipline, teamwork, and how to dream bigger.",
    name: 'Vikram Singh',
    role: 'IT Professional & Program Alum',
    image: images.teamGathering,
    year: '2021',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Auto-advance
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <div ref={ref} className="relative w-full max-w-4xl mx-auto px-6">
      {/* Background quote icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <Quote className="w-40 h-40 text-orange-primary" />
      </motion.div>

      {/* Main content */}
      <div className="relative min-h-[400px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full text-center"
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full overflow-hidden border-4 border-orange-primary shadow-glow"
            >
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Quote */}
            <blockquote className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-8 max-w-3xl mx-auto">
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </blockquote>

            {/* Attribution */}
            <div>
              <p className="text-orange-primary font-bold text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-gray-400">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-orange-primary hover:text-orange-primary transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false);
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-orange-primary to-orange-light'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:border-orange-primary hover:text-orange-primary transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gray-800 rounded-full overflow-hidden mt-4">
          <motion.div
            key={currentIndex}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 6, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-orange-primary to-orange-light origin-left"
          />
        </div>
      )}
    </div>
  );
}
