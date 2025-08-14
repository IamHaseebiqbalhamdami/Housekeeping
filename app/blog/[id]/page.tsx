import { notFound } from "next/navigation"
import { featuredPost, blogPosts } from "../blogdata"
import{ blogshowPosts} from "@/components/blogshowcase.js"
export function generateStaticParams() {
  // Combine featured post and blog posts, return array of param objects
  const allPosts = [featuredPost, ...blogPosts,...blogshowPosts]
  return allPosts.map((post) => ({
    id: post.id.toString(),
  }))
}
interface BlogPostPageProps {
  params: { id: string }
}
export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params
  const allPosts = [featuredPost, ...blogPosts]
  const blogPost = allPosts.find((p) => p.id === Number(id))

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
  <h1 className="text-4xl font-bold text-[#012E71] mb-6">{blogPost.title}</h1>

  <img
    src={blogPost.image}
    alt={blogPost.title}
    className="w-full h-auto rounded-lg mb-6"
  />

  <div className="flex items-center text-gray-600 mb-8">
    <span>By {blogPost.author}</span>
    <span className="mx-2">•</span>
    <span>{blogPost.date}</span>
    <span className="mx-2">•</span>
    <span>{blogPost.readTime}</span>
  </div>

  <div className="prose max-w-none">
    <p>{blogPost.excerpt}</p>
  </div>
</div>

      </div>
    </div>
  )
}
