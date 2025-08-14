import { notFound } from "next/navigation"
import { featuredPost, blogPosts } from "../blogdata"
import { blogshowPosts } from "@/components/blogshowcase.js"

export function generateStaticParams() {
  const allPosts = [featuredPost, ...blogPosts, ...blogshowPosts]
  return allPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

interface BlogPostPageProps {
  params: { id: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params
  const allPosts = [featuredPost, ...blogPosts, ...blogshowPosts]
  const blogPost = allPosts.find(
    (p): p is {
      id: number
      title: string
      excerpt: string
      image: string
      author: string
      authorImage: string
      date: string
      readTime: string
      category: string
      tags: string[]
      content: string
    } => p.id === Number(id)
  )

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#012E71] mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Cover Image */}
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />

          {/* Meta Info */}
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-8 gap-x-2 gap-y-1">
            <span>By {blogPost.author}</span>
            <span>•</span>
            <span>{blogPost.date}</span>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>

          {/* Article Content */}
          <article
            className="prose prose-lg max-w-none prose-headings:text-[#012E71] prose-a:text-blue-600 hover:prose-a:underline prose-img:rounded-lg prose-img:shadow-md prose-strong:text-[#012E71]"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </div>
  )
}
