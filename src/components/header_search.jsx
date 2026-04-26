import React from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HeaderSearch({ onSearch, searchQuery = '' }) {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate('/');

  // Real-time search — fires on every keystroke
  const handleChange = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  const handleClear = () => {
    if (onSearch) onSearch('');
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-transparent">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={handleHomeClick}>
        <div className="text-white font-black tracking-tighter" style={{ fontSize: '5.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.08em', lineHeight: '1' }}>
          APP.UI
        </div>
        <span className="text-white/40 text-xs ml-3 mt-8">©2025</span>
      </div>

      {/* Search Bar - real-time controlled */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 focus-within:border-white/40 transition-colors">
          <Search className="w-4 h-4 text-white/60 mr-3 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleChange}
            placeholder="Search components..."
            className="bg-transparent text-white placeholder-white/60 flex-1 outline-none text-sm"
          />
          {searchQuery && (
            <button onClick={handleClear} className="ml-2 text-white/40 hover:text-white/80 transition-colors">
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="text-white/90 text-sm font-medium hover:text-white transition-colors"
          onClick={(e) => { e.preventDefault(); navigate('/about'); }}
          style={{ cursor: 'pointer' }}
        >
          About us
        </a>
        <a
          href="#"
          className="text-white/90 text-sm font-medium hover:text-white transition-colors"
          onClick={(e) => { e.preventDefault(); navigate('/component_select'); }}
          style={{ cursor: 'pointer' }}
        >
          Browse Components
        </a>
      </div>
    </nav>
  );
}
