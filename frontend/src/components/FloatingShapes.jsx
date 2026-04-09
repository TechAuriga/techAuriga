import React, { useEffect, useState } from 'react';

const FloatingShapes = ({ density = 15, scrollOffset = 0 }) => {
  const [scrollY, setScrollY] = useState(0);
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate random shapes
    const generatedShapes = Array.from({ length: density }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      speed: Math.random() * 0.3 + 0.1,
      color: i % 2 === 0 ? '#1E40AF' : '#3B82F6',
      opacity: Math.random() * 0.15 + 0.05,
      shape: i % 3 === 0 ? 'square' : i % 3 === 1 ? 'circle' : 'triangle',
      delay: Math.random() * 2
    }));
    setShapes(generatedShapes);
  }, [density]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => {
        const translateY = ((scrollY - scrollOffset) * shape.speed);
        
        return (
          <div
            key={shape.id}
            className="absolute transition-transform duration-100 ease-out"
            style={{
              left: `${shape.left}%`,
              top: `${shape.top}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              transform: `translateY(${translateY}px)`,
              animationDelay: `${shape.delay}s`
            }}
          >
            {shape.shape === 'circle' && (
              <div
                className="w-full h-full rounded-full blur-xl"
                style={{
                  backgroundColor: shape.color,
                  opacity: shape.opacity
                }}
              />
            )}
            {shape.shape === 'square' && (
              <div
                className="w-full h-full rotate-45 blur-xl"
                style={{
                  backgroundColor: shape.color,
                  opacity: shape.opacity
                }}
              />
            )}
            {shape.shape === 'triangle' && (
              <div
                className="w-full h-full blur-xl"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${shape.size / 2}px solid transparent`,
                  borderRight: `${shape.size / 2}px solid transparent`,
                  borderBottom: `${shape.size}px solid ${shape.color}`,
                  opacity: shape.opacity
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingShapes;
