import React from 'react';
import type { NextPage } from 'next';
import { ProgressBar } from '../components/common/ProgressBar/ProgressBar';
import { Press_Start_2P } from '@next/font/google';
import { Scene } from '../components/three/Scene/Scene';
import { Text } from '@react-three/drei';
import { motion } from 'framer-motion';

const pressStartToPlay = Press_Start_2P({ weight: '400', subsets: ['latin'] });

const Home: NextPage = () => {
  const [isLoading, setLoading] = React.useState(true);
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.01 },
    },
  };
  const text = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 10,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: 'spring',
        damping: 10,
      },
    },
  };
  const toggleLoading = () => {
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className='container flex-center flex-col mx-auto'>
      {isLoading ? (
        <>
          <ProgressBar maxPercent={100} color={'#0dba86'} toggleLoading={toggleLoading} />
          <span>LOADING....</span>
        </>
      ) : (
        <>
          <Scene />
          <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className='text-center'
          >
            <motion.h1
              variants={text}
              className={`${pressStartToPlay.className} text-xl md:text-3xl tracking-wide pb-4`}
            >
              Kevin Saephanh
            </motion.h1>
            <motion.span
              variants={text}
              className={`${pressStartToPlay.className} text-sm md:text-lg tracking-wide hover:highlight`}
            >
              Full Stack Developer
            </motion.span>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Home;
