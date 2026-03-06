import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for cursor movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const updateHoverState = () => {
      // Look for any clickable elements or elements with data-cursor-hover
      const hoveredElement = document.elementFromPoint(mousePosition.x, mousePosition.y);
      if (
        hoveredElement?.closest('a') || 
        hoveredElement?.closest('button') ||
        hoveredElement?.closest('[data-cursor-hover="true"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, [cursorX, cursorY, mousePosition.x, mousePosition.y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        borderWidth: isHovering ? '0px' : '1px'
      }}
      transition={{ duration: 0.2 }}
    />
  );
}
