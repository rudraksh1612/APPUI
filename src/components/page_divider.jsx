import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import SideNav from './side_nav';
import MainArea from './main_area';
import Footer from '../landing_page/footer';
import { getComponentsByCategory } from '../controller/component_select';

export default function PageDivider() {
  const location = useLocation();
  const category = location.state?.category || 'navbar';
  const components = getComponentsByCategory(category);
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(components[0] || null);

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* Header - Fixed height */}
      <div className="w-full h-20 md:h-24 lg:h-28 flex-shrink-0">
        <Header 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          componentName={selectedComponent?.displayName || ''}
        />
      </div>

      {/* Middle Section - Sidebar + Main Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <div className={`fixed md:relative inset-y-0 left-0 z-50 w-64 lg:w-72 bg-black border-r border-white/10 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:block overflow-y-auto`}>
          <SideNav 
            components={components}
            selectedComponent={selectedComponent}
            onSelectComponent={handleComponentSelect}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto md:ml-0">
          <MainArea selectedComponent={selectedComponent} />
        </div>
      </div>

      {/* Footer - Fixed height */}
      <div className="w-full h-16 flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}