import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import image from '../assets/footer.png';
import logo from '../assets/logo.png';

export default function Footer() {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  
  // Scroll animations for footer reveal
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  
  const footerY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const footerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const brandScale = useTransform(scrollYProgress, [0, 0.4], [0.9, 1]);
  const feedbackY = useTransform(scrollYProgress, [0, 0.6], [50, 0]);

  const navLinks = [
    { 
      title: 'Components', 
      items: [
        { name: 'Navigation', link: '/component_select' },
        { name: 'Hero Sections', link: '/component_select' },
        { name: 'Features', link: '/component_select' },
        { name: 'CTAs', link: '/component_select' }
      ]
    },
    { 
      title: 'Resources', 
      items: [
        { name: 'Documentation', link: '#' },
        { name: 'Examples', link: '#' },
        { name: 'Templates', link: '#' },
        { name: 'Blog', link: '/blog' }
      ]
    },
    { 
      title: 'Community', 
      items: [
        { name: 'Discord', link: '#' },
        { name: 'Forum', link: '#' },
        { name: 'Newsletter', link: '#' }
      ]
    },
  ];

  return (
    <footer ref={footerRef} className="bg-black text-white">
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-16"
        style={{ y: footerY, opacity: footerOpacity }}
      >
        {/* Top border */}
        <div className="h-px bg-white mb-12"></div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <motion.div 
            className="lg:col-span-2"
            style={{ scale: brandScale }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-8 h-8" />
              <span className="text-2xl font-bold text-white">
                APP.UI
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Beautiful, copy-paste UI components for React & Tailwind. Build stunning websites faster.
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500">Community driven and open for contributions.</p>
          </motion.div>

          {/* Navigation links */}
          {navLinks.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            >
              <h3 className="text-sm font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <a
                      href={item.link.startsWith('http') ? item.link : '#'}
                      onClick={(e) => {
                        if (!item.link.startsWith('http') && item.link !== '#') {
                          e.preventDefault();
                          navigate(item.link);
                          // always scroll to top 
                          try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch (err) { /* ignore */ }
                        }
                      }}
                      className="text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-1 group cursor-pointer"
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Feedback section */}
        <motion.div 
          className="mb-12 p-6 rounded-xl border border-white/20 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(${image})`,
            y: feedbackY
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-bold mb-1">Feedback</h3>
              <p className="text-sm text-gray-400">Share your thoughts or suggestions to help us improve app.ui!</p>
            </div>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors flex-1"
                />
                <input
                  type="text"
                  placeholder="LinkedIn Username or URL"
                  className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors flex-1"
                />
              </div>
              <textarea
                placeholder="Your message..."
                rows={3}
                className="px-4 py-2 bg-black border border-white/10 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
              />
              <button type="submit" className="self-end px-6 py-2 bg-purple-600 rounded-lg text-sm font-medium hover:bg-purple-500 transition-colors whitespace-nowrap">
                Submit
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div>
              <span>© 2025 APP.UI by </span>
              <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
                Rudraksh
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/privacy'); try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch (err) {} }}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigate('/terms'); try { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); } catch (err) {} }}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                Terms
              </a>
              <span className="flex items-center gap-2">
                MIT License
                <span className="px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xs border border-green-500/30">
                  Open Source
                </span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}