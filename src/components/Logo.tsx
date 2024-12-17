import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.font = 'bold 32px Inter';
    ctx.fillStyle = '#8B5CF6';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('TB', canvas.width / 2, canvas.height / 2);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
    >
      <canvas ref={canvasRef} width={48} height={48} className="w-12 h-12" />
    </motion.div>
  );
};

export default Logo;