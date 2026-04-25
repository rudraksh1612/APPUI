import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header({ onToggleSidebar, componentName }) {
  const navigate = useNavigate();

  const handleBrowseComponents = () => {
    navigate('/component_select');
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <nav className="w-full h-20 md:h-24 lg:h-28 flex items-center justify-between px-4 md:px-8 bg-black border-b border-white/10">
      {/* Logo - Left */}
      <div className="flex items-center gap-2 md:gap-3 cursor-pointer" onClick={handleHomeClick}>
        <img 
          src={logo} 
          alt="APP.UI Logo" 
          className="h-8 md:h-12 lg:h-16 w-auto"
        />
        <div className="text-white font-black tracking-tighter" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.08em', lineHeight: '1' }}>
          APP.UI
        </div>
        <span className="text-white/40 text-[10px] md:text-xs ml-1 md:ml-2 mt-2 md:mt-4">©2025</span>
      </div>

      {/* Component Name - Middle */}
      <div className="flex-1 max-w-md mx-2 md:mx-4 lg:mx-8 text-center">
        <h2 className="text-sm md:text-lg lg:text-xl font-bold text-white tracking-wider uppercase" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
          [ {componentName || 'Select a Component'} ]
        </h2>
      </div>

      {/* Right side - Navigation */}
      <div className="hidden md:flex items-center gap-3 lg:gap-6">
        <button
          onClick={handleHomeClick}
          className="text-white/90 text-xs font-bold tracking-wider uppercase hover:text-white transition-colors"
        >
          Home
        </button>
        <a
          href="#"
          className="text-white/90 text-xs font-bold tracking-wider uppercase hover:text-white transition-colors"
          onClick={(e) => { e.preventDefault(); navigate('/about'); }}
          style={{ cursor: 'pointer' }}
        >
          About
        </a>
        <button
          onClick={handleBrowseComponents}
          className="px-4 py-2 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors rounded-sm"
        >
          Browse
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white hover:text-gray-300 transition-colors"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
    </nav>
  );
}