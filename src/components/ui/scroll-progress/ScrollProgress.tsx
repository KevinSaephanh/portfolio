'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className='fixed top-0 left-0 right-0 h-[2px] origin-left pointer-events-none z-[9999] bg-teal-400'
      style={{
        scaleX,
        boxShadow:
          '0 0 8px rgba(45,212,191,0.9), 0 0 20px rgba(45,212,191,0.5)',
      }}
    />
  );
};
