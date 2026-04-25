import { Car } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const TravelCard = ({ image, scale, opacity, isActive, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Active card: large and expanded
  // Inactive card: very small and condensed (like Dynamic Island)
  const width = isActive ? 960 : 360;
  const height = isActive ? 560 : 60;
  
  return (
    <div 
      className="relative transition-all duration-500 ease-out overflow-hidden shadow-2xl"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        opacity: isActive ? 1 : 0.4,
        borderRadius: isActive ? '24px' : '50px',
      }}
      onMouseEnter={() => isActive && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt="Travel" 
        className="w-full h-full object-cover transition-all duration-500"
      />
      
      {/* Blur overlay that slides up on hover */}
      {isActive && (
        <div 
          className="absolute bottom-0 left-0 right-0 transition-all duration-500 ease-out backdrop-blur-xl bg-black/40"
          style={{
            height: isHovered ? '40%' : '0%',
            opacity: isHovered ? 1 : 0,
          }}
        >
          <div className="p-6 h-full flex flex-col justify-center">
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Card_1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastScrollTime = useRef(0);
  
  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
      title: 'Flight Experience',
      description: 'Soar through the clouds and explore destinations from a breathtaking aerial perspective.'
    },
    {
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
      title: 'Road Adventure',
      description: 'Discover hidden gems and scenic routes on an unforgettable road trip journey.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Mountain Escape',
      description: 'Experience the majestic beauty of towering peaks and pristine wilderness trails.'
    },
    {
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop',
      title: 'Beach Paradise',
      description: 'Relax on pristine shores with crystal clear waters and golden sunset views.'
    },
    {
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
      title: 'Urban Explorer',
      description: 'Immerse yourself in vibrant city life, culture, and architectural wonders.'
    }
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      const now = Date.now();
      // Debounce: only allow scroll every 400ms for smooth transitions
      if (now - lastScrollTime.current < 400) return;
      
      if (e.deltaY > 0 && activeIndex < cards.length - 1) {
        setActiveIndex(prev => prev + 1);
        lastScrollTime.current = now;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
        lastScrollTime.current = now;
      }
    };

    // Listen on window for scroll anywhere
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, cards.length]);

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      {/* Radial gradient background */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.3) 0%, rgba(59, 7, 100, 0.2) 40%, rgba(0, 0, 0, 1) 100%)'
        }}
      ></div>
      
      {/* Cards positioned absolutely, active card always centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((card, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;
          
          // Calculate position: active card at center, others stacked above/below
          const yOffset = offset * 80; // Collapsed cards 80px apart
          
          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translateY(${yOffset}px)`,
                zIndex: isActive ? 10 : 5 - Math.abs(offset),
              }}
            >
              <TravelCard
                image={card.image}
                scale={1}
                isActive={isActive}
                title={card.title}
                description={card.description}
              />
            </div>
          );
        })}
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {cards.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full transition-all duration-300"
            style={{
              backgroundColor: index === activeIndex ? 'white' : 'rgba(255,255,255,0.3)',
              width: index === activeIndex ? '24px' : '8px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Card_1;