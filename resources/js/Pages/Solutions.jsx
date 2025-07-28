import React, { useState, useEffect } from 'react';
import { Award, Globe, Shield, BarChart3, Zap, ArrowRight, Play, Users, TrendingUp, Leaf, Menu, X, Database, Lock, Clock, CheckCircle, Network, Cpu, FileText, Settings } from 'lucide-react';

export default function Zero13Solutions() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('infrastructure');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const mainSolutions = [
    {
      id: 'infrastructure',
      icon: BarChart3,
      title: "Digital Infrastructure",
      subtitle: "Climate & Sustainability Markets Infrastructure",
      description: "Comprehensive digital backbone for global carbon credit markets, providing seamless connectivity and interoperability.",
      features: [
        "Multi-blockchain architecture",
        "Real-time data synchronization",
        "Scalable microservices",
        "Cloud-native deployment",
        "API-first design"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "Sub-second transaction processing",
        "Global network coverage",
        "Enterprise-grade security"
      ]
    },
    {
      id: 'carbon-credits',
      icon: Leaf,
      title: "Carbon Credits Platform",
      subtitle: "Digital Issuance, Recording & Verification",
      description: "End-to-end carbon credit lifecycle management with AI-powered verification and blockchain-based immutable records.",
      features: [
        "Automated credit issuance",
        "AI-powered verification",
        "Blockchain immutability",
        "Real-time monitoring",
        "Compliance automation"
      ],
      benefits: [
        "Reduce verification time by 80%",
        "Eliminate double counting",
        "Automated compliance reporting",
        "Enhanced market confidence"
      ]
    },
    {
      id: 'transparency',
      icon: Shield,
      title: "Market Transparency",
      subtitle: "Transparent Pricing, Trading & Settlement",
      description: "Real-time price discovery, transparent trading mechanisms, and instant settlement for carbon credits and ESG assets.",
      features: [
        "Real-time price feeds",
        "Transparent order books",
        "Instant settlement",
        "Market analytics",
        "Risk management tools"
      ],
      benefits: [
        "Fair price discovery",
        "Reduced counterparty risk",
        "Increased market liquidity",
        "Enhanced trust and adoption"
      ]
    },
    {
      id: 'cybersecurity',
      icon: Lock,
      title: "Advanced Cybersecurity",
      subtitle: "End-to-End Operational Security",
      description: "Military-grade security protocols protecting all aspects of carbon credit transactions and data integrity.",
      features: [
        "Zero-trust architecture",
        "Multi-factor authentication",
        "Encrypted data transmission",
        "Threat detection AI",
        "Compliance monitoring"
      ],
      benefits: [
        "Bank-level security standards",
        "Regulatory compliance assurance",
        "24/7 threat monitoring",
        "Data sovereignty protection"
      ]
    },
    {
      id: 'aggregation',
      icon: Network,
      title: "Global Aggregation",
      subtitle: "Unified Carbon Markets Ecosystem",
      description: "Connecting and aggregating global carbon markets, exchanges, registries, and participants into a unified ecosystem.",
      features: [
        "Multi-exchange connectivity",
        "Registry integration",
        "Participant onboarding",
        "Cross-border settlements",
        "Unified reporting"
      ],
      benefits: [
        "Access to global liquidity",
        "Reduced fragmentation",
        "Simplified operations",
        "Enhanced market efficiency"
      ]
    },
    {
      id: 'transition',
      icon: TrendingUp,
      title: "Digital Transition",
      subtitle: "From Niche Assets to Circular Economy",
      description: "Facilitating the transition of digital climate assets from a niche market to mainstream circular economy adoption.",
      features: [
        "Educational resources",
        "Onboarding programs",
        "Integration support",
        "Market maker services",
        "Advisory consulting"
      ],
      benefits: [
        "Accelerated market adoption",
        "Reduced barriers to entry",
        "Enhanced market maturity",
        "Sustainable growth pathways"
      ]
    }
  ];

  const integrationsData = [
    { name: "Verra", type: "Registry", status: "Active", connections: "2.1M credits" },
    { name: "Gold Standard", type: "Registry", status: "Active", connections: "850K credits" },
    { name: "Climate Action Reserve", type: "Registry", status: "Active", connections: "1.3M credits" },
    { name: "ICE", type: "Exchange", status: "Active", connections: "500K trades" },
    { name: "EEX", type: "Exchange", status: "Active", connections: "320K trades" },
    { name: "CBL Markets", type: "Exchange", status: "Active", connections: "180K trades" },
    { name: "Deutsche Bank", type: "Custodian", status: "Active", connections: "€2.5B AUM" },
    { name: "BNP Paribas", type: "Custodian", status: "Active", connections: "€1.8B AUM" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Registration",
      description: "ESG projects register and provide documentation through our automated onboarding system."
    },
    {
      step: "02", 
      title: "AI Verification",
      description: "Our AI algorithms verify project authenticity, additionality, and environmental impact."
    },
    {
      step: "03",
      title: "Credit Issuance",
      description: "Verified carbon credits are digitally issued and recorded on the blockchain."
    },
    {
      step: "04",
      title: "Market Trading",
      description: "Credits enter the transparent marketplace with real-time pricing and trading."
    },
    {
      step: "05",
      title: "Settlement & Retirement",
      description: "Instant settlement and automated retirement tracking with compliance reporting."
    }
  ];

  const currentSolution = mainSolutions.find(solution => solution.id === activeTab);

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
              <a href="/solutions" className="px-4 py-2 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium relative group">
                Solutions
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-green-500 scale-x-100 transition-transform duration-200"></div>
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
                <a href="/about" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium">
                  About
                </a>
                <a href="/solutions" className="block px-4 py-3 text-green-600 bg-green-50 rounded-lg transition-all duration-200 font-medium">
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
              <Settings className="h-6 w-6" />
              <span className="font-semibold text-lg">Complete Solution Suite</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              End-to-end platform solutions for carbon credit markets, from digital infrastructure 
              to transparent trading and advanced cybersecurity.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Overview Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Six Core <span className="text-green-600">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each solution is designed to address specific challenges in carbon credit markets 
              while working seamlessly together as an integrated ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainSolutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div 
                  key={index}
                  onClick={() => setActiveTab(solution.id)}
                  className={`group p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                    activeTab === solution.id 
                      ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white border-green-500 shadow-xl' 
                      : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100 hover:shadow-xl'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                    activeTab === solution.id 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-green-500 to-emerald-600'
                  }`}>
                    <Icon className={`h-6 w-6 ${activeTab === solution.id ? 'text-white' : 'text-white'}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${activeTab === solution.id ? 'text-white' : 'text-gray-900'}`}>
                    {solution.title}
                  </h3>
                  <p className={`text-sm mb-3 ${activeTab === solution.id ? 'text-green-100' : 'text-gray-600'}`}>
                    {solution.subtitle}
                  </p>
                  <p className={`text-sm ${activeTab === solution.id ? 'text-white/90' : 'text-gray-600'}`}>
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Solution View */}
      {currentSolution && (
        <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                        <currentSolution.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{currentSolution.title}</h3>
                        <p className="text-green-600 font-semibold">{currentSolution.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {currentSolution.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features</h4>
                        <div className="space-y-3">
                          {currentSolution.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-6">Business Benefits</h4>
                      <div className="space-y-4">
                        {currentSolution.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <ArrowRight className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-gray-700 leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className="w-full mt-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Learn More About {currentSolution.title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process Flow */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-green-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures efficient carbon credit lifecycle management 
              from project registration to retirement.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-green-200 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 relative z-10">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Global <span className="text-green-600">Integrations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connected to leading registries, exchanges, and financial institutions worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Partner</th>
                    <th className="px-6 py-4 text-left font-semibold">Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Status</th>
                    <th className="px-6 py-4 text-left font-semibold">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  {integrationsData.map((integration, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{integration.name}</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {integration.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-green-700 font-medium">{integration.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{integration.connections}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Implement
            <span className="block text-green-400">Our Solutions?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss how ZERO13 solutions can transform 
            your carbon credit operations and accelerate your sustainability goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-full font-semibold hover:bg-green-400 hover:text-gray-900 transition-all duration-300">
              Download Whitepaper
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