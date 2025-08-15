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
    author: "Olivia Parker",
    date: "2024-03-15",
    readTime: "5 min read",
    views: 1247,
    likes: 89,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    featured: true,
    rating: 4.9
  },
  {
    id: 2,
    title: "Eco-Friendly Cleaning Products That Actually Work",
    excerpt: "Discover the best green cleaning solutions that are both effective and safe for your family and pets.",
    category: "eco-friendly",
    author: "Henry Bennett",
    date: "2024-03-12",
    readTime: "7 min read",
    views: 892,
    likes: 67,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=300&fit=crop",
    featured: false,
    rating: 4.7
  },
  {
    id: 3,
    title: "Commercial Office Cleaning: Best Practices",
    excerpt: "Professional guidelines for maintaining a clean and healthy workplace environment.",
    category: "commercial",
    author: "Charlotte Evans",
    date: "2024-03-10",
    readTime: "6 min read",
    views: 756,
    likes: 45,
    image: "https://plus.unsplash.com/premium_photo-1663040355782-54d72d558f8a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xlYW5pbmclMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D",
    featured: false,
    rating: 4.8
  },
  {
    id: 4,
    title: "Residential Cleaning Checklist: Room by Room",
    excerpt: "A comprehensive guide to cleaning every room in your home efficiently and thoroughly.",
    category: "residential",
    author: "James Wright",
    date: "2024-03-08",
    readTime: "8 min read",
    views: 1103,
    likes: 92,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop",
    featured: false,
    rating: 4.9
  },
  {
    id: 5,
    title: "The Science Behind Professional Cleaning",
    excerpt: "Understanding the chemistry and techniques that make professional cleaning so effective.",
    category: "cleaning-tips",
    author: "Grace Johnson",
    date: "2024-03-05",
    readTime: "9 min read",
    views: 634,
    likes: 38,
    image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4f/6d/99/f2/7c/v1_E10/E10DAXQ.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=04bc3122af857113b16e1054d495d76fe4d492d8f84e6e4174f07f10de4b8780",
    featured: false,
    rating: 4.6
  },
  {
    id: 6,
    title: "Sustainable Cleaning for Large Facilities",
    excerpt: "How to implement eco-friendly cleaning practices in commercial and industrial settings.",
    category: "eco-friendly",
    author: "William Taylor",
    date: "2024-03-03",
    readTime: "10 min read",
    views: 445,
    likes: 29,
    image: "https://thumbs.dreamstime.com/b/group-janitors-cleaning-modern-office-caution-wet-floor-sign-103309220.jpg",
    featured: false,
    rating: 4.5
  }
]

export { blogshowPosts, blogCategories }

