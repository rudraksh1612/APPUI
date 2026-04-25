import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Spline from "@splinetool/react-spline";
import sideBackImage from "../assets/side_back.png";

export default function HeroSection() {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    // Update time every 50ms for ms precision
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const ms = now.getMilliseconds();
      setTime(`${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${ms.toString().padStart(3, "0")}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 50);
    return () => clearInterval(interval);
  }, []);

  
  return (
    <div ref={heroRef} style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative" }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Chela+One&family=Norican&family=Pompiere&family=Varela+Round&display=swap');
      </style>
      
      <motion.div 
        style={{ 
          scale,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }}
      >
        <Spline scene="https://my.spline.design/cybermannequin-GlCTzwPSJUpWxSIXfb6qxuqj/scene.splinecode" />
      </motion.div>

      {/* UI Overlay */}
      <motion.div 
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          pointerEvents: "none",
          opacity,
          y
        }}
      >
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between px-8 py-6" style={{ pointerEvents: "none" }}>
          {/* Logo */}
          <div className="flex items-center" style={{ pointerEvents: "auto" }}>
            <div className="text-white font-black tracking-tighter" style={{ fontSize: '5.5rem', fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.08em', lineHeight: '1' }}>
              APP.UI
            </div>
            <span className="text-white/40 text-xs ml-3 mt-8">©2025</span>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8" style={{ pointerEvents: "auto" }}>
            <a
              href="#"
              className="text-white/90 text-sm font-medium hover:text-white transition-colors"
              onClick={e => { e.preventDefault(); window.location.hash = '#/about'; }}
              style={{ cursor: 'pointer' }}
            >
              About us
            </a>
            <a
              href="#"
              className="bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-5 py-2.5 rounded hover:bg-white/20 transition-colors border border-white/20 inline-block"
              onClick={e => { e.preventDefault(); navigate('/component_select'); }}
              style={{ cursor: 'pointer' }}
            >
              Browse Components
            </a>
            {/* Menu Icon removed */}
          </div>
        </nav>

        {/* Hero Content */}
        <motion.div 
          className="flex flex-col justify-between px-8 pb-12" 
          style={{ height: "calc(100vh - 88px)", pointerEvents: "none" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main Headline - Positioned Lower */}
          <div className="pt-48" style={{ pointerEvents: "auto", maxWidth: "fit-content" }}>
            <h1 className="text-white font-normal tracking-tight" style={{ fontSize: '3.5rem', lineHeight: '1.15', fontWeight: '400', letterSpacing: '-0.02em', fontFamily: 'Anton, sans-serif' }}>
              Build beautiful interfaces,<br />
              faster and effortlessly
            </h1>

            <p className="text-white/80 text-lg mt-4 max-w-xl" style={{ lineHeight: '1.4', fontFamily: 'Varela Round, sans-serif' }}>
              A curated collection of ready-to-use React + Tailwind components  designed for modern web builders.
            </p>

            {/* CTA Buttons: Primary + Secondary */}
            <div className="mt-8 flex items-center gap-4" style={{ width: 'fit-content' }}>
              <a
                href="#"
                className="bg-gradient-to-r from-[#c4ff0e] via-[#00ffff] to-[#c4ff0e] bg-[length:200%_100%] text-black font-bold px-6 py-3 rounded-lg flex items-center gap-3 group relative overflow-hidden hover:shadow-[0_0_30px_rgba(196,255,14,0.5)] transition-all duration-300 hover:scale-105 animate-gradient"
                style={{ backgroundPosition: '0% 50%', cursor: 'pointer' }}
                onClick={e => { e.preventDefault(); navigate('/component_select'); }}
              >
                <span className="relative z-10 text-base tracking-wide">Browse Components</span>
              </a>
              <style>{`
                @keyframes gradient {
                  0% { background-position: 0% 50%; }
                  50% { background-position: 100% 50%; }
                  100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                  animation: gradient 3s ease infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end" style={{ pointerEvents: "auto" }}>
            {/* Bottom Left - Time Info */}
            <div className="flex items-center gap-12">
              <p className="text-white text-base font-bold tracking-widest font-mono">
                {time}
              </p>
              <p className="text-white/30 text-[10px] tracking-wider">
                SCROLL TO EXPLORE
              </p>
            </div>

            {/* Bottom Right - Description */}
            <div className="max-w-md">
              <p className="text-white/80 text-sm leading-relaxed">
                <span className="font-semibold">APP.UI </span>
                 - collection of beautiful, reusable, and production-ready UI<br />
                components built with React + Tailwind CSS,  Designed to speed <br />
                to speed up your workflow just copy, paste, and customize
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}