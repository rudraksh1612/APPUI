import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
// lucide-react equivalents of fi icons — same look, no extra package needed
import { Circle, Code, FileText, Layers, Layout } from 'lucide-react';

// Wrapper component for easy usage
export function Testimonials() {
  const sectionRef = useRef(null);
  
  // Scroll animations for the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const carouselScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const carouselY = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  
  return (
    <div 
      ref={sectionRef}
      style={{ 
        height: '800px', 
        position: 'relative', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#000000'
      }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Chela+One&family=Norican&family=Pompiere&family=Varela+Round&display=swap');
      </style>
      <motion.h2 
        style={{
          fontFamily: 'Anton, sans-serif',
          fontSize: '4rem',
          color: 'white',
          textAlign: 'center',
          marginBottom: '0.5rem',
          textShadow: '2px 2px 0px #000, 4px 4px 0px #333, 6px 6px 10px rgba(0,0,0,0.5)',
          letterSpacing: '2px',
          y: titleY,
          opacity: titleOpacity
        }}
      >
        Loved by Developers
      </motion.h2>
      <motion.div 
        style={{
          padding: '2px',
          borderRadius: '50%',
          background: 'linear-gradient(45deg, #ffffff, #888888)',
          boxShadow: '0 0 50px rgba(0,0,0,0.8), 0 0 100px rgba(255,255,255,0.1), inset 0 0 50px rgba(0,0,0,0.5)',
          scale: carouselScale,
          y: carouselY
        }}
      >
        <Carousel
          baseWidth={500}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={true}
        />
      </motion.div>
    </div>
  );
}

const DEFAULT_ITEMS = [
  {
    title: 'Sarah Martinez',
    description: 'APP.UI saved me hours of development time. The components are beautiful and production-ready!',
    id: 1,
    icon: <FileText className="h-[16px] w-[16px] text-white" />,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop'
  },
  {
    title: 'James Chen',
    description: 'The best React component library I\'ve used. Clean code, modern design, and super easy to customize.',
    id: 2,
    icon: <Circle className="h-[16px] w-[16px] text-white" />,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
  },
  {
    title: 'Emily Rodriguez',
    description: 'Game changer for my freelance projects! Copy-paste simplicity with professional results every time.',
    id: 3,
    icon: <Layers className="h-[16px] w-[16px] text-white" />,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop'
  },
  {
    title: 'David Kumar',
    description: 'Finally, a component library that understands developers. Fast, flexible, and beautifully designed.',
    id: 4,
    icon: <Layout className="h-[16px] w-[16px] text-white" />,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop'
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden p-4 ${
        round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'
      }`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const rotateY = useTransform(x, range, outputRange, { clamp: false });
          return (
            <motion.div
              key={index}
              className={`relative shrink-0 flex flex-col ${
                round
                  ? 'items-center justify-center text-center bg-[#060010] border-0'
                  : 'items-start justify-between bg-[#222] border border-[#222] rounded-[12px]'
              } overflow-hidden cursor-grab active:cursor-grabbing`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' })
              }}
              transition={effectiveTransition}
            >
              {item.image && round ? (
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '50%' }}
                  />
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <div className="mb-1 font-black text-2xl text-white">{item.title}</div>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`${round ? 'p-0 m-0' : 'mb-4 p-5'}`}>
                    <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="mb-1 font-black text-lg text-white">{item.title}</div>
                    <p className="text-sm text-white">{item.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </motion.div>
      <div className={`flex w-full justify-center ${round ? 'absolute z-20 bottom-12 left-1/2 -translate-x-1/2' : ''}`}>
        <div className="mt-4 flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer transition-colors duration-150 ${
                currentIndex % items.length === index
                  ? round
                    ? 'bg-white'
                    : 'bg-[#333333]'
                  : round
                    ? 'bg-[#555]'
                    : 'bg-[rgba(51,51,51,0.4)]'
              }`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
