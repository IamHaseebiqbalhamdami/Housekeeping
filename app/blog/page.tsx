"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, User, ArrowRight, Search, Tag, Sparkles, Home, Leaf, TrendingUp, BookOpen, Phone, Mail, MapPin } from 'lucide-react'
import SharedHeader from "@/components/shared-header"
import BlogShowcase from "@/components/blog-showcase"
import UseCasesShowcase from "@/components/use-cases-showcase"
import {featuredPost,blogPosts} from './blogdata.js'
import { useState } from "react"
export default function BlogPage() {
  
const [email,setemail]=useState("")
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  console.log("Form submitted:", email)
  try {
    await fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email}),
    })
    setemail(email)
    alert("Email sent successfully!")
  } catch (error) {
    alert("Failed to send email.")
  }
}

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
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#012E71] to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Cleaning Tips & Insights
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 opacity-90 leading-relaxed px-4">
              Expert advice from 26 years of professional cleaning experience across Simcoe County. Learn from the best
              in the business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>24+ Articles</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Weekly Updates</span>
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>Expert Authors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#012E71] mb-4">Featured Article</h2>
            <p className="text-base sm:text-lg text-gray-700">Our most popular cleaning guide this month</p>
          </div>
          <Card className="max-w-6xl mx-auto shadow-2xl border-0 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative order-1 lg:order-1">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  width={800}
                  height={500}
                  className="w-full h-64 sm:h-80 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#012E71] text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                    Featured
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Image
                    src="/placeholder.svg?height=30&width=80&text=Logo"
                    alt="HouseKeeping PRO Logo"
                    width={80}
                    height={30}
                    className="h-6 sm:h-8 w-auto bg-white/90 p-1 rounded"
                  />
                </div>
              </div>
              <CardContent className="p-6 sm:p-8 flex flex-col justify-center order-2 lg:order-2">
                <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mb-4 space-y-2 sm:space-y-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium mr-0 sm:mr-4 self-start">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center mb-6">
                  <Image
                    src={featuredPost.authorImage || "/placeholder.svg"}
                    alt={featuredPost.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-3 w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{featuredPost.author}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">Cleaning Expert</p>
                  </div>
                </div>
                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="bg-[#012E71] hover:bg-blue-800 text-white w-full sm:w-auto">
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Search */}
              <Card className="shadow-lg border-0 mb-6 sm:mb-8">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-4 flex items-center">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Search Articles
                  </h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search cleaning tips..."
                      className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-[#012E71] focus:border-[#012E71] transition-colors text-sm sm:text-base"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-lg border-0 mb-6 sm:mb-8">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-4 flex items-center">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Categories
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/category/${category.name.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center">
                            <category.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#012E71]" />
                            <span className="text-sm sm:text-base text-gray-700 group-hover:text-[#012E71] transition-colors">
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
              <Card className="shadow-lg border-0 mb-6 sm:mb-8">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#012E71] mb-4 flex items-center">
                    <Tag className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Link
                        key={index}
                        href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}
                        className="bg-gray-100 hover:bg-[#012E71] hover:text-white text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-[#012E71] to-blue-800 text-white">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Get Cleaning Tips
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 mb-4">
                    Subscribe to our newsletter for weekly cleaning tips, seasonal guides, and special offers from
                    HouseKeeping PRO.
                  </p>
                  <input
                    type="email"
                    onChange={(e)=>setemail(e.target.value)}
name="email"
value={email}
                    placeholder="Your email address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-gray-900 mb-3 focus:ring-2 focus:ring-white text-sm sm:text-base"
                  />
                  <Button onClick={handleSubmit} className="w-full bg-white text-[#012E71] hover:bg-gray-100 text-sm sm:text-base">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#012E71] mb-4">Latest Articles</h2>
                <p className="text-gray-700 text-sm sm:text-base">Expert cleaning advice from our professional team</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#012E71] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Image
                          src="/placeholder.svg?height=20&width=60&text=Logo"
                          alt="HouseKeeping PRO Logo"
                          width={60}
                          height={20}
                          className="h-5 sm:h-6 w-auto bg-white/90 p-1 rounded"
                        />
                      </div>
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center text-xs sm:text-sm text-gray-500 mb-3 space-y-1 sm:space-y-0">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#012E71] transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Image
                            src={post.authorImage || "/placeholder.svg"}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="rounded-full mr-2 w-6 h-6 sm:w-8 sm:h-8"
                          />
                          <span className="text-xs sm:text-sm text-gray-600">{post.author}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs flex items-center"
                          >
                            <Tag className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-[#012E71] text-[#012E71] hover:bg-[#012E71] hover:text-white bg-transparent group-hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                        >
                          Read More
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 sm:mt-12">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Button 
                    variant="outline" 
                    className="border-[#012E71] text-[#012E71] bg-transparent text-sm sm:text-base px-3 sm:px-4"
                  >
                    Previous
                  </Button>
                  <Button className="bg-[#012E71] text-white text-sm sm:text-base px-3 sm:px-4">1</Button>
                  <Button 
                    variant="outline" 
                    className="border-[#012E71] text-[#012E71] bg-transparent text-sm sm:text-base px-3 sm:px-4"
                  >
                    2
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#012E71] text-[#012E71] bg-transparent text-sm sm:text-base px-3 sm:px-4"
                  >
                    3
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-[#012E71] text-[#012E71] bg-transparent text-sm sm:text-base px-3 sm:px-4"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Showcase Component */}
      <BlogShowcase />

      {/* Use Cases Showcase Component */}
      <UseCasesShowcase />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#012E71] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Need Professional Cleaning?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
              Put our 26 years of expertise to work for you. Professional cleaning services across Simcoe County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button 
                size="lg" 
                className="bg-white text-[#012E71] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Book Cleaning Service
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#012E71] px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call 
  (647) 534-8050

              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
