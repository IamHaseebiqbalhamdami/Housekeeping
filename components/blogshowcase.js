import { BookOpen, Sparkles, Target, TrendingUp, Award } from 'lucide-react'

const blogCategories = [
    { id: 'all', name: 'All Posts', icon: BookOpen, count: 24, color: 'from-white to-gray-300' },
    { id: 'cleaning-tips', name: 'Cleaning Tips', icon: Sparkles, count: 8, color: 'from-[#012E71] to-blue-800' },
    { id: 'eco-friendly', name: 'Eco-Friendly', icon: Target, count: 6, color: 'from-gray-700 to-[#012E71]' },
    { id: 'commercial', name: 'Commercial', icon: TrendingUp, count: 5, color: 'from-black to-gray-800' },
    { id: 'residential', name: 'Residential', icon: Award, count: 5, color: 'from-[#012E71] to-black' },
  ]

  const blogshowPosts = [
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
export { blogshowPosts, blogCategories}