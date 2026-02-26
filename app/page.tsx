'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Play, ChevronDown, ArrowRight, Heart, Users, GraduationCap, MapPin, Globe, Trophy, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import { images, videos, siteConfig, tickerStats } from '@/lib/utils';
import { SplitText, TextReveal, WordReveal } from '@/components/TextReveal';
import AnimatedCounter, { AnimatedStat } from '@/components/AnimatedCounter';
import MagneticButton from '@/components/MagneticButton';
import TiltCard from '@/components/TiltCard';
import ParticleField, { FloatingBasketballs, GradientOrbs } from '@/components/ParticleField';
import VideoHero from '@/components/VideoHero';
import ImpactSlider, { ImpactComparison } from '@/components/ImpactSlider';
import { RevealWrapper, ParallaxImage, ZoomImage } from '@/components/ImageReveal';
import { PinkOverlayLayer } from '@/components/PinkOverlay';

// Lazy load below-fold heavy components
const HorizontalTimeline = dynamic(() => import('@/components/HorizontalTimeline'));
const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'));
const FundraisingProgress = dynamic(() => import('@/components/FundraisingProgress'));
const IndiaMap = dynamic(() => import('@/components/IndiaMap'));

// Stats data
const stats = [
  { value: 2500, suffix: '+', label: 'Students Impacted', icon: Users },
  { value: 85, suffix: '%', label: 'High School Retention', icon: GraduationCap },
  { value: 60, suffix: '%', label: 'Girls Participation', icon: Trophy },
  { value: 3, suffix: '', label: 'Cities in India', icon: Globe },
];

// Programs data
const programs = [
  {
    title: 'Courts to Careers',
    description: 'Basketball as the hook. Education as the goal. Life skills that last forever.',
    icon: GraduationCap,
    color: 'from-orange-primary to-orange-light',
    image: images.coachHighFive,
    link: '/programs',
  },
  {
    title: 'Crossover Scholars Program',
    description: 'Intensive 2-week summer academy with leadership development, college prep, basketball coaching, and local coaches clinics.',
    icon: Users,
    color: 'from-purple-accent to-orange-primary',
    image: images.portrait,
    link: '/programs',
  },
  {
    title: 'Community Courts',
    description: 'Building safe spaces where dreams take flight in Chennai, Bangalore & Hyderabad.',
    icon: MapPin,
    color: 'from-orange-light to-purple-accent',
    image: images.outdoorCourt,
    link: '/fundraise',
  },
];

// Additional impact stats for underserved demographics
const additionalStats = [
  {
    stat: '1-5%',
    label: 'Girls in sports programs for families under $5/day',
    description: 'We\'re changing this: 60% of our participants are girls',
  },
  {
    stat: '5-12%',
    label: 'College attendance for boys & girls in families under $5/day',
    description: 'Our students beat the odds with 85% high school completion',
  },
];

