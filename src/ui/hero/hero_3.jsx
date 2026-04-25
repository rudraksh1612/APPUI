import React from 'react';

const Hero_3 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 lg:px-16 py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-5 h-5"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              </svg>
            </div>
            <span className="text-white text-xl font-semibold">Pagedone</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-200 transition-colors">
              About us
            </a>
            <button className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors">
              Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center gap-1 text-white hover:text-gray-200 transition-colors">
              Features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <button className="px-6 py-2 text-white hover:text-gray-200 transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Sign up
            </button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center h-[calc(100%-80px)] px-8 lg:px-16">
          <div className="max-w-7xl w-full flex items-center justify-between">
            {/* Left Content */}
            <div className="max-w-md">
              <p className="text-white text-base leading-relaxed mb-8">
                Experience the art of redefined luxury living where comfort seamlessly intertwines with elegance. At our company, we specialize.
              </p>
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Contact Us
              </button>
            </div>

            {/* Center/Right Heading */}
            <div className="flex-1 flex items-center justify-center ml-12">
              <h1 className="text-white font-serif">
                <div className="text-7xl lg:text-8xl font-light leading-tight">
                  Finding Your
                </div>
                <div className="text-7xl lg:text-8xl font-light leading-tight mt-2">
                  Dream Home
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero_3;