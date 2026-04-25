import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, Sun, Moon } from 'lucide-react';

export default function MainArea({ selectedComponent }) {
  const [copied, setCopied] = useState(false);
  const [copiedDependencies, setCopiedDependencies] = useState(false);
  const [previewBg, setPreviewBg] = useState('white');
  const [previewWidth, setPreviewWidth] = useState(1500);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  const handleCopyCode = () => {
    if (selectedComponent?.code) {
      navigator.clipboard.writeText(selectedComponent.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopyDependencies = () => {
    if (selectedComponent?.dependencies) {
      navigator.clipboard.writeText(selectedComponent.dependencies);
      setCopiedDependencies(true);
      setTimeout(() => setCopiedDependencies(false), 2000);
    }
  };

  // Calculate scale to fit the preview in the available space
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const maxWidth = containerWidth - 40; // padding
        if (previewWidth > maxWidth) {
          setScale(maxWidth / previewWidth);
        } else {
          setScale(1);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [previewWidth]);

  const resetToLaptop = () => setPreviewWidth(1500);
  const setToFullHD = () => setPreviewWidth(1600);

  if (!selectedComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black">
        <p className="text-gray-400 text-sm md:text-base tracking-wider uppercase">[ Select a component to preview ]</p>
      </div>
    );
  }

  const PreviewComponent = selectedComponent.component;

  return (
    <div className="w-full h-full bg-black overflow-y-auto p-4 md:p-6 lg:p-8 space-y-6">
      {/* Preview Section */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-sm md:text-base tracking-wider uppercase">[ Preview ]</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-white/60 text-xs font-mono">{previewWidth}px</span>
            <button onClick={resetToLaptop} className="px-3 py-1 text-xs bg-white/10 text-white hover:bg-white/20 rounded transition-colors" title="Laptop (1500px)">💻</button>
            <button onClick={setToFullHD} className="px-3 py-1 text-xs bg-white/10 text-white hover:bg-white/20 rounded transition-colors" title="Desktop (1600px)">🖥️</button>
            <div className="w-px h-6 bg-white/20"></div>
            <button onClick={() => setPreviewBg('white')} className={`p-2 rounded transition-colors ${previewBg === 'white' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`} title="Light"><Sun size={16} /></button>
            <button onClick={() => setPreviewBg('dark')} className={`p-2 rounded transition-colors ${previewBg === 'dark' ? 'bg-gray-900 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`} title="Dark"><Moon size={16} /></button>
          </div>
        </div>
        
        <div ref={containerRef} className="p-4 md:p-6 bg-gray-950 flex justify-center items-start overflow-auto">
          {/* Preview Frame with scaling */}
          <div 
            style={{ 
              width: `${previewWidth}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              transition: 'transform 0.3s ease, width 0.3s ease'
            }}
          >
            <div className={`border-2 border-white/30 rounded-lg shadow-2xl overflow-hidden ${previewBg === 'white' ? 'bg-white' : 'bg-gray-900'}`}>
              {/* Browser Chrome */}
              <div className="h-8 bg-gray-200 border-b border-gray-300 flex items-center px-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-2 text-xs text-gray-600 font-mono">{previewWidth}px</div>
              </div>
              
              {/* Viewport Container */}
              <div 
                style={{ 
                  width: `${previewWidth}px`,
                  minHeight: '600px',
                  maxHeight: '80vh',
                  overflowY: 'auto',
                  overflowX: 'hidden'
                }}
              >
                {PreviewComponent && <PreviewComponent />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dependencies Section */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-sm md:text-base tracking-wider uppercase">[ Dependencies ]</h3>
          <button onClick={handleCopyDependencies} className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors rounded-sm">
            {copiedDependencies ? (<><Check size={14} /><span>Copied!</span></>) : (<><Copy size={14} /><span>Copy Dependencies</span></>)}
          </button>
        </div>
        <pre className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm text-gray-300 font-mono max-h-[300px]">
          <code>{selectedComponent.dependencies || '// No dependencies listed'}</code>
        </pre>
      </div>

      {/* Code Section */}
      <div className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-sm md:text-base tracking-wider uppercase">[ Code ]</h3>
          <button onClick={handleCopyCode} className="flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-gray-200 transition-colors rounded-sm">
            {copied ? (<><Check size={14} /><span>Copied!</span></>) : (<><Copy size={14} /><span>Copy Code</span></>)}
          </button>
        </div>
        <pre className="p-4 md:p-6 overflow-x-auto text-xs md:text-sm text-gray-300 font-mono max-h-[400px] md:max-h-[500px]">
          <code>{selectedComponent.code || '// No code available'}</code>
        </pre>
      </div>
    </div>
  );
}
