'use client';

import {
  motion,
  MotionProps,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';

type TiltCardProps = MotionProps & {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
};

export const TiltCard = ({
  children,
  className = '',
  tiltAmount = 8,
  ...motionProps
}: TiltCardProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [tiltAmount, -tiltAmount]), {
    stiffness: 260,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-tiltAmount, tiltAmount]), {
    stiffness: 260,
    damping: 24,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      className={`bento-card ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 700 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};
