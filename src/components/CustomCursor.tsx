import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 mix-blend-difference pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 0.8 : 1
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 mix-blend-difference pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 48,
          y: mousePosition.y - 48,
          scale: isClicking ? 1.2 : 1
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      >
        <div className="w-full h-full border-2 border-white rounded-full opacity-20" />
      </motion.div>
    </>
  );
};

export default CustomCursor;