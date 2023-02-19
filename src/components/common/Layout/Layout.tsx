import * as React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen flex-col justify-between'>
      <Navbar />
      <motion.main
        variants={variants}
        initial='hidden'
        animate='enter'
        exit='exit'
        transition={{ duration: 0.4, type: 'easeInOut' }}
        className='p-5 my-5 relative'
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