export default function HomePage() {
  const [videoOpen, setVideoOpen] = useState(false);
  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { once: true });

  return (
    <main className="bg-black overflow-x-hidden">
      {/* HERO SECTION with Video Background */}
      <VideoHero
        videoSrc="/videos/hero-bg.mp4"
        fallbackImage={images.hero}
        overlayOpacity={0.7}
        pinkOverlay={true}
      >
        <div className="h-full flex flex-col items-center justify-center px-6 max-w-6xl mx-auto">
          {/* Particle effects */}
          <ParticleField count={10} />
          <FloatingBasketballs count={3} />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase border border-white/10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Changing Lives Since 2010
            </span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display text-white mb-6 leading-[0.9] text-center">
            <SplitText
              text="EVERY"
              className="block"
              charClassName="inline-block"
              stagger={0.03}
            />
            <span className="block mt-2">
              <SplitText
                text="DRIBBLE"
                className="gradient-text"
                charClassName="inline-block"
                delay={0.2}
                stagger={0.03}
              />
            </span>
            <SplitText
              text="REWRITES"
              className="block mt-2"
              charClassName="inline-block"
              delay={0.4}
              stagger={0.03}
            />
            <span className="block mt-2">
              <SplitText
                text="THE FUTURE"
                className="text-white/95"
                charClassName="inline-block"
                delay={0.6}
                stagger={0.03}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 font-medium text-center"
          >
            Basketball Isn&apos;t Just a Game — It&apos;s a Pathway to Opportunity in India.
            <br className="hidden sm:block" />
            <span className="text-white/70">
              We empower underserved youth in India with basketball, mentorship &amp; life skills — leading to better education, leadership opportunities, and lifelong confidence
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20"
          >
            <MagneticButton
              href={siteConfig.donateUrl}
              className="bg-gradient-to-r from-orange-primary to-orange-light text-black font-bold text-lg px-10 py-5 rounded-full flex items-center gap-2 shadow-glow min-w-[180px] justify-center"
            >
              <Heart className="w-5 h-5" />
              Donate Now
            </MagneticButton>

            <MagneticButton
              onClick={() => setVideoOpen(true)}
              className="glass border border-white/20 text-white font-bold text-lg px-10 py-5 rounded-full flex items-center gap-2 hover:border-orange-primary/50"
            >
              <Play className="w-5 h-5" />
              Watch Our Story
            </MagneticButton>
          </motion.div>
        </div>
      </VideoHero>

      {/* STATS TICKER */}
      <section className="py-6 bg-gradient-to-r from-orange-primary via-orange-light to-orange-primary relative overflow-hidden">
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center shrink-0">
              {tickerStats.map((stat) => (
                <span key={stat} className="flex items-center gap-16">
                  <span className="text-black font-bold text-lg">{stat}</span>
                  <span className="text-black/50">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT SLIDER - Before/After Comparison */}
      <section className="py-16 md:py-24 px-6 bg-dark relative overflow-hidden">
        <GradientOrbs />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <TextReveal>
              <p className="text-orange-primary font-bold uppercase tracking-widest mb-4">
                See The Difference
              </p>
            </TextReveal>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              <WordReveal text="Real Impact, Real Numbers" delay={0.2} />
            </h2>
          </div>

          <ImpactSlider
            beforeValue={16}
            afterValue={85}
            beforeLabel="National Average"
            afterLabel="Our Students"
            title="High School Completion Rate"
            description="Percentage of students who complete high school"
            unit="%"
          />
        </div>
      </section>

      {/* HORIZONTAL SCROLL TIMELINE */}
      <HorizontalTimeline />

      {/* IMPACT STATS with Cards */}
      <section ref={impactRef} className="py-32 px-6 relative bg-gradient-to-b from-dark-200 to-dark">
        <FloatingBasketballs count={2} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <TextReveal>
              <p className="text-orange-primary font-bold uppercase tracking-widest mb-4">
                Our Impact
              </p>
            </TextReveal>
            <h2 className="text-5xl md:text-7xl font-display text-white">
              <WordReveal text="Numbers That Matter" delay={0.2} />
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={impactInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TiltCard className="h-full">
                  <div className="h-full glass border border-white/10 rounded-3xl p-6 md:p-8 text-center hover:border-orange-primary/30 transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-primary/20 to-orange-light/20 flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-7 h-7 text-orange-primary" />
                    </div>
                    <AnimatedCounter
                      value={stat.value}
                      className="text-4xl md:text-5xl font-display gradient-text"
                    />
                    <span className="text-3xl md:text-4xl font-display gradient-text">{stat.suffix}</span>
                    <p className="text-gray-400 mt-2 text-sm md:text-base">{stat.label}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Additional Impact Stats - Underserved Demographics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {additionalStats.map((item, index) => (
              <div key={index} className="glass border border-orange-primary/20 rounded-2xl p-6 md:p-8">
                <div className="text-3xl md:text-4xl font-display gradient-text mb-2">{item.stat}</div>
                <p className="text-white font-semibold mb-2">{item.label}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Comparison bars */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 glass border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              How We Compare
            </h3>
            <ImpactComparison />
          </motion.div>
        </div>
      </section>

      {/* WHERE WE WORK - India Map */}
      <section className="py-32 px-6 bg-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-orange-primary font-bold uppercase tracking-widest mb-4">
                Where We Work
              </p>
            </TextReveal>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              <WordReveal text="3 Cities, One Mission" delay={0.2} />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              From Chennai where it all started, to Bangalore and Hyderabad, we&apos;re building a network of hope across India.
            </motion.p>
          </div>

          <IndiaMap />
        </div>
      </section>

      {/* PROGRAMS with Image Reveals */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-dark to-dark-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-orange-primary font-bold uppercase tracking-widest mb-4">
                What We Do
              </p>
            </TextReveal>
            <h2 className="text-5xl md:text-7xl font-display text-white">
              <WordReveal text="Our Programs" delay={0.2} />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-4 text-lg"
            >
              12 total programs so far across 3 cities in India
            </motion.p>
          </div>

          <div className="space-y-24">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <RevealWrapper direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </RevealWrapper>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {program.title}
                  </h3>
                  <p className="text-xl text-gray-400 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <MagneticButton
                    href={program.link}
                    className="inline-flex items-center gap-2 text-orange-primary font-bold text-lg hover:gap-4 transition-all"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS Carousel */}
      <section className="py-32 px-6 relative overflow-hidden bg-dark-200">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 to-purple-accent/5" />
        <FloatingBasketballs count={3} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-orange-primary font-bold uppercase tracking-widest mb-4">
                Success Stories
              </p>
            </TextReveal>
            <h2 className="text-4xl md:text-6xl font-display text-white">
              <WordReveal text="Voices of Hope" delay={0.2} />
            </h2>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* FUNDRAISING PROGRESS */}
      <section className="py-32 px-6 bg-dark relative">
        <GradientOrbs />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <TextReveal>
              <p className="text-orange-primary font-bold uppercase tracking-widest mb-4">
                Join Our Campaign
              </p>
            </TextReveal>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-6">
              <WordReveal text="Help Us Reach Our Goal" delay={0.2} />
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Every dollar brings us closer to transforming another young life through basketball and education.
            </motion.p>
          </div>

          <FundraisingProgress
            goal={100000}
            raised={78500}
            donors={342}
            daysLeft={45}
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <MagneticButton
              href={siteConfig.donateUrl}
              className="bg-gradient-to-r from-orange-primary to-orange-light text-black font-bold text-lg px-10 py-5 rounded-full inline-flex items-center gap-2 shadow-glow"
            >
              <Heart className="w-5 h-5" />
              Contribute Now
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <ParticleField count={8} className="opacity-20" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-black mb-6">
              EVERY SHOT<br />COUNTS
            </h2>
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-10 max-w-2xl mx-auto">
              $50 sponsors a student for a month. $500 changes a life for a year.
            </p>

            <MagneticButton
              href={siteConfig.donateUrl}
              strength={0.4}
              className="bg-black text-white font-bold text-xl px-12 py-6 rounded-full inline-flex items-center gap-3 hover:bg-dark-200 shadow-2xl"
            >
              <Heart className="w-6 h-6" />
              Make Your Impact Today
            </MagneticButton>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-black/60 text-sm"
            >
              Hoops Creating Hope is a registered 501(c)(3) nonprofit. All donations are tax-deductible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-5xl aspect-video bg-dark-200 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-orange-primary transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
            <video
              autoPlay
              controls
              playsInline
              className="w-full h-full object-contain"
            >
              <source
                src="https://www.dropbox.com/scl/fi/ccz40ad6p330skc1d37lo/Hoops-Creating-Hope-Intro.MP4?rlkey=pf5q6xc5s4ih0rqd0pzvnllg8&st=nx5459br&raw=1"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
