import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import Footer from '../landing_page/footer';

export default function Blog() {
  const navigate = useNavigate();
  const pageRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });
  
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 1]);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white">
      {/* Header */}
      <motion.div 
        className="px-8 py-8 border-b border-gray-800"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-[1400px] mx-auto flex items-start justify-between">
          <div>
            <div className="flex items-center gap-4 mb-2 cursor-pointer" onClick={() => navigate('/')}>
              <img src={logo} alt="APP.UI Logo" className="w-16 h-16" />
              <h1 className="text-[80px] font-bold leading-none tracking-tight">
                BLOG & INSIGHTS
              </h1>
            </div>
            <p className="text-white text-base tracking-wide">
              ARTICLES, TUTORIALS, AND{' '}
              <span className="font-semibold">DEVELOPMENT INSIGHTS</span> FOR{' '}
              <span className="underline underline-offset-4 decoration-1">
                MODERN DEVELOPERS
              </span>
            </p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-3 h-3 rounded-full bg-[#c4ff0e]"></div>
            <button
              className="px-6 py-2.5 bg-[#c4ff0e] text-black text-xs font-bold tracking-wider uppercase rounded-sm hover:bg-[#d4ff3e] transition-colors"
              onClick={() => navigate('/component_select')}
            >
              BROWSE COMPONENTS
            </button>
          </div>
        </div>
      </motion.div>

      {/* Main Content - Blog Articles */}
      <div className="max-w-[1400px] mx-auto px-8 py-16 space-y-24">
        {/* Article 1: Getting Started */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative order-1 md:order-1"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1374&auto=format&fit=crop"
                alt="Getting Started"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold text-[#c4ff0e]">TUTORIAL</span>
              <span className="text-xs text-gray-400">5 MIN READ</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">[ GETTING STARTED WITH APP.UI ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Learn how to quickly integrate APP.UI components into your React + Tailwind CSS projects. This comprehensive guide covers installation, setup, and best practices for using copy-paste components in your workflow. Perfect for developers looking to speed up their development process.
            </p>
            <button className="text-sm font-bold text-white hover:text-[#c4ff0e] transition-colors">
              READ MORE →
            </button>
          </div>
        </motion.div>

        {/* Article 2: Component Customization */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="order-2 md:order-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold text-[#c4ff0e]">GUIDE</span>
              <span className="text-xs text-gray-400">8 MIN READ</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">[ CUSTOMIZING COMPONENTS ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Discover advanced techniques for customizing APP.UI components to match your brand identity. Learn about Tailwind configuration, component variants, and how to extend base components with your own styles while maintaining clean, maintainable code.
            </p>
            <button className="text-sm font-bold text-white hover:text-[#c4ff0e] transition-colors">
              READ MORE →
            </button>
          </div>
          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1374&auto=format&fit=crop"
                alt="Customization"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Article 3: Building Modern UIs */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative order-1 md:order-1"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1374&auto=format&fit=crop"
                alt="Modern UIs"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold text-[#c4ff0e]">DESIGN</span>
              <span className="text-xs text-gray-400">10 MIN READ</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">[ MODERN UI DESIGN PRINCIPLES ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Explore the design principles behind APP.UI components. From glassmorphism to responsive layouts, learn how to create stunning user interfaces that work seamlessly across all devices. Includes best practices for accessibility and performance optimization.
            </p>
            <button className="text-sm font-bold text-white hover:text-[#c4ff0e] transition-colors">
              READ MORE →
            </button>
          </div>
        </motion.div>

        {/* Article 4: React Best Practices */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="order-2 md:order-1">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold text-[#c4ff0e]">DEVELOPMENT</span>
              <span className="text-xs text-gray-400">12 MIN READ</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">[ REACT COMPONENT ARCHITECTURE ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Deep dive into the React patterns used in APP.UI components. Learn about component composition, hooks usage, state management, and performance optimization techniques that make our components production-ready and easy to maintain.
            </p>
            <button className="text-sm font-bold text-white hover:text-[#c4ff0e] transition-colors">
              READ MORE →
            </button>
          </div>
          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1374&auto=format&fit=crop"
                alt="React Development"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Article 5: Contributing to Open Source */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="relative order-1 md:order-1"
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1374&auto=format&fit=crop"
                alt="Open Source"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold text-[#c4ff0e]">COMMUNITY</span>
              <span className="text-xs text-gray-400">6 MIN READ</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">[ CONTRIBUTING TO APP.UI ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Join our growing community of developers! Learn how to contribute new components, fix bugs, improve documentation, and help shape the future of APP.UI. We welcome contributions from developers of all skill levels and backgrounds.
            </p>
            <button className="text-sm font-bold text-white hover:text-[#c4ff0e] transition-colors">
              READ MORE →
            </button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
