    import React, { useState, useEffect } from 'react';
import { Award, Globe, Shield, BarChart3, Zap, ArrowRight, Play, Users, TrendingUp, Leaf, Menu, X, Target, Lightbulb, Heart, CheckCircle } from 'lucide-react';

export default function Zero13About() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "ZERO13 was founded with a vision to revolutionize carbon credit markets through AI and blockchain technology."
    },
    {
      year: "2023",
      title: "Platform Launch",
      description: "Launched the ZERO13 Hub platform connecting multiple carbon exchanges and registries globally."
    },
    {
      year: "2024",
      title: "COP28 Recognition",
      description: "Won prestigious award at COP28 for innovation in climate technology and carbon credit transparency."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding operations across Southeast Asia with focus on Indonesia's growing carbon market."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Transparency",
      description: "We believe in complete transparency in carbon credit pricing, trading, and verification processes."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuous innovation through AI and blockchain technology to solve climate finance challenges."
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Our commitment to environmental sustainability drives every decision we make."
    },
    {
      icon: CheckCircle,
      title: "Trust",
      description: "Building trust in carbon markets through verified, secure, and reliable transactions."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1e1?w=400&h=400&fit=crop&crop=face",
      description: "Former Goldman Sachs executive with 15+ years in climate finance."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Blockchain architect and AI researcher from MIT with expertise in DeFi."
    },
    {
      name: "Dr. Aisha Patel",
      role: "Chief Science Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Climate scientist and carbon verification expert from Stanford University."
    },
    {
      name: "James Liu",
      role: "Head of Indonesia Operations",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Local market specialist leading ZERO13's expansion in Southeast Asia."
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
              <a href="/" className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Home
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>
              </a>
              <a href="/about" className="px-4 py-2 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                About
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-100 transition-transform duration-200"></div>
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
                <a href="/about" className="block px-4 py-3 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium">
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
        
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <Award className="h-6 w-6" />
              <span className="font-semibold text-lg">COP28 Award Winner</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              About 
              <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                ZERO13
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We're revolutionizing carbon credit markets through innovative AI and blockchain technology, 
              building trust and transparency in the fight against climate change.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-green-600">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To restore trust in carbon credit markets by eliminating greenwashing, double counting, 
                and market fragmentation through our AI and blockchain-driven platform ecosystem.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparency First</h4>
                    <p className="text-gray-600">Real-time pricing and verification of all carbon credits</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Global Connectivity</h4>
                    <p className="text-gray-600">Connecting markets, exchanges, and stakeholders worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technology Innovation</h4>
                    <p className="text-gray-600">Cutting-edge AI and blockchain solutions for climate finance</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border border-green-100">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "A world where carbon credit markets are transparent, efficient, and trustworthy, 
                    accelerating the global transition to Net Zero through technology innovation."
                  </p>
                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">2.5M+</div>
                      <div className="text-sm text-gray-600">Credits Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">50+</div>
                      <div className="text-sm text-gray-600">Global Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">100+</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission to transform carbon credit markets.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in ZERO13's mission to transform carbon markets.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start space-x-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {milestone.year}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600">
              The experts driving innovation in carbon credit technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group bg-white p-6 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Mission to
            <span className="block text-green-400">Transform Carbon Markets</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of the solution. Connect with ZERO13 and help build a more sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get Started Today
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300">
              Contact Our Team
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