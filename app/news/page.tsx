'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, ExternalLink, Filter } from 'lucide-react'
import { newsArticles, categoryLabels, NewsArticle } from '@/lib/news-data'
import { images, siteConfig } from '@/lib/utils'

const categories = ['all', 'press', 'update', 'event', 'feature'] as const

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

function formatDate(dateString: string) {
  // Parse date parts directly to avoid timezone issues
  const [year, month, day] = dateString.split('-').map(Number)
  return `${monthNames[month - 1]} ${day}, ${year}`
}

function NewsCard({ article, index }: { article: NewsArticle; index: number }) {
  const categoryColors: Record<NewsArticle['category'], string> = {
    press: 'bg-blue-500/20 text-blue-400',
    update: 'bg-green-500/20 text-green-400',
    event: 'bg-purple-500/20 text-purple-400',
    feature: 'bg-orange-500/20 text-orange-400',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="glass rounded-3xl overflow-hidden group"
    >
      {/* Image */}
      <div className="h-48 overflow-hidden bg-gradient-to-br from-orange-primary/20 to-purple-accent/20">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-display gradient-text">
              {article.title[0]}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryColors[article.category]}`}>
            {categoryLabels[article.category]}
          </span>
          <span className="flex items-center gap-1 text-white/50 text-sm">
            <Calendar className="w-4 h-4" />
            {formatDate(article.date)}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-primary transition-colors">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="text-white/60 text-sm leading-relaxed mb-4">
          {article.excerpt}
        </p>

        {/* Read More */}
        {article.externalUrl ? (
          <a
            href={article.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-primary font-bold text-sm hover:gap-3 transition-all"
          >
            Read More
            <ExternalLink className="w-4 h-4" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 text-orange-primary font-bold text-sm">
            Read More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        )}
      </div>
    </motion.article>
  )
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>('all')

  const filteredArticles = activeCategory === 'all'
    ? newsArticles
    : newsArticles.filter((article) => article.category === activeCategory)

  // Sort by date (newest first)
  const sortedArticles = [...filteredArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-primary via-orange-light to-purple-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2 rounded-full bg-black/20 backdrop-blur-sm text-sm font-bold tracking-wide mb-6"
          >
            LATEST UPDATES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl leading-none mb-6"
          >
            In The News
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-semibold max-w-3xl mx-auto"
          >
            Stories, updates, and highlights from our journey to transform lives.
          </motion.p>
        </div>
      </section>

      {/* News List */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 mb-16"
          >
            <Filter className="w-5 h-5 text-white/50 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  activeCategory === category
                    ? 'bg-orange-primary text-black'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All' : categoryLabels[category as NewsArticle['category']]}
              </button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          {sortedArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedArticles.map((article, index) => (
                <NewsCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/50 text-xl">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Subscribe / Stay Updated */}
      <section className="section-dark py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-title mb-6">Stay Updated</h2>
          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, stories, and impact reports.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
            >
              Instagram
            </a>
            <a
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
            >
              Facebook
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-orange py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl text-black/80 font-semibold mb-10">
            Your support helps us create more success stories.
          </p>
          <motion.a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-bold text-lg rounded-2xl"
          >
            Donate Now
          </motion.a>
        </div>
      </section>
    </>
  )
}
