import React, { useState, useEffect } from 'react';
import { Award, Globe, Shield, BarChart3, Zap, ArrowRight, Play, Users, TrendingUp, Leaf, Menu, X, Database, Lock, Clock, CheckCircle, Network, Cpu, FileText, Settings, Brain, Calendar, Eye, MessageCircle, Search, Filter, Tag, Share2, BookOpen, Star } from 'lucide-react';

export default function Zero13Insights() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Articles', count: 24 },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 8 },
    { id: 'blockchain', name: 'Blockchain', count: 6 },
    { id: 'carbon-markets', name: 'Carbon Markets', count: 7 },
    { id: 'sustainability', name: 'Sustainability', count: 3 }
  ];

  const featuredArticle = {
    title: "The Growing Influence of Tech Firms in Banks' Climate Risk Strategies",
    excerpt: "As climate change intensifies, banks are prioritizing stronger climate risk management—not only as a corporate obligation but also as a key factor in maintaining financial stability and meeting regulatory demands.",
    author: "Dr. Sarah Chen",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "carbon-markets",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: true,
    tags: ["Climate Risk", "Banking", "Technology", "AI"],
    views: "2.3K",
    likes: "156"
  };

  const articles = [
    {
      id: 1,
      title: "AI-Powered Carbon Credit Verification: The Future is Here",
      excerpt: "Machine learning algorithms are revolutionizing how we verify and validate carbon credits, reducing processing time by 80% while improving accuracy.",
      author: "Marcus Rodriguez",
      date: "Jan 12, 2025",
      readTime: "6 min read",
      category: "ai-ml",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      tags: ["AI", "Verification", "Automation"],
      views: "1.8K",
      likes: "94"
    },
    {
      id: 2,
      title: "Blockchain Interoperability: Connecting Carbon Markets Globally",
      excerpt: "How ZERO13's multi-chain architecture is breaking down silos between different carbon registries and exchanges worldwide.",
      author: "Dr. Aisha Patel",
      date: "Jan 10, 2025",
      readTime: "7 min read",
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
      tags: ["Blockchain", "Interoperability", "Global Markets"],
      views: "1.5K",
      likes: "87"
    },
    {
      id: 3,
      title: "The Psychology of Carbon Pricing: Market Behavior Analysis",
      excerpt: "Understanding how psychological factors and market sentiment influence carbon credit pricing and trading decisions.",
      author: "James Liu",
      date: "Jan 8, 2025",
      readTime: "5 min read",
      category: "carbon-markets",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      tags: ["Pricing", "Psychology", "Market Analysis"],
      views: "2.1K",
      likes: "128"
    },
    {
      id: 4,
      title: "Zero Trust Security in Carbon Credit Platforms",
      excerpt: "Implementing military-grade security protocols to protect sensitive carbon trading data and transactions.",
      author: "Elena Vasquez",
      date: "Jan 5, 2025",
      readTime: "9 min read",
      category: "blockchain",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=250&fit=crop",
      tags: ["Security", "Zero Trust", "Cybersecurity"],
      views: "1.2K",
      likes: "73"
    },
    {
      id: 5,
      title: "Machine Learning for ESG Project Risk Assessment",
      excerpt: "How advanced algorithms evaluate environmental, social, and governance factors to predict project success rates.",
      author: "Dr. Michael Chen",
      date: "Jan 3, 2025",
      readTime: "6 min read",
      category: "ai-ml",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["ESG", "Risk Assessment", "Machine Learning"],
      views: "1.7K",
      likes: "105"
    },
    {
      id: 6,
      title: "The Role of Satellite Data in Carbon Verification",
      excerpt: "Leveraging remote sensing technology and computer vision for real-time monitoring of carbon sequestration projects.",
      author: "Dr. Sarah Chen",
      date: "Dec 28, 2024",
      readTime: "8 min read",
      category: "ai-ml",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
      tags: ["Satellite Data", "Verification", "Remote Sensing"],
      views: "2.5K",
      likes: "167"
    }
  ];

  const trendingTopics = [
    { name: "AI Verification", count: 12 },
    { name: "Blockchain Scaling", count: 8 },
    { name: "Carbon Pricing", count: 15 },
    { name: "ESG Compliance", count: 6 },
    { name: "Green Finance", count: 9 }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-green-100/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-white font-black text-lg">Z13</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  ZERO13
                </span>
                <div className="text-xs text-gray-500 font-medium -mt-1">Carbon Intelligence</div>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="/" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Home
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/about" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                About
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/solutions" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Solutions
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/technology" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Technology
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/insights" className="px-4 py-2 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Insights
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/contact" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Contact
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
            </div>
            
            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <a href="#" className="hidden md:block text-gray-600 hover:text-green-600 font-medium transition-colors">
                Login
              </a>
              <button className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-green-100/50 bg-white/95 backdrop-blur-xl">
              <div className="px-4 py-4 space-y-2">
                <a href="/" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  Home
                </a>
                <a href="/about" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  About
                </a>
                <a href="/solutions" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  Solutions
                </a>
                <a href="/technology" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  Technology
                </a>
                <a href="/insights" className="block px-4 py-3 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  Insights
                </a>
                <a href="/contact" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  Contact
                </a>
                <div className="pt-4 border-t border-green-100">
                  <a href="#" className="block px-4 py-3 text-gray-600 hover:text-green-600 font-medium transition-colors">
                    Login
                  </a>
                  <button className="w-full mt-2 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-6 py-3 rounded-full font-semibold">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <BookOpen className="h-6 w-6" />
              <span className="font-semibold text-lg">Technology Insights & Research</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Latest
              <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Explore cutting-edge research, industry analysis, and technological breakthroughs 
              shaping the future of carbon credit markets and sustainable finance.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {getCategoryName(featuredArticle.category)}
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredArticle.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{featuredArticle.likes}</span>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{featuredArticle.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{featuredArticle.author}</div>
                      <div className="text-sm text-gray-500">{featuredArticle.date} • {featuredArticle.readTime}</div>
                    </div>
                  </div>
                  
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl shadow-lg border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                          {getCategoryName(article.category)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-xs">{article.author.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{article.author}</div>
                            <div className="text-xs text-gray-500">{article.date}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-3 w-3" />
                            <span>{article.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3" />
                            <span>{article.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Load More Articles
                </button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Trending Topics */}
              <div className="bg-white rounded-2xl shadow-lg border border-green-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-green-50 rounded-lg transition-colors cursor-pointer group">
                      <span className="font-medium text-gray-700 group-hover:text-green-600">#{topic.name}</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                        {topic.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="text-green-100 mb-4 text-sm">
                  Get the latest insights on carbon markets and climate technology delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white outline-none"
                  />
                  <button className="w-full bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Contribute
            <span className="block text-green-400">Your Insights?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of experts and thought leaders. Share your knowledge 
            and help shape the future of carbon credit markets.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Submit Article
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z13</span>
                </div>
                <span className="text-xl font-bold text-white">ZERO13</span>
              </div>
              <p className="text-gray-400">
                Leading the transformation of carbon credit markets through AI and blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Carbon Credits</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Transparency</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Cybersecurity</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Insights</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Indonesia Office</li>
                <li className="text-gray-400">Malang, Indonesia</li>
                <li><a href="#" className="hover:text-green-400 transition-colors">hello@zero13.id</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ZERO13. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}