import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import Footer from '../landing_page/footer';

export default function TermsOfService() {
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
                TERMS OF SERVICE
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

      {/* Main Content - Terms of Service Sections */}
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
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1374&auto=format&fit=crop"
                alt="Terms Introduction"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ INTRODUCTION ]</h2>
            <p className="text-base leading-relaxed mb-6">
              Welcome to APP.UI. These Terms of Service ("Terms") govern your access to and use of the APP.UI website, web app, and any related services (collectively, the "Service") provided by the project maintainers. By accessing or using the Service you agree to be bound by these Terms. If you do not agree, please do not use the Service.
            </p>
          </div>
        </motion.div>

        {/* Use of Content Block */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">[ USE OF CONTENT & COMPONENTS ]</h2>
            <p className="text-base leading-relaxed mb-6">
              The Service provides a curated collection of UI components, previews, and code snippets for educational and development purposes. All component source files, code snippets, and examples are provided "as-is" and may be subject to individual licenses found in the project's repository or accompanying files. Please check the repository and individual component code headers for licensing details before reuse.
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
                src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1374&auto=format&fit=crop"
                alt="Content Usage"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* User Conduct Block */}
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
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1374&auto=format&fit=crop"
                alt="User Conduct"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ USER CONDUCT ]</h2>
            <div className="text-base leading-relaxed space-y-3">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Upload, post, or share content that violates any third-party rights or applicable law</li>
                <li>Attempt to disrupt, compromise, or reverse-engineer the Service or its infrastructure</li>
                <li>Use the Service to host or distribute malware or any harmful code</li>
                <li>Impersonate another person or entity, or provide false information</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Disclaimers and Warranties Block */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">[ DISCLAIMERS & WARRANTIES ]</h2>
            <p className="text-base leading-relaxed mb-6">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. THE MAINTAINERS DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. THE PROJECT AND ITS COMPONENTS MAY NOT BE SUITABLE FOR PRODUCTION USE WITHOUT REVIEW, TESTING, AND ADAPTATION.
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1374&auto=format&fit=crop"
                alt="Disclaimers"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Contact and Governing Law Block */}
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
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1374&auto=format&fit=crop"
                alt="Contact"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
              />
            </div>
          </motion.div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">[ GOVERNING LAW & CONTACT ]</h2>
            <p className="text-base leading-relaxed mb-6">
              These Terms are governed by the laws of the jurisdiction in which the project owner resides or operates. We may update these Terms from time to time. When we do, we will post the revised Terms here with a new "Last updated" date. Continued use of the Service after changes indicates your acceptance of the updated Terms.
            </p>
            <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
              <p className="text-sm text-gray-300">
                <strong>Questions about these Terms?</strong><br />
                Contact: rudraksh161203@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
