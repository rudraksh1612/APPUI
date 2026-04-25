import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import Footer from '../landing_page/footer';


export default function Aboutus() {
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
            <div className="flex items-center gap-4 mb-2 cursor-pointer" onClick={() => navigate('/') }>
              <img src={logo} alt="APP.UI Logo" className="w-16 h-16" />
              <h1 className="text-[80px] font-bold leading-none tracking-tight">
                ABOUT APP.UI
              </h1>
            </div>
            <p className="text-white text-base tracking-wide">
              AN OPEN-SOURCE{' '}
              <span className="font-semibold">UI COMPONENT LIBRARY</span> FOR MODERN{' '}
              <span className="underline underline-offset-4 decoration-1">
                REACT DEVELOPERS
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

      {/* Main Content - 5 alternating blocks */}
      <div className="max-w-[1400px] mx-auto px-8 py-16 space-y-24">
        {/* Block 1: Image Left, Content Right */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Left */}
          <div className="relative order-1 md:order-1">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1374&auto=format&fit=crop"
                alt="About App.UI"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ ABOUT APP.UI ]</h2>
            <p className="text-base leading-relaxed mb-6">
              App.UI is an open-source UI component library created by developer Rudraksh.
              It provides ready-to-use, copy-paste UI components for modern frontend developers
              using React and Tailwind CSS. Our mission is to make building beautiful websites
              faster and easier by offering prebuilt UI blocks in one comprehensive library.
            </p>
          </div>
        </motion.div>

        {/* Block 2: Content Left, Image Right */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Content Left */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">[ OUR MISSION ]</h2>
            <p className="text-base leading-relaxed mb-6">
              To empower frontend developers, web designers, students, freelancers, and indie makers
              by providing a comprehensive collection of high-quality, customizable UI components.
              We believe in the power of open-source collaboration to accelerate web development and
              create stunning user experiences.
            </p>
          </div>
          {/* Image Right */}
          <div className="relative order-1 md:order-2">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1374&auto=format&fit=crop"
                alt="Our Mission"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Block 3: Image Left, Content Right */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Left */}
          <div className="relative order-1 md:order-1">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=1374&auto=format&fit=crop"
                alt="What We Offer"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ WHAT WE OFFER ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Our library includes essential UI components like navigation bars, hero sections,
              feature sections, call-to-action blocks, testimonials, pricing cards, dashboards,
              sidebars, and footers — all built with React and styled with Tailwind CSS for
              maximum flexibility and performance.
            </p>
          </div>
        </motion.div>

        {/* Block 4: Content Left, Image Right */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Content Left */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">[ DESIGN PHILOSOPHY ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Every component is designed with modern best practices, accessibility in mind,
              and full customization options. Simply copy, paste, and adapt to your project's
              needs — no complex setup required.
            </p>
          </div>
          {/* Image Right */}
          <div className="relative order-1 md:order-2">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1374&auto=format&fit=crop"
                alt="Design Philosophy"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Block 5: Image Left, Content Right */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image Left */}
          <div className="relative order-1 md:order-1">
            <div className="sticky top-8">
              <img
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=1374&auto=format&fit=crop"
                alt="Open Source"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ OPEN SOURCE SPIRIT ]</h2>
            <p className="text-base leading-relaxed mb-6">
              We believe in the power of open-source collaboration to accelerate web development and
              create stunning user experiences. Join our community and contribute to the future of UI design!
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}