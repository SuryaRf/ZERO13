import React, { useState, useEffect } from 'react';
import { Award, Globe, Shield, BarChart3, Zap, ArrowRight, Play, Users, TrendingUp, Leaf, Menu, X } from 'lucide-react';

export default function Zero13Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: "Carbon Credits Processed", value: "2.5M+", icon: Leaf },
    { label: "Global Exchanges Connected", value: "50+", icon: Globe },
    { label: "ESG Projects Facilitated", value: "1,200+", icon: TrendingUp },
    { label: "Active Users", value: "10K+", icon: Users }
  ];

  const solutions = [
    {
      icon: BarChart3,
      title: "Infrastructure",
      description: "Digital climate and sustainability markets infrastructure"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Transparent pricing, trading, and real-time settlement"
    },
    {
      icon: Globe,
      title: "Aggregation",
      description: "Global carbon markets and participants connection"
    },
    {
      icon: Zap,
      title: "Cybersecurity",
      description: "Advanced end-to-end operational security"
    }
  ];

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
              <a href="/" className="px-4 py-2 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Home
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-100 transition-transform duration-200"></div>
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
              <a href="/insights" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Insights
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/contact" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Contact
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
            </div>
            
            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Login Link - Hidden on mobile */}
              <a href="#" className="hidden md:block text-gray-600 hover:text-green-600 font-medium transition-colors">
                Login
              </a>
              
              {/* CTA Button */}
              <button className="relative bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              {/* Mobile Menu Button */}
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
                <a href="/" className="block px-4 py-3 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium">
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
                <a href="/insights" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
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
        
        {/* Subtle bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="flex items-center space-x-2 text-green-600">
                <Award className="h-5 w-5" />
                <span className="font-semibold">COP28 Award Winner</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI & Blockchain
                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  Carbon Credits
                </span>
                <span className="block">Revolution</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                The automated AI and blockchain-driven 'Network of Networks' PaaS ecosystem 
                for carbon credits and ESG real-world assets, interoperable across multiple 
                APIs and blockchains.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Explore Platform</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-green-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Live Platform Stats</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div 
                          key={index}
                          className={`p-4 rounded-xl transition-all duration-500 ${
                            currentStat === index 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white transform scale-105' 
                              : 'bg-gray-50 text-gray-900'
                          }`}
                        >
                          <Icon className="h-6 w-6 mb-2" />
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-sm opacity-80">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive <span className="text-green-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ZERO13 Hub facilitates transparent, secure, and efficient carbon credit trading 
              through our integrated platform ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Powered by Advanced
                <span className="block">AI & Blockchain</span>
              </h2>
              <p className="text-xl text-green-100 mb-8">
                ZERO13 Chain ('Pyctor') enables seamless interoperability across multiple 
                blockchains, while our AI algorithms ensure accurate verification and 
                transparent pricing of carbon credits.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Multi-blockchain interoperability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>AI-powered verification systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>Real-time settlement capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  <span>End-to-end cybersecurity</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">Network Coverage</div>
                    <div className="text-green-200">Global Reach</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">50+</div>
                      <div className="text-sm text-green-200">Exchanges</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm text-green-200">Blockchains</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm text-green-200">Countries</div>
                    </div>
                  </div>
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
            Ready to Transform Your
            <span className="block text-green-400">Carbon Credit Strategy?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the ZERO13 ecosystem and be part of the future of sustainable finance.
            Connect with our platform today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300">
              Contact Sales
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