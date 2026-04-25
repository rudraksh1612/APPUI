import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import Footer from '../landing_page/footer';

export default function PrivacyPolicy() {
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
                PRIVACY POLICY
              </h1>
            </div>
            <p className="text-white text-base tracking-wide">
              LAST UPDATED:{' '}
              <span className="font-semibold">NOVEMBER 11, 2025</span>
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

      {/* Main Content - Privacy Policy Sections */}
      <div className="max-w-[1400px] mx-auto px-8 py-16 space-y-24">
        {/* Introduction Block */}
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
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1374&auto=format&fit=crop"
                alt="Privacy Introduction"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ INTRODUCTION ]</h2>
            <p className="text-base leading-relaxed mb-6">
              This Privacy Policy explains how APP.UI (the "Service"), and its maintainers collect, use, disclose, and protect information when you visit or interact with the website and related services. By using the Service you consent to the practices described in this policy.
            </p>
          </div>
        </motion.div>

        {/* Information We Collect Block */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">[ INFORMATION WE COLLECT ]</h2>
            <div className="text-base leading-relaxed space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Information you provide directly</h3>
                <p className="text-gray-300">Email address you enter when contacting us or using contact forms; Any content or feedback you submit.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">2. Automatically collected information</h3>
                <p className="text-gray-300">Usage data (pages visited, interactions, timestamps), browser and device information, IP addresses for geolocation and security.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">3. Third-party data</h3>
                <p className="text-gray-300">If you choose to sign in through third-party services (GitHub), those services may provide information according to their APIs.</p>
              </div>
            </div>
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
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1374&auto=format&fit=crop"
                alt="Data Collection"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* How We Use Information Block */}
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1374&auto=format&fit=crop"
                alt="Data Usage"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ HOW WE USE INFORMATION ]</h2>
            <p className="text-base leading-relaxed mb-6">
              We use collected information to provide, operate, and maintain the Service; improve and personalize the experience; respond to inquiries; monitor and improve site performance and security; detect and prevent fraud, abuse, or security incidents.
            </p>
          </div>
        </motion.div>

        {/* Cookies and Tracking Block */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">[ COOKIES AND TRACKING ]</h2>
            <p className="text-base leading-relaxed mb-6">
              The Service may use cookies or third-party tracking technologies (such as analytics providers) to collect usage information. Cookies are small data files stored on your device. You can control cookies through your browser settings.
            </p>
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1374&auto=format&fit=crop"
                alt="Cookies and Analytics"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Data Security and Your Rights Block */}
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
                src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1374&auto=format&fit=crop"
                alt="Security"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ SECURITY & YOUR RIGHTS ]</h2>
            <p className="text-base leading-relaxed mb-6">
              We take reasonable measures to protect personal information from unauthorized access, disclosure, or destruction. However, no transmission or storage is 100% secure. Depending on your jurisdiction, you may have rights to access, correct, or delete personal information we hold about you.
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Contact us:</strong> rudraksh161203@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
