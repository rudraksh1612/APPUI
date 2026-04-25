import React, { useState } from 'react';
import { Menu, ArrowRight, X } from 'lucide-react';

const Hero_2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-[#1a1a1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-30 p-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full"></div>
          </div>
          <span className="text-white text-xl font-semibold">Creative Studio</span>
          <button 
            className="ml-4 text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 h-full flex flex-col">
          <button 
            className="text-white hover:text-orange-500 transition-colors mb-12"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={28} />
          </button>
          
          <nav className="flex flex-col gap-6">
            <a href="#" className="text-white text-2xl font-medium hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#" className="text-white text-2xl font-medium hover:text-orange-500 transition-colors">
              Portfolio
            </a>
            <a href="#" className="text-white text-2xl font-medium hover:text-orange-500 transition-colors">
              Contact
            </a>
          </nav>
          
          {/* Large Brand Name at Bottom */}
          <div className="mt-auto overflow-hidden">
            <h2 className="text-white text-[120px] font-bold leading-none tracking-tight opacity-90">
              Dominic
            </h2>
          </div>
        </div>
      </div>

      {/* Overlay for menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-35"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Main Content Container */}
      <div className="relative w-full h-full flex items-center justify-between px-12">
        {/* Left Side Content */}
        <div className="z-20 max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span className="text-white text-sm">Available for Work</span>
          </div>
          
          <h1 className="text-white text-6xl font-bold leading-tight mb-4">
            Brand & UI/UX<br />
            Designer based<br />
            in London
          </h1>
        </div>

        {/* Right Side Content - Positioned Lower */}
        <div className="z-20 max-w-sm ml-auto mb-32">
          <p className="text-gray-300 text-base mb-8 leading-relaxed">
            Hi, I'm Dominic Wagner – a UI/UX and<br />
            brand designer passionate about<br />
            creating seamless digital experiences<br />
            that connect and convert.
          </p>
          
          <button className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
            <ArrowRight size={20} />
            <span className="font-medium">See my works</span>
          </button>
        </div>
      </div>

      {/* Large Brand Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <h2 className="text-white text-[280px] font-bold leading-none tracking-tight opacity-90">
          Dominic
        </h2>
      </div>
    </div>
  );
};

export default Hero_2;