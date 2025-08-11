"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image" // Import Image component
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, User, Eye, Heart, Share2, ArrowRight, Sparkles, Target, TrendingUp, Award, Clock, Star, CheckCircle } from 'lucide-react'

export default function BlogShowcase() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const blogCategories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24, color: 'from-white to-gray-300' },
    { id: 'cleaning-tips', name: 'Cleaning Tips', icon: Sparkles, count: 8, color: 'from-[#012E71] to-blue-800' },
    { id: 'eco-friendly', name: 'Eco-Friendly', icon: Target, count: 6, color: 'from-gray-700 to-[#012E71]' },
    { id: 'commercial', name: 'Commercial', icon: TrendingUp, count: 5, color: 'from-black to-gray-800' },
    { id: 'residential', name: 'Residential', icon: Award, count: 5, color: 'from-[#012E71] to-black' },
  ]

  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Deep Cleaning Tips for Spring",
      excerpt: "Transform your home with these professional deep cleaning techniques that will make your space sparkle.",
      category: "cleaning-tips",
      author: "Sarah Wilson",
      date: "2024-03-15",
      readTime: "5 min read",
      views: 1247,
      likes: 89,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: "Eco-Friendly Cleaning Products That Actually Work",
      excerpt: "Discover the best green cleaning solutions that are both effective and safe for your family and pets.",
      category: "eco-friendly",
      author: "Lisa Anderson",
      date: "2024-03-12",
      readTime: "7 min read",
      views: 892,
      likes: 67,
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
      featured: false,
      rating: 4.7
    },
    {
      id: 3,
      title: "Commercial Office Cleaning: Best Practices",
      excerpt: "Professional guidelines for maintaining a clean and healthy workplace environment.",
      category: "commercial",
      author: "Robert Martinez",
      date: "2024-03-10",
      readTime: "6 min read",
      views: 756,
      likes: 45,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      featured: false,
      rating: 4.8
    },
    {
      id: 4,
      title: "Residential Cleaning Checklist: Room by Room",
      excerpt: "A comprehensive guide to cleaning every room in your home efficiently and thoroughly.",
      category: "residential",
      author: "Maria Garcia",
      date: "2024-03-08",
      readTime: "8 min read",
      views: 1103,
      likes: 92,
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
      featured: false,
      rating: 4.9
    },
    {
      id: 5,
      title: "The Science Behind Professional Cleaning",
      excerpt: "Understanding the chemistry and techniques that make professional cleaning so effective.",
      category: "cleaning-tips",
      author: "Emily Johnson",
      date: "2024-03-05",
      readTime: "9 min read",
      views: 634,
      likes: 38,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      featured: false,
      rating: 4.6
    },
    {
      id: 6,
      title: "Sustainable Cleaning for Large Facilities",
      excerpt: "How to implement eco-friendly cleaning practices in commercial and industrial settings.",
      category: "eco-friendly",
      author: "James Wilson",
      date: "2024-03-03",
      readTime: "10 min read",
      views: 445,
      likes: 29,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
      featured: false,
      rating: 4.5
    }
  ]

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory)

  const handleCategoryClick = (categoryId: string) => {
    setIsAnimating(true)
    setActiveCategory(categoryId)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-black via-[#012E71] to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-[#012E71]/30 to-gray-900/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 sm:w-40 sm:h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-30 h-30 sm:w-60 sm:h-60 bg-[#012E71]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-white/5 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-[#012E71] bg-clip-text text-transparent leading-tight">
            Expert Cleaning Insights
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl mx-auto px-4">
            Professional tips, industry secrets, and proven techniques from our cleaning experts
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className={`flex justify-center mb-10 sm:mb-12 transition-all flex-wrap duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {blogCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 transition-all duration-500 flex items-center space-x-2 text-sm sm:text-base hover:scale-105 ${
                  activeCategory === category.id
                    ? 'border-white bg-gradient-to-r from-white to-gray-200 text-[#012E71] scale-105 sm:scale-110 shadow-2xl'
                    : 'border-gray-500 bg-gradient-to-r from-gray-800 to-black hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {React.createElement(category.icon, {
                  className: `w-4 h-4 sm:w-5 sm:h-5 ${activeCategory === category.id ? 'text-[#012E71]' : 'text-gray-300'}`
                })}
                <span className="font-semibold">{category.name}</span>
                <span className="text-xs sm:text-sm opacity-75">({category.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Blog Posts Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`group relative overflow-hidden border-0 shadow-xl transition-all duration-700 cursor-pointer hover:shadow-2xl ${
                isAnimating ? 'animate-pulse' : ''
              } ${hoveredCard === post.id ? 'scale-105 shadow-2xl' : 'hover:scale-105'}`}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transitionDelay: `${index * 150}ms`,
                background: 'linear-gradient(135deg, rgba(1, 46, 113, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)'
              }}
            >
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg?height=300&width=400&text=Blog+Post+Image"}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div> {/* Overlay */}
                {post.featured && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Featured
                    </div>
                  </div>
                )}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-white">{post.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs bg-gradient-to-r from-[#012E71] to-blue-800 px-2 sm:px-3 py-1 rounded-full text-white font-medium">
                    {post.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-white transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button className="bg-gradient-to-r from-[#012E71] to-blue-800 text-white hover:from-blue-800 hover:to-[#012E71] text-sm transition-all duration-300 hover:scale-105 px-4 py-2 sm:px-6 sm:py-3">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10 p-2 sm:p-3">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Load More Button */}
        <div className={`text-center mt-10 sm:mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button className="bg-gradient-to-r from-white to-gray-200 text-[#012E71] hover:from-gray-200 hover:to-white px-6 sm:px-8 py-3 font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Explore All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
