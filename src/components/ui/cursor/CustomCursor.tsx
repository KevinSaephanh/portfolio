'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  const ringX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const ringY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  useEffect(() => {
    setIsTouch(window.matchMedia('(pointer: coarse)').matches);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', hide);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className='fixed pointer-events-none z-[9999] rounded-full border border-teal-400/60'
        style={{
          x: ringX,
          y: ringY,
          width: 32,
          height: 32,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.15s',
          boxShadow: '0 0 10px rgba(45,212,191,0.25)',
        }}
      />
      {/* Center dot */}
      <motion.div
        className='fixed pointer-events-none z-[9999] rounded-full bg-teal-400'
        style={{
          x: dotX,
          y: dotY,
          width: 5,
          height: 5,
          translateX: '-50%',
          translateY: '-50%',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.15s',
          boxShadow:
            '0 0 6px rgba(45,212,191,1), 0 0 14px rgba(45,212,191,0.6)',
        }}
      />
    </>
  );
};
