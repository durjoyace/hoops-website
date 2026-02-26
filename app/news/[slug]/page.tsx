import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost } from '@/lib/data/blog-posts'
import BlogPostClient from './BlogPostClient'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Hoops Creating Hope`,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
