'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, ArrowRight, Heart, User, Tag } from 'lucide-react'
import { cn, siteConfig } from '@/lib/utils'
import { type BlogPost, getRelatedPosts } from '@/lib/data/blog-posts'

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

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const relatedPosts = getRelatedPosts(post.slug, 3)
  const paragraphs = post.content.split('\n\n')

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pb-16 pt-32">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-white/60 hover:text-orange-primary transition-colors mb-8 text-sm font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <CategoryBadge category={post.category} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm text-white/50"
          >
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-white/80 font-semibold">{post.author}</span>
              <span className="text-white/30">|</span>
              <span>{post.authorRole}</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-black py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={cn(
                  'text-white/70 leading-relaxed',
                  index === 0 ? 'text-xl md:text-2xl text-white/80 font-medium' : 'text-lg'
                )}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="my-16 h-px bg-gradient-to-r from-transparent via-orange-primary/30 to-transparent" />

          {/* Author Byline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 flex items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-primary to-purple-accent flex items-center justify-center flex-shrink-0">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-sm text-white/40 uppercase tracking-wide font-bold mb-1">Written by</p>
              <h3 className="text-xl font-black text-white">{post.author}</h3>
              <p className="text-orange-primary font-semibold text-sm">{post.authorRole}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-dark py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-orange-primary font-mono text-sm tracking-widest uppercase mb-4 block">
              KEEP READING
            </span>
            <h2 className="section-title mb-6">More Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relPost, index) => (
              <motion.div
                key={relPost.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/news/${relPost.slug}`} className="block group h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="glass rounded-3xl overflow-hidden h-full flex flex-col card-glow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relPost.image}
                        alt={relPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <CategoryBadge category={relPost.category} />
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-black mb-2 group-hover:text-orange-primary transition-colors leading-tight">
                        {relPost.title}
                      </h3>

                      <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
                        {relPost.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span className="text-xs text-white/30">{formatDate(relPost.date)}</span>
                        <span className="flex items-center gap-1 text-orange-primary text-sm font-bold group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Help Write the Next Chapter
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Your support turns these stories into reality for thousands more students.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl"
            >
              <Heart className="w-6 h-6" />
              Donate Now
            </motion.a>
            <Link
              href="/news"
              className="px-10 py-5 bg-transparent border-3 border-black text-black font-bold text-lg rounded-2xl hover:bg-black hover:text-white transition-colors"
            >
              All Stories
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
