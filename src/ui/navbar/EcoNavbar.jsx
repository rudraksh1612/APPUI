import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Calculator, 
  BookOpen, 
  Users, 
  Phone, 
  ChevronDown,
  Sparkles,
  Leaf,
  Globe,
  TrendingUp,
  Award,
  Shield
} from 'lucide-react';

export default function EcoNavbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: Home, gradient: 'from-blue-400 to-purple-500' },
    { name: 'Calculator', icon: Calculator, gradient: 'from-green-400 to-emerald-500' },
    {
      name: 'Learn',
      icon: BookOpen,
      gradient: 'from-orange-400 to-pink-500',
      dropdown: [
        { name: 'Carbon Basics', icon: Leaf, desc: 'Understanding carbon footprints' },
        { name: 'Climate Science', icon: Globe, desc: 'The science behind climate change' },
        { name: 'Sustainability Tips', icon: TrendingUp, desc: 'Practical eco-friendly advice' },
        { name: 'Success Stories', icon: Award, desc: 'Inspiring transformation journeys' }
      ]
    },
    { name: 'Community', icon: Users, gradient: 'from-purple-400 to-indigo-500' },
    { name: 'Contact', icon: Phone, gradient: 'from-pink-400 to-red-500' }
  ];

  const toggleMobile = () => setIsOpen(!isOpen);
  const handleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-2xl border-b border-gray-200 shadow-2xl' 
            : 'bg-white/60 backdrop-blur-xl'
        }`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/30 to-transparent transform -skew-x-12 translate-x-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-float opacity-30 ${
                i % 2 === 0 ? 'animate-pulse' : 'animate-bounce'
              }`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 20}%`,
                width: `${4 + (i % 3) * 2}px`,
                height: `${4 + (i % 3) * 2}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-200 group-hover:border-green-400 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <Leaf className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></div>
                </div>
              </div>
              
              {/* Desktop Brand Name */}
              <div className="hidden md:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-500">
                  CarbonWise
                </h1>
                <p className="text-xs text-gray-600 group-hover:text-green-600 transition-colors duration-300">
                  Carbon Footprint Calculator
                </p>
              </div>
              
              {/* Mobile/Tablet Brand Name */}
              <div className="md:hidden">
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-green-600 bg-clip-text text-transparent">
                  CarbonWise
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => item.dropdown && handleDropdown(index)}
                    className="group relative flex items-center space-x-2 px-4 py-3 rounded-xl text-gray-800 hover:text-gray-900 transition-all duration-300 hover:bg-green-50/50 backdrop-blur-sm"
                  >
                    <div className={`relative p-2 rounded-lg bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <item.icon className="w-5 h-5 group-hover:opacity-0 transition-opacity duration-300" />
                    <span className="font-medium text-sm tracking-wide group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} />
                    )}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full`}></div>
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-2xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden animate-slideDown">
                      <div className="p-2">
                        {item.dropdown.map((dropItem) => (
                          <button
                            key={dropItem.name}
                            className="group flex items-center space-x-3 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 w-full text-left"
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                              <dropItem.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-gray-800 font-medium text-sm group-hover:text-green-600 transition-colors duration-300">
                                {dropItem.name}
                              </h3>
                              <p className="text-gray-600 text-xs mt-1 group-hover:text-gray-700 transition-colors duration-300">
                                {dropItem.desc}
                              </p>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Sparkles className="w-4 h-4 text-green-400" />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden xl:block">
              <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Get Started</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobile}
              className="xl:hidden relative p-3 rounded-xl bg-green-50 border border-green-200 text-green-700 hover:bg-green-100 transition-all duration-300"
            >
              <div className="relative w-6 h-6">
                <Menu className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                <X className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 xl:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={toggleMobile}
        />
        
        <div className={`absolute top-0 right-0 w-full sm:w-80 h-full bg-white/95 backdrop-blur-2xl border-l border-gray-200 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 pt-24">
            
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-green-200 bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-gray-800 font-bold">CarbonWise</h2>
                  <p className="text-xs text-gray-600">Carbon Calculator</p>
                </div>
              </div>
              <button
                onClick={toggleMobile}
                className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="group flex items-center space-x-4 p-4 rounded-xl text-gray-800 hover:text-gray-900 hover:bg-green-50 transition-all duration-300 w-full text-left"
                  onClick={toggleMobile}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium flex-1">{item.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Get Started Free</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}