import React, { useState, useEffect } from 'react';
import { User, Home, Briefcase, ChevronDown } from 'lucide-react';

const Hero_1 = () => {
  const [showPortalDropdown, setShowPortalDropdown] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Placeholder background images - replace with actual images
  const images = [
    'https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80',
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80',
    'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80',
    'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1920&q=80'
  ];

  useEffect(() => {
    // Show subtitle after mount
    setTimeout(() => setShowSub(true), 800);

    // Sliding background
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setBgIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 600);
    }, 3500);
    
    return () => clearInterval(interval);
  }, []);

  const handlePortalClick = (portalType = null) => {
    if (portalType) {
      console.log(`Navigating to ${portalType} portal`);
      setShowPortalDropdown(false);
    } else {
      setShowPortalDropdown(!showPortalDropdown);
    }
  };

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100vw'
      }}
    >
      {/* Fade overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 pointer-events-none ${fade ? 'opacity-70' : 'opacity-90'}`}
        style={{ zIndex: 1 }}
      />

      {/* Bottom-left: Tag, H1, Subtext */}
      <div className="absolute left-0 bottom-0 z-10 
                      w-full text-center top-1/4 p-4
                      xs:top-1/3 xs:p-4
                      sm:w-auto sm:text-left sm:top-auto sm:bottom-0 sm:p-6 sm:mb-32 sm:max-w-[50%]
                      md:p-8 md:mb-24 md:max-w-[55%]
                      lg:p-12 lg:mb-10 lg:max-w-2xl
                      flex flex-col gap-2 sm:gap-4">
        
        {/* AI-Powered Tag */}
        <p className="mb-1 sm:mb-2 text-xs tracking-widest uppercase">
          <span 
            className="inline-block px-2 py-1 xs:px-3 xs:py-1 sm:px-4 sm:py-1
                       rounded-full text-black shadow-xl 
                       transition duration-300 ease-in-out transform hover:scale-105
                       text-xs xs:text-xs sm:text-xs" 
            style={{ backgroundColor: '#FACC15' }}
          >
            AI-Powered
          </span>
        </p>

        {/* Main Heading */}
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl
                       font-bold text-[#F6FFB2] 
                       mb-2 sm:mb-4 leading-tight">
          <span style={{ color: '#FACC15' }}>VanMitra</span>
          <br className="hidden xs:block" />
          <span className="xs:hidden"> </span>
          Mapping Rights, Powering Targeted Tribal Development
        </h1>

        {/* Subtext */}
        <p className={`text-sm xs:text-base sm:text-lg
                       tracking-tight leading-tight font-semibold text-white 
                       mb-1 sm:mb-2
                       transition-opacity duration-700 
                       ${showSub ? 'opacity-100' : 'opacity-0'}`}>
          Digitizing forest rights, mapping assets with AI & Remote Sensing, and enabling data-driven decisions through WebGIS & DSS.
        </p>
      </div>

      {/* Bottom-right: Description + Buttons */}
      <div className="absolute right-0 z-10 
                      w-full text-center bottom-8 p-4
                      xs:bottom-12 xs:p-4
                      sm:w-auto sm:text-right sm:bottom-0 sm:p-6 sm:mb-32 sm:max-w-[45%]
                      md:p-8 md:mb-24 md:max-w-[40%]
                      lg:p-12 lg:mb-32 lg:max-w-md
                      flex flex-col items-center sm:items-end">
        
        {/* Description text */}
        <p className="mb-3 sm:mb-4 
                      text-sm xs:text-base sm:text-base
                      tracking-tighter leading-tight text-white font-semibold 
                      text-center sm:text-left
                      rounded-lg 
                      px-3 py-2 xs:px-4 xs:py-2 sm:px-4 sm:py-2">
          Access the VanMitra Portal and documentation for smarter, AI-powered tribal land governance and forest rights management.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col items-center space-y-4 w-full max-w-xs xs:max-w-sm sm:max-w-md">
          
          {/* Main Buttons Row */}
          <div className="flex flex-col gap-3 w-full xs:flex-row xs:gap-3 sm:flex-row sm:gap-4">
            
            {/* FRA Portal Button */}
            <button 
              onClick={() => handlePortalClick()}
              className="px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2 md:px-6 md:py-3
                         text-xs xs:text-sm sm:text-base
                         text-black font-semibold bg-gradient-to-br from-[#FACC15] to-yellow-500 hover:from-yellow-500 hover:to-yellow-600
                         rounded-full transition transform hover:scale-105 duration-300
                         w-full xs:w-auto flex items-center justify-center space-x-1 sm:space-x-2
                         shadow-lg"
            >
              <span>FRA Portal</span>
              <ChevronDown className={`w-3 h-3 xs:w-4 xs:h-4 transition-transform duration-200 ${showPortalDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Documentation Button */}
            <button 
              className="px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2 md:px-6 md:py-3
                         text-xs xs:text-sm sm:text-base
                         border sm:border-2 font-semibold bg-white/30 backdrop-blur-sm border-white/40 sm:border-white/50
                         text-white hover:bg-white hover:text-black 
                         rounded-full transition transform hover:scale-105 duration-300
                         w-full xs:w-auto shadow-lg"
              onClick={() => console.log('Documentation clicked')}
            >
              FRA Documentation
            </button>
          </div>
          
          {/* Portal Dropdown Buttons */}
          <div className={`w-full transition-all duration-500 overflow-hidden ${
            showPortalDropdown 
              ? 'max-h-60 opacity-100' 
              : 'max-h-0 opacity-0'
          }`}>
            <div className="space-y-2 sm:space-y-3 w-full">
              {/* User Portal Button */}
              <button 
                className="w-full px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 
                           text-xs xs:text-sm sm:text-base
                           bg-white/20 backdrop-blur-sm border border-white/30 
                           text-white hover:bg-white hover:text-black 
                           rounded-full transition-all transform hover:scale-105 duration-300
                           flex items-center justify-center space-x-2 shadow-md"
                onClick={() => handlePortalClick('user')}
              >
                <User className="w-4 h-4 xs:w-5 xs:h-5" />
                <span>User Portal</span>
              </button>
              
              {/* Gram Panchayat Portal Button */}
              <button 
                className="w-full px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 
                           text-xs xs:text-sm sm:text-base
                           bg-white/20 backdrop-blur-sm border border-white/30 
                           text-white hover:bg-white hover:text-black 
                           rounded-full transition-all transform hover:scale-105 duration-300
                           flex items-center justify-center space-x-2 shadow-md"
                onClick={() => handlePortalClick('gp')}
              >
                <Home className="w-4 h-4 xs:w-5 xs:h-5" />
                <span>Gram Panchayat Portal</span>
              </button>
              
              {/* Admin Portal Button */}
              <button 
                className="w-full px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 
                           text-xs xs:text-sm sm:text-base
                           bg-white/20 backdrop-blur-sm border border-white/30 
                           text-white hover:bg-white hover:text-black 
                           rounded-full transition-all transform hover:scale-105 duration-300
                           flex items-center justify-center space-x-2 shadow-md"
                onClick={() => handlePortalClick('admin')}
              >
                <Briefcase className="w-4 h-4 xs:w-5 xs:h-5" />
                <span>Admin Portal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG Wave Pattern at Bottom */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden pointer-events-none" 
           style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 120" 
             fill="none" 
             xmlns="http://www.w3.org/2000/svg" 
             className="w-full h-[60px] xs:h-[80px] sm:h-[100px] lg:h-[120px]">
          <path fill="#F0F1C5" fillOpacity="1" d="M0,80 C480,160 960,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero_1;