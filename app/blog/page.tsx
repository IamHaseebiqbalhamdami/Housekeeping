"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  Sparkles,
  Home,
  Leaf,
  TrendingUp,
  BookOpen,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import SharedHeader from "@/components/shared-header"
import BlogShowcase from "@/components/blog-showcase"
import UseCasesShowcase from "@/components/use-cases-showcase"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "The Ultimate Spring Cleaning Guide for Simcoe County Homes",
    excerpt:
      "Get your home ready for spring with our comprehensive cleaning checklist. From deep cleaning tips to seasonal maintenance, we cover everything you need to know for a fresh start.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
    author: "Margaret Thompson",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Seasonal Cleaning",
    tags: ["Spring Cleaning", "Home Tips", "Barrie", "Deep Cleaning"],
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "Why Eco-Friendly Cleaning Products Are Worth the Investment",
      excerpt:
        "Discover the health and environmental benefits of green cleaning products and why more Simcoe County families are making the switch.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
      author: "Sarah Wilson",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Eco-Friendly",
      tags: ["Green Cleaning", "Health", "Environment"],
    },
    {
      id: 3,
      title: "How Often Should You Deep Clean Different Areas of Your Home?",
      excerpt:
        "Professional advice on deep cleaning schedules for kitchens, bathrooms, bedrooms, and living areas based on our 26 years of experience.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      author: "David Chen",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Deep Cleaning",
      tags: ["Deep Cleaning", "Maintenance", "Professional Tips"],
    },
    {
      id: 4,
      title: "Maximizing Your Airbnb Reviews with Professional Cleaning",
      excerpt:
        "Learn how professional cleaning services can boost your Airbnb ratings and increase bookings in the competitive Muskoka market.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      author: "Michael Brown",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Airbnb",
      tags: ["Airbnb", "Vacation Rental", "Muskoka"],
    },
    {
      id: 5,
      title: "Creating a Healthy Work Environment: Office Cleaning Best Practices",
      excerpt:
        "Essential office cleaning tips that promote employee health, productivity, and professional image for Barrie businesses.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      author: "James Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Commercial",
      tags: ["Office Cleaning", "Business", "Productivity"],
    },
    {
      id: 6,
      title: "Tackling Winter Cleaning Challenges in Ontario",
      excerpt:
        "Expert strategies for dealing with salt stains, mud tracking, and winter grime during harsh Canadian winters.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      author: "Lisa Anderson",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      date: "February 15, 2024",
      readTime: "4 min read",
      category: "Seasonal Cleaning",
      tags: ["Winter Cleaning", "Salt Stains", "Canadian Winter"],
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, icon: BookOpen, color: "bg-blue-100 text-blue-800" },
    { name: "Seasonal Cleaning", count: 8, icon: Calendar, color: "bg-green-100 text-green-800" },
    { name: "Eco-Friendly", count: 6, icon: Leaf, color: "bg-emerald-100 text-emerald-800" },
    { name: "Deep Cleaning", count: 5, icon: Sparkles, color: "bg-purple-100 text-purple-800" },
    { name: "Commercial", count: 3, icon: Home, color: "bg-orange-100 text-orange-800" },
    { name: "Airbnb", count: 2, icon: Home, color: "bg-pink-100 text-pink-800" },
  ]

  const popularTags = [
    "Spring Cleaning",
    "Green Products",
    "Deep Clean",
    "Office Tips",
    "Airbnb Host",
    "Winter Care",
    "Barrie",
    "Orillia",
    "Home Maintenance",
    "Professional Tips",
  ]

  return (
    <div className="min-h-screen bg-white">
      <SharedHeader currentPage="blog" />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Cleaning Tips & Insights</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert advice from 26 years of professional cleaning experience across Simcoe County. Learn from the best
              in the business.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>24+ Articles</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Expert Authors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#012E71] mb-4">Featured Article</h2>
            <p className="text-lg text-gray-700">Our most popular cleaning guide this month</p>
          </div>

          <Card className="max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#012E71] text-white px-4 py-2 rounded-full text-sm font-semibold">Featured</span>
                </div>
                <div className="absolute top-4 right-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                    alt="HouseKeeping PRO Logo"
                    width={80}
                    height={30}
                    className="h-8 w-auto bg-white/90 p-1 rounded"
                  />
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-4">
                    {featuredPost.category}
                  </span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{featuredPost.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6">
                  <Image
                    src={featuredPost.authorImage || "/placeholder.svg"}
                    alt={featuredPost.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{featuredPost.author}</h4>
                    <p className="text-gray-600 text-sm">Cleaning Expert</p>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="bg-[#012E71] hover:bg-blue-800 text-white">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search */}
              <Card className="shadow-lg border-0 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#012E71] mb-4 flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Search Articles
                  </h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search cleaning tips..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-[#012E71] focus:border-[#012E71] transition-colors"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-lg border-0 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#012E71] mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center">
                            <category.icon className="w-4 h-4 mr-3 text-[#012E71]" />
                            <span className="text-gray-700 group-hover:text-[#012E71] transition-colors">
                              {category.name}
                            </span>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="shadow-lg border-0 mb-8">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#012E71] mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
                        className="bg-gray-100 hover:bg-[#012E71] hover:text-white text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-[#012E71] to-blue-800 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Cleaning Tips
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Subscribe to our newsletter for weekly cleaning tips, seasonal guides, and special offers from
                    HouseKeeping PRO.
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 mb-3 focus:ring-2 focus:ring-white"
                  />
                  <Button className="w-full bg-white text-[#012E71] hover:bg-gray-100">Subscribe Now</Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#012E71] mb-4">Latest Articles</h2>
                <p className="text-gray-700">Expert cleaning advice from our professional team</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#012E71] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-08-02%20at%2020.55.30_d31d3cc8.jpg-ltfbL4qxNsZJM19pu8YgBkJBiRmUlE.jpeg"
                          alt="HouseKeeping PRO Logo"
                          width={60}
                          height={20}
                          className="h-6 w-auto bg-white/90 p-1 rounded"
                        />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{post.date}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#012E71] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="rounded-full mr-2"
                          />
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs flex items-center"
                          >
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent group-hover:scale-105 transition-transform duration-300"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="border-[#012E71] text-[#012E71] bg-transparent">
                    Previous
                  </Button>
                  <Button className="bg-[#012E71] text-white">1</Button>
                  <Button variant="outline" className="border-[#012E71] text-[#012E71] bg-transparent">
                    2
                  </Button>
                  <Button variant="outline" className="border-[#012E71] text-[#012E71] bg-transparent">
                    3
                  </Button>
                  <Button variant="outline" className="border-[#012E71] text-[#012E71] bg-transparent">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* Blog Showcase Component */}
      <BlogShowcase />

      {/* Use Cases Showcase Component */}
      <UseCasesShowcase />
      <section className="py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Professional Cleaning?</h2>
            <p className="text-xl mb-8 opacity-90">
              Put our 26 years of expertise to work for you. Professional cleaning services across Simcoe County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#012E71] hover:bg-gray-100 px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Cleaning Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-8 py-4 bg-transparent"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (705) 555-0123
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo.png"
                alt="HouseKeeping PRO Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300 mb-4">
                Expert cleaning tips and professional services across Simcoe County for 26 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Popular Articles</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/blog/1" className="hover:text-white transition-colors">
                    Spring Cleaning Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog/2" className="hover:text-white transition-colors">
                    Eco-Friendly Products
                  </Link>
                </li>
                <li>
                  <Link href="/blog/3" className="hover:text-white transition-colors">
                    Deep Cleaning Schedule
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/blog/category/seasonal" className="hover:text-white transition-colors">
                    Seasonal Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/eco-friendly" className="hover:text-white transition-colors">
                    Eco-Friendly
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/commercial" className="hover:text-white transition-colors">
                    Commercial Tips
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (705) 555-0123
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  blog@housekeepingpro.ca
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Simcoe County, ON
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HouseKeeping PRO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
