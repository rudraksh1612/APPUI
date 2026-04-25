import React from 'react';

export default function SideNav({ components, selectedComponent, onSelectComponent }) {
  return (
    <div className="w-full h-full bg-black p-3 md:p-4 lg:p-6">
      <h3 className="text-white text-xs md:text-sm font-bold mb-4 md:mb-6 px-2 tracking-wider uppercase">[ Components ]</h3>
      <div className="space-y-2 md:space-y-3">
        {components && components.length > 0 ? (
          components.map((component) => (
            <button
              key={component.id}
              onClick={() => onSelectComponent(component)}
              className={`relative w-full text-left px-3 md:px-4 py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center justify-center cursor-pointer group overflow-hidden ${
                selectedComponent?.id === component.id
                  ? 'bg-white/15 backdrop-blur-md text-white font-bold border border-white/20'
                  : 'bg-white/5 backdrop-blur-md text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              <div className="text-center w-full">
                <h4 className="text-xs md:text-sm font-semibold tracking-wide">
                  {component.name}
                </h4>
              </div>
            </button>
          ))
        ) : (
          <p className="text-gray-400 text-xs md:text-sm px-2 tracking-wider">[ No components available ]</p>
        )}
      </div>
    </div>
  );
}
