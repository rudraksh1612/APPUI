import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../landing_page/footer';
import SearchBar from './header_search';
import { componentRegistry } from '../controller/component_select';

const ALL_CATEGORIES = [
  { key: 'navbar', label: 'NAVBAR', desc: 'Navigation components' },
  { key: 'hero',   label: 'HERO',   desc: 'Hero sections' },
  { key: 'card',   label: 'CARDS',  desc: 'Card components' },
];

export default function ComponentSelect() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (category) => {
    navigate('/page_divider', { state: { category } });
  };

  // Filter: match category name OR any component name inside that category
  const filtered = ALL_CATEGORIES.filter(cat => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const categoryMatch = cat.label.toLowerCase().includes(q) || cat.desc.toLowerCase().includes(q);
    const components = componentRegistry[cat.key] || [];
    const componentMatch = components.some(c =>
      c.name.toLowerCase().includes(q) || c.displayName.toLowerCase().includes(q)
    );
    return categoryMatch || componentMatch;
  });

  return (
    <div className="min-h-screen bg-black">
      <SearchBar onSearch={setSearchQuery} searchQuery={searchQuery} />

      <div className="p-4 md:p-8">
        {/* Search results count */}
        {searchQuery && (
          <p className="text-white/40 text-xs uppercase tracking-widest text-center mb-6">
            {filtered.length === 0
              ? 'No results found'
              : `${filtered.length} categor${filtered.length === 1 ? 'y' : 'ies'} found for "${searchQuery}"`}
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filtered.map(cat => (
            <div
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className="group relative bg-white/5 backdrop-blur-md rounded-lg p-6 min-h-[220px] border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="relative z-10 text-center">
                <h3 className="text-3xl font-bold tracking-tight text-white">{cat.label}</h3>
                <p className="text-white/60 text-xs mt-2 uppercase">{cat.desc}</p>
                <p className="text-white/30 text-xs mt-1">
                  {(componentRegistry[cat.key] || []).length} component{(componentRegistry[cat.key] || []).length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-2 flex flex-col items-center justify-center py-20 text-center">
              <p className="text-white/20 text-5xl mb-4">⌕</p>
              <p className="text-white/50 text-sm">No components match "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-white/40 text-xs underline hover:text-white/70 transition-colors"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}