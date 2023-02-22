import * as React from 'react';
import { motion } from 'framer-motion';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const main = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <div className='flex h-screen flex-col justify-between'>
      <Navbar />
      <motion.main
        variants={main}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='p-5 my-5 relative'
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};
