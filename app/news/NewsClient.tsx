'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { blogPosts, type BlogPost } from '@/lib/data/blog-posts'

const categories = ['All', 'Impact', 'Programs', 'Community', 'Events', 'Press'] as const

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function CategoryBadge({ category }: { category: BlogPost['category'] }) {
  const colorMap: Record<BlogPost['category'], string> = {
    Impact: 'bg-orange-primary/20 text-orange-primary border-orange-primary/30',
    Programs: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    Community: 'bg-green-500/20 text-green-400 border-green-500/30',
    Events: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    Press: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  }

  return (
    <span className={cn('inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border', colorMap[category])}>
      <Tag className="w-3 h-3" />
      {category}
    </span>
  )
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href={`/news/${post.slug}`} className="block group">
        <div className="glass rounded-3xl overflow-hidden card-glow">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-72 lg:h-full min-h-[320px] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20" />
            </div>

            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-orange-primary text-black text-xs font-bold tracking-wide uppercase">
                  Featured
                </span>
                <CategoryBadge category={post.category} />
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl gradient-text mb-4 leading-tight">
                {post.title}
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-white/40 mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2 text-orange-primary font-bold group-hover:gap-4 transition-all">
                Read Full Story
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/news/${post.slug}`} className="block group h-full">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-3xl overflow-hidden h-full flex flex-col card-glow"
        >
          <div className="relative h-56 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <CategoryBadge category={post.category} />
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-black mb-3 group-hover:text-orange-primary transition-colors leading-tight">
              {post.title}
            </h3>

            <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-white/30 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1 text-orange-primary text-sm font-bold group-hover:gap-2 transition-all">
                Read
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function NewsClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const featuredPost = blogPosts.find((p) => p.featured)
  const filteredPosts = activeCategory === 'All'
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory && !p.featured)

  // If active category is not 'All' and featured post matches, include it in grid
  const showFeatured = activeCategory === 'All' || (featuredPost && featuredPost.category === activeCategory)
  const gridPosts = activeCategory === 'All'
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,0,0,0.2),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-8"
          >
            NEWS & STORIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-8"
          >
            STORIES FROM
            <br />
            THE COURT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto"
          >
            Impact reports, student stories, and updates from our programs across India.
          </motion.p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-black py-8 sticky top-16 z-30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-bold tracking-wide whitespace-nowrap transition-all duration-300',
                  activeCategory === category
                    ? 'bg-orange-primary text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && featuredPost && activeCategory === 'All' && (
        <section className="bg-black py-16">
          <div className="max-w-7xl mx-auto px-6">
            <FeaturedCard post={featuredPost} />
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {gridPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridPosts.map((post, index) => (
                    <PostCard key={post.slug} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-white/40 text-lg">No stories found in this category yet.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Every donation writes a new chapter in a student&apos;s life.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://givebutter.com/2025HoopsCreatingHope"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl"
            >
              Donate Now
            </motion.a>
            <Link
              href="/stories"
              className="px-10 py-5 bg-transparent border-3 border-black text-black font-bold text-lg rounded-2xl hover:bg-black hover:text-white transition-colors"
            >
              Read Student Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
