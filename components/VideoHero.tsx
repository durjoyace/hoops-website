'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

interface VideoHeroProps {
  videoSrc?: string;
  fallbackImage?: string;
  overlayOpacity?: number;
  pinkOverlay?: boolean;
  children?: React.ReactNode;
}

export default function VideoHero({
  videoSrc = '/videos/hero-bg.mp4',
  fallbackImage = '/images/hero-fallback.jpg',
  overlayOpacity = 0.6,
  pinkOverlay = false,
  children,
}: VideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay failed, likely due to browser policy
        setIsPlaying(false);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Video/Image background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Fallback image (shows while video loads or if video fails) */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <Image
            src={fallbackImage}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Video */}
        {!hasVideoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
            onError={() => setHasVideoError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-dark"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/60" />

        {/* Pink overlay - similar to hoopscreatinghope.org */}
        {pinkOverlay && (
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/15 via-pink-400/10 to-transparent mix-blend-multiply pointer-events-none" />
        )}

        {/* Subtle grain texture (static, no animation) */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-noise" />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 h-full">
        {children}
      </motion.div>

      {/* Video controls */}
      <div className={`absolute bottom-8 right-8 z-20 flex gap-3 ${hasVideoError ? 'hidden' : ''}`}>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={togglePlay}
          className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-orange-primary hover:text-orange-primary transition-colors"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          onClick={toggleMute}
          className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-orange-primary hover:text-orange-primary transition-colors"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-orange-primary"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
    </div>
  );
}

// Ambient video loop for sections
export function AmbientVideo({
  videoSrc,
  className = '',
}: {
  videoSrc: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-30"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/60" />
    </div>
  );
}
