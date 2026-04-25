import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../landing_page/footer';
import SearchBar from './header_search';

export default function ComponentSelect() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate('/page_divider', { state: { category } });
  };

  return (
    <div className="min-h-screen bg-black">
      <SearchBar onSearch={(query) => console.log('Search:', query)} />
      <div className="p-4 md:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

          {/* Navbar category */}
          <div 
            onClick={() => handleCategoryClick('navbar')}
            className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[220px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold tracking-tight text-white">NAVBAR</h3>
              <p className="text-white/60 text-xs mt-2 uppercase">Navigation components</p>
            </div>
          </div>

          {/* Hero category */}
          <div 
            onClick={() => handleCategoryClick('hero')}
            className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[220px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold tracking-tight text-white">HERO</h3>
              <p className="text-white/60 text-xs mt-2 uppercase">Hero sections</p>
            </div>
          </div>
          {/* cards category */}
          <div 
            onClick={() => handleCategoryClick('card')}
            className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[220px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold tracking-tight text-white">CARDS</h3>
              <p className="text-white/60 text-xs mt-2 uppercase">Card components</p>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}