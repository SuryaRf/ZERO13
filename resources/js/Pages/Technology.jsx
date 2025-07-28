import React, { useState, useEffect } from 'react';
import { Award, Globe, Shield, BarChart3, Zap, ArrowRight, Play, Users, TrendingUp, Leaf, Menu, X, Database, Lock, Clock, CheckCircle, Network, Cpu, FileText, Settings, Brain, Layers, Code, Server, CloudCog, GitBranch } from 'lucide-react';

export default function Zero13Technology() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStack, setActiveStack] = useState('ai');
  const [animatedStats, setAnimatedStats] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setAnimatedStats(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const techStacks = [
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Advanced artificial intelligence powering verification, pricing, and risk assessment',
      technologies: [
        { name: 'Natural Language Processing', usage: '95%', description: 'Document analysis and compliance' },
        { name: 'Computer Vision', usage: '88%', description: 'Satellite imagery verification' },
        { name: 'Predictive Analytics', usage: '92%', description: 'Carbon price forecasting' },
        { name: 'Anomaly Detection', usage: '97%', description: 'Fraud prevention' },
        { name: 'Deep Learning', usage: '85%', description: 'Pattern recognition' }
      ]
    },
    {
      id: 'blockchain',
      title: 'Blockchain Infrastructure',
      icon: Layers,
      description: 'Multi-chain architecture ensuring transparency and immutability',
      technologies: [
        { name: 'Ethereum Integration', usage: '100%', description: 'Smart contracts & DeFi' },
        { name: 'Polygon Network', usage: '98%', description: 'Low-cost transactions' },
        { name: 'Hyperledger Fabric', usage: '95%', description: 'Enterprise blockchain' },
        { name: 'IPFS Storage', usage: '93%', description: 'Decentralized file storage' },
        { name: 'Cross-chain Bridges', usage: '90%', description: 'Multi-blockchain support' }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud Architecture',
      icon: CloudCog,
      description: 'Scalable, secure, and globally distributed cloud infrastructure',
      technologies: [
        { name: 'Kubernetes', usage: '100%', description: 'Container orchestration' },
        { name: 'AWS Services', usage: '95%', description: 'Primary cloud provider' },
        { name: 'Microservices', usage: '98%', description: 'Modular architecture' },
        { name: 'API Gateway', usage: '100%', description: 'Secure API management' },
        { name: 'Auto Scaling', usage: '96%', description: 'Dynamic resource allocation' }
      ]
    },
    {
      id: 'security',
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Military-grade security protecting all platform operations',
      technologies: [
        { name: 'Zero Trust Architecture', usage: '100%', description: 'Never trust, always verify' },
        { name: 'End-to-End Encryption', usage: '100%', description: 'AES-256 encryption' },
        { name: 'Multi-Factor Auth', usage: '100%', description: 'Biometric & token-based' },
        { name: 'Threat Intelligence', usage: '94%', description: 'AI-powered monitoring' },
        { name: 'Compliance Automation', usage: '91%', description: 'Regulatory adherence' }
      ]
    }
  ];

  const architectureComponents = [
    {
      layer: 'Presentation Layer',
      components: ['React Frontend', 'Mobile Apps', 'API Portal', 'Admin Dashboard'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      layer: 'API Gateway',
      components: ['Load Balancer', 'Rate Limiting', 'Authentication', 'Monitoring'],
      color: 'from-green-500 to-green-600'
    },
    {
      layer: 'Microservices',
      components: ['Carbon Registry', 'Trading Engine', 'Verification Service', 'Analytics'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      layer: 'AI/ML Services',
      components: ['Prediction Models', 'Image Recognition', 'NLP Engine', 'Risk Assessment'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      layer: 'Blockchain Layer',
      components: ['Smart Contracts', 'Consensus Protocol', 'Cross-chain Bridge', 'Token Management'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      layer: 'Data Layer',
      components: ['Time Series DB', 'Document Store', 'Cache Layer', 'Backup Systems'],
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const innovations = [
    {
      title: 'ZERO13 Chain (Pyctor)',
      description: 'Our proprietary blockchain optimized for carbon credit transactions',
      features: ['Sub-second finality', 'Energy efficient consensus', 'Built-in compliance', 'Cross-chain compatibility'],
      status: 'Production'
    },
    {
      title: 'AI Verification Engine',
      description: 'Advanced machine learning models for automated carbon credit verification',
      features: ['99.7% accuracy rate', 'Real-time processing', 'Satellite data integration', 'Fraud detection'],
      status: 'Production'
    },
    {
      title: 'Dynamic Pricing Oracle',
      description: 'AI-powered pricing mechanism for transparent carbon credit valuation',
      features: ['Market sentiment analysis', 'Real-time price discovery', 'Risk-adjusted pricing', 'Volatility modeling'],
      status: 'Beta'
    },
    {
      title: 'Interoperability Protocol',
      description: 'Seamless connection between different blockchain networks and registries',
      features: ['Multi-chain support', 'Atomic swaps', 'Protocol agnostic', 'Legacy system integration'],
      status: 'Development'
    }
  ];

  const techStats = [
    { label: 'API Calls/Month', value: '50M+', description: 'High-performance processing' },
    { label: 'Uptime Guarantee', value: '99.99%', description: 'Enterprise reliability' },
    { label: 'Transaction Speed', value: '<1s', description: 'Lightning fast settlement' },
    { label: 'Data Points Analyzed', value: '1B+', description: 'Comprehensive analytics' },
    { label: 'Security Audits', value: '24/7', description: 'Continuous monitoring' },
    { label: 'Global Nodes', value: '100+', description: 'Worldwide distribution' }
  ];

  const currentStack = techStacks.find(stack => stack.id === activeStack);

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
              <a href="/technology" className="px-4 py-2 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Technology
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-100 transition-transform duration-200"></div>
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
                <a href="/about" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  About
                </a>
                <a href="/solutions" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  Solutions
                </a>
                <a href="/technology" className="block px-4 py-3 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium">
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
              <Cpu className="h-6 w-6" />
              <span className="font-semibold text-lg">Cutting-Edge Technology Stack</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Advanced
              <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Powered by state-of-the-art AI, blockchain infrastructure, and cloud architecture 
              to deliver unparalleled performance in carbon credit markets.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform <span className="text-green-600">Performance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time metrics showcasing our technology's capabilities and reliability.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStats.map((stat, index) => (
              <div 
                key={index}
                className={`p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 text-center transform transition-all duration-500 ${
                  animatedStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Tabs */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology <span className="text-green-600">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive technology ecosystem powering the future of carbon markets.
            </p>
          </div>
          
          {/* Stack Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techStacks.map((stack) => {
              const Icon = stack.icon;
              return (
                <button
                  key={stack.id}
                  onClick={() => setActiveStack(stack.id)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeStack === stack.id
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-green-100'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-semibold">{stack.title}</span>
                </button>
              );
            })}
          </div>
          
          {/* Stack Details */}
          {currentStack && (
            <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <currentStack.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{currentStack.title}</h3>
                        <p className="text-green-600 font-semibold">Core Technology Component</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {currentStack.description}
                    </p>
                    
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-gray-900">Technology Adoption</h4>
                      <div className="space-y-4">
                        {currentStack.technologies.map((tech, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-gray-900">{tech.name}</span>
                              <span className="text-green-600 font-bold">{tech.usage}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                                style={{ width: tech.usage }}
                              ></div>
                            </div>
                            <p className="text-sm text-gray-600">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur-3xl opacity-20"></div>
                    <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Implementation Benefits</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-gray-900">Scalable Architecture</div>
                            <div className="text-gray-600 text-sm">Handles millions of transactions seamlessly</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-gray-900">Enterprise Security</div>
                            <div className="text-gray-600 text-sm">Military-grade protection for all operations</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-gray-900">Global Deployment</div>
                            <div className="text-gray-600 text-sm">Distributed infrastructure across continents</div>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-semibold text-gray-900">Real-time Processing</div>
                            <div className="text-gray-600 text-sm">Sub-second response times guaranteed</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              System <span className="text-green-600">Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our layered architecture ensures scalability, security, and performance across all platform operations.
            </p>
          </div>
          
          <div className="space-y-4">
            {architectureComponents.map((layer, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${layer.color} p-6 rounded-2xl text-white transform transition-all duration-500 hover:scale-105`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-xl font-bold mb-2">{layer.layer}</h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.components.map((component, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">Layer {index + 1}</div>
                    <div className="text-sm opacity-80">{layer.components.length} Components</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovations */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Innovations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Breakthrough technologies developed specifically for carbon credit market challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{innovation.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    innovation.status === 'Production' ? 'bg-green-100 text-green-700' :
                    innovation.status === 'Beta' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {innovation.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {innovation.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <div className="space-y-2">
                    {innovation.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Experience Our
            <span className="block text-green-400">Advanced Technology</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to leverage cutting-edge AI and blockchain technology for your carbon credit operations? 
            Our technical team is here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Technical Demo
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300">
              API Documentation
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